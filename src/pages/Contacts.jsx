import { useEffect, useState } from 'react';

const SOON_CARDS = [
  { title: 'Телефон', desc: 'Номер для связи появится позже.', icon: (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>) },
  { title: 'Email', desc: 'Адреса для разных задач (продажи, поддержка, партнёрство) появятся позже.', icon: (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z" /><path d="M4 4l8 8 8-8" /></svg>) },
  { title: 'Офис', desc: 'Юридические и физические адреса появятся позже.', icon: (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>) },
];

export default function Contacts() {
  useEffect(() => {
    document.title = 'Контакты — Эвикс';
  }, []);

  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' });
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

  const input = (errorKey, ...extra) =>
    `h-[50px] px-4 border bg-white rounded-rmd text-[15px] hover:border-line-strong focus:border-mint-400 focus:outline-none focus:ring-4 focus:ring-mint-500/20 transition ${errors[errorKey] ? 'border-orange-500' : 'border-line'} ${extra.join(' ')}`;

  return (
    <>
      <section className="hero-bg relative pt-[152px] pb-20 bg-dark text-white isolate overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-6 max-w-[720px] mx-auto">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-300/10 border border-mint-300/20 text-mint-300 text-xs font-bold tracking-[0.14em] uppercase">Контакты</span>
            <h1 className="text-[clamp(32px,5vw,52px)] leading-[1.06] font-extrabold tracking-tight">Свяжитесь с нами</h1>
            <p className="text-[clamp(15px,1.6vw,17px)] text-white/75 leading-relaxed">Телефоны, email и адреса появятся после официального запуска. Пока — пишите через форму, отвечаем по мере поступления заявок.</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-container mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 max-w-[1080px] mx-auto">
            <div className="reveal flex flex-col gap-7">
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight mb-3">Способы связи</h2>
                <p className="text-[14.5px] text-ink-soft leading-relaxed">Сейчас единственный канал — форма обратной связи на сайте. Телефон, email-адреса и офисы появятся после запуска и будут опубликованы здесь.</p>
              </div>

              <div className="flex flex-col gap-3.5">
                <div className="flex items-start gap-4 p-5 bg-white border border-line rounded-rxl">
                  <div className="w-11 h-11 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold mb-1">Форма обратной связи</div>
                    <p className="text-[13px] text-ink-soft leading-relaxed">Оставьте заявку — свяжемся в ближайшее время.</p>
                  </div>
                </div>

                {SOON_CARDS.map((c) => (
                  <div key={c.title} className="flex items-start gap-4 p-5 bg-white border border-dashed border-line-strong rounded-rxl opacity-70">
                    <div className="w-11 h-11 rounded-rmd bg-canvas text-ink-mute grid place-items-center shrink-0">{c.icon}</div>
                    <div>
                      <div className="text-sm font-bold mb-1">
                        {c.title} <span className="ml-1 inline-flex text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-orange-100 text-orange-700">Скоро</span>
                      </div>
                      <p className="text-[13px] text-ink-soft leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal bg-white rounded-r2xl p-9 shadow-soft border border-line">
              <h3 className="text-[22px] font-bold tracking-tight mb-2">Оставить заявку</h3>
              <p className="text-[13.5px] text-ink-soft mb-5">Опишите задачу — свяжемся для уточнения.</p>

              {!submitted ? (
                <form className="flex flex-col gap-3.5" onSubmit={onSubmit} noValidate>
                  <div className="grid grid-cols-2 gap-3">
                    <input className={input('name')} type="text" name="name" placeholder="Имя" value={form.name} onChange={onChange} required />
                    <input className={input('company')} type="text" name="company" placeholder="Компания (не обязательно)" value={form.company} onChange={onChange} />
                  </div>
                  <input className={input('email')} type="email" name="email" placeholder="E-mail" value={form.email} onChange={onChange} required />
                  <textarea
                    className="min-h-[140px] px-4 py-3.5 border border-line bg-white rounded-rmd text-[15px] hover:border-line-strong focus:border-mint-400 focus:outline-none focus:ring-4 focus:ring-mint-500/20 transition resize-y leading-relaxed"
                    name="message" placeholder="Коротко о задаче" value={form.message} onChange={onChange}
                  />
                  <button type="submit" className="inline-flex items-center justify-center gap-2 h-14 w-full rounded-rmd bg-orange-500 text-white text-[15px] font-semibold shadow-orange hover:bg-orange-600 hover:shadow-orange-hover hover:-translate-y-0.5 transition">Отправить</button>
                  <p className="text-[11.5px] text-ink-mute text-center">Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных.</p>
                </form>
              ) : (
                <div className="bg-mint-50 border border-mint-200 rounded-rmd px-4 py-3.5 flex gap-3 items-center text-mint-800 text-[13.5px] font-semibold mt-4">
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Заявка принята. Свяжемся в ближайшее время.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
