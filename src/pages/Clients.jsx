import { useEffect, useMemo } from 'react';
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
};

// Flagship case — NOMOS Clinic. Links are the client's real public profiles.
const FEATURED = {
  name: 'NOMOS Clinic',
  links: [
    { p: 'youtube', url: 'https://www.youtube.com/@nomos_clinic', handle: '@nomos_clinic' },
    { p: 'tiktok', url: 'http://www.tiktok.com/@nomos_clinic', handle: '@nomos_clinic' },
    { p: 'vk', url: 'https://vk.com/nomos.clinic', handle: 'vk.com/nomos.clinic' },
  ],
};

// Other clients on Evix — names/niches via i18n, links are real public profiles.
const ROSTER = [
  { key: 'institut', links: [
    { p: 'youtube', url: 'https://www.youtube.com/@institut.plastiki' },
    { p: 'tiktok', url: 'https://www.tiktok.com/@institut_plastiki1' },
  ] },
  { key: 'genetic', links: [
    { p: 'instagram', url: 'https://www.instagram.com/kristina_genetic' },
    { p: 'tiktok', url: 'https://www.tiktok.com/@kuznetsova_genetic' },
    { p: 'youtube', url: 'https://youtube.com/channel/UCV2Hwj4xKe5XMd118lhyIZg' },
    { p: 'youtube', url: 'https://youtube.com/channel/UCtjCcNl8gGOCTNYUaiaZkGQ' },
    { p: 'vk', url: 'https://vk.com/krisrina_kuznetsova' },
    { p: 'facebook', url: 'https://www.facebook.com/share/1Ah2KYmt7e/' },
  ] },
  { key: 'inmedos', links: [
    { p: 'instagram', url: 'https://www.instagram.com/inmedos' },
    { p: 'vk', url: 'https://vk.com/inmedos' },
    { p: 'tiktok', url: 'https://www.tiktok.com/@inmedos' },
  ] },
  { key: 'volos', links: [
    { p: 'tiktok', url: 'https://www.tiktok.com/@doctor__volos' },
  ] },
];

function PlatformTile({ link, clientName }) {
  const meta = PLATFORM[link.p];
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${clientName} — ${meta.name}`}
      className="group flex items-center gap-3.5 rounded-rmd bg-white/10 hover:bg-white/[0.16] border border-white/15 px-4 py-3 transition"
    >
      <span className="w-9 h-9 rounded-[10px] bg-white/15 grid place-items-center text-white shrink-0">
        <span className="w-[18px] h-[18px] block">{meta.icon}</span>
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[13.5px] font-bold leading-tight">{meta.name}</span>
        <span className="block text-[12px] text-mint-200 truncate">{link.handle}</span>
      </span>
      <svg className="w-4 h-4 text-white/55 group-hover:text-white transition shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M7 17L17 7" /><path d="M7 7h10v10" />
      </svg>
    </a>
  );
}

function PlatformChip({ link, clientName }) {
  const meta = PLATFORM[link.p];
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${clientName} — ${meta.name}`}
      title={meta.name}
      className="w-9 h-9 rounded-[10px] bg-mint-50 text-mint-700 grid place-items-center hover:bg-mint-500 hover:text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500/40"
    >
      <span className="w-[17px] h-[17px] block">{meta.icon}</span>
    </a>
  );
}

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

          {/* Flagship growth case — NOMOS */}
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
                  <div className="text-2xl font-extrabold tracking-tight">NOMOS Clinic</div>
                  <div className="text-[11.5px] uppercase tracking-[0.14em] text-mint-200 font-bold mt-1 mb-5">{t('clients.cases.featured.platformsLabel')}</div>
                  <div className="flex flex-col gap-3">
                    {FEATURED.links.map((l) => <PlatformTile key={l.p + l.url} link={l} clientName={FEATURED.name} />)}
                  </div>
                </div>
              </div>
            </div>

            {/* Real results — numbers from the client's public profiles */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-line bg-mint-50/40">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="p-6 lg:p-7 border-line md:border-l md:first:border-l-0">
                  <div className="text-[clamp(24px,2.8vw,32px)] font-extrabold tracking-tight text-mint-700 leading-none">{t(`clients.cases.featured.stats.${i}.value`)}</div>
                  <div className="text-[11px] text-ink-mute uppercase tracking-[0.08em] mt-2 leading-tight">{t(`clients.cases.featured.stats.${i}.label`)}</div>
                </div>
              ))}
            </div>
          </article>

          {/* Roster */}
          <div className="reveal mt-16 mb-8 text-center">
            <h3 className="text-[clamp(20px,2.4vw,26px)] font-extrabold tracking-tight">{t('clients.cases.roster.title')}</h3>
            <p className="text-[14.5px] text-ink-soft mt-2 max-w-[560px] mx-auto">{t('clients.cases.roster.desc')}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ROSTER.map((c) => {
              const name = t(`clients.cases.roster.items.${c.key}.name`);
              const note = t(`clients.cases.roster.items.${c.key}.note`);
              return (
                <article key={c.key} className="reveal bg-white border border-line rounded-r2xl p-6 flex flex-col gap-2.5 hover:border-mint-300 hover:shadow-soft hover:-translate-y-1 transition-all duration-300">
                  <h4 className="text-[17px] font-bold tracking-tight">{name}</h4>
                  <p className="text-[12px] text-ink-mute uppercase tracking-[0.08em]">{t(`clients.cases.roster.items.${c.key}.niche`)}</p>
                  {note && <p className="text-[13px] text-ink-soft leading-snug">{note}</p>}
                  <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    {c.links.map((l, i) => <PlatformChip key={l.p + i} link={l} clientName={name} />)}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
