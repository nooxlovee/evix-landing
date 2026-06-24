import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LinkButton, AnchorButton } from '../components/ui/Button';

// Walkthrough order. `img` maps to /public/screens/<img>.png; `kind` flags the
// two steps that carry an extra sub-grid (scenario types / montage options).
const STEPS = [
  { key: 'register', img: 'index' },
  { key: 'quiz', img: 'quiz' },
  { key: 'competitors', img: 'competitors' },
  { key: 'library', img: 'library' },
  { key: 'scenario', img: 'scenario-new', kind: 'types' },
  { key: 'result', img: 'scenario-result' },
  { key: 'covers', img: 'covers' },
  { key: 'montage', img: 'edits', kind: 'options' },
  { key: 'publish', img: 'profile-full' },
];

const TYPES = ['competitor', 'repackage', 'custom', 'formats'];
const OPTIONS = ['auto', 'pro'];

function Shot({ img, alt }) {
  return (
    <figure className="reveal m-0 rounded-r2xl border border-line bg-white shadow-soft-lg overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 h-9 border-b border-line bg-canvas-soft">
        <span className="dot dot-r" />
        <span className="dot dot-y" />
        <span className="dot dot-g" />
        <span className="ml-3 text-[11px] text-ink-mute font-medium tracking-tight truncate">app.evix.studio</span>
      </div>
      <img
        src={`/screens/${img}.png`}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="block w-full h-auto"
      />
    </figure>
  );
}

