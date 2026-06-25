import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { Button, LinkButton } from '../components/ui/Button';
import TwitterTestimonials from '../components/ui/TwitterTestimonialCards';

const REVIEW_DATES = {
  ru: [
    '12 янв 2026', '8 янв 2026', '3 янв 2026',
    '28 дек 2025', '21 дек 2025', '14 дек 2025',
    '5 дек 2025', '27 ноя 2025', '18 ноя 2025',
  ],
  en: [
    'Jan 12, 2026', 'Jan 8, 2026', 'Jan 3, 2026',
    'Dec 28, 2025', 'Dec 21, 2025', 'Dec 14, 2025',
    'Dec 5, 2025', 'Nov 27, 2025', 'Nov 18, 2025',
  ],
};

const translit = (str) => {
  const map = { 'а':'a','б':'b','в':'v','г':'g','д':'d','е':'e','ё':'e','ж':'zh','з':'z','и':'i','й':'y','к':'k','л':'l','м':'m','н':'n','о':'o','п':'p','р':'r','с':'s','т':'t','у':'u','ф':'f','х':'h','ц':'c','ч':'ch','ш':'sh','щ':'sch','ъ':'','ы':'y','ь':'','э':'e','ю':'yu','я':'ya' };
  return str.toLowerCase().split('').map((c) => map[c] ?? c).join('');
};

const makeHandle = (name) => {
  const [first, last] = name.split(' ');
  if (!last) return '@' + translit(first);
  return '@' + translit(first) + '_' + translit(last);
};

const getReviews = (t) => [
  { text: t('clients.reviews.items.0.text'), initials: t('clients.reviews.items.0.initials'), name: t('clients.reviews.items.0.name'), role: t('clients.reviews.items.0.role'), tag: t('clients.reviews.items.0.tag') },
  { text: t('clients.reviews.items.1.text'), initials: t('clients.reviews.items.1.initials'), name: t('clients.reviews.items.1.name'), role: t('clients.reviews.items.1.role'), tag: t('clients.reviews.items.1.tag') },
  { text: t('clients.reviews.items.2.text'), initials: t('clients.reviews.items.2.initials'), name: t('clients.reviews.items.2.name'), role: t('clients.reviews.items.2.role'), tag: t('clients.reviews.items.2.tag') },
  { text: t('clients.reviews.items.3.text'), initials: t('clients.reviews.items.3.initials'), name: t('clients.reviews.items.3.name'), role: t('clients.reviews.items.3.role'), tag: t('clients.reviews.items.3.tag') },
  { text: t('clients.reviews.items.4.text'), initials: t('clients.reviews.items.4.initials'), name: t('clients.reviews.items.4.name'), role: t('clients.reviews.items.4.role'), tag: t('clients.reviews.items.4.tag') },
  { text: t('clients.reviews.items.5.text'), initials: t('clients.reviews.items.5.initials'), name: t('clients.reviews.items.5.name'), role: t('clients.reviews.items.5.role'), tag: t('clients.reviews.items.5.tag') },
  { text: t('clients.reviews.items.6.text'), initials: t('clients.reviews.items.6.initials'), name: t('clients.reviews.items.6.name'), role: t('clients.reviews.items.6.role'), tag: t('clients.reviews.items.6.tag') },
  { text: t('clients.reviews.items.7.text'), initials: t('clients.reviews.items.7.initials'), name: t('clients.reviews.items.7.name'), role: t('clients.reviews.items.7.role'), tag: t('clients.reviews.items.7.tag') },
  { text: t('clients.reviews.items.8.text'), initials: t('clients.reviews.items.8.initials'), name: t('clients.reviews.items.8.name'), role: t('clients.reviews.items.8.role'), tag: t('clients.reviews.items.8.tag') },
];

