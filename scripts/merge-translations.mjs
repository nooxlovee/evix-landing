import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUTPUT_FILE = process.argv[2];

if (!OUTPUT_FILE || !existsSync(OUTPUT_FILE)) {
  console.error('Usage: node merge-translations.mjs <workflow-output.json>');
  process.exit(1);
}

const raw = readFileSync(OUTPUT_FILE, 'utf-8');
const parsed = JSON.parse(raw);
const pages = parsed.result?.pages || parsed.pages || [];

const ruPath = resolve(ROOT, 'src/locales/ru.json');
const enPath = resolve(ROOT, 'src/locales/en.json');
const ru = JSON.parse(readFileSync(ruPath, 'utf-8'));
const en = JSON.parse(readFileSync(enPath, 'utf-8'));

function decodeStr(s) {
  if (typeof s !== 'string') return s;
  // Double-escaped first (the agents wrapped some entities twice)
  let out = s
    .replace(/&amp;nbsp;/g, ' ')
    .replace(/&amp;lt;/g, '<')
    .replace(/&amp;gt;/g, '>')
    .replace(/&amp;quot;/g, '"')
    .replace(/&amp;amp;/g, '&')
    .replace(/&amp;/g, '&');
  // Standard HTML entities in the value (these are wrong inside a t() value
  // because the JSX consumer won't decode them — convert to char or space).
  out = out
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;br\s*\/?&gt;/gi, ' ')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
  return out;
}

function setDeep(obj, key, value) {
  const parts = key.split('.');
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const p = parts[i];
    if (!cur[p] || typeof cur[p] !== 'object') cur[p] = {};
    cur = cur[p];
  }
  cur[parts[parts.length - 1]] = value;
}

let keysMerged = 0;
let filesWritten = 0;
const failures = [];

for (const p of pages) {
  if (!p.result) {
    failures.push(`${p.ns}: no result`);
    continue;
  }
  const { translations, transformedFile } = p.result;
  if (!transformedFile) {
    failures.push(`${p.ns}: missing transformedFile`);
    continue;
  }
  if (translations && typeof translations === 'object') {
    for (const [key, val] of Object.entries(translations)) {
      if (val && typeof val.ru === 'string' && typeof val.en === 'string') {
        setDeep(ru, key, decodeStr(val.ru));
        setDeep(en, key, decodeStr(val.en));
        keysMerged++;
      }
    }
  }
  const pagePath = resolve(ROOT, p.path);
  writeFileSync(pagePath, transformedFile, 'utf-8');
  filesWritten++;
  const keyCount = Object.keys(translations || {}).length;
  console.log(`  ${p.ns.padEnd(16)} -> ${p.path} (${keyCount} keys)`);
}

writeFileSync(ruPath, JSON.stringify(ru, null, 2) + '\n', 'utf-8');
writeFileSync(enPath, JSON.stringify(en, null, 2) + '\n', 'utf-8');

console.log(`\n${filesWritten} files written, ${keysMerged} translation keys merged into locales.`);
if (failures.length) {
  console.log('\nFailures:');
  failures.forEach((f) => console.log(`  - ${f}`));
}
