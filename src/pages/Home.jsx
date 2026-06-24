import { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { EditorialHero } from '../components/ui/EditorialHero';
import { InfiniteSlider } from '../components/ui/InfiniteSlider';
import { TestimonialsColumn } from '../components/ui/TestimonialsColumn';
import { MagneticButton } from '../components/ui/MagneticButton';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';

/* ─── DATA SHAPES ───────────────────────────────────────────────── */

const getHowSteps = (t) => [
  { n: 1, title: t('home.how.steps.0.title'), desc: t('home.how.steps.0.desc') },
  { n: 2, title: t('home.how.steps.1.title'), desc: t('home.how.steps.1.desc') },
  { n: 3, title: t('home.how.steps.2.title'), desc: t('home.how.steps.2.desc') },
  { n: 4, title: t('home.how.steps.3.title'), desc: t('home.how.steps.3.desc') },
];

const getReviewsData = (t) => [
  { text: t('home.reviews.items.0.text'), name: t('home.reviews.items.0.name'), role: t('home.reviews.items.0.role') },
  { text: t('home.reviews.items.1.text'), name: t('home.reviews.items.1.name'), role: t('home.reviews.items.1.role') },
  { text: t('home.reviews.items.2.text'), name: t('home.reviews.items.2.name'), role: t('home.reviews.items.2.role') },
  { text: t('home.reviews.items.3.text'), name: t('home.reviews.items.3.name'), role: t('home.reviews.items.3.role') },
  { text: t('home.reviews.items.4.text'), name: t('home.reviews.items.4.name'), role: t('home.reviews.items.4.role') },
  { text: t('home.reviews.items.5.text'), name: t('home.reviews.items.5.name'), role: t('home.reviews.items.5.role') },
  { text: t('home.reviews.items.6.text'), name: t('home.reviews.items.6.name'), role: t('home.reviews.items.6.role') },
  { text: t('home.reviews.items.7.text'), name: t('home.reviews.items.7.name'), role: t('home.reviews.items.7.role') },
  { text: t('home.reviews.items.8.text'), name: t('home.reviews.items.8.name'), role: t('home.reviews.items.8.role') },
];

const clientsData = [
  {
    name: 'Nomos',
    logo: (
      <span className="brand-logo">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-mint-600" aria-hidden="true" />
        <span className="text-[19px] font-extrabold tracking-[0.22em] uppercase">NOMOS</span>
      </span>
    ),
  },
  {
    name: 'Layers',
    logo: (
      <span className="brand-logo">
        <svg className="w-[18px] h-[18px] text-mint-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
        <span className="text-[22px] font-extrabold tracking-tight">Layers</span>
      </span>
    ),
  },
  {
    name: 'PlayLab',
    logo: (
      <span className="brand-logo">
        <span className="text-[22px] font-extrabold tracking-[-0.03em]">
          PLAY<span className="font-light italic text-mint-700">lab</span>
        </span>
      </span>
    ),
  },
  {
    name: 'Studio M',
    logo: (
      <span className="brand-logo">
        <span className="inline-flex w-7 h-7 rounded-md bg-ink text-white items-center justify-center text-[14px] font-extrabold leading-none" aria-hidden="true">M</span>
        <span className="text-[13px] font-bold tracking-[0.22em] uppercase">Studio</span>
      </span>
    ),
  },
  {
    name: 'Reel.it',
    logo: (
      <span className="brand-logo">
        <span className="text-[22px] font-extrabold lowercase tracking-[-0.02em]">
          reel<span className="text-mint-500">·</span>it
        </span>
      </span>
    ),
  },
  {
    name: 'Vortex',
    logo: (
      <span className="brand-logo">
        <svg className="w-5 h-5 text-mint-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12c5-5 15-5 20 0" />
          <path d="M22 12c-5 5-15 5-20 0" />
        </svg>
        <span className="text-[19px] font-extrabold tracking-[0.16em] uppercase">VORTEX</span>
      </span>
    ),
  },
  {
    name: 'Pulse',
    logo: (
      <span className="brand-logo">
        <svg className="w-6 h-4 text-mint-500" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M1 8 L6 8 L9 2 L13 14 L17 8 L23 8" />
        </svg>
        <span className="text-[22px] font-extrabold tracking-[-0.02em] italic">Pulse.</span>
      </span>
    ),
  },
  {
    name: 'Stellar',
    logo: (
      <span className="brand-logo">
        <svg className="w-5 h-5 text-mint-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" />
        </svg>
        <span className="text-[19px] font-extrabold tracking-[0.16em] uppercase">STELLAR</span>
      </span>
    ),
  },
];

/* ─── PAGE ──────────────────────────────────────────────────────── */

export default function Home() {
  const { t } = useTranslation();

  useEffect(() => { document.title = t('home.docTitle'); }, [t]);

  const howSteps = useMemo(() => getHowSteps(t), [t]);
  const reviewsData = useMemo(() => getReviewsData(t), [t]);

  const modulesData = useMemo(() => [
    { title: t('home.modules.items.0.title'), desc: t('home.modules.items.0.desc'), tag: t('home.modules.legend.inLabel'),   kind: 'in',   bullets: [t('home.modules.items.0.bullets.0'), t('home.modules.items.0.bullets.1'), t('home.modules.items.0.bullets.2')] },
    { title: t('home.modules.items.1.title'), desc: t('home.modules.items.1.desc'), tag: t('home.modules.legend.coreLabel'), kind: 'core', core: true, steps: [t('home.modules.items.1.steps.0'), t('home.modules.items.1.steps.1'), t('home.modules.items.1.steps.2'), t('home.modules.items.1.steps.3'), t('home.modules.items.1.steps.4')], bullets: [t('home.modules.items.1.bullets.0'), t('home.modules.items.1.bullets.1'), t('home.modules.items.1.bullets.2')] },
    { title: t('home.modules.items.2.title'), desc: t('home.modules.items.2.desc'), tag: t('home.modules.legend.coreLabel'), kind: 'core', bullets: [t('home.modules.items.2.bullets.0'), t('home.modules.items.2.bullets.1'), t('home.modules.items.2.bullets.2')] },
    { title: t('home.modules.items.3.title'), desc: t('home.modules.items.3.desc'), tag: t('home.modules.legend.coreLabel'), kind: 'core', bullets: [t('home.modules.items.3.bullets.0'), t('home.modules.items.3.bullets.1'), t('home.modules.items.3.bullets.2')] },
    { title: t('home.modules.items.4.title'), desc: t('home.modules.items.4.desc'), tag: t('home.modules.legend.coreLabel'), kind: 'core', bullets: [t('home.modules.items.4.bullets.0'), t('home.modules.items.4.bullets.1'), t('home.modules.items.4.bullets.2')] },
    { title: t('home.modules.items.5.title'), desc: t('home.modules.items.5.desc'), tag: t('home.modules.legend.outLabel'),  kind: 'out',  bullets: [t('home.modules.items.5.bullets.0'), t('home.modules.items.5.bullets.1'), t('home.modules.items.5.bullets.2')] },
    { title: t('home.modules.items.6.title'), desc: t('home.modules.items.6.desc'), tag: t('home.modules.legend.outLabel'),  kind: 'out',  bullets: [t('home.modules.items.6.bullets.0'), t('home.modules.items.6.bullets.1'), t('home.modules.items.6.bullets.2')] },
    { title: t('home.modules.items.7.title'), desc: t('home.modules.items.7.desc'), tag: t('home.modules.legend.outLabel'),  kind: 'out',  bullets: [t('home.modules.items.7.bullets.0'), t('home.modules.items.7.bullets.1'), t('home.modules.items.7.bullets.2')] },
    { title: t('home.modules.items.8.title'), desc: t('home.modules.items.8.desc'), tag: t('home.modules.legend.outLabel'),  kind: 'out',  bullets: [t('home.modules.items.8.bullets.0'), t('home.modules.items.8.bullets.1'), t('home.modules.items.8.bullets.2')] },
  ], [t]);

  const advantagesData = useMemo(() => [
    { n: '01', kicker: t('home.advantages.items.0.kicker'), accent: 'mint',   title: t('home.advantages.items.0.title'), desc: t('home.advantages.items.0.desc') },
    { n: '02', kicker: t('home.advantages.items.1.kicker'), accent: 'mint',   title: t('home.advantages.items.1.title'), desc: t('home.advantages.items.1.desc') },
    { n: '03', kicker: t('home.advantages.items.2.kicker'), accent: 'mint',   title: t('home.advantages.items.2.title'), desc: t('home.advantages.items.2.desc') },
    { n: '04', kicker: t('home.advantages.items.3.kicker'), accent: 'orange', title: t('home.advantages.items.3.title'), desc: t('home.advantages.items.3.desc') },
  ], [t]);

  const contactBenefits = useMemo(() => [
    t('home.contact.benefits.0'),
    t('home.contact.benefits.1'),
    t('home.contact.benefits.2'),
  ], [t]);

  /* ── form state ── */
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: false }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = true;
    if (!form.email.trim()) next.email = true;
    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  };

  /* ── modules interactive aside (hover/click index switches preview) ── */
  const [activeModule, setActiveModule] = useState(1); // core module is 1 (Эвикс-агент)
  const active = modulesData[activeModule];

  /* ── audience tabs ── */
  const audienceCards = useMemo(() => [
    { short: t('home.audience.cards.experts.short'),    title: t('home.audience.cards.experts.title'),    quote: t('home.audience.cards.experts.quote'),    desc: t('home.audience.cards.experts.desc'),    accent: 'mint'   },
    { short: t('home.audience.cards.production.short'), title: t('home.audience.cards.production.title'), desc: t('home.audience.cards.production.desc'), accent: 'mint'   },
    { short: t('home.audience.cards.smm.short'),        title: t('home.audience.cards.smm.title'),        desc: t('home.audience.cards.smm.desc'),         accent: 'orange' },
  ], [t]);
  const [audienceIdx, setAudienceIdx] = useState(0);
  const audActive = audienceCards[audienceIdx];

  /* ── reviews 3-column marquee ── */
  const reviewsColumn1 = useMemo(() => reviewsData.slice(0, 3), [reviewsData]);
  const reviewsColumn2 = useMemo(() => reviewsData.slice(3, 6), [reviewsData]);
  const reviewsColumn3 = useMemo(() => reviewsData.slice(6, 9), [reviewsData]);

  return (
    <>
      {/* ═══════════════════ 01 · COVER ═══════════════════ */}
      <EditorialHero
        eyebrow={t('home.hero.eyebrow')}
        highlight={t('home.heroTitle')}
        post={t('home.heroHighlight')}
        description={t('home.heroDesc')}
        buttonText={t('home.leaveRequest')}
        secondaryText={t('home.modules.allLink')}
        specimen={{
          label: t('home.hero.specimen.label'),
          caption: t('home.hero.specimen.caption'),
          badge: t('home.hero.specimen.badge'),
          steps: t('home.hero.specimen.steps', { returnObjects: true }),
          mockup: t('home.hero.mockup', { returnObjects: true }),
        }}
        onPrimaryClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        onSecondaryClick={() => document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' })}
      />

      {/* ═══════════════════ 02 · DATA STRIP ═══════════════════ */}
      <section id="stats" className="bg-canvas">
        <div className="max-w-container mx-auto px-6">

          <div className="data-strip">
            <div>
              <span className="data-strip__label">{t('home.stats.cycle')}</span>
              <div className="data-strip__value"><AnimatedCounter value={4} /><span className="unit">×</span></div>
              <p className="data-strip__sub">{t('home.stats.cycleSub')}</p>
            </div>
            <div>
              <span className="data-strip__label">{t('home.stats.satisfaction')}</span>
              <div className="data-strip__value"><AnimatedCounter value={93} /><span className="unit">%</span></div>
              <p className="data-strip__sub">{t('home.stats.satisfactionSub')}</p>
            </div>
            <div>
              <span className="data-strip__label">{t('home.stats.support')}</span>
              <div className="data-strip__value"><AnimatedCounter value={24} /><span className="unit">/7</span></div>
              <p className="data-strip__sub">{t('home.stats.supportSub')}</p>
            </div>
            <div>
              <span className="data-strip__label">{t('home.stats.modules')}</span>
              <div className="data-strip__value"><AnimatedCounter value={9} /><span className="unit">+</span></div>
              <p className="data-strip__sub">{t('home.stats.modulesSub')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ 03 · AUDIENCE — TABS + STAGE ═══════════════════ */}
      <section id="audience" className="paper-grain bg-canvas py-24">
        <div className="max-w-container mx-auto px-6">

          {/* Section header — centered */}
          <div className="reveal flex flex-col items-center text-center max-w-[760px] mx-auto mb-12">
            <h2
              className="text-[clamp(36px,5vw,68px)] font-extrabold tracking-[-0.035em] leading-[1.02]"
              dangerouslySetInnerHTML={{ __html: t('home.audience.title') }}
            />
            <p className="text-[15px] text-ink-soft leading-relaxed mt-5 max-w-[560px]">{t('home.audience.lead')}</p>
          </div>

          {/* Tabs */}
          <div className="audience-tabs reveal">
            {audienceCards.map((c, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setAudienceIdx(i)}
                onMouseEnter={() => setAudienceIdx(i)}
                onFocus={() => setAudienceIdx(i)}
                className={`audience-tabs__tab ${audienceIdx === i ? 'is-active' : ''} ${c.accent === 'orange' ? 'is-orange' : ''}`}
              >
                <span className="audience-tabs__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="audience-tabs__label">{c.short}</span>
                <svg className="audience-tabs__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
                </svg>
              </button>
            ))}
          </div>

          {/* Stage */}
          <div
            key={audienceIdx}
            className={`audience-stage reveal module-appear ${audActive.accent === 'orange' ? 'is-orange' : ''}`}
          >
            <div className="audience-stage__numwrap">
              <span className="audience-stage__num">{String(audienceIdx + 1).padStart(2, '0')}</span>
            </div>
            <div className="flex flex-col gap-5 min-w-0">
              <h3
                className="audience-stage__title"
                dangerouslySetInnerHTML={{ __html: audActive.title }}
              />
              {audActive.quote && (
                <blockquote className="pull-quote max-w-[520px]">
                  {audActive.quote}
                </blockquote>
              )}
              <div
                className="text-[15.5px] text-ink-soft leading-relaxed max-w-[540px]"
                dangerouslySetInnerHTML={{ __html: audActive.desc }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ 04 · MODULES — THE INDEX ═══════════════════ */}
      <section id="modules" className="bg-canvas-soft py-24 border-t border-line">
        <div className="max-w-container mx-auto px-6">

          {/* Section header */}
          <div className="reveal flex flex-col items-center text-center max-w-[760px] mx-auto mb-12">
            <h2
              className="text-[clamp(36px,4.8vw,64px)] font-extrabold tracking-[-0.03em] leading-[1.04]"
              dangerouslySetInnerHTML={{ __html: t('home.modules.title') }}
            />
            <p className="text-[15px] text-ink-soft leading-relaxed mt-5 max-w-[560px]">
              {t('home.modules.lead')}
            </p>
          </div>

          {/* Index + preview layout */}
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
            {/* Index (left) */}
            <div className="reveal">
              <div className="border-t border-ink/30">
                {modulesData.map((m, i) => {
                  const idx = String(i + 1).padStart(2, '0');
                  const isActive = activeModule === i;
                  return (
                    <button
                      type="button"
                      key={m.title}
                      aria-pressed={isActive}
                      aria-controls="module-preview"
                      onMouseEnter={() => setActiveModule(i)}
                      onFocus={() => setActiveModule(i)}
                      onClick={() => setActiveModule(i)}
                      className={`index-row w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500/40 ${isActive ? 'is-active' : ''} ${m.core ? 'is-core' : ''}`}
                    >
                      <span className="index-row__num">{idx}</span>
                      <span className="index-row__title">{m.title}</span>
                      <span className="index-row__leader" />
                      <span className="index-row__tag">{m.tag}</span>
                      <svg className="index-row__arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
                      </svg>
                    </button>
                  );
                })}
              </div>

              <Link to="/functions" className="c-ulink mt-6 inline-flex">
                {t('home.modules.allLink')}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>

            {/* Preview (right, sticky) — editorial module sheet */}
            <aside className="reveal lg:sticky lg:top-28">
              <div
                key={activeModule}
                id="module-preview"
                role="region"
                aria-live="polite"
                aria-label={active.title}
                className="module-appear relative bg-white border border-line rounded-r2xl p-8 md:p-10 shadow-soft"
              >
                {/* meta: oversized index + stage label (plain text) */}
                <div className="flex items-center gap-4">
                  <span className="text-[40px] md:text-[52px] font-extrabold text-mint-500 leading-none tabular-nums">
                    {String(activeModule + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px flex-1 bg-line" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-mute">{active.tag}</span>
                </div>

                <h3 className="mt-6 text-[clamp(27px,3.1vw,40px)] font-extrabold tracking-[-0.025em] leading-[1.05] text-ink">
                  {active.title}
                </h3>
                <p className="mt-4 text-[15.5px] text-ink-soft leading-relaxed max-w-[470px]">
                  {active.desc}
                </p>

                {/* core: numbered pipeline */}
                {active.core && active.steps && (
                  <div className="mt-8 flex items-start">
                    {active.steps.map((s, si) => (
                      <Fragment key={s}>
                        <div className="flex flex-col items-center gap-2 w-[58px] shrink-0">
                          <span className="grid place-items-center w-9 h-9 rounded-full bg-mint-500 text-white text-[13px] font-bold">{si + 1}</span>
                          <span className="text-[10.5px] font-semibold text-ink-soft text-center leading-tight">{s}</span>
                        </div>
                        {si < active.steps.length - 1 && <span className="flex-1 h-px bg-mint-200 mt-[18px]" aria-hidden="true" />}
                      </Fragment>
                    ))}
                  </div>
                )}

                {/* details: numbered strip (no checklist) */}
                <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-x-7 gap-y-5 pt-7 border-t border-line">
                  {active.bullets.map((b, i) => (
                    <div key={b}>
                      <div className="text-[19px] font-extrabold text-mint-500 leading-none tabular-nums">{String(i + 1).padStart(2, '0')}</div>
                      <div className="mt-2.5 text-[13.5px] text-ink leading-snug">{b}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex justify-end marginalia">
                <span>{String(activeModule + 1).padStart(2, '0')} / {modulesData.length}</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ═══════════════════ 05 · HOW IT WORKS — WALKTHROUGH ═══════════════════ */}
      <section id="how" className="bg-canvas py-24 border-t border-line">
        <div className="max-w-container mx-auto px-6">

          <div className="reveal flex flex-col items-center text-center max-w-[760px] mx-auto mb-14">
            <h2 className="text-[clamp(36px,4.8vw,64px)] font-extrabold tracking-[-0.03em] leading-[1.04]">
              {t('home.how.title')}
            </h2>
            <p className="text-[15px] text-ink-soft leading-relaxed mt-5 max-w-[560px]">
              {t('home.how.lead')}
            </p>
          </div>

          {/* Conveyor — 4 horizontal stages connected with arrows */}
          <div className="conveyor reveal">
            {howSteps.map((s, i) => {
              const isLast = i === howSteps.length - 1;
              return (
                <article key={s.n} className={`conveyor-card ${isLast ? 'is-last' : ''}`}>
                  <span className="conveyor-card__num">{String(s.n).padStart(2, '0')}</span>
                  <h3 className="conveyor-card__title">{s.title}</h3>
                  <p className="conveyor-card__desc">{s.desc}</p>
                  <footer className="conveyor-card__foot">
                    <span className="conveyor-card__dot" aria-hidden="true" />
                    <span className="conveyor-card__line" aria-hidden="true" />
                  </footer>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════ 06 · ADVANTAGES — MANIFESTO ═══════════════════ */}
      <section id="advantages" className="bg-canvas-soft py-24 border-t border-line">
        <div className="max-w-container mx-auto px-6">

          <div className="reveal flex flex-col items-center text-center max-w-[760px] mx-auto mb-10">
            <h2 className="text-[clamp(38px,5vw,68px)] font-extrabold tracking-[-0.035em] leading-[1.02]">
              {t('home.advantages.title')}
            </h2>
            <p className="text-[15px] text-ink-soft leading-relaxed mt-5 max-w-[560px]">
              {t('home.advantages.lead')}
            </p>
          </div>

          {advantagesData.map((a) => {
            const isOrange = a.accent === 'orange';
            return (
              <div key={a.n} className={`manifesto-row reveal ${isOrange ? 'is-orange' : ''}`}>
                <div className="flex flex-col gap-6">
                  <span className="manifesto-num">{a.n}</span>
                </div>
                <div className="flex flex-col gap-6 self-center">
                  <h3 className="manifesto-stmt">— {a.title}</h3>
                  <p className="text-[16px] text-ink-soft leading-relaxed max-w-[540px]">{a.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════ 07 · CLIENTS — DUAL INFINITE SLIDERS ═══════════════════ */}
      <section id="clients" className="paper-grain bg-canvas py-24 border-t border-line overflow-hidden">
        <div className="max-w-container mx-auto px-6 mb-12">

          <div className="reveal flex flex-col items-center text-center max-w-[760px] mx-auto mb-2">
            <h2 className="text-[clamp(36px,4.8vw,64px)] font-extrabold tracking-[-0.03em] leading-[1.04]">
              {t('home.clients.title')}
            </h2>
            <p className="text-[15px] text-ink-soft leading-relaxed mt-5 max-w-[560px]">
              {t('home.clients.lead')}
            </p>
          </div>
        </div>

        {/* Dual marquee rows */}
        <div
          role="group"
          aria-label={t('home.clients.marqueeAria')}
          className="reveal relative flex flex-col gap-4"
        >
          {/* Decorative branding loop — hidden from AT (names repeat 4×) */}
          <div aria-hidden="true" className="flex flex-col gap-4">
            <InfiniteSlider gap={16} duration={42} durationOnHover={90}>
              {clientsData.map((c) => (
                <div key={c.name} className="brand-chip">{c.logo}</div>
              ))}
            </InfiniteSlider>

            <InfiniteSlider gap={16} duration={48} durationOnHover={100} reverse>
              {clientsData.map((c) => (
                <div key={c.name} className="brand-chip brand-chip--alt">{c.logo}</div>
              ))}
            </InfiniteSlider>
          </div>

          {/* Side fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 clients-fade clients-fade-left" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 clients-fade clients-fade-right" />
        </div>

        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex justify-center mt-12">
            <Link to="/clients" className="c-ulink">
              {t('home.clients.casesLink')}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════ 08 · REVIEWS — 3-COL MARQUEE ═══════════════════ */}
      <section id="reviews" className="bg-canvas-soft py-24 border-t border-line">
        <div className="max-w-container mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center max-w-[640px] mx-auto mb-14"
          >
            <h2 className="text-[clamp(36px,4.8vw,64px)] font-extrabold tracking-[-0.03em] leading-[1.04]">
              {t('home.reviews.title')}
            </h2>
            <p className="text-[15px] text-ink-soft leading-relaxed mt-5">
              {t('home.reviews.lead')}
            </p>
          </motion.div>

          <div
            className="flex justify-center gap-6 max-h-[740px] overflow-hidden"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)',
              maskImage: 'linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)',
            }}
          >
            <TestimonialsColumn testimonials={reviewsColumn1} duration={18} />
            <TestimonialsColumn testimonials={reviewsColumn2} className="hidden md:block" duration={22} />
            <TestimonialsColumn testimonials={reviewsColumn3} className="hidden lg:block" duration={20} />
          </div>
        </div>
      </section>

      {/* ═══════════════════ 09 · CONTACT — SUBMIT INQUIRY ═══════════════════ */}
      <section id="contact" className="paper-grain bg-canvas pt-20 pb-28 border-t border-line">
        <div className="max-w-container mx-auto px-6">

          {/* Centered title */}
          <div className="reveal flex flex-col items-center text-center max-w-[760px] mx-auto mb-14">
            <h2 className="text-[clamp(36px,5vw,68px)] font-extrabold tracking-[-0.035em] leading-[1.02]">
              {t('home.contact.title')}
            </h2>
            <p className="text-[16px] text-ink-soft leading-relaxed mt-5 max-w-[560px]">
              {t('home.contact.lead')}
            </p>
          </div>

          {/* Conversation form */}
          <div className="reveal max-w-[960px] mx-auto">
            {!submitted ? (
              <form className="conv-form" onSubmit={onSubmit} noValidate>
                <p className="conv-form__line">
                  {t('home.contact.form.intro')}{' '}
                  <input
                    name="name"
                    type="text"
                    placeholder={t('home.contact.form.placeholders.name')}
                    aria-label={t('home.contact.form.name')}
                    aria-invalid={errors.name || undefined}
                    value={form.name}
                    onChange={onChange}
                    className={`conv-form__input ${errors.name ? 'is-error' : ''}`}
                    required
                  />
                  {' '}{t('home.contact.form.from')}{' '}
                  <input
                    name="company"
                    type="text"
                    placeholder={t('home.contact.form.placeholders.company')}
                    aria-label={t('home.contact.form.company')}
                    value={form.company}
                    onChange={onChange}
                    className="conv-form__input"
                  />
                  .
                </p>

                <p className="conv-form__line">
                  {t('home.contact.form.contactBy')}{' '}
                  <input
                    name="email"
                    type="email"
                    placeholder={t('home.contact.form.placeholders.email')}
                    aria-label={t('home.contact.form.email')}
                    aria-invalid={errors.email || undefined}
                    value={form.email}
                    onChange={onChange}
                    className={`conv-form__input ${errors.email ? 'is-error' : ''}`}
                    required
                  />
                  {' '}{t('home.contact.form.or')}{' '}
                  <input
                    name="phone"
                    type="tel"
                    placeholder={t('home.contact.form.placeholders.phone')}
                    aria-label={t('home.contact.form.phone')}
                    value={form.phone}
                    onChange={onChange}
                    className="conv-form__input"
                  />
                  .
                </p>

                <p className="conv-form__line">
                  {t('home.contact.form.discuss')}
                  <textarea
                    name="message"
                    rows={2}
                    placeholder={t('home.contact.form.placeholders.message')}
                    aria-label={t('home.contact.form.message')}
                    value={form.message}
                    onChange={onChange}
                    className="conv-form__input conv-form__input--block"
                  />
                </p>

                <div className="conv-form__cta">
                  <MagneticButton type="submit" size="xl" className="btn-shine">
                    {t('home.contact.form.submit')}
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
                    </svg>
                  </MagneticButton>
                  <p className="conv-form__privacy">{t('home.contact.form.privacy')}</p>
                </div>
              </form>
            ) : (
              <div className="text-center py-12" role="status" aria-live="polite">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-mint-50 text-mint-700 mx-auto mb-6">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-[clamp(24px,3vw,32px)] font-extrabold tracking-tight leading-[1.1]">
                  {t('home.contact.form.success')}
                </h3>
                <p className="mt-3 text-[15px] text-ink-soft">{t('home.contact.form.successSub')}</p>
              </div>
            )}
          </div>

          {/* 3 benefits inline below — no pills, just text with dot separators */}
          <div className="reveal max-w-[960px] mx-auto mt-12 pt-8 border-t border-line">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13.5px] text-ink-soft text-center">
              {contactBenefits.map((b, i) => (
                <span key={b} className="inline-flex items-center gap-3">
                  {i > 0 && <span className="text-mint-500">·</span>}
                  <span>{b}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