// Social platform glyphs (size-agnostic, inherit currentColor).
const PLATFORM = {
  youtube: { name: 'YouTube', icon: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" /></svg>
  ) },
  tiktok: { name: 'TikTok', icon: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor" aria-hidden="true"><path d="M16.5 3c.4 2.3 1.8 3.8 4 3.9v2.9c-1.4.1-2.8-.3-4-1.1v6.1c0 3.4-2.9 6.1-6.3 5.8-3-.3-5.2-2.8-5.2-5.7 0-3.3 2.9-5.9 6.2-5.6v3c-.3-.1-.6-.1-.9-.1-1.5 0-2.7 1.3-2.6 2.9.1 1.4 1.3 2.5 2.7 2.5 1.5 0 2.7-1.2 2.7-2.7V3h3.4z" /></svg>
  ) },
  vk: { name: 'VK', icon: (
    <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden="true"><text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="800" fill="currentColor" fontFamily="inherit">VK</text></svg>
  ) },
  instagram: { name: 'Instagram', icon: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" /></svg>
  ) },
  facebook: { name: 'Facebook', icon: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.8 3.7-3.8 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" /></svg>
  ) },
  pinterest: { name: 'Pinterest', icon: (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor" aria-hidden="true"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.2 9.3-.1-.8-.2-2 0-2.9l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.9 0 1.3.6 1.3 1.4 0 .9-.6 2.2-.9 3.4-.2 1 .5 1.8 1.5 1.8 1.8 0 3-2.3 3-5 0-2.1-1.4-3.6-3.9-3.6-2.9 0-4.6 2.1-4.6 4.4 0 .8.2 1.4.6 1.9.2.2.2.3.1.5l-.2.9c-.1.3-.3.4-.6.2-1.1-.5-1.7-1.9-1.7-3.1 0-2.5 2.1-5.5 6.3-5.5 3.4 0 5.6 2.4 5.6 5 0 3.5-1.9 6.1-4.8 6.1-1 0-1.9-.5-2.2-1.1l-.6 2.4c-.2.8-.7 1.7-1 2.3.8.2 1.6.4 2.4.4 5.5 0 10-4.5 10-10S17.5 2 12 2z" /></svg>
  ) },
};

// Profile screenshots used as proof — NOMOS real, reused as placeholders for others.
const NOMOS_SHOTS = [
  { src: '/screens/clients/nomos_youtube.png', p: 'youtube', stat: '72,6К подписчиков', alt: 'YouTube-профиль NOMOS Clinic — 72,6К подписчиков, 523 видео' },
  { src: '/screens/clients/nomos_tiktok.png', p: 'tiktok', stat: '161,9К подписчиков', alt: 'TikTok-профиль NOMOS Clinic — 161,9К подписчиков, 2,2M лайков' },
  { src: '/screens/clients/nomos_vk.png', p: 'vk', stat: '23,9К подписчиков', alt: 'VK-профиль NOMOS Clinic — 23,9К подписчиков' },
];

