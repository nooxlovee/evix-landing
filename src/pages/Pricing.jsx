import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LinkButton, AnchorButton } from '../components/ui/Button';

const getTableRows = (t) => [
  [t('pricing.comparison.rows.0'), '✓', '✓'],
  [t('pricing.comparison.rows.1'), '✓', '✓'],
  [t('pricing.comparison.rows.2'), '✓', '✓'],
  [t('pricing.comparison.rows.3'), '✓', '✓'],
  [t('pricing.comparison.rows.4'), '✓', '✓'],
  [t('pricing.comparison.rows.5'), '✓', '✓'],
  [t('pricing.comparison.rows.6'), '✓', '✓'],
  [t('pricing.comparison.rows.7'), '✓', '✓'],
  [t('pricing.comparison.rows.8'), '✓', t('pricing.comparison.values.priority')],
  [t('pricing.comparison.rows.9'), '—', '✓'],
  [t('pricing.comparison.rows.10'), '✓', '✓'],
  [t('pricing.comparison.rows.11'), '✓', '✓'],
  [t('pricing.comparison.rows.12'), '✓', '✓'],
  [t('pricing.comparison.rows.13'), '✓', '✓'],
];

export default function Pricing() {
  const { t } = useTranslation();
  const TABLE_ROWS = useMemo(() => getTableRows(t), [t]);

  useEffect(() => {
    document.title = t('pricing.meta.title');
  }, [t]);

  return (
    <>
      {/* HERO */}
      <section className="hero-bg relative pt-[152px] pb-20 bg-dark text-white isolate overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-6 max-w-[880px] mx-auto">
            <h1 className="text-[clamp(32px,5vw,56px)] leading-[1.06] font-extrabold tracking-tight max-w-[820px]">
              {t('pricing.hero.titleLine1')}<br />
              <em className="not-italic text-grad-mint">{t('pricing.hero.titleHighlight')}</em>
            </h1>
            <p className="text-[clamp(15px,1.6vw,17px)] text-white/75 leading-relaxed max-w-[660px]">
              {t('pricing.hero.desc')}
            </p>
            <div className="flex gap-3 flex-wrap justify-center mt-1.5">
              <AnchorButton href="#tariffs">{t('pricing.hero.compare')}</AnchorButton>
              <LinkButton to="/#contact" variant="secondary" tone="dark">
                {t('pricing.hero.askPrice')}
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
                </svg>
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* TARIFFS */}
      <section className="py-24" id="tariffs">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">{t('pricing.tariffs.title')}</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">{t('pricing.tariffs.desc')}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5.5 items-stretch max-w-[860px] mx-auto">
            {/* Free */}
            <article className="reveal relative bg-white border-[1.5px] border-line rounded-r2xl p-9 pb-8 flex flex-col gap-6 hover:border-mint-200 hover:shadow-soft hover:-translate-y-1 transition">
              <div>
                <div className="text-lg font-extrabold tracking-tight mb-1.5">{t('pricing.tariffs.free.name')}</div>
                <p className="text-[13.5px] text-ink-soft leading-relaxed">{t('pricing.tariffs.free.desc')}</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-baseline gap-2.5 flex-wrap">
                  <span className="text-5xl font-extrabold tracking-tight leading-none text-grad-price">{t('pricing.tariffs.free.price')}</span>
                  <span className="text-2xl font-bold">{t('pricing.tariffs.free.currency')}</span>
                  <span className="text-[13px] text-ink-mute font-medium">{t('pricing.tariffs.free.period')}</span>
                </div>
              </div>
              <ul className="list-none m-0 p-0 flex flex-col gap-3 flex-1 list-check list-check-lg text-sm leading-relaxed">
                <li>{t('pricing.tariffs.free.features.0')}</li>
                <li>{t('pricing.tariffs.free.features.1')}</li>
                <li>{t('pricing.tariffs.free.features.2')}</li>
                <li>{t('pricing.tariffs.free.features.3')}</li>
                <li>{t('pricing.tariffs.free.features.4')}</li>
                <li>{t('pricing.tariffs.free.features.5')}</li>
                <li>{t('pricing.tariffs.free.features.6')}</li>
                <li>{t('pricing.tariffs.free.features.7')}</li>
                <li><strong className="text-ink font-bold">{t('pricing.tariffs.free.features.8.strong')}</strong>{t('pricing.tariffs.free.features.8.rest')}</li>
                <li>{t('pricing.tariffs.free.features.9')}</li>
                <li>{t('pricing.tariffs.free.features.10')}</li>
                <li>{t('pricing.tariffs.free.features.11')}</li>
              </ul>
              <LinkButton to="/#contact" variant="secondary" fullWidth>{t('pricing.tariffs.free.cta')}</LinkButton>
            </article>

            {/* Pro */}
            <article className="reveal relative bg-gradient-to-br from-[#07251f] via-[#0a3a2c] to-[#115a45] border-[1.5px] border-mint-500 rounded-r2xl p-9 pb-8 flex flex-col gap-6 text-white shadow-mint-glow hover:-translate-y-1 transition">
              <div className="absolute inset-0 rounded-r2xl overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-20 w-[260px] h-[260px] rounded-full bg-[radial-gradient(circle,rgba(116,223,187,0.32),transparent_70%)]"></div>
              </div>
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-mint-500 text-white text-[11.5px] font-extrabold tracking-wider uppercase shadow-mint whitespace-nowrap z-20">{t('pricing.tariffs.pro.badge')}</span>
              <div className="relative z-10">
                <div className="text-lg font-extrabold tracking-tight mb-1.5">{t('pricing.tariffs.pro.name')}</div>
                <p className="text-[13.5px] text-white/75 leading-relaxed">{t('pricing.tariffs.pro.desc')}</p>
              </div>
              <div className="relative z-10 flex flex-col gap-2">
                <div className="flex items-baseline gap-2.5 flex-wrap">
                  <span style={{ fontSize: 'clamp(26px, 3.6vw, 36px)' }} className="font-extrabold tracking-tight leading-none text-grad-price-white">{t('pricing.tariffs.pro.price')}</span>
                </div>
                <span className="text-[13px] text-white/55 leading-relaxed">{t('pricing.tariffs.pro.note')}</span>
              </div>
              <ul className="relative z-10 list-none m-0 p-0 flex flex-col gap-3 flex-1 list-check list-check-lg list-check-white text-sm leading-relaxed text-white/90">
                <li>{t('pricing.tariffs.pro.features.0.rest')}<strong className="text-white font-bold">{t('pricing.tariffs.pro.features.0.strong')}</strong>{t('pricing.tariffs.pro.features.0.suffix')}</li>
                <li><strong className="text-white font-bold">{t('pricing.tariffs.pro.features.1.strong')}</strong>{t('pricing.tariffs.pro.features.1.rest')}</li>
                <li>{t('pricing.tariffs.pro.features.2')}</li>
                <li>{t('pricing.tariffs.pro.features.3')}</li>
              </ul>
              <LinkButton to="/#contact" fullWidth className="relative z-10">{t('pricing.tariffs.pro.cta')}</LinkButton>
            </article>
          </div>

          <div className="reveal mt-14 max-w-[860px] mx-auto bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
            <h3 className="text-base font-bold tracking-tight">{t('pricing.corporate.title')}</h3>
            <p className="text-[14px] text-ink-soft leading-relaxed">{t('pricing.corporate.desc')}</p>
            <Link to="/#contact" className="self-start inline-flex items-center gap-1.5 text-mint-700 font-semibold text-[14px] hover:text-mint-800 hover:gap-2.5 transition-all">
              {t('pricing.corporate.cta')}
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-24 bg-gradient-to-b from-mint-50 to-canvas">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-12">
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">{t('pricing.comparison.title')}</h2>
          </div>

          <div className="reveal bg-white border border-line rounded-rxl overflow-hidden max-w-[920px] mx-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-canvas">
                  <th scope="col" className="text-left py-4 px-5 font-bold tracking-tight">{t('pricing.comparison.headers.feature')}</th>
                  <th scope="col" className="text-center py-4 px-5 font-bold tracking-tight">{t('pricing.comparison.headers.free')}</th>
                  <th scope="col" className="text-center py-4 px-5 font-bold tracking-tight bg-mint-50 text-mint-800">{t('pricing.comparison.headers.pro')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {TABLE_ROWS.map(([label, free, pro]) => (
                  <tr key={label}>
                    <td className="py-3.5 px-5">{label}</td>
                    <td className={`text-center ${free === '—' ? 'text-ink-mute' : 'text-mint-700'}`}>{free}</td>
                    <td className={`text-center bg-mint-50/40 ${pro === '✓' ? 'text-mint-700 font-bold' : 'text-mint-700'}`}>{pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal relative overflow-hidden bg-gradient-to-br from-mint-700 to-mint-800 text-white rounded-r2xl p-11 grid lg:grid-cols-[1.4fr_auto] gap-8 items-center">
            <div className="absolute -top-24 -right-14 w-[320px] h-[320px] rounded-full bg-[radial-gradient(circle,rgba(116,223,187,0.3),transparent_70%)]"></div>
            <div className="relative">
              <h3 className="text-[clamp(22px,2.6vw,28px)] font-extrabold tracking-tight mb-2.5">{t('pricing.cta.title')}</h3>
              <p className="text-[15px] text-white/80 leading-relaxed">{t('pricing.cta.desc')}</p>
            </div>
            <div className="relative flex gap-3">
              <LinkButton to="/#contact">{t('pricing.cta.demo')}</LinkButton>
              <LinkButton to="/functions" variant="secondary" tone="dark">{t('pricing.cta.features')}</LinkButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
