import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, AnchorButton } from '../components/ui/Button';

export default function Implementation() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('implementation.meta.title');
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
              {t('implementation.hero.titleLine1')}<br />{t('implementation.hero.titleLine2Prefix')}<em className="not-italic text-grad-mint">{t('implementation.hero.titleHighlight')}</em>
            </h1>
            <p className="text-[clamp(15px,1.6vw,17px)] text-white/75 leading-relaxed">
              {t('implementation.hero.desc')}
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <AnchorButton href="#contact">{t('implementation.hero.ctaPrimary')}</AnchorButton>
              <AnchorButton href="#stages" variant="secondary" tone="dark">
                {t('implementation.hero.ctaSecondary')}
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M13 5l7 7-7 7" /></svg>
              </AnchorButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24" id="audience">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">{t('implementation.audience.badge')}</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">{t('implementation.audience.title')}</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">{t('implementation.audience.desc')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1080px] mx-auto">
            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">{t('implementation.audience.cards.smm.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('implementation.audience.cards.smm.desc')}</p>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">{t('implementation.audience.cards.production.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('implementation.audience.cards.production.desc')}</p>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="4" /><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" /><circle cx="17" cy="7" r="3" /><path d="M21 21v-2a3 3 0 0 0-3-3" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">{t('implementation.audience.cards.inhouse.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('implementation.audience.cards.inhouse.desc')}</p>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">{t('implementation.audience.cards.tov.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('implementation.audience.cards.tov.desc')}</p>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">{t('implementation.audience.cards.competitors.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('implementation.audience.cards.competitors.desc')}</p>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10" /><path d="M22 2L12 12" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">{t('implementation.audience.cards.collab.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('implementation.audience.cards.collab.desc')}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-mint-50 to-canvas">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">{t('implementation.requirements.badge')}</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">{t('implementation.requirements.title')}</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">{t('implementation.requirements.desc')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-[920px] mx-auto">
            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3">
              <span className="text-xs font-extrabold tracking-[0.14em] uppercase text-mint-600">01</span>
              <h3 className="text-[17px] font-bold tracking-tight">{t('implementation.requirements.items.owner.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('implementation.requirements.items.owner.desc')}</p>
            </article>
            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3">
              <span className="text-xs font-extrabold tracking-[0.14em] uppercase text-mint-600">02</span>
              <h3 className="text-[17px] font-bold tracking-tight">{t('implementation.requirements.items.brand.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('implementation.requirements.items.brand.desc')}</p>
            </article>
            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3">
              <span className="text-xs font-extrabold tracking-[0.14em] uppercase text-mint-600">03</span>
              <h3 className="text-[17px] font-bold tracking-tight">{t('implementation.requirements.items.team.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('implementation.requirements.items.team.desc')}</p>
            </article>
            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3">
              <span className="text-xs font-extrabold tracking-[0.14em] uppercase text-mint-600">04</span>
              <h3 className="text-[17px] font-bold tracking-tight">{t('implementation.requirements.items.sessions.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('implementation.requirements.items.sessions.desc')}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-24" id="stages">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">{t('implementation.stages.badge')}</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">{t('implementation.stages.title')}</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">{t('implementation.stages.desc')}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-5 max-w-[1080px] mx-auto">
            <article className="reveal relative bg-white border border-line rounded-rxl p-8 flex flex-col gap-4 hover:border-mint-200 hover:shadow-soft hover:-translate-y-0.5 transition">
              <div className="flex items-center gap-3 mb-2">
                <span className="stage-num">1</span>
              </div>
              <h3 className="text-xl font-extrabold tracking-tight">{t('implementation.stages.items.start.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('implementation.stages.items.start.desc')}</p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2 list-check text-[13.5px]">
                <li>{t('implementation.stages.items.start.list.0')}</li>
                <li>{t('implementation.stages.items.start.list.1')}</li>
                <li>{t('implementation.stages.items.start.list.2')}</li>
                <li>{t('implementation.stages.items.start.list.3')}</li>
              </ul>
            </article>

            <article className="reveal relative bg-white border border-line rounded-rxl p-8 flex flex-col gap-4 hover:border-mint-200 hover:shadow-soft hover:-translate-y-0.5 transition">
              <div className="flex items-center gap-3 mb-2">
                <span className="stage-num">2</span>
              </div>
              <h3 className="text-xl font-extrabold tracking-tight">{t('implementation.stages.items.setup.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('implementation.stages.items.setup.desc')}</p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2 list-check text-[13.5px]">
                <li>{t('implementation.stages.items.setup.list.0')}</li>
                <li>{t('implementation.stages.items.setup.list.1')}</li>
                <li>{t('implementation.stages.items.setup.list.2')}</li>
                <li>{t('implementation.stages.items.setup.list.3')}</li>
              </ul>
            </article>

            <article className="reveal relative bg-white border border-line rounded-rxl p-8 flex flex-col gap-4 hover:border-mint-200 hover:shadow-soft hover:-translate-y-0.5 transition">
              <div className="flex items-center gap-3 mb-2">
                <span className="stage-num">3</span>
              </div>
              <h3 className="text-xl font-extrabold tracking-tight">{t('implementation.stages.items.launch.title')}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">{t('implementation.stages.items.launch.desc')}</p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2 list-check text-[13.5px]">
                <li>{t('implementation.stages.items.launch.list.0')}</li>
                <li>{t('implementation.stages.items.launch.list.1')}</li>
                <li>{t('implementation.stages.items.launch.list.2')}</li>
                <li>{t('implementation.stages.items.launch.list.3')}</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="hero-bg py-24 relative bg-dark text-white isolate overflow-hidden" id="contact">
        <div className="max-w-container mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-mint-300/20 text-mint-300 text-xs font-bold tracking-[0.14em] uppercase">{t('implementation.contact.badge')}</span>
              <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight leading-[1.1] mt-4.5 mb-4.5">{t('implementation.contact.title')}</h2>
              <p className="text-base text-white/75 leading-relaxed max-w-[460px] mb-7">{t('implementation.contact.desc')}</p>
            </div>

            <div className="reveal bg-white text-ink rounded-r2xl p-9 shadow-mockup">
              <h3 className="text-[22px] font-bold tracking-tight mb-2">{t('implementation.contact.form.title')}</h3>
              <p className="text-[13.5px] text-ink-soft mb-5">{t('implementation.contact.form.subtitle')}</p>
              {!submitted ? (
                <form className="flex flex-col gap-3.5" onSubmit={onSubmit} noValidate>
                  <div className="grid grid-cols-2 gap-3">
                    <input className={input('name')} type="text" name="name" placeholder={t('implementation.contact.form.placeholders.name')} value={form.name} onChange={onChange} required />
                    <input className={input('company')} type="text" name="company" placeholder={t('implementation.contact.form.placeholders.company')} value={form.company} onChange={onChange} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input className={input('email')} type="email" name="email" placeholder={t('implementation.contact.form.placeholders.email')} value={form.email} onChange={onChange} required />
                    <input className={input('phone')} type="tel" name="phone" placeholder={t('implementation.contact.form.placeholders.phone')} value={form.phone} onChange={onChange} />
                  </div>
                  <textarea className="min-h-[110px] px-4 py-3.5 border border-line bg-white rounded-rmd text-[15px] hover:border-line-strong focus:border-mint-400 focus:outline-none focus:ring-4 focus:ring-mint-500/20 transition resize-y leading-relaxed" name="message" placeholder={t('implementation.contact.form.placeholders.message')} value={form.message} onChange={onChange}></textarea>
                  <Button type="submit" fullWidth>{t('implementation.contact.form.submit')}</Button>
                  <p className="text-[11.5px] text-ink-mute text-center">{t('implementation.contact.form.privacy')}</p>
                </form>
              ) : (
                <div className="bg-mint-50 border border-mint-200 rounded-rmd px-4 py-3.5 flex gap-3 items-center text-mint-800 text-[13.5px] font-semibold mt-4">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {t('implementation.contact.form.success')}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
