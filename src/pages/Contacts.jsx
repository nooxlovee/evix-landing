import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../components/ui/Button';

export default function Contacts() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('contacts.meta.title');
  }, [t]);

  const DETAILS = useMemo(() => {
    const phone = t('contacts.details.phone.value');
    return [
      { key: 'address', label: t('contacts.details.address.label'), value: t('contacts.details.address.value') },
      { key: 'hours',   label: t('contacts.details.hours.label'),   value: t('contacts.details.hours.value'), note: t('contacts.details.hours.note') },
      { key: 'phone',   label: t('contacts.details.phone.label'),   value: phone, href: `tel:${phone.replace(/[^\d+]/g, '')}` },
      { key: 'legal',   label: t('contacts.details.legal.label'),   value: t('contacts.details.legal.value'), note: t('contacts.details.legal.note'), fine: true },
    ];
  }, [t]);

  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const successRef = useRef(null);

  useEffect(() => {
    if (submitted) successRef.current?.focus();
  }, [submitted]);

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
    `h-[50px] px-4 border bg-white rounded-rmd text-[15px] hover:border-line-strong focus:border-mint-400 focus:outline-none focus:ring-4 focus:ring-mint-500/20 transition ${errors[errorKey] ? 'border-red-500' : 'border-line'}`;

  return (
    <>
      <section className="hero-bg relative pt-[152px] pb-20 bg-dark text-white isolate overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-6 max-w-[720px] mx-auto">
            <h1 className="text-[clamp(32px,5vw,52px)] leading-[1.06] font-extrabold tracking-tight">{t('contacts.hero.title')}</h1>
            <p className="text-[clamp(15px,1.6vw,17px)] text-white/75 leading-relaxed">{t('contacts.hero.desc')}</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-container mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 max-w-[1080px] mx-auto">
            <div className="reveal flex flex-col gap-7">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight mb-3">{t('contacts.channels.title')}</h2>
                <p className="text-[14.5px] text-ink-soft leading-relaxed">{t('contacts.channels.desc')}</p>
              </div>

              <div className="flex flex-col gap-3.5">
                <div className="flex items-start gap-4 p-5 bg-white border border-line rounded-rxl">
                  <div>
                    <div className="text-sm font-bold mb-1">{t('contacts.channels.form.title')}</div>
                    <p className="text-[13px] text-ink-soft leading-relaxed">{t('contacts.channels.form.desc')}</p>
                  </div>
                </div>

                <div className="bg-white border border-line rounded-rxl p-6 sm:p-7">
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                    {DETAILS.map((d) => (
                      <div key={d.key}>
                        <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-mute">{d.label}</div>
                        {d.href ? (
                          <a href={d.href} className="mt-2 inline-block text-[17px] font-bold tracking-tight tabular-nums text-ink hover:text-brand-deep transition-colors">{d.value}</a>
                        ) : (
                          <div className={`mt-2 leading-snug text-ink ${d.fine ? 'text-[14px] font-semibold' : 'text-[17px] font-bold tracking-tight'}`}>{d.value}</div>
                        )}
                        {d.note && (
                          <div className={`mt-1 leading-relaxed text-ink-soft ${d.fine ? 'text-[12px] tabular-nums' : 'text-[13px]'}`}>{d.note}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal bg-white rounded-r2xl p-9 shadow-soft border border-line">
              <h3 className="text-[22px] font-bold tracking-tight mb-2">{t('contacts.form.title')}</h3>
              <p className="text-[13.5px] text-ink-soft mb-5">{t('contacts.form.desc')}</p>

              {!submitted ? (
                <form className="flex flex-col gap-3.5" onSubmit={onSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex flex-col">
                      <input className={input('name')} type="text" name="name" placeholder={t('contacts.form.fields.name')} aria-label={t('contacts.form.fields.name')} value={form.name} onChange={onChange} required aria-invalid={!!errors.name} aria-describedby={errors.name ? 'contacts-name-error' : undefined} />
                      {errors.name && <p id="contacts-name-error" role="alert" className="mt-1.5 text-[12px] text-red-600">{t('contacts.form.errors.name')}</p>}
                    </div>
                    <input className={input('company')} type="text" name="company" placeholder={t('contacts.form.fields.company')} aria-label={t('contacts.form.fields.company')} value={form.company} onChange={onChange} />
                  </div>
                  <div className="flex flex-col">
                    <input className={input('email')} type="email" name="email" placeholder={t('contacts.form.fields.email')} aria-label={t('contacts.form.fields.email')} value={form.email} onChange={onChange} required aria-invalid={!!errors.email} aria-describedby={errors.email ? 'contacts-email-error' : undefined} />
                    {errors.email && <p id="contacts-email-error" role="alert" className="mt-1.5 text-[12px] text-red-600">{t('contacts.form.errors.email')}</p>}
                  </div>
                  <textarea
                    className="min-h-[140px] px-4 py-3.5 border border-line bg-white rounded-rmd text-[15px] hover:border-line-strong focus:border-mint-400 focus:outline-none focus:ring-4 focus:ring-mint-500/20 transition resize-y leading-relaxed"
                    name="message" placeholder={t('contacts.form.fields.message')} aria-label={t('contacts.form.fields.message')} value={form.message} onChange={onChange}
                  />
                  <Button type="submit" fullWidth>{t('contacts.form.submit')}</Button>
                  <p className="text-[11.5px] text-ink-mute text-center">{t('contacts.form.consent')}</p>
                </form>
              ) : (
                <div ref={successRef} role="status" aria-live="polite" tabIndex={-1} className="bg-mint-50 border border-mint-200 rounded-rmd px-4 py-3.5 flex gap-3 items-center text-mint-800 text-[13.5px] font-semibold mt-4 focus:outline-none">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {t('contacts.form.success')}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
