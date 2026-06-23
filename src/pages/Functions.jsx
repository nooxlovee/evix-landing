import { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { NICHES, MODULES, ALL_MODULES_CARDS, badgeColors } from '../data/functionsData.js';
import { LinkButton } from '../components/ui/Button';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import { SpotlightCard } from '../components/ui/SpotlightCard';

function RawSvg({ html, className }) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

const NICHE_KEYS = Object.keys(NICHES);

const getHeroStats = (t) => [
  { v: 16, l: t('functions.hero.stats.0.label') },
  { v: 4, l: t('functions.hero.stats.1.label') },
  { v: 9, l: t('functions.hero.stats.2.label') },
];

const getHowSteps = (t) => [
  {
    n: '01',
    label: t('functions.adaptation.steps.0.label'),
    title: t('functions.adaptation.steps.0.title'),
    desc: t('functions.adaptation.steps.0.desc'),
  },
  {
    n: '02',
    label: t('functions.adaptation.steps.1.label'),
    title: t('functions.adaptation.steps.1.title'),
    desc: t('functions.adaptation.steps.1.desc'),
  },
  {
    n: '03',
    label: t('functions.adaptation.steps.2.label'),
    title: t('functions.adaptation.steps.2.title'),
    desc: t('functions.adaptation.steps.2.desc'),
  },
];

const getCoreCards = (t) => [
  {
    title: t('functions.adaptation.cores.0.title'),
    desc: t('functions.adaptation.cores.0.desc'),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    title: t('functions.adaptation.cores.1.title'),
    desc: t('functions.adaptation.cores.1.desc'),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-5" /><circle cx="11" cy="10" r="1" />
      </svg>
    ),
  },
  {
    title: t('functions.adaptation.cores.2.title'),
    desc: t('functions.adaptation.cores.2.desc'),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <path d="M3.27 6.96L12 12l8.73-5.04" /><path d="M12 22V12" />
      </svg>
    ),
  },
  {
    title: t('functions.adaptation.cores.3.title'),
    desc: t('functions.adaptation.cores.3.desc'),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><path d="M7 17l4-7 3 5 5-9" />
        <circle cx="7" cy="17" r="1.5" fill="currentColor" /><circle cx="11" cy="10" r="1.5" fill="currentColor" />
        <circle cx="14" cy="15" r="1.5" fill="currentColor" /><circle cx="19" cy="6" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: t('functions.adaptation.cores.4.title'),
    desc: t('functions.adaptation.cores.4.desc'),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><path d="M3 12h18" />
        <path d="M12 3a13 13 0 0 1 0 18" /><path d="M12 3a13 13 0 0 0 0 18" />
      </svg>
    ),
  },
  {
    title: t('functions.adaptation.cores.5.title'),
    wip: true,
    desc: t('functions.adaptation.cores.5.desc'),
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3" /><circle cx="17" cy="11" r="2.5" />
        <path d="M3 20c0-3 3-5 6-5s6 2 6 5" /><path d="M14 20c0-2 2-3.5 4-3.5" />
      </svg>
    ),
  },
];

