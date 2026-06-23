import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LinkButton } from '../components/ui/Button';
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

const getCases = (t) => [
  { tag: t('clients.cases.items.0.tag'), title: t('clients.cases.items.0.title'), desc: t('clients.cases.items.0.desc'), grad: 'from-mint-400 to-mint-700', stats: [['×3', t('clients.cases.items.0.stats.0.label')], ['−40%', t('clients.cases.items.0.stats.1.label')], ['+28%', t('clients.cases.items.0.stats.2.label')]], statColor: 'mint' },
  { tag: t('clients.cases.items.1.tag'), title: t('clients.cases.items.1.title'), desc: t('clients.cases.items.1.desc'), grad: 'from-mint-300 to-mint-600', stats: [['+52%', t('clients.cases.items.1.stats.0.label')], ['×6', t('clients.cases.items.1.stats.1.label')], [t('clients.cases.items.1.stats.2.value'), t('clients.cases.items.1.stats.2.label')]], statColor: 'orange' },
  { tag: t('clients.cases.items.2.tag'), title: t('clients.cases.items.2.title'), desc: t('clients.cases.items.2.desc'), grad: 'from-mint-700 to-ink', stats: [['×4', t('clients.cases.items.2.stats.0.label')], ['−66%', t('clients.cases.items.2.stats.1.label')], ['8', t('clients.cases.items.2.stats.2.label')]], statColor: 'mint' },
  { tag: t('clients.cases.items.3.tag'), title: t('clients.cases.items.3.title'), desc: t('clients.cases.items.3.desc'), grad: 'from-mint-500 to-mint-800', stats: [['−60%', t('clients.cases.items.3.stats.0.label')], ['+25%', t('clients.cases.items.3.stats.1.label')], ['+38%', t('clients.cases.items.3.stats.2.label')]], statColor: 'mint' },
  { tag: t('clients.cases.items.4.tag'), title: t('clients.cases.items.4.title'), desc: t('clients.cases.items.4.desc'), grad: 'from-mint-400 to-mint-700', stats: [['×5', t('clients.cases.items.4.stats.0.label')], ['+34%', t('clients.cases.items.4.stats.1.label')], [t('clients.cases.items.4.stats.2.value'), t('clients.cases.items.4.stats.2.label')]], statColor: 'orange' },
  { tag: t('clients.cases.items.5.tag'), title: t('clients.cases.items.5.title'), desc: t('clients.cases.items.5.desc'), grad: 'from-ink to-mint-700', stats: [['4', t('clients.cases.items.5.stats.0.label')], ['+18%', t('clients.cases.items.5.stats.1.label')], ['100%', t('clients.cases.items.5.stats.2.label')]], statColor: 'mint' },
];

