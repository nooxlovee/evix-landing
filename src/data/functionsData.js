// Pure STRUCTURE only — no human-visible copy lives here.
// All display strings (titles, descriptions, lists, role/niche names, badges)
// are resolved in Functions.jsx via i18next from the `functions` namespace.
//
// What stays here:
//   - icon SVG markup keyed by module
//   - badge ENUM values (stable keys that drive color logic; labels are translated)
//   - module keys + which module keys belong to each niche/role
//   - niche keys and role keys

export const ICON = {
  smm: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',
  studio: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>',
  blogger: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg>',
  marketer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  dashboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>',
  clients: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',
  library: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h6v16H4zM14 4h6v10h-6zM14 16h6v4h-6z"/></svg>',
  formats: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  scripts: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h11l5 5v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><path d="M14 4v6h6"/><path d="M7 14h8M7 18h6"/></svg>',
  scriptsAnalysis: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-5"/></svg>',
  covers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>',
  avatar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg>',
  edits: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>',
  publish: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>',
  competitors: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>',
  transcribe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
  core: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>',
  favorites: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2"/></svg>',
  quiz: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  team: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><circle cx="17" cy="7" r="3"/><path d="M21 21v-2a3 3 0 0 0-3-3"/></svg>',
};

// Badge ENUM values — stable keys that drive color logic.
// Human-readable labels are resolved from `functions.badges.<enum>` in the locale files.
export const BADGE = {
  base: 'base',
  ai: 'ai',
  content: 'content',
  team: 'team',
};

// Module structure: icon + badge enum only. All copy lives in the locale.
export const MODULES = {
  dashboard: { icon: ICON.dashboard, badge: BADGE.base },
  clients: { icon: ICON.clients, badge: BADGE.base },
  library: { icon: ICON.library, badge: BADGE.ai },
  formats: { icon: ICON.formats, badge: BADGE.content },
  scripts: { icon: ICON.scripts, badge: BADGE.ai },
  scriptsAnalysis: { icon: ICON.scriptsAnalysis, badge: BADGE.ai },
  covers: { icon: ICON.covers, badge: BADGE.ai },
  avatar: { icon: ICON.avatar, badge: BADGE.base },
  edits: { icon: ICON.edits, badge: BADGE.team },
  publish: { icon: ICON.publish, badge: BADGE.base },
  competitors: { icon: ICON.competitors, badge: BADGE.ai },
  transcribe: { icon: ICON.transcribe, badge: BADGE.ai },
  core: { icon: ICON.core, badge: BADGE.ai },
  favorites: { icon: ICON.favorites, badge: BADGE.content },
  quiz: { icon: ICON.quiz, badge: BADGE.ai },
  team: { icon: ICON.team, badge: BADGE.team },
};

// Niche structure: icon + role keys, each role mapping to the module keys it sees.
export const NICHES = {
  smm: {
    icon: ICON.smm,
    roles: {
      owner: { modules: ['dashboard', 'clients', 'team', 'library', 'competitors'] },
      account: { modules: ['clients', 'scripts', 'scriptsAnalysis', 'publish', 'edits', 'library'] },
      scriptwriter: { modules: ['library', 'scripts', 'scriptsAnalysis', 'competitors', 'transcribe', 'core', 'favorites', 'quiz'] },
      editor: { modules: ['edits', 'covers', 'formats', 'avatar'] },
    },
  },
  studio: {
    icon: ICON.studio,
    roles: {
      producer: { modules: ['dashboard', 'clients', 'edits', 'publish', 'team', 'library'] },
      scriptwriter: { modules: ['library', 'scripts', 'scriptsAnalysis', 'competitors', 'transcribe', 'core', 'favorites'] },
      editor: { modules: ['edits', 'covers', 'formats', 'avatar'] },
      publisher: { modules: ['publish', 'dashboard', 'clients'] },
    },
  },
  blogger: {
    icon: ICON.blogger,
    roles: {
      soloAuthor: { modules: ['quiz', 'library', 'scripts', 'scriptsAnalysis', 'covers', 'publish', 'competitors', 'favorites'] },
      withAssistant: { modules: ['scripts', 'covers', 'publish', 'edits', 'team', 'library', 'avatar'] },
      withProducer: { modules: ['library', 'scripts', 'scriptsAnalysis', 'publish', 'edits', 'competitors', 'core'] },
      withTeam: { modules: ['dashboard', 'team', 'scripts', 'edits', 'publish', 'clients'] },
    },
  },
  marketer: {
    icon: ICON.marketer,
    roles: {
      head: { modules: ['dashboard', 'team', 'library', 'competitors', 'core'] },
      marketer: { modules: ['library', 'scripts', 'scriptsAnalysis', 'competitors', 'transcribe', 'core', 'quiz'] },
      contentManager: { modules: ['scripts', 'covers', 'publish', 'formats', 'favorites', 'avatar'] },
      smmSpec: { modules: ['competitors', 'transcribe', 'favorites', 'avatar', 'publish'] },
    },
  },
};

// Ordered list of the 16 module keys shown in the "all modules" grid.
export const ALL_MODULES_CARDS = [
  'dashboard',
  'clients',
  'library',
  'formats',
  'scripts',
  'scriptsAnalysis',
  'covers',
  'avatar',
  'edits',
  'publish',
  'competitors',
  'transcribe',
  'core',
  'favorites',
  'quiz',
  'team',
];

// Color mapping keyed off the badge ENUM value (not the display label).
export function badgeColors(badge) {
  if (badge === BADGE.ai) return 'bg-mint-100 text-mint-700';
  return 'bg-mint-100 text-mint-800';
}
