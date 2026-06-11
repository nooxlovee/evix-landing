import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NICHES, MODULES, ALL_MODULES_CARDS, badgeColors } from '../data/functionsData.js';
import { LinkButton } from '../components/ui/Button';

function RawSvg({ html, className }) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

const getHeroStats = (t) => [
  { v: '16', l: t('functions.hero.stats.0.label') },
  { v: '4', l: t('functions.hero.stats.1.label') },
  { v: '9', l: t('functions.hero.stats.2.label') },
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

  const niche = 'smm';
  const role = 'owner';

  const currentNiche = NICHES[niche];
  const currentRole = currentNiche.roles[role];

  const heroStats = useMemo(() => getHeroStats(t), [t]);
  const howSteps = useMemo(() => getHowSteps(t), [t]);
  const coreCards = useMemo(() => getCoreCards(t), [t]);

  return (
    <>
      {/* HERO */}
      <section className="hero-bg relative pt-[152px] pb-20 bg-dark text-white isolate overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-7 max-w-[880px] mx-auto">
            <h1 className="text-[clamp(32px,5vw,56px)] leading-[1.06] font-extrabold tracking-tight max-w-[820px]">
              {t('functions.hero.titlePart1')}<br />{t('functions.hero.titlePart2')}{' '}
              <em className="hero-em not-italic inline-block text-grad-mint min-w-[1ch]">
                {currentNiche.hero}
              </em>
            </h1>
            <p className="text-[clamp(15px,1.6vw,17px)] text-white/75 leading-relaxed max-w-[660px]">
              {t('functions.hero.subtitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-[640px] mt-2">
              {heroStats.map((m) => (
                <div key={m.l} className="p-4.5 px-4 bg-white/[0.06] border border-white/10 rounded-rlg backdrop-blur-sm">
                  <div className="text-2xl font-extrabold tracking-tight text-white">{m.v}</div>
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {ALL_MODULES_CARDS.map((m) => (
              <article key={m.key} className="reveal relative bg-white border border-line rounded-rlg p-5 flex flex-col gap-2.5 hover:border-mint-300 hover:shadow-soft hover:-translate-y-0.5 transition">
                <RawSvg html={MODULES[m.key].icon} className="w-10 h-10 rounded-[11px] bg-mint-50 text-mint-700 grid place-items-center [&_svg]:w-[19px] [&_svg]:h-[19px]" />
                <div className="text-sm font-bold tracking-tight">{m.title}</div>
                <div className="text-[12.5px] text-ink-soft leading-snug">{m.desc}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ADAPTATION (replaces niche-picker) */}
      <section className="py-24 bg-gradient-to-b from-mint-50 to-canvas" id="niches">
        <div className="max-w-container mx-auto px-6">
          {/* Header */}
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">{t('functions.adaptation.badge')}</span>
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
            {coreCards.map((c) => (
              <article
                key={c.title}
                className={`reveal relative bg-white border rounded-rxl p-5 flex flex-col gap-2 transition ${
                  c.wip ? 'border-dashed border-line-strong' : 'border-line hover:border-mint-200 hover:shadow-soft'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="shrink-0 w-9 h-9 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center [&_svg]:w-[18px] [&_svg]:h-[18px]">
                    {c.icon}
                  </span>
                  <h4 className="text-[15px] font-extrabold tracking-tight leading-tight flex-1">{c.title}</h4>
                  {c.wip && (
                    <span className="text-[9.5px] font-bold tracking-[0.14em] uppercase text-orange-700 bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-full whitespace-nowrap">
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

      {/* ROLES */}
      <section className="py-24" id="roles">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">{t('functions.roles.badge')}</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">{t('functions.roles.title')}</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">{t('functions.roles.subtitle')}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(currentNiche.roles).map(([, r], idx) => (
              <div
                key={r.name}
                className="reveal relative font-sans rounded-rxl p-6 flex flex-col gap-4 overflow-hidden bg-white border border-line"
              >
                {/* Top row: numeral */}
                <div className="relative flex items-start justify-between">
                  <span className="font-extrabold tabular-nums leading-none tracking-tight text-[40px] text-mint-200">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Name + description */}
                <div className="relative">
                  <h3 className="text-[18px] font-extrabold tracking-tight leading-tight text-ink">
                    {r.name}
                  </h3>
                  <p className="mt-2 text-[13px] leading-snug text-ink-soft">{r.desc}</p>
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES DETAIL */}
      <section className="py-24 bg-gradient-to-b from-mint-50 to-canvas" id="modulesDetail">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">{t('functions.modulesDetail.badge')}</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">{t('functions.modulesDetail.title')}</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">{t('functions.modulesDetail.subtitle')}</p>
          </div>

          <div className="bg-white border border-line rounded-rxl px-6 py-4.5 flex flex-wrap items-center gap-3.5 mb-7">
            <span className="text-[11.5px] font-bold tracking-[0.1em] uppercase text-ink-mute">{t('functions.modulesDetail.contextLabel')}</span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-sm font-semibold">{currentNiche.name}</span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold">{currentRole.name}</span>
            <span className="ml-auto text-sm text-ink-soft">{t('functions.modulesDetail.matchedPrefix')} <strong className="text-ink">{currentRole.modules.length}</strong></span>
          </div>

          <div className="grid lg:grid-cols-2 gap-4.5">
            {currentRole.modules.length === 0 && (
              <div className="col-span-full p-10 bg-white border border-dashed border-line-strong rounded-rxl text-center text-ink-soft">
                {t('functions.modulesDetail.emptyState')}
              </div>
            )}
            {currentRole.modules.map((modKey, idx) => {
              const m = MODULES[modKey];
              if (!m) return null;
              const perNiche = m.perNiche[niche] || {};
              const title = perNiche.title || m.base.title;
              const desc = perNiche.desc || '';
              const list = perNiche.list || [];
              return (
                <article
                  key={`${role}-${modKey}`}
                  className="module-appear bg-white border border-line rounded-rxl p-7 grid grid-cols-[56px_1fr] gap-5 hover:border-mint-200 hover:shadow-soft hover:-translate-y-0.5 transition"
                  style={{ animationDelay: `${idx * 60}ms` }}
                >
                  <RawSvg html={m.icon} className="module-icon w-14 h-14 rounded-[14px] bg-gradient-to-br from-mint-100 to-mint-50 text-mint-700 grid place-items-center" />
                  <div>
                    <div className="flex items-center flex-wrap gap-2 mb-2">
                      <h3 className="text-lg font-bold tracking-tight">{title}</h3>
                      <span className={`inline-flex text-[10.5px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full ${badgeColors(m.base.badge)}`}>{m.base.badge}</span>
                    </div>
                    <p className="text-sm text-ink-soft leading-relaxed mb-3.5">{desc}</p>
                    <ul className="list-none m-0 p-0 flex flex-col gap-2 list-check text-[13.5px]">
                      {list.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                </article>
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