function Trend({ value, accent }) {
  const positive = /^[+×x]/i.test(value);
  const negative = /^[−-]/.test(value);
  if (!positive && !negative) return null;
  const colorCls = positive
    ? (accent === 'orange' ? 'text-mint-500' : 'text-mint-500')
    : 'text-ink-mute';
  return (
    <svg
      className={`w-3 h-3 shrink-0 ${colorCls}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {positive ? (
        <>
          <path d="M7 17L17 7" />
          <polyline points="7 7 17 7 17 17" />
        </>
      ) : (
        <>
          <path d="M7 7L17 17" />
          <polyline points="17 7 17 17 7 17" />
        </>
      )}
    </svg>
  );
}

const CASE_ICONS = [
  <svg key="i0" className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4v16M4 12h16" />
  </svg>,
  <svg key="i1" className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8h1a3 3 0 0 1 0 6h-1" />
    <path d="M3 8h14v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z" />
    <line x1="6" y1="2" x2="6" y2="4" />
    <line x1="10" y1="2" x2="10" y2="4" />
    <line x1="14" y1="2" x2="14" y2="4" />
  </svg>,
  <svg key="i2" className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6" />
    <path d="M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 1 4 3 6 3s6-2 6-3v-5" />
  </svg>,
  <svg key="i3" className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>,
  <svg key="i4" className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>,
  <svg key="i5" className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8v8" />
    <path d="M18 8v8" />
    <path d="M3 10v4" />
    <path d="M21 10v4" />
    <path d="M6 12h12" />
  </svg>,
];

export default function Clients() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t('clients.meta.title');
  }, [t]);

  const REVIEWS = useMemo(() => getReviews(t), [t]);
  const CASES = useMemo(() => getCases(t), [t]);

  const dates = REVIEW_DATES[i18n.language] ?? REVIEW_DATES.ru;
  const TWITTER_CARDS = useMemo(() => REVIEWS.map((r, i) => ({
    initials: r.initials,
    username: r.name,
    handle: makeHandle(r.name),
    content: r.text,
    date: dates[i] ?? dates[dates.length - 1],
  })), [REVIEWS, dates]);

  const featuredBadges = useMemo(() => [
    t('clients.cases.featured.badges.0'),
    t('clients.cases.featured.badges.1'),
    t('clients.cases.featured.badges.2'),
  ], [t]);

  const featuredStats = useMemo(() => [
    ['×3', t('clients.cases.featured.stats.0.label'), t('clients.cases.featured.stats.0.note')],
    ['+47%', t('clients.cases.featured.stats.1.label'), t('clients.cases.featured.stats.1.note')],
    ['−72%', t('clients.cases.featured.stats.2.label'), t('clients.cases.featured.stats.2.note')],
    [t('clients.cases.featured.stats.3.value'), t('clients.cases.featured.stats.3.label'), t('clients.cases.featured.stats.3.note')],
  ], [t]);

  const summaryStats = useMemo(() => [
    ['×2.4', t('clients.cases.summary.stats.0.label')],
    ['+31%', t('clients.cases.summary.stats.1.label')],
    ['−54%', t('clients.cases.summary.stats.2.label')],
    [t('clients.cases.summary.stats.3.value'), t('clients.cases.summary.stats.3.label')],
  ], [t]);

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

          <article className="reveal mb-7 bg-gradient-to-br from-mint-700 to-mint-800 rounded-r2xl overflow-hidden text-white relative">
            <div className="absolute -top-32 -right-20 w-[440px] h-[440px] rounded-full bg-[radial-gradient(circle,rgba(116,223,187,0.32),transparent_70%)]"></div>
            <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-0 lg:gap-10">
              <div className="p-10 lg:p-12">
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex px-3 py-1 rounded-full bg-white/15 border border-white/20 text-mint-200 text-[11px] font-bold tracking-wider uppercase">{t('clients.cases.featured.bestCase')}</span>
                  <span className="inline-flex px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white/80 text-[11px] font-bold tracking-wider uppercase">{t('clients.cases.featured.tag')}</span>
                </div>
                <h3 className="text-[clamp(24px,3vw,32px)] font-extrabold tracking-tight leading-tight mb-4">{t('clients.cases.featured.title')}</h3>
                <p className="text-base text-white/80 leading-relaxed mb-7">{t('clients.cases.featured.desc')}</p>
                <div className="flex flex-wrap gap-2">
                  {featuredBadges.map((b) => (
                    <span key={b} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-white text-[12.5px] font-semibold">
                      <svg className="w-3.5 h-3.5 text-mint-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {b}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-black/15 p-10 lg:p-12 flex flex-col gap-4 justify-center">
                {featuredStats.map(([v, label, s], i) => (
                  <div key={label} className={`flex items-baseline gap-3 ${i < 3 ? 'pb-4 border-b border-white/10' : ''}`}>
                    <span className="text-5xl font-extrabold tracking-tight leading-none text-grad-price-white">{v}</span>
                    <div>
                      <div className="text-sm font-bold">{label}</div>
                      <div className="text-xs text-white/60">{s}</div>
                    </div>
                  </div>
                ))}
                <LinkButton to="/#contact" size="sm" className="mt-4 self-start">
                  {t('clients.cases.featured.cta')}
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
                  </svg>
                </LinkButton>
              </div>
            </div>
          </article>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CASES.map((c, idx) => {
              const accent = c.statColor === 'orange' ? 'orange' : 'mint';
              const num = String(idx + 1).padStart(2, '0');
              return (
                <article
                  key={c.title}
                  className="reveal group relative bg-white border border-line rounded-r2xl overflow-hidden flex flex-col hover:border-mint-300 hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none select-none absolute -top-3 right-4 text-[110px] leading-none font-black tracking-tighter transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105 ${accent === 'orange' ? 'text-mint-50' : 'text-mint-50'}`}
                  >
                    {num}
                  </span>

                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b ${c.grad} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div className="relative p-7 flex flex-col gap-5 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10.5px] font-bold tracking-[0.14em] uppercase bg-mint-50 text-mint-800">
                        {c.tag}
                      </span>
                    </div>

                    <h3 className="text-[20px] font-extrabold tracking-tight leading-[1.2]">{c.title}</h3>
                    <p className="text-[13.5px] text-ink-soft leading-relaxed">{c.desc}</p>

                    <div className="grid grid-cols-3 gap-3 pt-5 mt-1 border-t border-line">
                      {c.stats.map(([v, label]) => (
                        <div key={label} className="flex flex-col gap-1.5">
                          <div className="flex items-center gap-1">
                            <Trend value={v} accent={accent} />
                            <span className={`text-[19px] font-extrabold tracking-tight leading-none ${accent === 'orange' ? 'text-mint-700' : 'text-mint-800'}`}>{v}</span>
                          </div>
                          <div className="text-[10px] text-ink-mute uppercase tracking-[0.08em] leading-tight">{label}</div>
                        </div>
                      ))}
                    </div>

                    <Link to="/#contact" className={`mt-auto inline-flex items-center gap-1.5 font-semibold text-[13.5px] transition-all group-hover:gap-2.5 ${accent === 'orange' ? 'text-mint-700 hover:text-mint-800' : 'text-mint-700 hover:text-mint-800'}`}>
                      {t('clients.cases.detailsLink')}
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="reveal mt-14 bg-white border border-line rounded-r2xl p-10 grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center shadow-soft">
            <div>
              <h3 className="text-[clamp(22px,2.6vw,28px)] font-extrabold tracking-tight mb-3 text-ink">{t('clients.cases.summary.title')}</h3>
              <p className="text-[15px] text-ink-soft leading-relaxed">{t('clients.cases.summary.desc')}</p>
            </div>
            <div className="grid grid-cols-2 gap-3.5">
              {summaryStats.map(([v, label]) => (
                <div key={label} className="bg-mint-50 border border-mint-200 rounded-rlg p-4">
                  <div className="text-2xl font-extrabold tracking-tight text-mint-700">{v}</div>
                  <div className="text-xs text-ink-mute uppercase tracking-[0.08em] mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
