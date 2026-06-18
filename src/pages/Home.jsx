import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HeroSection } from '../components/ui/HeroSection';
import { TestimonialsColumn } from '../components/ui/TestimonialsColumn';
import { Button } from '../components/ui/Button';
import { useTheme } from '../hooks/useTheme';

const getHowSteps = (t) => [
  {
    n: 1,
    title: t('home.how.steps.0.title'),
    desc: t('home.how.steps.0.desc'),
  },
  {
    n: 2,
    title: t('home.how.steps.1.title'),
    desc: t('home.how.steps.1.desc'),
  },
  {
    n: 3,
    title: t('home.how.steps.2.title'),
    desc: t('home.how.steps.2.desc'),
  },
  {
    n: 4,
    title: t('home.how.steps.3.title'),
    desc: t('home.how.steps.3.desc'),
  },
];

const getReviewsData = (t) => [
  {
    text: t('home.reviews.items.0.text'),
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: t('home.reviews.items.0.name'),
    role: t('home.reviews.items.0.role'),
  },
  {
    text: t('home.reviews.items.1.text'),
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: t('home.reviews.items.1.name'),
    role: t('home.reviews.items.1.role'),
  },
  {
    text: t('home.reviews.items.2.text'),
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    name: t('home.reviews.items.2.name'),
    role: t('home.reviews.items.2.role'),
  },
  {
    text: t('home.reviews.items.3.text'),
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    name: t('home.reviews.items.3.name'),
    role: t('home.reviews.items.3.role'),
  },
  {
    text: t('home.reviews.items.4.text'),
    image: 'https://randomuser.me/api/portraits/women/22.jpg',
    name: t('home.reviews.items.4.name'),
    role: t('home.reviews.items.4.role'),
  },
  {
    text: t('home.reviews.items.5.text'),
    image: 'https://randomuser.me/api/portraits/men/76.jpg',
    name: t('home.reviews.items.5.name'),
    role: t('home.reviews.items.5.role'),
  },
  {
    text: t('home.reviews.items.6.text'),
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
    name: t('home.reviews.items.6.name'),
    role: t('home.reviews.items.6.role'),
  },
  {
    text: t('home.reviews.items.7.text'),
    image: 'https://randomuser.me/api/portraits/men/14.jpg',
    name: t('home.reviews.items.7.name'),
    role: t('home.reviews.items.7.role'),
  },
  {
    text: t('home.reviews.items.8.text'),
    image: 'https://randomuser.me/api/portraits/women/55.jpg',
    name: t('home.reviews.items.8.name'),
    role: t('home.reviews.items.8.role'),
  },
];