// All clients. Real numbers from the clients' tracking sheets (totals as of 24.06.2026;
// `month` = growth over the tracked period; `spark` = daily series, scaled per-card).
// `shots` for non-featured clients are NOMOS placeholders until real screenshots arrive.
const CLIENTS = [
  {
    key: 'nomos', featured: true,
    total: 496269, perDay: 1733, perMonth: 39164, videos: 523,
    shots: NOMOS_SHOTS,
    platforms: [
      { p: 'instagram', now: 234000, month: 22000, spark: [212, 213, 214.1, 214.8, 215, 216, 217, 218, 220, 226, 227, 228, 233, 234] },
      { p: 'tiktok', now: 161800, month: 8700, url: 'http://www.tiktok.com/@nomos_clinic', spark: [153.1, 155.5, 155.8, 156, 156.4, 157.4, 157.7, 158.1, 158.3, 160.1, 160.4, 160.6, 161.5, 161.8] },
      { p: 'youtube', now: 72500, month: 4000, url: 'https://www.youtube.com/@nomos_clinic', spark: [68.5, 68.6, 68.7, 68.9, 69.1, 69.5, 69.6, 69.8, 70, 71, 71.1, 71.4, 71.6, 72.5] },
      { p: 'vk', now: 23834, month: 1902, url: 'https://vk.com/nomos.clinic', spark: [21.9, 22, 22, 22.1, 22.1, 22.3, 22.4, 22.5, 22.6, 23.1, 23.1, 23.2, 23.7, 23.8] },
      { p: 'facebook', now: 2400, month: 2396, spark: [4, 4, 5, 5, 5, 5, 14, 811, 1100, 1800, 1900, 1900, 2200, 2400] },
      { p: 'pinterest', now: 999, month: 159, spark: [840, 861, 879, 890, 900, 922, 928, 934, 939, 960, 964, 970, 995, 999] },
    ],
  },
  {
    key: 'institut',
    total: 160645, perDay: 800, perMonth: 2845,
    shots: NOMOS_SHOTS,
    platforms: [
      { p: 'youtube', now: 56600, month: 200, url: 'https://www.youtube.com/@institut.plastiki', spark: [56.4, 56.4, 56.4, 56.4, 56.5, 56.5, 56.5, 56.5, 56.6, 56.6, 56.6, 56.6, 56.6, 56.6] },
      { p: 'tiktok', now: 48900, month: 600, url: 'https://www.tiktok.com/@institut_plastiki1', spark: [48.3, 48.3, 48.3, 48.3, 48.4, 48.6, 48.6, 48.7, 48.8, 48.8, 48.8, 48.8, 48.9, 48.9] },
      { p: 'instagram', now: 41000 },
      { p: 'vk', now: 11880, month: 1235, url: 'https://vk.com/institut.plastiki', spark: [10.6, 10.7, 10.8, 10.8, 10.9, 11.1, 11.1, 11.2, 11.2, 11.5, 11.5, 11.6, 11.6, 11.8, 11.9] },
      { p: 'facebook', now: 2100, month: 800, spark: [1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 1.3, 2.1] },
      { p: 'pinterest', now: 160, month: 10, spark: [150, 151, 152, 153, 154, 154, 154, 155, 158, 158, 158, 158, 158, 160, 160] },
    ],
  },
  {
    key: 'kristina',
    total: 383017, perDay: 1337, perMonth: 55982,
    shots: NOMOS_SHOTS,
    platforms: [
      { p: 'instagram', now: 165000, month: 18000, url: 'https://www.instagram.com/kristina_genetic', spark: [147, 147, 148, 148.6, 149, 149, 150, 151, 151, 159, 160, 161, 162, 164, 165] },
      { p: 'tiktok', now: 77100, month: 21800, url: 'https://www.tiktok.com/@kuznetsova_genetic', spark: [55.3, 56.8, 59.8, 63.7, 65, 66.7, 67.6, 68.8, 69.4, 74.1, 74.6, 75.2, 75.6, 76.9, 77.1] },
      { p: 'facebook', now: 71000, month: 7000, url: 'https://www.facebook.com/share/1Ah2KYmt7e/', spark: [64, 64, 64, 64, 64, 65, 65, 65, 65, 69, 69, 70, 70, 71, 71] },
      { p: 'youtube', now: 42800, month: 1400, url: 'https://youtube.com/channel/UCV2Hwj4xKe5XMd118lhyIZg', spark: [41.4, 41.4, 41.4, 41.5, 41.5, 41.8, 41.9, 41.9, 42, 42.3, 42.3, 42.4, 42.5, 42.8, 42.8] },
      { p: 'vk', now: 23692, month: 7782, url: 'https://vk.com/krisrina_kuznetsova', spark: [15.9, 16.1, 16.2, 16.5, 16.7, 17.7, 18.1, 18.4, 18.8, 21.8, 22.2, 22.5, 22.5, 23.6, 23.7] },
    ],
  },
  {
    key: 'vsesvoi',
    total: 30826, perDay: 200, perMonth: 3591,
    shots: NOMOS_SHOTS,
    platforms: [
      { p: 'tiktok', now: 18900, month: 1700, spark: [17.2, 17.4, 17.5, 17.7, 17.8, 17.8, 17.9, 18, 18, 18.2, 18.3, 18.3, 18.4, 18.7, 18.9] },
      { p: 'youtube', now: 11900, month: 1800, spark: [10.1, 10.1, 10.1, 10.2, 10.3, 11.1, 11.2, 11.2, 11.3, 11.7, 11.7, 11.7, 11.8, 11.9, 11.9] },
      { p: 'pinterest', now: 19, month: 3, spark: [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 17, 19, 19] },
    ],
  },
  {
    key: 'volos',
    total: 37195, perDay: 110, perMonth: 21690,
    shots: NOMOS_SHOTS,
    platforms: [
      { p: 'tiktok', now: 32800, month: 21000, url: 'https://www.tiktok.com/@doctor__volos', spark: [11.8, 12, 12, 12.6, 17.1, 22.6, 24.3, 25.3, 25.9, 28.8, 29.5, 30.5, 31.7, 32.7, 32.8] },
      { p: 'youtube', now: 4380, month: 680, spark: [3.7, 3.72, 3.72, 3.72, 3.81, 3.97, 4.07, 4.13, 4.19, 4.3, 4.33, 4.35, 4.36, 4.37, 4.38] },
    ],
  },
];

