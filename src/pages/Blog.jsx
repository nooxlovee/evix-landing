import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LinkButton } from '../components/ui/Button';

const getPosts = (t) => [
  { tag: t('blog.posts.0.tag'), title: t('blog.posts.0.title'), desc: t('blog.posts.0.desc'), grad: 'from-mint-200 to-mint-500' },
  { tag: t('blog.posts.1.tag'), title: t('blog.posts.1.title'), desc: t('blog.posts.1.desc'), grad: 'from-orange-300 to-orange-600' },
  { tag: t('blog.posts.2.tag'), title: t('blog.posts.2.title'), desc: t('blog.posts.2.desc'), grad: 'from-mint-700 to-ink' },
];

export default function Blog() {
  const { t } = useTranslation();
  const POSTS = useMemo(() => getPosts(t), [t]);

  useEffect(() => {
    document.title = t('blog.meta.title');
  }, [t]);

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
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold tracking-[0.14em] uppercase">{t('blog.section.badge')}</span>
            <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">{t('blog.section.title')}</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">{t('blog.section.desc')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {POSTS.map((p) => (
              <article key={p.title} className="bg-white border border-dashed border-line-strong rounded-rxl overflow-hidden flex flex-col">
                <div className={`h-[180px] bg-gradient-to-br ${p.grad} grid place-items-center text-white`}>
                  <span className="text-sm font-bold tracking-wider uppercase opacity-80">{t('blog.card.inProgress')}</span>
                </div>
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-2 text-xs text-ink-mute mb-3">
                    <span className="inline-flex px-2.5 py-0.5 rounded-full bg-mint-50 text-mint-800 font-bold text-[11px] tracking-wide">{p.tag}</span>
                    <span>{t('blog.card.soon')}</span>
                  </div>
                  <h3 className="text-[17px] font-bold tracking-tight mb-2 leading-snug">{p.title}</h3>
                  <p className="text-[13.5px] text-ink-soft leading-relaxed">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="reveal mt-14 max-w-[820px] mx-auto bg-white border border-line rounded-r2xl p-9 flex flex-col md:flex-row items-center justify-between gap-7">
            <div>
              <h3 className="text-xl font-extrabold tracking-tight mb-2">{t('blog.subscribe.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('blog.subscribe.desc')}</p>
            </div>
            <LinkButton to="/contacts" className="shrink-0">{t('blog.subscribe.cta')}</LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