export default function Functions() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('functions.meta.title');
  }, [t]);

  const [niche, setNiche] = useState('smm');
  const [role, setRole] = useState('owner');
  const [swapping, setSwapping] = useState(false);

  const currentNiche = NICHES[niche];
  const roleKeys = useMemo(() => Object.keys(currentNiche.roles), [currentNiche]);
  // Guard against a stale role key after a niche change.
  const activeRole = currentNiche.roles[role] ? role : roleKeys[0];
  const currentRole = currentNiche.roles[activeRole];

  const nicheTabsRef = useRef([]);
  const roleTabsRef = useRef([]);
  const swapTimer = useRef(0);

  const heroStats = useMemo(() => getHeroStats(t), [t]);
  const howSteps = useMemo(() => getHowSteps(t), [t]);
  const coreCards = useMemo(() => getCoreCards(t), [t]);

  const selectNiche = useCallback((key) => {
    if (key === niche) return;
    // Briefly fade the hero word, then swap.
    setSwapping(true);
    clearTimeout(swapTimer.current);
    swapTimer.current = setTimeout(() => setSwapping(false), 280);
    setNiche(key);
    // Role keys differ per niche — reset to the first role of the new niche.
    setRole(Object.keys(NICHES[key].roles)[0]);
  }, [niche]);

  useEffect(() => () => clearTimeout(swapTimer.current), []);

  // Roving-tabindex keyboard handler for a horizontal tablist.
  const onTabKeyDown = useCallback((event, keys, index, onSelect, refs) => {
    let next = null;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      next = (index + 1) % keys.length;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      next = (index - 1 + keys.length) % keys.length;
    } else if (event.key === 'Home') {
      next = 0;
    } else if (event.key === 'End') {
      next = keys.length - 1;
    } else {
      return;
    }
    event.preventDefault();
    onSelect(keys[next]);
    refs.current[next]?.focus();
  }, []);

  const heroWord = t(`functions.niches.${niche}.hero`);

  return (
    <>
      {/* HERO */}
      <section className="hero-bg relative pt-[152px] pb-20 bg-dark text-white isolate overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-7 max-w-[880px] mx-auto">
            <h1 className="text-[clamp(32px,5vw,56px)] leading-[1.06] font-extrabold tracking-tight max-w-[820px]">
              {t('functions.hero.titlePart1')}<br />{t('functions.hero.titlePart2')}{' '}
              <em className={`hero-em not-italic inline-block text-grad-mint min-w-[1ch] ${swapping ? 'is-swapping' : ''}`}>
                {heroWord}
              </em>
            </h1>
            <p className="text-[clamp(15px,1.6vw,17px)] text-white/75 leading-relaxed max-w-[660px]">
              {t('functions.hero.subtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-[640px] mt-2">
              {heroStats.map((m) => (
                <div key={m.l} className="p-4.5 px-4 bg-white/[0.06] border border-white/10 rounded-rlg backdrop-blur-sm">
                  <div className="text-2xl font-extrabold tracking-tight text-white">
                    <AnimatedCounter value={m.v} />
                  </div>
                  <div className="text-[11.5px] text-white/60 uppercase tracking-[0.1em] mt-1">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ALL FUNCTIONS */}
      <section className="py-18 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">{t('functions.allModules.title')}</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">{t('functions.allModules.subtitle')}</p>
          </div>

          {/* Registry — typographic index, no icons */}
          <div className="reveal max-w-[1000px] mx-auto grid md:grid-cols-2 md:gap-x-14">
            {[ALL_MODULES_CARDS.slice(0, 8), ALL_MODULES_CARDS.slice(8)].map((col, ci) => (
              <ul key={ci} className="list-none m-0 p-0 border-t border-ink/15">
                {col.map((key, i) => {
                  const n = ci * 8 + i + 1;
                  return (
                    <li key={key} className="group flex items-baseline gap-5 py-4.5 border-b border-line">
                      <span className="text-[13px] font-extrabold tabular-nums text-mint-500 shrink-0 w-7 pt-0.5">{String(n).padStart(2, '0')}</span>
                      <div className="min-w-0">
                        <h3 className="text-[15.5px] font-bold tracking-tight text-ink transition-colors group-hover:text-mint-700">{t(`functions.cards.${key}.title`)}</h3>
                        <p className="text-[13px] text-ink-soft leading-snug mt-1">{t(`functions.cards.${key}.desc`)}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* ADAPTATION + NICHE SELECTOR */}
      <section className="py-24 bg-gradient-to-b from-mint-50 to-canvas" id="niches">
        <div className="max-w-container mx-auto px-6">
          {/* Header */}
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">
              {t('functions.adaptation.title')}
            </h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[680px]">
              {t('functions.adaptation.subtitle')}
            </p>
          </div>

          {/* Mechanism: 3-step horizontal flow */}
          <div className="reveal grid md:grid-cols-3 gap-4 mb-16 relative">
            {howSteps.map((s, i, arr) => (
              <div key={s.n} className="relative bg-white border border-line rounded-rxl p-6 flex flex-col gap-2">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[44px] font-extrabold leading-none text-mint-200 tabular-nums tracking-tight">{s.n}</span>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-ink-mute pt-2.5">{s.label}</span>
                </div>
                <h3 className="text-[17px] font-extrabold tracking-tight mt-1">{s.title}</h3>
                <p className="text-[13.5px] text-ink-soft leading-relaxed">{s.desc}</p>
                {i < arr.length - 1 && (
                  <svg className="hidden md:block absolute top-1/2 -right-3.5 w-6 h-6 text-mint-400 -translate-y-1/2 z-10 bg-canvas rounded-full p-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                )}
              </div>
            ))}
          </div>

          {/* 6 ядра */}
          <div className="reveal mb-6 flex items-baseline justify-between gap-4 flex-wrap">
            <h3 className="text-[clamp(20px,2.4vw,28px)] font-extrabold tracking-tight">
              {t('functions.adaptation.coresHeading')}
            </h3>
            <span className="text-[12.5px] text-ink-mute font-medium" dangerouslySetInnerHTML={{ __html: t('functions.adaptation.coresNote') }} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {coreCards.map((c, i) => (
              <article
                key={c.title}
                className={`reveal relative bg-white border rounded-rxl p-5 flex flex-col gap-2 transition ${
                  c.wip ? 'border-dashed border-line-strong' : 'border-line hover:border-mint-200 hover:shadow-soft'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="shrink-0 w-6 text-[13px] font-extrabold tabular-nums text-mint-500">{String(i + 1).padStart(2, '0')}</span>
                  <h4 className="text-[15px] font-extrabold tracking-tight leading-tight flex-1">{c.title}</h4>
                  {c.wip && (
                    <span className="text-[9.5px] font-bold tracking-[0.14em] uppercase text-ink-mute bg-canvas-soft border border-line px-2 py-0.5 rounded-full whitespace-nowrap">
                      {t('functions.adaptation.wipBadge')}
                    </span>
                  )}
                </div>
                <p className="text-[13px] text-ink-soft leading-snug">{c.desc}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ROLES — role selector */}
      <section className="py-24" id="roles">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-9">
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">{t('functions.roles.title')}</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">{t('functions.roles.subtitle')}</p>
          </div>

          {/* Niche selector — drives the role set + module list below */}
          <div className="reveal flex flex-col items-center gap-3 mb-9">
            <span className="text-[11.5px] font-bold tracking-[0.14em] uppercase text-ink-mute">{t('functions.modulesDetail.contextLabel')}</span>
            <div
              role="tablist"
              aria-label={t('functions.adaptation.badge')}
              className="inline-flex flex-wrap justify-center gap-2 p-1.5 bg-white border border-line rounded-rxl shadow-soft-sm"
            >
              {NICHE_KEYS.map((key, idx) => {
                const selected = key === niche;
                return (
                  <button
                    key={key}
                    ref={(el) => (nicheTabsRef.current[idx] = el)}
                    role="tab"
                    id={`niche-tab-${key}`}
                    aria-selected={selected}
                    aria-controls="niche-roles"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => selectNiche(key)}
                    onKeyDown={(e) => onTabKeyDown(e, NICHE_KEYS, idx, selectNiche, nicheTabsRef)}
                    className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-rmd text-sm font-bold tracking-tight transition focus:outline-none focus-visible:ring-4 focus-visible:ring-mint-500/20 ${
                      selected
                        ? 'bg-mint-600 text-white shadow-mint'
                        : 'text-ink-soft hover:text-ink hover:bg-mint-50'
                    }`}
                  >
                    <span className={`shrink-0 w-5 h-5 [&_svg]:w-full [&_svg]:h-full ${selected ? 'text-white' : 'text-mint-600'}`} dangerouslySetInnerHTML={{ __html: NICHES[key].icon }} />
                    <span className="flex flex-col items-start leading-tight">
                      <span>{t(`functions.niches.${key}.name`)}</span>
                      <span className={`text-[10.5px] font-semibold tracking-normal ${selected ? 'text-white/70' : 'text-ink-mute'}`}>{t(`functions.niches.${key}.sub`)}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            id="niche-roles"
            role="tablist"
            aria-label={t('functions.roles.title')}
            className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {roleKeys.map((roleKey, idx) => {
              const r = currentNiche.roles[roleKey];
              const selected = roleKey === activeRole;
              return (
                <button
                  key={roleKey}
                  ref={(el) => (roleTabsRef.current[idx] = el)}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="modulesDetailGrid"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setRole(roleKey)}
                  onKeyDown={(e) => onTabKeyDown(e, roleKeys, idx, setRole, roleTabsRef)}
                  className={`relative text-left font-sans rounded-rxl p-6 flex flex-col gap-4 overflow-hidden transition focus:outline-none focus-visible:ring-4 focus-visible:ring-mint-500/20 ${
                    selected
                      ? 'bg-mint-50 border-2 border-mint-500 shadow-soft -translate-y-0.5'
                      : 'bg-white border-2 border-line hover:border-mint-300 hover:shadow-soft-sm'
                  }`}
                >
                  {/* Top row: numeral + checkmark when selected */}
                  <div className="relative flex items-start justify-between">
                    <span className={`font-extrabold tabular-nums leading-none tracking-tight text-[40px] ${selected ? 'text-mint-400' : 'text-mint-200'}`}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    {selected && (
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-mint-600 text-white" aria-hidden="true">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                    )}
                  </div>

                  {/* Name + description */}
                  <div className="relative">
                    <h3 className="text-[18px] font-extrabold tracking-tight leading-tight text-ink">
                      {t(`functions.niches.${niche}.roles.${roleKey}.name`)}
                    </h3>
                    <p className="mt-2 text-[13px] leading-snug text-ink-soft">{t(`functions.niches.${niche}.roles.${roleKey}.desc`)}</p>
                  </div>

                  {/* Footer: module count */}
                  <div className="relative mt-auto pt-3.5 flex items-center gap-2 border-t border-line">
                    <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-mint-700">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="7" height="7" rx="1" />
                        <rect x="14" y="3" width="7" height="7" rx="1" />
                        <rect x="3" y="14" width="7" height="7" rx="1" />
                        <rect x="14" y="14" width="7" height="7" rx="1" />
                      </svg>
                      {r.modules.length} {t('functions.roles.modulesSuffix')}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Live result — updates instantly on niche/role select */}
          <div className="mt-12 bg-white border border-line rounded-rxl px-6 py-4.5 flex flex-wrap items-center gap-3.5 mb-7">
            <span className="text-[11.5px] font-bold tracking-[0.1em] uppercase text-ink-mute">{t('functions.modulesDetail.contextLabel')}</span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-sm font-semibold">{t(`functions.niches.${niche}.name`)}</span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-700 text-sm font-semibold">{t(`functions.niches.${niche}.roles.${activeRole}.name`)}</span>
            <span className="ml-auto text-sm text-ink-soft">{t('functions.modulesDetail.matchedPrefix')} <strong className="text-ink">{currentRole.modules.length}</strong></span>
          </div>

          <div id="modulesDetailGrid" className="grid lg:grid-cols-2 gap-4.5">
            {currentRole.modules.length === 0 && (
              <div className="col-span-full p-10 bg-white border border-dashed border-line-strong rounded-rxl text-center text-ink-soft">
                {t('functions.modulesDetail.emptyState')}
              </div>
            )}
            {currentRole.modules.map((modKey, idx) => {
              const m = MODULES[modKey];
              if (!m) return null;
              const base = `functions.modules.${modKey}`;
              const perNiche = `${base}.perNiche.${niche}`;
              // Per-niche title override falls back to the module's base title.
              const title = t(`${perNiche}.title`, { defaultValue: t(`${base}.title`) });
              const desc = t(`${perNiche}.desc`);
              const list = t(`${perNiche}.list`, { returnObjects: true });
              const items = Array.isArray(list) ? list : [];
              return (
                <SpotlightCard
                  as="article"
                  key={`${activeRole}-${modKey}`}
                  className="module-appear bg-white border border-line rounded-rxl p-7 hover:border-mint-200 hover:shadow-soft hover:-translate-y-0.5 transition"
                  style={{ animationDelay: `${idx * 60}ms` }}
                >
                  <div className="flex items-center flex-wrap gap-2.5 mb-2.5">
                    <h3 className="text-lg font-bold tracking-tight">{title}</h3>
                    <span className={`inline-flex text-[10.5px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full ${badgeColors(m.badge)}`}>{t(`functions.badges.${m.badge}`)}</span>
                  </div>
                  <p className="text-sm text-ink-soft leading-relaxed mb-3.5">{desc}</p>
                  <ul className="list-none m-0 p-0 flex flex-col gap-2 list-check text-[13.5px]">
                    {items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </SpotlightCard>
              );
            })}
          </div>

          <div className="mt-14 relative overflow-hidden bg-gradient-to-br from-mint-700 to-mint-800 text-white rounded-r2xl p-11 grid lg:grid-cols-[1.4fr_auto] gap-8 items-center">
            <div className="absolute -top-24 -right-14 w-[320px] h-[320px] rounded-full bg-[radial-gradient(circle,rgba(116,223,187,0.3),transparent_70%)]"></div>
            <div className="relative">
              <h3 className="text-[clamp(22px,2.6vw,28px)] font-extrabold tracking-tight mb-2.5">{t('functions.cta.title')}</h3>
              <p className="text-[15px] text-white/80 leading-relaxed">{t('functions.cta.desc')}</p>
            </div>
            <div className="relative flex gap-3">
              <LinkButton to="/#contact">{t('functions.cta.primary')}</LinkButton>
              <LinkButton to="/#how" variant="secondary" tone="dark">{t('functions.cta.secondary')}</LinkButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
