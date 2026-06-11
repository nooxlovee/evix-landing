import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, AnchorButton } from '../components/ui/Button';

export default function Training() {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = t('training.meta.title');
  }, [t]);

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

  const input = (errorKey) =>
    `h-[50px] px-4 border bg-white rounded-rmd text-[15px] hover:border-line-strong focus:border-mint-400 focus:outline-none focus:ring-4 focus:ring-mint-500/20 transition ${errors[errorKey] ? 'border-orange-500' : 'border-line'}`;

  return (
    <>
      <section className="hero-bg relative pt-[152px] pb-20 bg-dark text-white isolate overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-6 max-w-[820px] mx-auto">
            <h1 className="text-[clamp(32px,5vw,52px)] leading-[1.06] font-extrabold tracking-tight">
              {t('training.hero.titlePart1')}<br />{t('training.hero.titlePart2')} <em className="not-italic text-grad-mint">{t('training.hero.brand')}</em>
            </h1>
            <p className="text-[clamp(15px,1.6vw,17px)] text-white/75 leading-relaxed">
              {t('training.hero.desc')}
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <AnchorButton href="#contact">{t('training.hero.ctaPrimary')}</AnchorButton>
              <AnchorButton href="#stages" variant="secondary" tone="dark">
                {t('training.hero.ctaSecondary')}
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M13 5l7 7-7 7" /></svg>
              </AnchorButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">{t('training.benefits.badge')}</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">{t('training.benefits.title')}</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">{t('training.benefits.desc')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1080px] mx-auto">
            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-7 8-7s8 3 8 7" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">{t('training.benefits.role.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('training.benefits.role.desc')}</p>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h11l5 5v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" /><path d="M14 4v6h6" /><path d="M7 14h8M7 18h6" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">{t('training.benefits.data.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('training.benefits.data.desc')}</p>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">{t('training.benefits.live.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('training.benefits.live.desc')}</p>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-5" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">{t('training.benefits.analysis.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('training.benefits.analysis.desc')}</p>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">{t('training.benefits.parsing.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('training.benefits.parsing.desc')}</p>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">{t('training.benefits.support.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('training.benefits.support.desc')}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-mint-50 to-canvas">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">{t('training.trainers.badge')}</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">{t('training.trainers.title')}</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">{t('training.trainers.desc')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1080px] mx-auto">
            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h11l5 5v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" /><path d="M14 4v6h6" /><path d="M7 14h8M7 18h6" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">{t('training.trainers.product.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('training.trainers.product.desc')}</p>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="4" /><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" /><circle cx="17" cy="7" r="3" /><path d="M21 21v-2a3 3 0 0 0-3-3" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">{t('training.trainers.curators.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('training.trainers.curators.desc')}</p>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">{t('training.trainers.editors.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('training.trainers.editors.desc')}</p>
            </article>
          </div>

          <div className="reveal mt-12 max-w-[820px] mx-auto bg-white border border-line rounded-rxl p-6">
            <p className="text-sm text-ink-soft leading-relaxed">{t('training.trainers.footnote')}</p>
          </div>
        </div>
      </section>

      <section className="py-24" id="stages">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">{t('training.stages.badge')}</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">{t('training.stages.title')}</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">{t('training.stages.desc')}</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-5 max-w-[1180px] mx-auto">
            <article className="reveal relative bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5 hover:border-mint-200 hover:shadow-soft transition">
              <div className="flex items-center gap-3">
                <span className="stage-num">1</span>
              </div>
              <h3 className="text-lg font-extrabold tracking-tight">{t('training.stages.items.0.title')}</h3>
              <p className="text-[13.5px] text-ink-soft leading-relaxed">{t('training.stages.items.0.desc')}</p>
            </article>

            <article className="reveal relative bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5 hover:border-mint-200 hover:shadow-soft transition">
              <div className="flex items-center gap-3">
                <span className="stage-num">2</span>
              </div>
              <h3 className="text-lg font-extrabold tracking-tight">{t('training.stages.items.1.title')}</h3>
              <p className="text-[13.5px] text-ink-soft leading-relaxed">{t('training.stages.items.1.desc')}</p>
            </article>

            <article className="reveal relative bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5 hover:border-mint-200 hover:shadow-soft transition">
              <div className="flex items-center gap-3">
                <span className="stage-num">3</span>
              </div>
              <h3 className="text-lg font-extrabold tracking-tight">{t('training.stages.items.2.title')}</h3>
              <p className="text-[13.5px] text-ink-soft leading-relaxed">{t('training.stages.items.2.desc')}</p>
            </article>

            <article className="reveal relative bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5 hover:border-mint-200 hover:shadow-soft transition">
              <div className="flex items-center gap-3">
                <span className="stage-num">4</span>
              </div>
              <h3 className="text-lg font-extrabold tracking-tight">{t('training.stages.items.3.title')}</h3>
              <p className="text-[13.5px] text-ink-soft leading-relaxed">{t('training.stages.items.3.desc')}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="hero-bg py-24 relative bg-dark text-white isolate overflow-hidden" id="contact">
        <div className="max-w-container mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-mint-300/20 text-mint-300 text-xs font-bold tracking-[0.14em] uppercase">{t('training.contact.badge')}</span>
              <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight leading-[1.1] mt-4.5 mb-4.5">{t('training.contact.title')}</h2>
              <p className="text-base text-white/75 leading-relaxed max-w-[460px] mb-7">{t('training.contact.desc')}</p>
            </div>

            <div className="reveal bg-white text-ink rounded-r2xl p-9 shadow-mockup">
              <h3 className="text-[22px] font-bold tracking-tight mb-2">{t('training.contact.formTitle')}</h3>
              <p className="text-[13.5px] text-ink-soft mb-5">{t('training.contact.formSubtitle')}</p>
              {!submitted ? (
                <form className="flex flex-col gap-3.5" onSubmit={onSubmit} noValidate>
                  <div className="grid grid-cols-2 gap-3">
                    <input className={input('name')} type="text" name="name" placeholder={t('training.contact.fields.name')} value={form.name} onChange={onChange} required />
                    <input className={input('company')} type="text" name="company" placeholder={t('training.contact.fields.company')} value={form.company} onChange={onChange} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input className={input('email')} type="email" name="email" placeholder={t('training.contact.fields.email')} value={form.email} onChange={onChange} required />
                    <input className={input('phone')} type="tel" name="phone" placeholder={t('training.contact.fields.phone')} value={form.phone} onChange={onChange} />
                  </div>
                  <textarea className="min-h-[110px] px-4 py-3.5 border border-line bg-white rounded-rmd text-[15px] hover:border-line-strong focus:border-mint-400 focus:outline-none focus:ring-4 focus:ring-mint-500/20 transition resize-y leading-relaxed" name="message" placeholder={t('training.contact.fields.message')} value={form.message} onChange={onChange}></textarea>
                  <Button type="submit" fullWidth>{t('training.contact.submit')}</Button>
                  <p className="text-[11.5px] text-ink-mute text-center">{t('training.contact.policy')}</p>
                </form>
              ) : (
                <div className="bg-mint-50 border border-mint-200 rounded-rmd px-4 py-3.5 flex gap-3 items-center text-mint-800 text-[13.5px] font-semibold mt-4">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {t('training.contact.success')}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