const clientsData = [
  {
    name: 'Nomos',
    icon: (
      <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    name: 'Layers',
    icon: (
      <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    name: 'PlayLab',
    icon: (
      <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Studio M',
    icon: (
      <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M9 9h6v6H9z" />
      </svg>
    ),
  },
  {
    name: 'Reel.it',
    icon: (
      <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12c0-5 4-9 9-9s9 4 9 9-4 9-9 9c-3 0-5-1-7-3" />
        <path d="M3 21v-6h6" />
      </svg>
    ),
  },
  {
    name: 'Vortex',
    icon: (
      <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12c0 5-4 9-9 9-3 0-5-1-7-3" />
        <path d="M3 12C3 7 7 3 12 3c3 0 5 1 7 3" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    name: 'Pulse',
    icon: (
      <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    name: 'Stellar',
    icon: (
      <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" />
      </svg>
    ),
  },
];

export default function Home() {
  const { t } = useTranslation();
  const [theme] = useTheme();

  useEffect(() => {
    document.title = t('home.docTitle');
  }, [t]);

  const heroMeshColors = theme === 'dark'
    ? ['#0a1f1a', '#0f3f30', '#18674e', '#1a8261', '#07251f', '#0a1410']
    : ['#74dfbb', '#a8ecd5', '#d4f5ea', '#ecfbf6', '#46cfa1', '#dbf4a4'];

  const howSteps = useMemo(() => getHowSteps(t), [t]);
  const reviewsData = useMemo(() => getReviewsData(t), [t]);
  const reviewsColumn1 = useMemo(() => reviewsData.slice(0, 3), [reviewsData]);
  const reviewsColumn2 = useMemo(() => reviewsData.slice(3, 6), [reviewsData]);
  const reviewsColumn3 = useMemo(() => reviewsData.slice(6, 9), [reviewsData]);

  const modulesData = useMemo(() => [
    {
      title: t('home.modules.items.0.title'),
      desc: t('home.modules.items.0.desc'),
      bullets: [
        t('home.modules.items.0.bullets.0'),
        t('home.modules.items.0.bullets.1'),
        t('home.modules.items.0.bullets.2'),
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h6v16H4zM14 4h6v10h-6zM14 16h6v4h-6z" />
        </svg>
      ),
    },
    {
      title: t('home.modules.items.1.title'),
      core: true,
      desc: t('home.modules.items.1.desc'),
      steps: [
        t('home.modules.items.1.steps.0'),
        t('home.modules.items.1.steps.1'),
        t('home.modules.items.1.steps.2'),
        t('home.modules.items.1.steps.3'),
        t('home.modules.items.1.steps.4'),
      ],
      bullets: [
        t('home.modules.items.1.bullets.0'),
        t('home.modules.items.1.bullets.1'),
        t('home.modules.items.1.bullets.2'),
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h11l5 5v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
          <path d="M14 4v6h6" /><path d="M7 14h8M7 18h6" />
        </svg>
      ),
    },
    {
      title: t('home.modules.items.2.title'),
      desc: t('home.modules.items.2.desc'),
      bullets: [
        t('home.modules.items.2.bullets.0'),
        t('home.modules.items.2.bullets.1'),
        t('home.modules.items.2.bullets.2'),
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
        </svg>
      ),
    },
    {
      title: t('home.modules.items.3.title'),
      desc: t('home.modules.items.3.desc'),
      bullets: [
        t('home.modules.items.3.bullets.0'),
        t('home.modules.items.3.bullets.1'),
        t('home.modules.items.3.bullets.2'),
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
        </svg>
      ),
    },
    {
      title: t('home.modules.items.4.title'),
      desc: t('home.modules.items.4.desc'),
      bullets: [
        t('home.modules.items.4.bullets.0'),
        t('home.modules.items.4.bullets.1'),
        t('home.modules.items.4.bullets.2'),
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="14" height="12" rx="2" /><path d="M16 10l5-3v10l-5-3z" />
        </svg>
      ),
    },
    {
      title: t('home.modules.items.5.title'),
      desc: t('home.modules.items.5.desc'),
      bullets: [
        t('home.modules.items.5.bullets.0'),
        t('home.modules.items.5.bullets.1'),
        t('home.modules.items.5.bullets.2'),
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" />
        </svg>
      ),
    },
    {
      title: t('home.modules.items.6.title'),
      desc: t('home.modules.items.6.desc'),
      bullets: [
        t('home.modules.items.6.bullets.0'),
        t('home.modules.items.6.bullets.1'),
        t('home.modules.items.6.bullets.2'),
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="9" rx="1.5" />
          <rect x="14" y="3" width="7" height="5" rx="1.5" />
          <rect x="14" y="12" width="7" height="9" rx="1.5" />
          <rect x="3" y="16" width="7" height="5" rx="1.5" />
        </svg>
      ),
    },
    {
      title: t('home.modules.items.7.title'),
      desc: t('home.modules.items.7.desc'),
      bullets: [
        t('home.modules.items.7.bullets.0'),
        t('home.modules.items.7.bullets.1'),
        t('home.modules.items.7.bullets.2'),
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
        </svg>
      ),
    },
    {
      title: t('home.modules.items.8.title'),
      desc: t('home.modules.items.8.desc'),
      bullets: [
        t('home.modules.items.8.bullets.0'),
        t('home.modules.items.8.bullets.1'),
        t('home.modules.items.8.bullets.2'),
      ],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10" /><path d="M22 2L12 12" />
        </svg>
      ),
    },
  ], [t]);

  const advantagesData = useMemo(() => [
    { n: '01', kicker: t('home.advantages.items.0.kicker'), accent: 'mint', title: t('home.advantages.items.0.title'), desc: t('home.advantages.items.0.desc'), figure: 'tov' },
    { n: '02', kicker: t('home.advantages.items.1.kicker'), accent: 'mint', title: t('home.advantages.items.1.title'), desc: t('home.advantages.items.1.desc'), figure: 'pipeline' },
    { n: '03', kicker: t('home.advantages.items.2.kicker'), accent: 'mint', title: t('home.advantages.items.2.title'), desc: t('home.advantages.items.2.desc'), figure: 'roles' },
    { n: '04', kicker: t('home.advantages.items.3.kicker'), accent: 'orange', title: t('home.advantages.items.3.title'), desc: t('home.advantages.items.3.desc'), figure: 'analysis' },
  ], [t]);

  const tovTags = useMemo(() => [
    t('home.advantages.figures.tov.tags.0'),
    t('home.advantages.figures.tov.tags.1'),
    t('home.advantages.figures.tov.tags.2'),
  ], [t]);

  const pipelineSteps = useMemo(() => [
    t('home.advantages.figures.pipeline.steps.0'),
    t('home.advantages.figures.pipeline.steps.1'),
    t('home.advantages.figures.pipeline.steps.2'),
    t('home.advantages.figures.pipeline.steps.3'),
    t('home.advantages.figures.pipeline.steps.4'),
  ], [t]);

  const rolesItems = useMemo(() => [
    { r: t('home.advantages.figures.roles.items.owner.role'), tag: t('home.advantages.figures.roles.items.owner.tag') },
    { r: t('home.advantages.figures.roles.items.manager.role'), tag: t('home.advantages.figures.roles.items.manager.tag') },
    { r: t('home.advantages.figures.roles.items.contractor.role'), tag: t('home.advantages.figures.roles.items.contractor.tag') },
  ], [t]);

  const analysisItems = useMemo(() => [
    t('home.advantages.figures.analysis.items.0'),
    t('home.advantages.figures.analysis.items.1'),
    t('home.advantages.figures.analysis.items.2'),
  ], [t]);

  const contactBenefits = useMemo(() => [
    t('home.contact.benefits.0'),
    t('home.contact.benefits.1'),
    t('home.contact.benefits.2'),
  ], [t]);

  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const howRef = useRef(null);
  const [howActive, setHowActive] = useState(0);

  useEffect(() => {
    let rafId = 0;
    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        const el = howRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.height < 200) return;
        const scrollable = rect.height - window.innerHeight;
        if (scrollable <= 0) return;
        const scrolled = Math.max(0, Math.min(scrollable, -rect.top));
        const progress = scrolled / scrollable;
        const idx = Math.min(howSteps.length - 1, Math.floor(progress * howSteps.length));
        setHowActive(idx);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [howSteps.length]);

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

  return (
    <>
      {/* HERO */}
      <div id="hero">
        <HeroSection
          title={t('home.heroTitle')}
          highlightText={t('home.heroHighlight')}
          description={t('home.heroDesc')}
          buttonText={t('home.leaveRequest')}
          onButtonClick={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          colors={heroMeshColors}
          distortion={1.0}
          swirl={0.55}
          speed={0.5}
          veilOpacity={theme === 'dark' ? 'bg-black/40' : 'bg-white/15'}
        />
      </div>

      {/* AUDIENCE */}
      <section className="py-24 bg-gradient-to-b from-mint-50 to-canvas" id="audience">
        <div className="max-w-container mx-auto px-6">
          {/* Editorial split header */}
          <div className="reveal grid md:grid-cols-[1.5fr_1fr] gap-8 md:gap-16 mb-14 items-end">
            <div className="flex flex-col gap-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase w-fit">
                {t('home.audience.kicker')}
              </span>
              <h2
                className="text-[clamp(28px,4.2vw,48px)] font-extrabold tracking-tight leading-[1.02]"
                dangerouslySetInnerHTML={{ __html: t('home.audience.title') }}
              />
            </div>
            <p className="text-[15.5px] text-ink-soft leading-relaxed md:pb-2 max-w-[440px]">
              {t('home.audience.lead')}
            </p>
          </div>

          {/* Bento grid: hero + 2 stacked */}
          <div className="grid gap-4 md:grid-cols-12 md:grid-rows-2 md:auto-rows-fr md:min-h-[580px]">
            {/* HERO — Эксперты и блогеры */}
            <article className="reveal relative md:col-span-7 md:row-span-2 rounded-r2xl overflow-hidden flex flex-col p-10 md:p-12 min-h-[400px] text-white bg-gradient-to-br from-[#0a1f1a] via-mint-900 to-[#0a1f1a]">
              <div
                className="absolute -top-8 -right-4 leading-none font-extrabold text-white/[0.06] tracking-[-0.04em] pointer-events-none select-none"
                style={{ fontSize: 'clamp(200px, 26vw, 360px)' }}
              >
                01
              </div>
              <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(116,223,187,0.2),transparent_70%)] pointer-events-none"></div>

              <div className="relative flex flex-col gap-7 h-full justify-center">
                <h3
                  className="text-[clamp(40px,5.2vw,72px)] font-extrabold tracking-[-0.02em] leading-[0.95] max-w-[560px]"
                  dangerouslySetInnerHTML={{ __html: t('home.audience.cards.experts.title') }}
                />

                <div className="w-16 h-[3px] bg-mint-300 rounded-full"></div>

                <div className="max-w-[500px] flex flex-col gap-4">
                  <p className="text-mint-200 text-[18px] font-semibold leading-snug italic">
                    {t('home.audience.cards.experts.quote')}
                  </p>
                  <p
                    className="text-white/75 text-[15px] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: t('home.audience.cards.experts.desc') }}
                  />
                </div>
              </div>
            </article>

            {/* CARD 2 — Production */}
            <article className="reveal relative md:col-span-5 md:row-span-1 rounded-r2xl overflow-hidden flex flex-col p-8 bg-white border border-line group hover:border-mint-300 hover:shadow-soft transition">
              <div className="absolute -bottom-20 -right-20 w-[260px] h-[260px] rounded-full bg-mint-50 transition-transform duration-500 group-hover:scale-110"></div>

              <div className="relative flex items-start gap-5 mb-4">
                <span className="text-[64px] font-extrabold leading-none text-mint-500 tracking-tight">
                  02
                </span>
                <h3 className="text-[22px] font-bold tracking-tight pt-3">{t('home.audience.cards.production.title')}</h3>
              </div>

              <p
                className="relative text-[13.5px] text-ink-soft leading-relaxed flex-1"
                dangerouslySetInnerHTML={{ __html: t('home.audience.cards.production.desc') }}
              />
            </article>

            {/* CARD 3 — SMM-агентства */}
            <article className="reveal relative md:col-span-5 md:row-span-1 rounded-r2xl overflow-hidden flex flex-col p-8 bg-gradient-to-br from-orange-50 via-orange-50/30 to-mint-50 border border-mint-100 group hover:border-orange-300 hover:shadow-soft transition">
              <div className="absolute -top-12 -right-12 w-[200px] h-[200px] rounded-full bg-orange-100/50 transition-transform duration-500 group-hover:scale-110"></div>

              <div className="relative flex items-start gap-5 mb-4">
                <span className="text-[64px] font-extrabold leading-none text-orange-500 tracking-tight">
                  03
                </span>
                <h3 className="text-[22px] font-bold tracking-tight pt-3">{t('home.audience.cards.smm.title')}</h3>
              </div>

              <p
                className="relative text-[13.5px] text-ink-soft leading-relaxed flex-1"
                dangerouslySetInnerHTML={{ __html: t('home.audience.cards.smm.desc') }}
              />
            </article>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="py-24" id="modules">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">{t('home.modules.kicker')}</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">{t('home.modules.title')}</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">{t('home.modules.lead')}</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-x-12 gap-y-10 items-start">
            {/* Sticky left intro column */}
            <aside className="reveal lg:col-span-4 lg:sticky lg:top-28">
              <span className="text-xs font-bold tracking-[0.14em] uppercase text-mint-700">{t('home.modules.spec.kicker')}</span>
              <h3
                className="mt-4 text-[clamp(22px,2.4vw,30px)] font-extrabold tracking-tight leading-[1.15]"
                dangerouslySetInnerHTML={{ __html: t('home.modules.spec.title') }}
              />
              <p className="mt-4 text-[15px] text-ink-soft leading-relaxed max-w-[360px]">
                {t('home.modules.spec.desc')}
              </p>

              {/* Belt endpoints legend: Вход → Ядро → Выход */}
              <div className="mt-8 flex flex-col gap-3 max-w-[360px]">
                <div className="flex items-center gap-3 text-[13px]">
                  <span className="inline-flex h-6 px-2 items-center justify-center rounded-full bg-canvas text-ink-mute font-semibold tracking-[0.12em] uppercase text-[10px] min-w-[52px]">{t('home.modules.legend.inLabel')}</span>
                  <span className="text-ink-soft">{t('home.modules.legend.inText')}</span>
                </div>
                <div className="flex items-center gap-3 text-[13px]">
                  <span className="inline-flex h-6 px-2 items-center justify-center rounded-full bg-mint-100 text-mint-800 font-semibold tracking-[0.12em] uppercase text-[10px] min-w-[52px]">{t('home.modules.legend.coreLabel')}</span>
                  <span className="text-ink-soft">{t('home.modules.legend.coreText')}</span>
                </div>
                <div className="flex items-center gap-3 text-[13px]">
                  <span className="inline-flex h-6 px-2 items-center justify-center rounded-full bg-orange-50 text-orange-600 font-semibold tracking-[0.12em] uppercase text-[10px] min-w-[52px]">{t('home.modules.legend.outLabel')}</span>
                  <span className="text-ink-soft">{t('home.modules.legend.outText')}</span>
                </div>
              </div>

              <Link to="/functions" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-mint-700 hover:text-mint-800 transition group/cta">
                {t('home.modules.allLink')}
                <svg className="w-4 h-4 transition-transform group-hover/cta:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
                </svg>
              </Link>
            </aside>

            {/* Right column: hairline-divided spec rows = the conveyor belt */}
            <div className="lg:col-span-8">
              <div className="border-t border-line">
                {modulesData.map((m, i) => {
                  const idx = String(i + 1).padStart(2, '0');
                  const isLast = i === 8;
                  return (
                    <article
                      key={m.title}
                      className={`reveal group relative grid grid-cols-[3rem_1fr] sm:grid-cols-[5rem_1fr] gap-x-4 sm:gap-x-6 border-b border-line py-6 sm:py-7 transition-colors ${m.core ? 'bg-mint-50/60' : 'hover:bg-mint-50/40'}`}
                    >
                      {/* Left rail: running index = the conveyor belt */}
                      <div className="flex sm:flex-col items-center sm:items-start gap-2 sm:gap-1">
                        <span className={`font-extrabold tabular-nums leading-none tracking-tight text-[34px] sm:text-[44px] transition-colors duration-300 ${m.core ? 'text-mint-500' : 'text-mint-200 group-hover:text-mint-600'}`}>
                          {idx}
                        </span>
                        <span className={`hidden sm:block text-sm font-bold leading-none mt-0.5 transition-colors ${m.core ? 'text-mint-500' : 'text-mint-200 group-hover:text-mint-400'}`} aria-hidden="true">
                          {isLast ? '·' : '↓'}
                        </span>
                      </div>

                      {/* Body */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className={`shrink-0 w-10 h-10 rounded-rmd grid place-items-center [&_svg]:w-[20px] [&_svg]:h-[20px] transition-colors ${m.core ? 'bg-mint-500 text-white' : 'bg-mint-50 text-mint-700 group-hover:bg-mint-100'}`}>
                            {m.icon}
                          </span>
                          <h3 className="text-[18px] sm:text-[19px] font-extrabold tracking-tight leading-tight">{m.title}</h3>
                          {m.core && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-mint-100 text-mint-800 text-[10px] font-bold tracking-[0.14em] uppercase">
                              {t('home.modules.coreBadge')}
                            </span>
                          )}
                          {/* Advancing arrow appears on hover */}
                          <svg className="hidden sm:block ml-auto w-5 h-5 text-mint-400 opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
                          </svg>
                        </div>

                        <p className="mt-2 text-[14.5px] text-ink-soft leading-relaxed max-w-[560px]">{m.desc}</p>

                        {/* Flagship-only: connected 5-step wizard chip strip */}
                        {m.core && m.steps && (
                          <div className="mt-3.5 flex flex-wrap items-center gap-1.5" aria-hidden="true">
                            {m.steps.map((s, si) => (
                              <span key={s} className="inline-flex items-center gap-1.5">
                                <span className="px-2.5 py-1 rounded-md bg-white text-mint-800 text-[11px] font-semibold border border-mint-200 whitespace-nowrap">{s}</span>
                                {si < m.steps.length - 1 && <span className="text-mint-400 shrink-0">›</span>}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Bullets — always visible */}
                        <ul className="mt-3 list-none p-0 flex flex-wrap gap-x-5 gap-y-1.5 list-check text-[13px]">
                          {m.bullets.map((b) => <li key={b}>{b}</li>)}
                        </ul>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="bg-gradient-to-b from-mint-50 to-canvas">
        {/* Desktop: scroll-pinned accordion */}
        <div
          ref={howRef}
          className="hidden lg:block relative"
          style={{ height: `${howSteps.length * 100}vh` }}
        >
          <div className="sticky top-[72px] h-[calc(100vh-72px)] flex flex-col py-10 overflow-hidden">
            <div className="max-w-container mx-auto px-6 w-full flex flex-col h-full">
              <div className="flex flex-col items-center text-center gap-3.5 mb-8">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">
                  {t('home.how.kicker')}
                </span>
                <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">
                  {t('home.how.title')}
                </h2>
                <p className="text-[15px] text-ink-soft max-w-[620px]">
                  {t('home.how.lead')}
                </p>
              </div>

              <div className="flex gap-3 flex-1 min-h-[320px] max-h-[460px]">
                {howSteps.map((s, i) => {
                  const isActive = i === howActive;
                  return (
                    <button
                      key={s.n}
                      type="button"
                      onClick={() => {
                        const el = howRef.current;
                        if (!el) return;
                        const sectionTop = el.offsetTop;
                        const scrollable = el.offsetHeight - window.innerHeight;
                        if (scrollable <= 0) return;
                        const target = sectionTop + (scrollable * (i + 0.5)) / howSteps.length;
                        window.scrollTo({ top: target, behavior: 'smooth' });
                      }}
                      style={{ flexGrow: isActive ? 1 : 0, flexBasis: '108px' }}
                      className={`group relative shrink-0 text-left rounded-rxl border overflow-hidden transition-[flex-grow,background-color,border-color,box-shadow] duration-[700ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isActive
                          ? 'bg-gradient-to-br from-mint-700 to-mint-800 border-mint-700 text-white shadow-soft-lg'
                          : i < howActive
                            ? 'bg-mint-50 border-mint-200 hover:border-mint-400'
                            : 'bg-white border-line hover:border-mint-300'
                      }`}
                      aria-label={t('home.how.stepAria', { n: s.n, title: s.title })}
                    >
                      {/* Closed strip */}
                      <div
                        className={`absolute inset-0 flex flex-col items-center justify-center gap-3 px-3 transition-opacity duration-300 ${
                          isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
                        }`}
                      >
                        <div
                          className={`text-[44px] font-extrabold leading-none tracking-tight transition-colors ${
                            i < howActive ? 'text-mint-600' : 'text-ink-mute group-hover:text-mint-500'
                          }`}
                        >
                          0{s.n}
                        </div>
                        <div
                          className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${
                            i < howActive ? 'text-mint-700' : 'text-ink-mute'
                          }`}
                        >
                          {t('home.how.stepLabel')} {s.n}
                        </div>
                        <div
                          className={`h-0.5 rounded-full transition-all duration-500 ${
                            i < howActive ? 'w-8 bg-mint-500' : 'w-5 bg-line-strong group-hover:bg-mint-300 group-hover:w-7'
                          }`}
                        />
                      </div>

                      {/* Open content */}
                      <div
                        className={`relative h-full p-10 flex flex-col gap-4 transition-opacity duration-500 ${
                          isActive ? 'opacity-100 delay-200' : 'opacity-0 pointer-events-none'
                        }`}
                      >
                        <div className="absolute -top-24 -right-24 w-[320px] h-[320px] rounded-full bg-[radial-gradient(circle,rgba(116,223,187,0.45),transparent_70%)]"></div>

                        <div className="relative z-10 inline-flex items-center gap-2 text-mint-200 text-[11px] font-bold tracking-[0.18em] uppercase">
                          {t('home.how.stepLabel')} {s.n} / {howSteps.length}
                        </div>
                        <div className="relative z-10 text-[96px] font-extrabold leading-none text-white/15 -mb-4 select-none">
                          0{s.n}
                        </div>
                        <h3 className="relative z-10 text-[clamp(22px,2.4vw,30px)] font-bold tracking-tight">
                          {s.title}
                        </h3>
                        <p className="relative z-10 text-white/80 leading-relaxed max-w-[540px] text-[15px]">
                          {s.desc}
                        </p>

                        <div className="relative z-10 flex gap-2 mt-auto">
                          {howSteps.map((_, j) => (
                            <div
                              key={j}
                              className={`h-1 rounded-full transition-all duration-500 ${
                                j === i ? 'w-10 bg-mint-300' : 'w-5 bg-white/25'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-center gap-2 text-ink-mute text-[11px] mt-6 uppercase tracking-[0.16em]">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
                {t('home.how.scrollHint')}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / tablet: standard grid */}
        <div className="lg:hidden py-24">
          <div className="max-w-container mx-auto px-6">
            <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">
                {t('home.how.kicker')}
              </span>
              <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">
                {t('home.how.title')}
              </h2>
              <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">
                {t('home.how.lead')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {howSteps.map((s) => (
                <article key={s.n} className="reveal bg-white border border-line rounded-rxl p-6 hover:border-mint-300 hover:shadow-soft transition">
                  <div className="w-[38px] h-[38px] rounded-rmd bg-mint-500 text-white font-extrabold grid place-items-center mb-4 shadow-mint">
                    {s.n}
                  </div>
                  <h3 className="text-base font-bold tracking-tight mb-2">{s.title}</h3>
                  <p className="text-[13.5px] text-ink-soft leading-relaxed">{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES — alternating editorial rows */}
      <section className="py-24" id="advantages">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">{t('home.advantages.kicker')}</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">{t('home.advantages.title')}</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">{t('home.advantages.lead')}</p>
          </div>

          {/* Editorial rows divided by hairlines */}
          <div className="border-t border-line">
            {advantagesData.map((a, i) => {
              const flip = i % 2 === 1;
              const isOrange = a.accent === 'orange';
              const numGrad = isOrange ? 'text-grad-orange' : 'text-grad-mint';

              return (
                <div
                  key={a.n}
                  className="reveal grid lg:grid-cols-2 gap-y-8 gap-x-16 items-center py-14 border-b border-line"
                >
                  {/* TEXT SIDE */}
                  <div className={flip ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-5">
                      <span className={`${numGrad} text-[clamp(54px,7vw,84px)] font-extrabold leading-none tracking-tight select-none`} aria-hidden="true">
                        {a.n}
                      </span>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.14em] uppercase ${isOrange ? 'bg-orange-100 text-orange-600' : 'bg-mint-100 text-mint-800'}`}>
                        {a.kicker}
                      </span>
                    </div>
                    <h3 className="mt-5 text-[clamp(22px,2.6vw,30px)] font-extrabold tracking-tight leading-[1.15] max-w-[440px]">
                      {a.title}
                    </h3>
                    <p className="mt-3.5 text-[16px] text-ink-soft leading-relaxed max-w-[460px]">
                      {a.desc}
                    </p>
                  </div>

                  {/* FIGURE SIDE — bespoke micro-detail per advantage */}
                  <div className={flip ? 'lg:order-1' : ''}>
                    {a.figure === 'tov' && (
                      <div className="rounded-rxl border border-line bg-canvas-soft shadow-soft-sm p-6">
                        <div className="flex items-center justify-between gap-3 mb-4">
                          <span className="text-xs font-bold tracking-[0.12em] uppercase text-ink-mute">{t('home.advantages.figures.tov.label')}</span>
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-mint-100 text-mint-800 text-[11px] font-bold">
                            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            {t('home.advantages.figures.tov.badge')}
                          </span>
                        </div>
                        <p className="text-[14px] text-ink leading-relaxed">
                          {t('home.advantages.figures.tov.quote')}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {tovTags.map((tag) => (
                            <span key={tag} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-rsm bg-white border border-line text-[12px] text-ink-soft">
                              <span className="w-1.5 h-1.5 rounded-full bg-mint-500" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {a.figure === 'pipeline' && (
                      <div className="rounded-rxl border border-line bg-canvas-soft shadow-soft-sm p-6">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <span className="text-xs font-bold tracking-[0.12em] uppercase text-ink-mute">{t('home.advantages.figures.pipeline.label')}</span>
                          <span className="flex flex-col items-end text-right shrink-0 leading-none">
                            <span className="text-[28px] font-extrabold tracking-tight text-grad-stage">5</span>
                            <span className="mt-1 text-[10px] font-bold tracking-[0.1em] uppercase text-ink-mute">{t('home.advantages.figures.pipeline.count')}</span>
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2.5">
                          {pipelineSteps.map((step, si, arr) => (
                            <span key={step} className="inline-flex items-center gap-1.5">
                              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-rsm bg-white border border-line-strong text-[12.5px] font-semibold text-ink whitespace-nowrap shadow-soft-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-mint-500" />
                                {step}
                              </span>
                              {si < arr.length - 1 && (
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-mint-400 shrink-0" aria-hidden="true">
                                  <polyline points="9 18 15 12 9 6" />
                                </svg>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {a.figure === 'roles' && (
                      <div className="rounded-rxl border border-line bg-canvas-soft shadow-soft-sm p-6">
                        <span className="text-xs font-bold tracking-[0.12em] uppercase text-ink-mute">{t('home.advantages.figures.roles.label')}</span>
                        <div className="mt-4 space-y-2.5">
                          {rolesItems.map((role) => (
                            <div key={role.r} className="flex items-center gap-3 px-3 py-2 rounded-rsm bg-white border border-line">
                              <span className="brand-mark w-7 h-7 rounded-rsm flex items-center justify-center text-white text-[11px] font-bold">
                                {role.r[0]}
                              </span>
                              <span className="text-[13.5px] font-semibold text-ink">{role.r}</span>
                              <span className="ml-auto text-[11px] font-medium text-ink-mute">{role.tag}</span>
                            </div>
                          ))}
                        </div>
                        <span className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 text-[12px] font-bold">
                          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M3 9a9 9 0 0 1 15-3l3 3" />
                            <polyline points="21 3 21 9 15 9" />
                          </svg>
                          {t('home.advantages.figures.roles.cta')}
                        </span>
                      </div>
                    )}

                    {a.figure === 'analysis' && (
                      <div className="rounded-rxl border border-orange-200 bg-orange-50/60 shadow-soft-sm p-6">
                        <span className="text-xs font-bold tracking-[0.12em] uppercase text-orange-600">{t('home.advantages.figures.analysis.label')}</span>
                        <ul className="mt-4 space-y-2.5">
                          {analysisItems.map((c) => (
                            <li key={c} className="flex items-center gap-3 text-[13.5px] text-ink">
                              <span className="flex-none w-5 h-5 rounded-full bg-mint-500 flex items-center justify-center">
                                <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              </span>
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-24 bg-gradient-to-b from-mint-50 to-canvas overflow-hidden" id="clients">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">{t('home.clients.kicker')}</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">{t('home.clients.title')}</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">{t('home.clients.lead')}</p>
          </div>
        </div>

        {/* Бегущая лента */}
        <div className="relative" aria-label={t('home.clients.marqueeAria')}>
          <div className="clients-marquee flex items-center gap-4 pr-4">
            {[...clientsData, ...clientsData].map((c, i) => (
              <div
                key={i}
                className="shrink-0 inline-flex items-center gap-3 bg-white border border-line rounded-rxl px-6 py-4 shadow-soft-sm hover:border-mint-300 hover:shadow-soft transition group"
              >
                <span className="text-mint-600 group-hover:text-mint-700 transition">{c.icon}</span>
                <span className="font-bold text-[15px] tracking-wider text-ink-soft group-hover:text-mint-800 transition whitespace-nowrap">
                  {c.name}
                </span>
              </div>
            ))}
          </div>

          {/* Боковые градиенты — растворяют ленту по краям */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 clients-fade clients-fade-left" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 clients-fade clients-fade-right" />
        </div>

        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex justify-center mt-12">
            <Link to="/clients" className="inline-flex items-center gap-1.5 text-mint-700 font-semibold text-[14px] hover:text-mint-800 hover:gap-2.5 transition-all">
              {t('home.clients.casesLink')}
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24" id="reviews">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">{t('home.reviews.kicker')}</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">{t('home.reviews.title')}</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">{t('home.reviews.lead')}</p>
          </div>

          <div className="relative max-h-[640px] overflow-hidden">
            <div className="flex justify-center gap-6">
              <TestimonialsColumn testimonials={reviewsColumn1} duration={18} />
              <TestimonialsColumn testimonials={reviewsColumn2} className="hidden md:block" duration={22} />
              <TestimonialsColumn testimonials={reviewsColumn3} className="hidden lg:block" duration={20} />
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-48 reviews-fade reviews-fade-top" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 reviews-fade reviews-fade-bottom" />
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="hero-bg py-24 relative bg-dark text-white isolate overflow-hidden" id="contact">
        <div className="max-w-container mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-mint-300/20 text-mint-300 text-xs font-bold tracking-[0.14em] uppercase">{t('home.contact.kicker')}</span>
              <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight leading-[1.1] mt-4.5 mb-4.5">{t('home.contact.title')}</h2>
              <p className="text-base text-white/75 leading-relaxed max-w-[460px] mb-7">{t('home.contact.lead')}</p>

              <ul className="list-none m-0 p-0 flex flex-col gap-3.5">
                {contactBenefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-white/85 text-[14.5px]">
                    <svg className="w-[18px] h-[18px] text-mint-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal bg-white text-ink rounded-r2xl p-9 shadow-mockup">
              <h3 className="text-[22px] font-bold tracking-tight mb-2">{t('home.contact.form.title')}</h3>
              <p className="text-[13.5px] text-ink-soft mb-5">{t('home.contact.form.subtitle')}</p>

              {!submitted ? (
                <form className="flex flex-col gap-3.5" onSubmit={onSubmit} noValidate>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      className={`field ${errors.name ? 'is-error' : ''}`}
                      type="text" name="name" placeholder={t('home.contact.form.name')} value={form.name} onChange={onChange} required
                    />
                    <input className="field" type="text" name="company" placeholder={t('home.contact.form.company')} value={form.company} onChange={onChange} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      className={`field ${errors.email ? 'is-error' : ''}`}
                      type="email" name="email" placeholder={t('home.contact.form.email')} value={form.email} onChange={onChange} required
                    />
                    <input className="field" type="tel" name="phone" placeholder={t('home.contact.form.phone')} value={form.phone} onChange={onChange} />
                  </div>
                  <textarea
                    className="field"
                    name="message" placeholder={t('home.contact.form.message')} value={form.message} onChange={onChange}
                  />
                  <Button type="submit" fullWidth>
                    {t('home.contact.form.submit')}
                  </Button>
                  <p className="text-[11.5px] text-ink-mute text-center">{t('home.contact.form.privacy')}</p>
                </form>
              ) : (
                <div className="bg-mint-50 border border-mint-200 rounded-rmd px-4 py-3.5 flex gap-3 items-center text-mint-800 text-[13.5px] font-semibold mt-4">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {t('home.contact.form.success')}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
