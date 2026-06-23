import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { LinkButton } from '../components/ui/Button';

const getCategories = (t) => [
  {
    id: 'cat-product',
    title: t('faq.categories.product.title'),
    items: [
      [t('faq.categories.product.items.0.q'), t('faq.categories.product.items.0.a')],
      [t('faq.categories.product.items.1.q'), t('faq.categories.product.items.1.a')],
      [t('faq.categories.product.items.2.q'), t('faq.categories.product.items.2.a')],
      [t('faq.categories.product.items.3.q'), t('faq.categories.product.items.3.a')],
      [t('faq.categories.product.items.4.q'), t('faq.categories.product.items.4.a')],
    ],
  },
  {
    id: 'cat-pricing',
    title: t('faq.categories.pricing.title'),
    items: [
      [t('faq.categories.pricing.items.0.q'), t('faq.categories.pricing.items.0.a')],
      [t('faq.categories.pricing.items.1.q'), t('faq.categories.pricing.items.1.a')],
      [t('faq.categories.pricing.items.2.q'), t('faq.categories.pricing.items.2.a')],
    ],
  },
  {
    id: 'cat-ai',
    title: t('faq.categories.ai.title'),
    items: [
      [t('faq.categories.ai.items.0.q'), t('faq.categories.ai.items.0.a')],
      [t('faq.categories.ai.items.1.q'), t('faq.categories.ai.items.1.a')],
      [t('faq.categories.ai.items.2.q'), t('faq.categories.ai.items.2.a')],
    ],
  },
  {
    id: 'cat-socials',
    title: t('faq.categories.socials.title'),
    items: [
      [t('faq.categories.socials.items.0.q'), t('faq.categories.socials.items.0.a')],
      [t('faq.categories.socials.items.1.q'), t('faq.categories.socials.items.1.a')],
    ],
  },
  {
    id: 'cat-team',
    title: t('faq.categories.team.title'),
    items: [
      [t('faq.categories.team.items.0.q'), t('faq.categories.team.items.0.a')],
      [t('faq.categories.team.items.1.q'), t('faq.categories.team.items.1.a')],
      [t('faq.categories.team.items.2.q'), t('faq.categories.team.items.2.a')],
    ],
  },
];

const getPills = (t) => [
  { id: 'cat-product', label: t('faq.pills.product'), primary: true },
  { id: 'cat-pricing', label: t('faq.pills.pricing') },
  { id: 'cat-ai', label: t('faq.pills.ai') },
  { id: 'cat-socials', label: t('faq.pills.socials') },
  { id: 'cat-team', label: t('faq.pills.team') },
];

export default function Faq() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('faq.meta.title');
  }, [t]);

  const CATEGORIES = useMemo(() => getCategories(t), [t]);
  const PILLS = useMemo(() => getPills(t), [t]);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
      // Move focus to the target category so keyboard users follow the jump.
      el.setAttribute('tabindex', '-1');
      el.focus({ preventScroll: true });
    }
  };

  return (
    <>
      <section className="hero-bg relative pt-[152px] pb-20 bg-dark text-white isolate overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-6 max-w-[820px] mx-auto">
            <h1 className="text-[clamp(32px,5vw,56px)] leading-[1.06] font-extrabold tracking-tight max-w-[820px]">
              {t('faq.hero.titleStart')} <em className="not-italic text-grad-mint">{t('faq.hero.titleHighlight')}</em>
            </h1>
            <p className="text-[clamp(15px,1.6vw,17px)] text-white/75 leading-relaxed max-w-[620px]">
              {t('faq.hero.desc')}
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {PILLS.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  onClick={scrollTo(p.id)}
                  className={`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-400/60 ${p.primary
                    ? 'px-4 py-2 rounded-[14px] bg-mint-500 text-white text-sm font-semibold shadow-mint'
                    : 'px-4 py-2 rounded-[14px] bg-white/10 border border-white/15 text-white/85 text-sm font-medium hover:bg-white/20 transition'}`}
                >
                  {p.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[940px] mx-auto px-6 flex flex-col gap-14">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} id={cat.id} className="reveal scroll-mt-24 focus:outline-none">
              <h2 className="text-2xl font-extrabold tracking-tight mb-6">{cat.title}</h2>
              <div className="flex flex-col gap-3">
                {cat.items.map(([q, a]) => (
                  <details key={q} className="bg-white border border-line rounded-rxl p-6 group">
                    <summary className="cursor-pointer flex items-center justify-between gap-4 font-bold text-[15.5px] tracking-tight rounded-rsm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint-500/40">
                      {q}
                      <svg className="w-5 h-5 text-mint-700 transition group-open:rotate-45 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </summary>
                    <p className="text-[14px] text-ink-soft leading-relaxed mt-4">{a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}

          <div className="reveal bg-gradient-to-br from-mint-700 to-mint-800 text-white rounded-r2xl p-10 flex flex-col md:flex-row items-center justify-between gap-7">
            <div>
              <h3 className="text-xl font-extrabold tracking-tight mb-2">{t('faq.cta.title')}</h3>
              <p className="text-white/80 text-[14.5px]">{t('faq.cta.desc')}</p>
            </div>
            <LinkButton to="/contacts">{t('faq.cta.button')}</LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