export default function HowItWorks() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('howItWorks.meta.title');
  }, [t]);

  return (
    <>
      {/* Hero — calm, centered */}
      <section className="hero-bg relative pt-[152px] pb-20 bg-dark text-white isolate overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-6 max-w-[860px] mx-auto">
            <h1 className="text-[clamp(32px,5vw,54px)] leading-[1.05] font-extrabold tracking-tight">
              {t('howItWorks.hero.title')}
              <br />
              <em className="not-italic text-grad-mint">{t('howItWorks.hero.titleHighlight')}</em>
            </h1>
            <p className="text-[clamp(15px,1.6vw,17px)] text-white/75 leading-relaxed max-w-[680px]">
              {t('howItWorks.hero.desc')}
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <LinkButton to="/#contact">{t('howItWorks.hero.ctaPrimary')}</LinkButton>
              <AnchorButton href="#cycle" variant="secondary" tone="dark">
                {t('howItWorks.hero.ctaSecondary')}
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14" /><path d="M19 12l-7 7-7-7" /></svg>
              </AnchorButton>
            </div>
          </div>

          {/* Anchor product shot */}
          <div className="reveal max-w-[920px] mx-auto mt-14">
            <Shot img="scenarios" alt={t('howItWorks.hero.shotAlt')} />
          </div>
        </div>
      </section>

      {/* Cycle overview — numbered registry, anchor links */}
      <section className="py-24" id="cycle">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">{t('howItWorks.cycle.title')}</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[660px]">{t('howItWorks.cycle.desc')}</p>
          </div>

          <div className="reveal max-w-[900px] mx-auto grid md:grid-cols-2 md:gap-x-14">
            {[STEPS.slice(0, 5), STEPS.slice(5)].map((col, ci) => (
              <ul key={ci} className="list-none m-0 p-0 border-t border-ink/15">
                {col.map((s, i) => {
                  const n = ci === 0 ? i + 1 : i + 6;
                  return (
                    <li key={s.key} className="border-b border-line">
                      <a
                        href={`#step-${n}`}
                        className="flex items-baseline gap-5 py-5 group focus-visible:outline-none"
                      >
                        <span className="text-[13px] font-extrabold tabular-nums text-mint-500 shrink-0 w-7 pt-0.5">{String(n).padStart(2, '0')}</span>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-[15.5px] font-bold tracking-tight text-ink group-hover:text-mint-700 transition">{t(`howItWorks.steps.${s.key}.title`)}</h3>
                        </div>
                        <svg className="w-4 h-4 text-ink-mute shrink-0 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="M13 5l7 7-7 7" /></svg>
                      </a>
                    </li>
                  );
                })}
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      {STEPS.map((s, idx) => {
        const n = idx + 1;
        const imageRight = idx % 2 === 0;
        const base = `howItWorks.steps.${s.key}`;
        const list = t(`${base}.list`, { returnObjects: true });
        const hasList = Array.isArray(list);
        return (
          <section
            key={s.key}
            id={`step-${n}`}
            className={`scroll-mt-24 py-20 ${idx % 2 === 1 ? 'bg-gradient-to-b from-mint-50/60 to-canvas' : ''}`}
          >
            <div className="max-w-container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                <div className={`reveal ${imageRight ? '' : 'lg:order-2'}`}>
                  <span className="text-[13px] font-extrabold tabular-nums text-mint-500">{String(n).padStart(2, '0')}</span>
                  <h2 className="text-[clamp(24px,3.2vw,34px)] font-extrabold tracking-tight leading-[1.12] mt-2 mb-4">{t(`${base}.title`)}</h2>
                  <p className="text-[15px] text-ink-soft leading-relaxed">{t(`${base}.desc`)}</p>
                  {hasList && (
                    <ul className="list-none m-0 mt-6 p-0 flex flex-col gap-2.5 list-check text-[14px] text-ink">
                      {list.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  )}
                  {/* Montage options — stacked inside the info column */}
                  {s.kind === 'options' && (
                    <div className="mt-7 flex flex-col gap-4">
                      {OPTIONS.map((op) => (
                        <article key={op} className="bg-white border border-line rounded-rxl p-6 flex flex-col gap-2.5">
                          <div className="flex items-center justify-between gap-3">
                            <h3 className="text-[16px] font-bold tracking-tight">{t(`${base}.options.${op}.title`)}</h3>
                            <span className="text-[11px] font-bold tracking-tight px-2.5 py-1 rounded-full bg-mint-100 text-mint-700 whitespace-nowrap">{t(`${base}.options.${op}.meta`)}</span>
                          </div>
                          <p className="text-[13.5px] text-ink-soft leading-relaxed">{t(`${base}.options.${op}.desc`)}</p>
                        </article>
                      ))}
                    </div>
                  )}
                </div>
                <div className={`${imageRight ? '' : 'lg:order-1'}`}>
                  <Shot img={s.img} alt={t(`${base}.alt`)} />
                </div>
              </div>

              {/* Scenario types — 4 cards */}
              {s.kind === 'types' && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
                  {TYPES.map((ty) => (
                    <article key={ty} className="reveal bg-white border border-line rounded-rxl p-6 flex flex-col gap-2.5 hover:border-mint-200 hover:shadow-soft transition">
                      <h3 className="text-[16px] font-bold tracking-tight">{t(`${base}.types.${ty}.title`)}</h3>
                      <p className="text-[13.5px] text-ink-soft leading-relaxed">{t(`${base}.types.${ty}.desc`)}</p>
                    </article>
                  ))}
                </div>
              )}

            </div>
          </section>
        );
      })}

      {/* Closing CTA */}
      <section className="hero-bg py-24 relative bg-dark text-white isolate overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-6 max-w-[680px] mx-auto">
            <h2 className="text-[clamp(26px,4vw,40px)] font-extrabold tracking-tight leading-[1.1]">{t('howItWorks.cta.title')}</h2>
            <p className="text-base text-white/75 leading-relaxed max-w-[520px]">{t('howItWorks.cta.desc')}</p>
            <div className="flex gap-3 flex-wrap justify-center">
              <LinkButton to="/#contact">{t('howItWorks.cta.primary')}</LinkButton>
              <LinkButton to="/pricing" variant="secondary" tone="dark">{t('howItWorks.cta.secondary')}</LinkButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