const COLS = {
  2: 'grid-cols-2',
  3: 'grid-cols-2 sm:grid-cols-3',
  4: 'grid-cols-2 sm:grid-cols-4',
  5: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-5',
  6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
};

// Rolls up from `start` to `target` shortly after mount; with `live`, keeps ticking
// up to feel alive. Cancels its rAF/timer on cleanup and honours reduced-motion.
function LiveCounter({ target, start = 0, live = false, locale, className = '' }) {
  const [val, setVal] = useState(start);

  useEffect(() => {
    const reduced = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setVal(target); return; }
    const t0 = Date.now();
    let liveTimer;
    const id = setInterval(() => {
      const t = Math.min(1, (Date.now() - t0) / 1600);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(start + (target - start) * eased));
      if (t >= 1) {
        clearInterval(id);
        if (live) {
          const tick = () => { setVal((v) => v + 1); liveTimer = setTimeout(tick, 5000 + Math.random() * 4000); };
          liveTimer = setTimeout(tick, 5000 + Math.random() * 4000);
        }
      }
    }, 40);
    return () => { clearInterval(id); clearTimeout(liveTimer); };
  }, [target, start, live]);

  return <span className={`tabular-nums ${className}`}>{val.toLocaleString(locale)}</span>;
}

function Spark({ data, className = '' }) {
  const w = 100, h = 28;
  const min = Math.min(...data), max = Math.max(...data), span = (max - min) || 1;
  const pts = data.map((v, i) => `${((i / (data.length - 1)) * w).toFixed(1)},${(h - ((v - min) / span) * h).toFixed(1)}`).join(' ');
  return (
    <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className={className} fill="none" aria-hidden="true">
      <polyline points={pts} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function PlatformStat({ data, locale, monthLabel }) {
  const meta = PLATFORM[data.p];
  const inner = (
    <>
      <div className="flex items-center gap-2">
        <span className="w-[18px] h-[18px] block text-ink">{meta.icon}</span>
        <span className="text-[12.5px] font-bold text-ink-soft">{meta.name}</span>
        {data.url && (
          <svg className="w-3.5 h-3.5 ml-auto text-ink-mute group-hover:text-mint-700 transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
        )}
      </div>
      <div className="mt-2.5 text-[clamp(20px,2.4vw,26px)] font-extrabold tracking-tight text-ink leading-none tabular-nums">
        {data.now.toLocaleString(locale)}
      </div>
      {data.month != null ? (
        <div className="mt-1.5 inline-flex items-center gap-1 text-[12px] font-bold text-mint-700">
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17L17 7" /><polyline points="7 7 17 7 17 17" /></svg>
          +{data.month.toLocaleString(locale)}
          <span className="text-ink-mute font-medium">{monthLabel}</span>
        </div>
      ) : (
        <div className="mt-1.5 text-[12px] text-ink-mute font-medium leading-none">·</div>
      )}
      {data.spark
        ? <Spark data={data.spark} className="mt-3 h-7 w-full text-mint-500/80" />
        : <div className="mt-3 h-7" aria-hidden="true" />}
    </>
  );
  return data.url ? (
    <a href={data.url} target="_blank" rel="noopener noreferrer" className="group block p-5 hover:bg-mint-50/60 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-mint-500/40" aria-label={`${meta.name} — ${data.now.toLocaleString(locale)}`}>
      {inner}
    </a>
  ) : (
    <div className="p-5">{inner}</div>
  );
}

// Per-platform growth grid — reused by the featured card and every accordion client.
function ClientDashboard({ platforms, locale, monthLabel }) {
  const colCls = COLS[Math.min(6, Math.max(2, platforms.length))] || COLS[6];
  return (
    <div className={`grid ${colCls} gap-px bg-line rounded-rlg overflow-hidden border border-line`}>
      {platforms.map((d) => (
        <div key={d.p} className="bg-white"><PlatformStat data={d} locale={locale} monthLabel={monthLabel} /></div>
      ))}
    </div>
  );
}

// Proof screenshots. Each <img> loads even while hidden; a figure shows once its
// file loads, and the whole strip stays hidden until at least one is present.
function ProofGallery({ heading, shots, placeholder = false, className = '' }) {
  const [status, setStatus] = useState(() => shots.map(() => 'pending'));
  const set = (i, v) => setStatus((arr) => arr.map((s, k) => (k === i ? v : s)));
  const anyOk = status.some((s) => s === 'ok');
  return (
    <div className={className} style={anyOk ? undefined : { display: 'none' }}>
      <div className="text-center text-[12px] text-ink-mute uppercase tracking-[0.14em] font-bold mb-5">{heading}</div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
        {shots.map((s, i) => {
          const meta = PLATFORM[s.p];
          return (
            <figure key={s.src} className="m-0" style={status[i] === 'ok' ? undefined : { display: 'none' }}>
              <a href={s.src} target="_blank" rel="noopener noreferrer" title={s.alt} className="group block rounded-rxl border border-line overflow-hidden bg-white shadow-soft hover:shadow-soft-lg hover:border-mint-300 transition">
                <img src={s.src} alt={s.alt} className="block w-full aspect-[4/3] object-cover object-top" onLoad={() => set(i, 'ok')} onError={() => set(i, 'err')} />
                {meta && (
                  <figcaption className="px-4 py-3 border-t border-line text-[12.5px] font-bold text-ink">
                    {meta.name}{!placeholder && <span className="text-ink-soft font-medium"> · {s.stat}</span>}
                  </figcaption>
                )}
              </a>
            </figure>
          );
        })}
      </div>
    </div>
  );
}

// A small client tile in the compact grid — opens the modal on click.
function ClientTile({ data, name, niche, locale, t, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group text-left p-5 rounded-rxl border border-line bg-white hover:border-mint-300 hover:shadow-soft hover:-translate-y-0.5 transition-all duration-300 flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500/40"
    >
      <div className="text-[15px] font-bold tracking-tight text-ink truncate">{name}</div>
      {niche && <div className="text-[10.5px] text-ink-mute uppercase tracking-[0.08em] mt-0.5 truncate">{niche}</div>}
      <div className="mt-4 text-[clamp(20px,2.4vw,24px)] font-extrabold tracking-tight text-mint-700 leading-none tabular-nums">{data.total.toLocaleString(locale)}</div>
      <div className="text-[10px] text-ink-mute uppercase tracking-[0.08em] mt-1">{t('clients.cases.audienceLabel')}</div>
      <div className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-mint-700 group-hover:gap-2.5 transition-all">
        {t('clients.cases.viewStats')}
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="M13 5l7 7-7 7" /></svg>
      </div>
    </button>
  );
}

// Client statistics in a modal — keeps the page short no matter how many clients.
function ClientModal({ client, name, niche, locale, t, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [onClose]);

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center" role="dialog" aria-modal="true" aria-label={name}>
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div className="relative w-full sm:w-[min(920px,calc(100vw-3rem))] max-h-[92vh] sm:max-h-[85vh] bg-canvas rounded-t-r2xl sm:rounded-r2xl shadow-soft-xl overflow-hidden flex flex-col">
        <div className="flex items-center gap-4 p-5 sm:p-6 border-b border-line bg-white shrink-0">
          <div className="min-w-0 flex-1">
            <div className="text-[18px] font-extrabold tracking-tight text-ink truncate">{name}</div>
            {niche && <div className="text-[11.5px] text-ink-mute uppercase tracking-[0.08em] mt-0.5 truncate">{niche}</div>}
          </div>
          <div className="text-right shrink-0">
            <div className="text-[clamp(20px,3vw,26px)] font-extrabold tracking-tight text-mint-700 leading-none"><LiveCounter target={client.total} locale={locale} /></div>
            <div className="text-[10px] text-ink-mute uppercase tracking-[0.08em] mt-1">{t('clients.cases.audienceLabel')}</div>
          </div>
          <button type="button" onClick={onClose} aria-label={t('clients.cases.close')} className="w-9 h-9 rounded-[10px] border border-line grid place-items-center text-ink-soft hover:bg-mint-50 hover:text-ink transition shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500/40">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" /></svg>
          </button>
        </div>
        <div className="overflow-y-auto p-5 sm:p-7">
          <ClientDashboard platforms={client.platforms} locale={locale} monthLabel={t('clients.cases.dashboard.perMonth')} />
          <ProofGallery className="mt-7" heading={t('clients.cases.proofPlaceholderHeading')} shots={client.shots} placeholder />
        </div>
      </div>
    </div>,
    document.body,
  );
}

const FEATURED = CLIENTS.find((c) => c.featured);
const OTHER_CLIENTS = CLIENTS.filter((c) => !c.featured);

export default function Clients() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t('clients.meta.title');
  }, [t]);

  const REVIEWS = useMemo(() => getReviews(t), [t]);

  const dates = REVIEW_DATES[i18n.language] ?? REVIEW_DATES.ru;
  const TWITTER_CARDS = useMemo(() => REVIEWS.map((r, i) => ({
    initials: r.initials,
    username: r.name,
    handle: makeHandle(r.name),
    content: r.text,
    date: dates[i] ?? dates[dates.length - 1],
  })), [REVIEWS, dates]);

  const numLocale = i18n.language === 'en' ? 'en-US' : 'ru-RU';
  const [activeKey, setActiveKey] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const VISIBLE_LIMIT = 8;
  const visibleClients = showAll ? OTHER_CLIENTS : OTHER_CLIENTS.slice(0, VISIBLE_LIMIT);
  const activeClient = OTHER_CLIENTS.find((c) => c.key === activeKey) || null;

  return (
    <>
      <section className="hero-bg relative pt-[152px] pb-20 bg-dark text-white isolate overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-6 max-w-[880px] mx-auto">
            <h1 className="text-[clamp(32px,5vw,56px)] leading-[1.06] font-extrabold tracking-tight max-w-[820px]">
              {t('clients.hero.titlePart1')} <em className="not-italic text-grad-mint">{t('clients.hero.titleEm')}</em> {t('clients.hero.titlePart2')}
            </h1>
            <p className="text-[clamp(15px,1.6vw,17px)] text-white/75 leading-relaxed max-w-[660px]">
              {t('clients.hero.desc')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 overflow-hidden" id="reviews">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">{t('clients.reviews.title')}</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">{t('clients.reviews.desc')}</p>
          </div>

          <TwitterTestimonials
            cards={TWITTER_CARDS}
            expandLabel={t('clients.reviews.expandLabel')}
            collapseLabel={t('clients.reviews.collapseLabel')}
          />
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-mint-50 to-canvas" id="cases">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">{t('clients.cases.title')}</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">{t('clients.cases.desc')}</p>
          </div>

          {/* Flagship growth case — NOMOS (always shown, full) */}
          <article className="reveal bg-white border border-line rounded-r2xl overflow-hidden shadow-soft">
            <div className="grid lg:grid-cols-[1.3fr_1fr]">
              <div className="p-9 lg:p-11">
                <h3 className="text-[clamp(22px,2.8vw,30px)] font-extrabold tracking-tight leading-tight mb-4">{t('clients.cases.featured.title')}</h3>
                <p className="text-[15px] text-ink-soft leading-relaxed mb-6">{t('clients.cases.featured.desc')}</p>
                <ul className="list-none m-0 p-0 flex flex-col gap-2.5 list-check text-[14px] text-ink">
                  {[0, 1, 2, 3].map((i) => <li key={i}>{t(`clients.cases.featured.points.${i}`)}</li>)}
                </ul>
                <LinkButton to="/#contact" size="md" className="mt-8">
                  {t('clients.cases.featured.cta')}
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M13 5l7 7-7 7" /></svg>
                </LinkButton>
              </div>

              <div className="relative bg-gradient-to-br from-mint-700 to-mint-800 text-white p-9 lg:p-11 flex flex-col justify-center overflow-hidden">
                <div className="absolute -top-24 -right-16 w-[360px] h-[360px] rounded-full bg-[radial-gradient(circle,rgba(116,223,187,0.28),transparent_70%)]" aria-hidden="true" />
                <div className="relative">
                  <div className="text-[15px] font-extrabold tracking-tight">{t('clients.cases.list.nomos.name')}</div>
                  <div className="text-[11.5px] uppercase tracking-[0.14em] text-mint-200 font-bold mt-1 mb-4">{t('clients.cases.dashboard.totalLabel')}</div>
                  <div className="text-[clamp(40px,6.5vw,62px)] font-extrabold tracking-tight leading-none text-grad-price-white">
                    <LiveCounter target={FEATURED.total} start={FEATURED.total - FEATURED.perMonth} live locale={numLocale} />
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13px]">
                    <span className="inline-flex items-center gap-1.5 font-bold text-mint-100">
                      <span className="relative flex w-2 h-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-mint-300 opacity-75 animate-ping" />
                        <span className="relative inline-flex rounded-full w-2 h-2 bg-mint-300" />
                      </span>
                      +{FEATURED.perDay.toLocaleString(numLocale)} {t('clients.cases.dashboard.perDay')}
                    </span>
                    <span className="text-white/65">{FEATURED.videos} {t('clients.cases.dashboard.videos')}</span>
                  </div>
                  <div className="mt-2 text-[11.5px] text-white/55">{t('clients.cases.dashboard.live')}</div>
                </div>
              </div>
            </div>

            {/* Per-platform growth dashboard */}
            <div className="border-t border-line bg-mint-50/40 p-5 sm:p-7">
              <ClientDashboard platforms={FEATURED.platforms} locale={numLocale} monthLabel={t('clients.cases.dashboard.perMonth')} />
            </div>

            {/* Proof screenshots — attached to the card */}
            <ProofGallery className="border-t border-line p-6 sm:p-8" heading={t('clients.cases.proofHeading')} shots={FEATURED.shots} />
          </article>

          {/* Other clients — compact grid; a tile opens the stats modal */}
          <div className="reveal mt-16 mb-7 text-center">
            <h3 className="text-[clamp(20px,2.4vw,26px)] font-extrabold tracking-tight">{t('clients.cases.othersTitle')}</h3>
            <p className="text-[14.5px] text-ink-soft mt-2 max-w-[600px] mx-auto">{t('clients.cases.othersDesc')}</p>
          </div>

          <div className="reveal grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {visibleClients.map((c) => (
              <ClientTile
                key={c.key}
                data={c}
                name={t(`clients.cases.list.${c.key}.name`)}
                niche={t(`clients.cases.list.${c.key}.niche`)}
                locale={numLocale}
                t={t}
                onOpen={() => setActiveKey(c.key)}
              />
            ))}
          </div>

          {OTHER_CLIENTS.length > VISIBLE_LIMIT && (
            <div className="reveal text-center mt-8">
              <Button variant="secondary" size="md" onClick={() => setShowAll((v) => !v)}>
                {showAll ? t('clients.cases.collapse') : t('clients.cases.showAll', { n: OTHER_CLIENTS.length })}
              </Button>
            </div>
          )}

          {activeClient && (
            <ClientModal
              client={activeClient}
              name={t(`clients.cases.list.${activeClient.key}.name`)}
              niche={t(`clients.cases.list.${activeClient.key}.niche`)}
              locale={numLocale}
              t={t}
              onClose={() => setActiveKey(null)}
            />
          )}
        </div>
      </section>
    </>
  );
}
