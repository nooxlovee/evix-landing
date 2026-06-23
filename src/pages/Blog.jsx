import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../components/ui/Button';

const getPosts = (t) => [
  { tag: t('blog.posts.0.tag'), title: t('blog.posts.0.title'), desc: t('blog.posts.0.desc'), grad: 'from-mint-200 to-mint-500' },
  { tag: t('blog.posts.1.tag'), title: t('blog.posts.1.title'), desc: t('blog.posts.1.desc'), grad: 'from-mint-300 to-mint-600' },
  { tag: t('blog.posts.2.tag'), title: t('blog.posts.2.title'), desc: t('blog.posts.2.desc'), grad: 'from-mint-700 to-ink' },
];

export default function Blog() {
  const { t } = useTranslation();
  const POSTS = useMemo(() => getPosts(t), [t]);

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    document.title = t('blog.meta.title');
  }, [t]);

  const onSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setSubscribed(true);
    }
  };

  return (
    <>
      <section className="hero-bg relative pt-[152px] pb-20 bg-dark text-white isolate overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-6 max-w-[820px] mx-auto">
            <h1 className="text-[clamp(32px,5vw,56px)] leading-[1.06] font-extrabold tracking-tight max-w-[820px]">
              {t('blog.hero.titlePart1')} <em className="not-italic text-grad-mint">{t('blog.hero.titleHighlight')}</em>
            </h1>
            <p className="text-[clamp(15px,1.6vw,17px)] text-white/75 leading-relaxed max-w-[660px]">
              {t('blog.hero.desc')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">{t('blog.section.title')}</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">{t('blog.section.desc')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {POSTS.map((p) => (
              <article key={p.title} className="reveal bg-white border border-dashed border-line-strong rounded-rxl p-7 flex flex-col gap-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex px-2.5 py-0.5 rounded-full bg-mint-50 text-mint-800 font-bold text-[11px] tracking-wide uppercase">{p.tag}</span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-mute">{t('blog.card.soon')}</span>
                </div>
                <h3 className="text-[18px] font-bold tracking-tight leading-snug">{p.title}</h3>
                <p className="text-[13.5px] text-ink-soft leading-relaxed flex-1">{p.desc}</p>
              </article>
            ))}
          </div>

          <div className="reveal mt-14 max-w-[820px] mx-auto bg-white border border-line rounded-r2xl p-9 flex flex-col md:flex-row items-center justify-between gap-7">
            <div>
              <h3 className="text-xl font-extrabold tracking-tight mb-2">{t('blog.subscribe.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('blog.subscribe.desc')}</p>
            </div>
            {!subscribed ? (
              <form onSubmit={onSubscribe} className="flex w-full sm:w-auto gap-2.5" aria-label={t('blog.subscribe.title')}>
                <label htmlFor="blog-email" className="sr-only">{t('blog.subscribe.title')}</label>
                <input
                  id="blog-email"
                  type="email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('blog.subscribe.placeholder')}
                  className="flex-1 sm:flex-none sm:w-[260px] border border-line rounded-rmd bg-white px-4 h-[46px] text-[15px] hover:border-line-strong focus:border-mint-400 focus:outline-none focus:ring-4 focus:ring-mint-500/20 transition"
                />
                <Button type="submit" size="md" className="shrink-0">{t('blog.subscribe.cta')}</Button>
              </form>
            ) : (
              <div role="status" aria-live="polite" className="flex w-full sm:w-auto items-center gap-3 bg-mint-50 border border-mint-200 rounded-rmd px-4 py-3.5 text-mint-800 text-[13.5px] font-semibold">
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {t('blog.subscribe.success')}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
