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
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
    } else {
      const firstInvalid = next.name ? 'name' : 'email';
      document.querySelector(`[name="${firstInvalid}"]`)?.focus();
    }
  };

  const input = (errorKey) =>
    `h-[50px] px-4 border bg-white rounded-rmd text-[15px] hover:border-line-strong focus:border-mint-400 focus:outline-none focus:ring-4 focus:ring-mint-500/20 transition ${errors[errorKey] ? 'border-red-500' : 'border-line'}`;

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
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">{t('integrations.capabilities.title')}</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">{t('integrations.capabilities.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1080px] mx-auto">
            <article className="reveal md:col-span-2 bg-mint-50 border border-mint-200 rounded-rxl p-8 flex flex-col gap-4">
              <h3 className="text-[26px] font-extrabold tracking-tight leading-[1.1]">{t('integrations.capabilities.items.0.title')}</h3>
              <p className="text-[15px] text-ink-soft leading-relaxed max-w-[640px]">{t('integrations.capabilities.items.0.desc')}</p>
              <ul className="list-none m-0 p-0 grid sm:grid-cols-3 gap-2 list-check text-[13.5px]">
                <li>{t('integrations.capabilities.items.0.bullets.0')}</li>
                <li>{t('integrations.capabilities.items.0.bullets.1')}</li>
                <li>{t('integrations.capabilities.items.0.bullets.2')}</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <h3 className="text-lg font-bold tracking-tight">{t('integrations.capabilities.items.1.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('integrations.capabilities.items.1.desc')}</p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2 list-check text-[13.5px]">
                <li>{t('integrations.capabilities.items.1.bullets.0')}</li>
                <li>{t('integrations.capabilities.items.1.bullets.1')}</li>
                <li>{t('integrations.capabilities.items.1.bullets.2')}</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <h3 className="text-lg font-bold tracking-tight">{t('integrations.capabilities.items.2.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('integrations.capabilities.items.2.desc')}</p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2 list-check text-[13.5px]">
                <li>{t('integrations.capabilities.items.2.bullets.0')}</li>
                <li>{t('integrations.capabilities.items.2.bullets.1')}</li>
                <li>{t('integrations.capabilities.items.2.bullets.2')}</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <h3 className="text-lg font-bold tracking-tight">{t('integrations.capabilities.items.3.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('integrations.capabilities.items.3.desc')}</p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2 list-check text-[13.5px]">
                <li>{t('integrations.capabilities.items.3.bullets.0')}</li>
                <li>{t('integrations.capabilities.items.3.bullets.1')}</li>
                <li>{t('integrations.capabilities.items.3.bullets.2')}</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <h3 className="text-lg font-bold tracking-tight">{t('integrations.capabilities.items.4.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('integrations.capabilities.items.4.desc')}</p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2 list-check text-[13.5px]">
                <li>{t('integrations.capabilities.items.4.bullets.0')}</li>
                <li>{t('integrations.capabilities.items.4.bullets.1')}</li>
                <li>{t('integrations.capabilities.items.4.bullets.2')}</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
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
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">{t('integrations.categories.title')}</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">{t('integrations.categories.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-7 max-w-[1080px] mx-auto">
            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-4">
              <header className="flex items-center gap-3 pb-4 border-b border-line">
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
              <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight leading-[1.1] mt-4.5 mb-4.5">{t('integrations.contact.title')}</h2>
              <p className="text-base text-white/75 leading-relaxed max-w-[460px] mb-7">{t('integrations.contact.desc')}</p>
            </div>

            <div className="reveal bg-white text-ink rounded-r2xl p-9 shadow-mockup">
              <h3 className="text-[22px] font-bold tracking-tight mb-2">{t('integrations.contact.formTitle')}</h3>
              <p className="text-[13.5px] text-ink-soft mb-5">{t('integrations.contact.formSubtitle')}</p>
              {!submitted ? (
                <form className="flex flex-col gap-3.5" onSubmit={onSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex flex-col">
                      <input className={input('name')} type="text" name="name" aria-label={t('integrations.contact.labels.name')} placeholder={t('integrations.contact.placeholders.name')} value={form.name} onChange={onChange} required aria-invalid={!!errors.name} aria-describedby={errors.name ? 'integ-name-error' : undefined} />
                      {errors.name && <p id="integ-name-error" role="alert" className="mt-1.5 text-[12px] text-red-600">{t('integrations.contact.errors.name')}</p>}
                    </div>
                    <input className={input('company')} type="text" name="company" aria-label={t('integrations.contact.labels.company')} placeholder={t('integrations.contact.placeholders.company')} value={form.company} onChange={onChange} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex flex-col">
                      <input className={input('email')} type="email" name="email" aria-label={t('integrations.contact.labels.email')} placeholder={t('integrations.contact.placeholders.email')} value={form.email} onChange={onChange} required aria-invalid={!!errors.email} aria-describedby={errors.email ? 'integ-email-error' : undefined} />
                      {errors.email && <p id="integ-email-error" role="alert" className="mt-1.5 text-[12px] text-red-600">{t('integrations.contact.errors.email')}</p>}
                    </div>
                    <input className={input('phone')} type="tel" name="phone" aria-label={t('integrations.contact.labels.phone')} placeholder={t('integrations.contact.placeholders.phone')} value={form.phone} onChange={onChange} />
                  </div>
                  <textarea className="min-h-[110px] px-4 py-3.5 border border-line bg-white rounded-rmd text-[15px] hover:border-line-strong focus:border-mint-400 focus:outline-none focus:ring-4 focus:ring-mint-500/20 transition resize-y leading-relaxed" name="message" aria-label={t('integrations.contact.labels.message')} placeholder={t('integrations.contact.placeholders.message')} value={form.message} onChange={onChange}></textarea>
                  <Button type="submit" fullWidth>{t('integrations.contact.submit')}</Button>
                  <p className="text-[11.5px] text-ink-mute text-center">{t('integrations.contact.consent')}</p>
                </form>
              ) : (
                <div role="status" aria-live="polite" className="bg-mint-50 border border-mint-200 rounded-rmd px-4 py-3.5 flex gap-3 items-center text-mint-800 text-[13.5px] font-semibold mt-4">
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
