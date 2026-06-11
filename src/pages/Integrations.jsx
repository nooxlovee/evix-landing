import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, AnchorButton } from '../components/ui/Button';

export default function Integrations() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('integrations.meta.title');
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
              {t('integrations.hero.titleLine1')}<br />{t('integrations.hero.titleAnd')}<em className="not-italic text-grad-mint">{t('integrations.hero.titleHighlight')}</em>
            </h1>
            <p className="text-[clamp(15px,1.6vw,17px)] text-white/75 leading-relaxed">
              {t('integrations.hero.desc')}
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <AnchorButton href="#capabilities">{t('integrations.hero.ctaPrimary')}</AnchorButton>
              <AnchorButton href="#categories" variant="secondary" tone="dark">
                {t('integrations.hero.ctaSecondary')}
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M13 5l7 7-7 7" /></svg>
              </AnchorButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24" id="capabilities">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">{t('integrations.capabilities.badge')}</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">{t('integrations.capabilities.title')}</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">{t('integrations.capabilities.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1080px] mx-auto">
            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">{t('integrations.capabilities.items.0.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('integrations.capabilities.items.0.desc')}</p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2 list-check text-[13.5px]">
                <li>{t('integrations.capabilities.items.0.bullets.0')}</li>
                <li>{t('integrations.capabilities.items.0.bullets.1')}</li>
                <li>{t('integrations.capabilities.items.0.bullets.2')}</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">{t('integrations.capabilities.items.1.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('integrations.capabilities.items.1.desc')}</p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2 list-check text-[13.5px]">
                <li>{t('integrations.capabilities.items.1.bullets.0')}</li>
                <li>{t('integrations.capabilities.items.1.bullets.1')}</li>
                <li>{t('integrations.capabilities.items.1.bullets.2')}</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">{t('integrations.capabilities.items.2.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('integrations.capabilities.items.2.desc')}</p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2 list-check text-[13.5px]">
                <li>{t('integrations.capabilities.items.2.bullets.0')}</li>
                <li>{t('integrations.capabilities.items.2.bullets.1')}</li>
                <li>{t('integrations.capabilities.items.2.bullets.2')}</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">{t('integrations.capabilities.items.3.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('integrations.capabilities.items.3.desc')}</p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2 list-check text-[13.5px]">
                <li>{t('integrations.capabilities.items.3.bullets.0')}</li>
                <li>{t('integrations.capabilities.items.3.bullets.1')}</li>
                <li>{t('integrations.capabilities.items.3.bullets.2')}</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">{t('integrations.capabilities.items.4.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('integrations.capabilities.items.4.desc')}</p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2 list-check text-[13.5px]">
                <li>{t('integrations.capabilities.items.4.bullets.0')}</li>
                <li>{t('integrations.capabilities.items.4.bullets.1')}</li>
                <li>{t('integrations.capabilities.items.4.bullets.2')}</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">{t('integrations.capabilities.items.5.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('integrations.capabilities.items.5.desc')}</p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2 list-check text-[13.5px]">
                <li>{t('integrations.capabilities.items.5.bullets.0')}</li>
                <li>{t('integrations.capabilities.items.5.bullets.1')}</li>
                <li>{t('integrations.capabilities.items.5.bullets.2')}</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-mint-50 to-canvas" id="categories">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">{t('integrations.categories.badge')}</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">{t('integrations.categories.title')}</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">{t('integrations.categories.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-7 max-w-[1080px] mx-auto">
            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-4">
              <header className="flex items-center gap-3 pb-4 border-b border-line">
                <div className="w-11 h-11 rounded-rmd bg-mint-500 text-white grid place-items-center">
                  <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" /></svg>
                </div>
                <div>
                  <h3 className="text-[17px] font-extrabold tracking-tight">{t('integrations.categories.items.0.title')}</h3>
                  <div className="text-[12px] text-ink-mute mt-0.5">{t('integrations.categories.items.0.subtitle')}</div>
                </div>
              </header>
              <p className="text-[13.5px] text-ink-soft leading-relaxed">{t('integrations.categories.items.0.desc')}</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-mint-50 text-mint-800 text-[12.5px] font-semibold">{t('integrations.categories.items.0.tags.0')}</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-mint-50 text-mint-800 text-[12.5px] font-semibold">{t('integrations.categories.items.0.tags.1')}</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-mint-50 text-mint-800 text-[12.5px] font-semibold">{t('integrations.categories.items.0.tags.2')}</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-mint-50 text-mint-800 text-[12.5px] font-semibold">{t('integrations.categories.items.0.tags.3')}</span>
              </div>
              <div className="text-[12.5px] text-ink-mute leading-relaxed pt-2 border-t border-line">
                <strong className="text-ink">{t('integrations.categories.items.0.exampleLabel')}</strong>{t('integrations.categories.items.0.exampleText')}
              </div>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-4">
              <header className="flex items-center gap-3 pb-4 border-b border-line">
                <div className="w-11 h-11 rounded-rmd bg-mint-500 text-white grid place-items-center">
                  <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12l5-9 5 5 5-3 5 7-5 8H7z" /></svg>
                </div>
                <div>
                  <h3 className="text-[17px] font-extrabold tracking-tight">{t('integrations.categories.items.1.title')}</h3>
                  <div className="text-[12px] text-ink-mute mt-0.5">{t('integrations.categories.items.1.subtitle')}</div>
                </div>
              </header>
              <p className="text-[13.5px] text-ink-soft leading-relaxed">{t('integrations.categories.items.1.desc')}</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-mint-50 text-mint-800 text-[12.5px] font-semibold">{t('integrations.categories.items.1.tags.0')}</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-mint-50 text-mint-800 text-[12.5px] font-semibold">{t('integrations.categories.items.1.tags.1')}</span>
              </div>
              <div className="text-[12.5px] text-ink-mute leading-relaxed pt-2 border-t border-line">
                <strong className="text-ink">{t('integrations.categories.items.1.exampleLabel')}</strong>{t('integrations.categories.items.1.exampleText')}
              </div>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-4">
              <header className="flex items-center gap-3 pb-4 border-b border-line">
                <div className="w-11 h-11 rounded-rmd bg-mint-500 text-white grid place-items-center">
                  <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a13 13 0 0 1 0 18" /><path d="M12 3a13 13 0 0 0 0 18" /></svg>
                </div>
                <div>
                  <h3 className="text-[17px] font-extrabold tracking-tight">{t('integrations.categories.items.2.title')}</h3>
                  <div className="text-[12px] text-ink-mute mt-0.5">{t('integrations.categories.items.2.subtitle')}</div>
                </div>
              </header>
              <p className="text-[13.5px] text-ink-soft leading-relaxed">{t('integrations.categories.items.2.desc')}</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-mint-50 text-mint-800 text-[12.5px] font-semibold">{t('integrations.categories.items.2.tags.0')}</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-mint-50 text-mint-800 text-[12.5px] font-semibold">{t('integrations.categories.items.2.tags.1')}</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-mint-50 text-mint-800 text-[12.5px] font-semibold">{t('integrations.categories.items.2.tags.2')}</span>
              </div>
              <div className="text-[12.5px] text-ink-mute leading-relaxed pt-2 border-t border-line">
                <strong className="text-ink">{t('integrations.categories.items.2.exampleLabel')}</strong>{t('integrations.categories.items.2.exampleText')}
              </div>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-4">
              <header className="flex items-center gap-3 pb-4 border-b border-line">
                <div className="w-11 h-11 rounded-rmd bg-mint-500 text-white grid place-items-center">
                  <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                </div>
                <div>
                  <h3 className="text-[17px] font-extrabold tracking-tight">{t('integrations.categories.items.3.title')}</h3>
                  <div className="text-[12px] text-ink-mute mt-0.5">{t('integrations.categories.items.3.subtitle')}</div>
                </div>
              </header>
              <p className="text-[13.5px] text-ink-soft leading-relaxed">{t('integrations.categories.items.3.desc')}</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-mint-50 text-mint-800 text-[12.5px] font-semibold">{t('integrations.categories.items.3.tags.0')}</span>
              </div>
              <div className="text-[12.5px] text-ink-mute leading-relaxed pt-2 border-t border-line">
                <strong className="text-ink">{t('integrations.categories.items.3.exampleLabel')}</strong>{t('integrations.categories.items.3.exampleText')}
              </div>
            </article>
          </div>

          <div className="reveal mt-12 max-w-[820px] mx-auto bg-white border border-line rounded-rxl p-6">
            <p className="text-sm text-ink-soft leading-relaxed"><strong className="text-ink">{t('integrations.categories.noteLabel')}</strong>{t('integrations.categories.noteText')}</p>
          </div>
        </div>
      </section>

      <section className="hero-bg py-24 relative bg-dark text-white isolate overflow-hidden" id="contact">
        <div className="max-w-container mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-mint-300/20 text-mint-300 text-xs font-bold tracking-[0.14em] uppercase">{t('integrations.contact.badge')}</span>
              <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight leading-[1.1] mt-4.5 mb-4.5">{t('integrations.contact.title')}</h2>
              <p className="text-base text-white/75 leading-relaxed max-w-[460px] mb-7">{t('integrations.contact.desc')}</p>
            </div>

            <div className="reveal bg-white text-ink rounded-r2xl p-9 shadow-mockup">
              <h3 className="text-[22px] font-bold tracking-tight mb-2">{t('integrations.contact.formTitle')}</h3>
              <p className="text-[13.5px] text-ink-soft mb-5">{t('integrations.contact.formSubtitle')}</p>
              {!submitted ? (
                <form className="flex flex-col gap-3.5" onSubmit={onSubmit} noValidate>
                  <div className="grid grid-cols-2 gap-3">
                    <input className={input('name')} type="text" name="name" placeholder={t('integrations.contact.placeholders.name')} value={form.name} onChange={onChange} required />
                    <input className={input('company')} type="text" name="company" placeholder={t('integrations.contact.placeholders.company')} value={form.company} onChange={onChange} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input className={input('email')} type="email" name="email" placeholder={t('integrations.contact.placeholders.email')} value={form.email} onChange={onChange} required />
                    <input className={input('phone')} type="tel" name="phone" placeholder={t('integrations.contact.placeholders.phone')} value={form.phone} onChange={onChange} />
                  </div>
                  <textarea className="min-h-[110px] px-4 py-3.5 border border-line bg-white rounded-rmd text-[15px] hover:border-line-strong focus:border-mint-400 focus:outline-none focus:ring-4 focus:ring-mint-500/20 transition resize-y leading-relaxed" name="message" placeholder={t('integrations.contact.placeholders.message')} value={form.message} onChange={onChange}></textarea>
                  <Button type="submit" fullWidth>{t('integrations.contact.submit')}</Button>
                  <p className="text-[11.5px] text-ink-mute text-center">{t('integrations.contact.consent')}</p>
                </form>
              ) : (
                <div className="bg-mint-50 border border-mint-200 rounded-rmd px-4 py-3.5 flex gap-3 items-center text-mint-800 text-[13.5px] font-semibold mt-4">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {t('integrations.contact.success')}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
