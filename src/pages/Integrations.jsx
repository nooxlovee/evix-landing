import { useEffect, useState } from 'react';

export default function Integrations() {
  useEffect(() => {
    document.title = 'Интеграции — Эвикс';
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
              <span className="w-[22px] h-[22px] rounded-full bg-mint-500 grid place-items-center text-[#04241a] text-xs font-extrabold">↔</span>
              Интеграции
            </div>
            <h1 className="text-[clamp(32px,5vw,52px)] leading-[1.06] font-extrabold tracking-tight">
              Подключение соцсетей<br />и <em className="not-italic text-grad-mint">площадок</em>
            </h1>
            <p className="text-[clamp(15px,1.6vw,17px)] text-white/75 leading-relaxed">
              Все возможности продукта по работе со сторонними площадками — для парсинга конкурентов, сбора виральных роликов и трекинга публикаций.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a href="#capabilities" className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-rmd bg-orange-500 text-white text-[15px] font-semibold shadow-orange hover:bg-orange-600 hover:shadow-orange-hover hover:-translate-y-0.5 transition">Посмотреть возможности</a>
              <a href="#categories" className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-rmd bg-white/10 backdrop-blur-sm text-white border border-white/20 text-[15px] font-semibold hover:bg-white/20 hover:border-white/30 transition">
                Категории и примеры
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M13 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24" id="capabilities">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">Возможности интеграции</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">Что Эвикс умеет делать с внешними ресурсами</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">Все возможности продукта по работе со сторонними площадками — в одном списке.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1080px] mx-auto">
            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">Парсинг конкурентов</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">Скрап аккаунтов и роликов конкурентов с фильтрами периода, охватов и просмотров. Вручную и через автопоиск по нише.</p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2 list-check text-[13.5px]">
                <li>Автопоиск по нише и аудитории</li>
                <li>Ручное и массовое добавление</li>
                <li>Фильтры периода и метрик</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">Сбор виральных роликов</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">Сетка «залетевших» видео по площадкам — с метриками, превью и возможностью добавить в избранное команды.</p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2 list-check text-[13.5px]">
                <li>Топ по охватам</li>
                <li>Превью и метрики</li>
                <li>Перенос в библиотеку форматов</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">Анализ виральных роликов</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">Транскрибация, таймлайн, разметка по хуку, удержанию и триггерам. На выходе — шаблон для своего сценария.</p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2 list-check text-[13.5px]">
                <li>Транскрибация ролика</li>
                <li>Разбор по хуку и триггерам</li>
                <li>Готовый шаблон сценария</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">Трекинг публикаций</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">Учёт выложенных роликов по площадкам с превью, описанием и метриками. Привязка к смонтированному ролику в кабинете.</p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2 list-check text-[13.5px]">
                <li>Карточка публикации с превью</li>
                <li>Просмотры и лайки</li>
                <li>Привязка к сценарию и обложке</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">Подключение аккаунтов</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">Привязка соцсетей клиента в профиле и в библиотеке данных — управляется владельцем и менеджерами.</p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2 list-check text-[13.5px]">
                <li>Привязка в профиле клиента</li>
                <li>Видна команде с правом доступа</li>
                <li>Используется в публикациях и парсинге</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">Перенос форматов в библиотеку</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">Понравившийся виральный формат из любой площадки добавляется в базу визуальных форматов и применяется в сценариях.</p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2 list-check text-[13.5px]">
                <li>Один клик из ленты конкурентов</li>
                <li>Сохранение под клиента</li>
                <li>Использование при создании сценария</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-mint-50 to-canvas" id="categories">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">Категории и примеры</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">Категории площадок и примеры подключений</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">Каждая площадка покрывает свой набор задач: где-то — только парсинг конкурентов, где-то — и парсинг, и трекинг публикаций.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-7 max-w-[1080px] mx-auto">
            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-4">
              <header className="flex items-center gap-3 pb-4 border-b border-line">
                <div className="w-11 h-11 rounded-rmd bg-mint-500 text-white grid place-items-center">
                  <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" /></svg>
                </div>
                <div>
                  <h3 className="text-[17px] font-extrabold tracking-tight">Видео-площадки с трекингом</h3>
                  <div className="text-[12px] text-ink-mute mt-0.5">Парсинг + публикации</div>
                </div>
              </header>
              <p className="text-[13.5px] text-ink-soft leading-relaxed">Площадки, по которым работает и анализ конкурентов, и учёт собственных публикаций с метриками.</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-mint-50 text-mint-800 text-[12.5px] font-semibold">Instagram</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-mint-50 text-mint-800 text-[12.5px] font-semibold">TikTok</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-mint-50 text-mint-800 text-[12.5px] font-semibold">YouTube</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-mint-50 text-mint-800 text-[12.5px] font-semibold">ВКонтакте</span>
              </div>
              <div className="text-[12.5px] text-ink-mute leading-relaxed pt-2 border-t border-line">
                <strong className="text-ink">Пример:</strong> добавили публикацию ролика в Instagram → в карточке видно превью, дату, описание и метрики. Параллельно конкуренты в этой же сети парсятся в раздел «Залетевшие видео».
              </div>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-4">
              <header className="flex items-center gap-3 pb-4 border-b border-line">
                <div className="w-11 h-11 rounded-rmd bg-mint-500 text-white grid place-items-center">
                  <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12l5-9 5 5 5-3 5 7-5 8H7z" /></svg>
                </div>
                <div>
                  <h3 className="text-[17px] font-extrabold tracking-tight">Короткие форматы видео</h3>
                  <div className="text-[12px] text-ink-mute mt-0.5">Парсинг конкурентов</div>
                </div>
              </header>
              <p className="text-[13.5px] text-ink-soft leading-relaxed">Дополнительные форматы для глубокого анализа конкурентов — там, где живёт большой пул виральных роликов.</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-mint-50 text-mint-800 text-[12.5px] font-semibold">YouTube Shorts</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-mint-50 text-mint-800 text-[12.5px] font-semibold">VK Клипы</span>
              </div>
              <div className="text-[12.5px] text-ink-mute leading-relaxed pt-2 border-t border-line">
                <strong className="text-ink">Пример:</strong> в автопоиске выбрали YouTube Shorts и VK Клипы — Эвикс предлагает аккаунты по ER и охватам, дальше парсятся залетевшие ролики с разбором.
              </div>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-4">
              <header className="flex items-center gap-3 pb-4 border-b border-line">
                <div className="w-11 h-11 rounded-rmd bg-mint-500 text-white grid place-items-center">
                  <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a13 13 0 0 1 0 18" /><path d="M12 3a13 13 0 0 0 0 18" /></svg>
                </div>
                <div>
                  <h3 className="text-[17px] font-extrabold tracking-tight">Контент-площадки</h3>
                  <div className="text-[12px] text-ink-mute mt-0.5">Парсинг и автопоиск</div>
                </div>
              </header>
              <p className="text-[13.5px] text-ink-soft leading-relaxed">Площадки с разнородным контентом, на которых нас интересуют аккаунты и ролики ниши.</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-mint-50 text-mint-800 text-[12.5px] font-semibold">Facebook</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-mint-50 text-mint-800 text-[12.5px] font-semibold">Telegram</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-mint-50 text-mint-800 text-[12.5px] font-semibold">Дзен</span>
              </div>
              <div className="text-[12.5px] text-ink-mute leading-relaxed pt-2 border-t border-line">
                <strong className="text-ink">Пример:</strong> запустили автопоиск с регионом «Россия» и охватами от 10K — на выходе список Telegram-каналов и Дзен-блогеров с релевантной аудиторией.
              </div>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-4">
              <header className="flex items-center gap-3 pb-4 border-b border-line">
                <div className="w-11 h-11 rounded-rmd bg-mint-500 text-white grid place-items-center">
                  <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                </div>
                <div>
                  <h3 className="text-[17px] font-extrabold tracking-tight">Прочие площадки для публикаций</h3>
                  <div className="text-[12px] text-ink-mute mt-0.5">Трекинг публикаций</div>
                </div>
              </header>
              <p className="text-[13.5px] text-ink-soft leading-relaxed">Если выложили ролик не в основной соцсети — добавьте публикацию в категорию «Прочее» и ведите по ней учёт вручную.</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-mint-50 text-mint-800 text-[12.5px] font-semibold">Прочее</span>
              </div>
              <div className="text-[12.5px] text-ink-mute leading-relaxed pt-2 border-t border-line">
                <strong className="text-ink">Пример:</strong> опубликовали ролик на нишевом сайте или в новой соцсети — заводите карточку в «Прочее» с превью и метриками вручную.
              </div>
            </article>
          </div>

          <div className="reveal mt-12 max-w-[820px] mx-auto bg-white border border-line rounded-rxl p-6">
            <p className="text-sm text-ink-soft leading-relaxed"><strong className="text-ink">Важно:</strong> Эвикс не публикует ролики автоматически. Готовый ролик вы выкладываете в соцсеть сами, а в кабинете ведёте учёт публикаций — это упрощает работу команды и убирает риски с авто-постингом.</p>
          </div>
        </div>
      </section>

      <section className="hero-bg py-24 relative bg-dark text-white isolate overflow-hidden" id="contact">
        <div className="max-w-container mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-mint-300/20 text-mint-300 text-xs font-bold tracking-[0.14em] uppercase">Запросить подключение</span>
              <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight leading-[1.1] mt-4.5 mb-4.5">Расскажем, как подключить ваши соцсети</h2>
              <p className="text-base text-white/75 leading-relaxed max-w-[460px] mb-7">Опишите, какие площадки нужно завести — настроим парсинг и трекинг публикаций под ваш кейс.</p>
            </div>

            <div className="reveal bg-white text-ink rounded-r2xl p-9 shadow-mockup">
              <h3 className="text-[22px] font-bold tracking-tight mb-2">Заявка по интеграциям</h3>
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
                  <textarea className="min-h-[110px] px-4 py-3.5 border border-line bg-white rounded-rmd text-[15px] hover:border-line-strong focus:border-mint-400 focus:outline-none focus:ring-4 focus:ring-mint-500/20 transition resize-y leading-relaxed" name="message" placeholder="Площадки, аккаунты клиентов, что нужно — парсинг, трекинг или оба сразу…" value={form.message} onChange={onChange}></textarea>
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
