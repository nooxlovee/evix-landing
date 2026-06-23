import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { LinkButton } from '../components/ui/Button';

const getBuildingCards = (t) => [
  { title: t('about.building.cards.0.title'), desc: t('about.building.cards.0.desc'), icon: (<svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>) },
  { title: t('about.building.cards.1.title'), desc: t('about.building.cards.1.desc'), icon: (<svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-5" /></svg>) },
  { title: t('about.building.cards.2.title'), desc: t('about.building.cards.2.desc'), icon: (<svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>) },
];

const getPrinciples = (t) => [
  { n: '01', title: t('about.principles.items.0.title'), desc: t('about.principles.items.0.desc') },
  { n: '02', title: t('about.principles.items.1.title'), desc: t('about.principles.items.1.desc') },
  { n: '03', title: t('about.principles.items.2.title'), desc: t('about.principles.items.2.desc') },
  { n: '04', title: t('about.principles.items.3.title'), desc: t('about.principles.items.3.desc') },
];

export default function About() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('about.meta.title');
  }, [t]);

  const buildingCards = useMemo(() => getBuildingCards(t), [t]);
  const principles = useMemo(() => getPrinciples(t), [t]);

  return (
    <>
      <section className="hero-bg relative pt-[152px] pb-20 bg-dark text-white isolate overflow-hidden">
        <div className="relative max-w-container mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-6 max-w-[820px] mx-auto">
            <h1 className="text-[clamp(32px,5vw,52px)] leading-[1.06] font-extrabold tracking-tight">
              {t('about.hero.titleStart')}<br />
              {t('about.hero.titleEnd')} <em className="not-italic text-grad-mint">{t('about.hero.titleHighlight')}</em>
            </h1>
            <p className="text-[clamp(15px,1.6vw,17px)] text-white/75 leading-relaxed">
              {t('about.hero.desc')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">{t('about.building.title')}</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">{t('about.building.desc')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1080px] mx-auto">
            {buildingCards.map((c, i) => (
              <article key={c.title} className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3">
                <span className="text-xs font-extrabold tracking-[0.14em] uppercase text-mint-600">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-lg font-bold tracking-tight">{c.title}</h3>
                <p className="text-[14px] text-ink-soft leading-relaxed">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-mint-50 to-canvas">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">{t('about.principles.title')}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-[920px] mx-auto">
            {principles.map((p) => (
              <article key={p.n} className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3">
                <span className="text-xs font-extrabold tracking-[0.14em] uppercase text-mint-600">{p.n}</span>
                <h3 className="text-[17px] font-bold tracking-tight">{p.title}</h3>
                <p className="text-[14px] text-ink-soft leading-relaxed">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-10">
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">{t('about.team.title')}</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">{t('about.team.desc')}</p>
            <LinkButton to="/#contact" className="mt-2">{t('about.team.cta')}</LinkButton>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-mint-50 to-canvas">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal relative overflow-hidden bg-gradient-to-br from-mint-700 to-mint-800 text-white rounded-r2xl p-11 grid lg:grid-cols-[1.4fr_auto] gap-8 items-center">
            <div className="absolute -top-24 -right-14 w-[320px] h-[320px] rounded-full bg-[radial-gradient(circle,rgba(116,223,187,0.3),transparent_70%)]"></div>
            <div className="relative">
              <h3 className="text-[clamp(22px,2.6vw,28px)] font-extrabold tracking-tight mb-2.5">{t('about.demo.title')}</h3>
              <p className="text-[15px] text-white/80 leading-relaxed">{t('about.demo.desc')}</p>
            </div>
            <div className="relative flex gap-3">
              <LinkButton to="/#contact">{t('about.demo.ctaPrimary')}</LinkButton>
              <LinkButton to="/functions" variant="secondary" tone="dark">{t('about.demo.ctaSecondary')}</LinkButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
