import { useEffect, useState } from 'react';

export default function Implementation() {
  useEffect(() => {
    document.title = 'Внедрение — Эвикс';
  }, []);

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
            <div className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full bg-mint-300/10 border border-mint-300/20 text-mint-300 text-[12.5px] font-semibold">
              <span className="w-[22px] h-[22px] rounded-full bg-mint-500 grid place-items-center text-[#04241a] text-xs font-extrabold">↗</span>
              Внедрение
            </div>
            <h1 className="text-[clamp(32px,5vw,52px)] leading-[1.06] font-extrabold tracking-tight">
              Встроим Эвикс<br />в <em className="not-italic text-grad-mint">работу вашей команды</em>
            </h1>
            <p className="text-[clamp(15px,1.6vw,17px)] text-white/75 leading-relaxed">
              Перенесём клиентов, настроим ядра, проведём команду по процессу. Дальше — продукт работает сам, без нашего постоянного участия.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-rmd bg-orange-500 text-white text-[15px] font-semibold shadow-orange hover:bg-orange-600 hover:shadow-orange-hover hover:-translate-y-0.5 transition">Обсудить внедрение</a>
              <a href="#stages" className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-rmd bg-white/10 backdrop-blur-sm text-white border border-white/20 text-[15px] font-semibold hover:bg-white/20 hover:border-white/30 transition">
                Посмотреть этапы
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M13 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24" id="audience">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">Кому подходит</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">Когда наше внедрение действительно нужно</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">Если кабинет можно поднять самим — не настаиваем. Внедрение полезно, когда команда большая, клиентов много или процессы уже сложились и их нельзя ломать.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1080px] mx-auto">
            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">SMM-агентствам с пулом клиентов</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">Когда нужно перенести всех клиентов и команду в один кабинет, не остановив текущие проекты.</p>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">Продакшен-студиям</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">У которых уже сложился свой пайплайн — мы встраиваем Эвикс в него, а не наоборот.</p>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="4" /><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" /><circle cx="17" cy="7" r="3" /><path d="M21 21v-2a3 3 0 0 0-3-3" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">In-house командам бренда</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">Когда контентом занимается несколько отделов, и нужны общие данные и роли с разграничением прав.</p>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">Брендам с разработанным ToV</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">Если у вас уже есть фирменный голос, маркетинговый и продуктовый анализ — перенесём их в ядра кабинета.</p>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">Командам с готовой базой конкурентов</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">Когда у вас уже собран список конкурентов и форматов — поможем перенести и связать с парсингом.</p>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10" /><path d="M22 2L12 12" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">Тем, у кого важна командная работа</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">Когда нужно разнести права между владельцем, менеджерами и исполнителями без сторонних SaaS.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-mint-50 to-canvas">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">Что требуется от вас</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">Минимум вовлечения с вашей стороны</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">Чем больше вы готовы дать на старте, тем точнее результат. Если чего-то нет — соберём в процессе.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-[920px] mx-auto">
            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3">
              <span className="text-xs font-extrabold tracking-[0.14em] uppercase text-mint-600">01</span>
              <h3 className="text-[17px] font-bold tracking-tight">Ответственный со стороны клиента</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">Один человек, который принимает решения по ToV, ролям и доступам. Без него внедрение буксует.</p>
            </article>
            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3">
              <span className="text-xs font-extrabold tracking-[0.14em] uppercase text-mint-600">02</span>
              <h3 className="text-[17px] font-bold tracking-tight">Доступ к материалам по бренду</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">Брендбук, описание продукта, примеры сценариев, рабочие соцсети — всё, что поможет собрать ядра.</p>
            </article>
            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3">
              <span className="text-xs font-extrabold tracking-[0.14em] uppercase text-mint-600">03</span>
              <h3 className="text-[17px] font-bold tracking-tight">Список команды и ролей</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">Кто будет работать в кабинете, какие у них зоны ответственности — нужно для настройки прав и привязки к клиентам.</p>
            </article>
            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3">
              <span className="text-xs font-extrabold tracking-[0.14em] uppercase text-mint-600">04</span>
              <h3 className="text-[17px] font-bold tracking-tight">Несколько рабочих сессий</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">Созвоны на старте, при переносе клиентов и на финале — без них теряется контекст. Точное число обсудим в начале.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-24" id="stages">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">Что делаем мы</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">Внедрение в три этапа</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">Без жёсткого тайминга — каждый этап двигаемся, когда предыдущий действительно закрыт. Скорость зависит от размера команды и количества клиентов.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-5 max-w-[1080px] mx-auto">
            <article className="reveal relative bg-white border border-line rounded-rxl p-8 flex flex-col gap-4 hover:border-mint-200 hover:shadow-soft hover:-translate-y-0.5 transition">
              <div className="flex items-center gap-3 mb-2">
                <span className="stage-num">1</span>
              </div>
              <h3 className="text-xl font-extrabold tracking-tight">Старт и сбор данных</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">Знакомимся с командой, проходим квиз ToV, собираем материалы по бренду и фиксируем процессы, в которые встраиваем продукт.</p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2 list-check text-[13.5px]">
                <li>Стартовая встреча с владельцем и руководителями</li>
                <li>Прохождение квиза ToV</li>
                <li>Сбор материалов по бренду и продукту</li>
                <li>Фиксация ролей команды</li>
              </ul>
            </article>

            <article className="reveal relative bg-white border border-line rounded-rxl p-8 flex flex-col gap-4 hover:border-mint-200 hover:shadow-soft hover:-translate-y-0.5 transition">
              <div className="flex items-center gap-3 mb-2">
                <span className="stage-num">2</span>
              </div>
              <h3 className="text-xl font-extrabold tracking-tight">Настройка кабинета</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">Заполняем ядра клиента, переносим конкурентов, аватары и форматы. Подключаем соцсети, раздаём роли команде.</p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2 list-check text-[13.5px]">
                <li>Сборка пяти ядер: ToV, маркетинг, продукт, аккаунт, ниша</li>
                <li>Перенос конкурентов и визуальных форматов</li>
                <li>Подключение соцсетей</li>
                <li>Раздача ролей и доступов</li>
              </ul>
            </article>

            <article className="reveal relative bg-white border border-line rounded-rxl p-8 flex flex-col gap-4 hover:border-mint-200 hover:shadow-soft hover:-translate-y-0.5 transition">
              <div className="flex items-center gap-3 mb-2">
                <span className="stage-num">3</span>
              </div>
              <h3 className="text-xl font-extrabold tracking-tight">Запуск в работу</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">Проходим конвейер на пилотных сценариях, проверяем, что монтаж и публикации работают, и отдаём студии под самостоятельную работу.</p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2 list-check text-[13.5px]">
                <li>Пилотные сценарии под клиента</li>
                <li>Проверка автомонтажа и публикаций</li>
                <li>Корректировка ядер по результатам</li>
                <li>Передача кабинета под самостоятельную работу</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="hero-bg py-24 relative bg-dark text-white isolate overflow-hidden" id="contact">
        <div className="max-w-container mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-mint-300/20 text-mint-300 text-xs font-bold tracking-[0.14em] uppercase">Обсудить внедрение</span>
              <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight leading-[1.1] mt-4.5 mb-4.5">Расскажите про команду — соберём план</h2>
              <p className="text-base text-white/75 leading-relaxed max-w-[460px] mb-7">Оставьте заявку. Уточним размер команды, число клиентов и нужные модули — и предложим план под ваш кейс.</p>
            </div>

            <div className="reveal bg-white text-ink rounded-r2xl p-9 shadow-mockup">
              <h3 className="text-[22px] font-bold tracking-tight mb-2">Заявка на внедрение</h3>
              <p className="text-[13.5px] text-ink-soft mb-5">Свяжемся в ближайшее время.</p>
              {!submitted ? (
                <form className="flex flex-col gap-3.5" onSubmit={onSubmit} noValidate>
                  <div className="grid grid-cols-2 gap-3">
                    <input className={input('name')} type="text" name="name" placeholder="Имя" value={form.name} onChange={onChange} required />
                    <input className={input('company')} type="text" name="company" placeholder="Студия / компания" value={form.company} onChange={onChange} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input className={input('email')} type="email" name="email" placeholder="E-mail" value={form.email} onChange={onChange} required />
                    <input className={input('phone')} type="tel" name="phone" placeholder="Телефон" value={form.phone} onChange={onChange} />
                  </div>
                  <textarea className="min-h-[110px] px-4 py-3.5 border border-line bg-white rounded-rmd text-[15px] hover:border-line-strong focus:border-mint-400 focus:outline-none focus:ring-4 focus:ring-mint-500/20 transition resize-y leading-relaxed" name="message" placeholder="Размер команды, число клиентов, текущие сервисы…" value={form.message} onChange={onChange}></textarea>
                  <button type="submit" className="inline-flex items-center justify-center gap-2 h-14 w-full rounded-rmd bg-orange-500 text-white text-[15px] font-semibold shadow-orange hover:bg-orange-600 hover:shadow-orange-hover hover:-translate-y-0.5 transition">Отправить заявку</button>
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
