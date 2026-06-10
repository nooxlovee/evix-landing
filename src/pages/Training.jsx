import { useEffect, useState } from 'react';

export default function Training() {
  useEffect(() => {
    document.title = 'Обучение — Эвикс';
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
              <span className="w-[22px] h-[22px] rounded-full bg-mint-500 grid place-items-center text-[#04241a] text-xs font-extrabold">↘</span>
              Обучение
            </div>
            <h1 className="text-[clamp(32px,5vw,52px)] leading-[1.06] font-extrabold tracking-tight">
              Научим команду<br />работать с <em className="not-italic text-grad-mint">Эвикс</em>
            </h1>
            <p className="text-[clamp(15px,1.6vw,17px)] text-white/75 leading-relaxed">
              Обучим всех сотрудников успешному использованию Эвикс — от первой авторизации до уверенного прогона сценария через весь конвейер. Без воды и общих курсов «для всех ролей».
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-rmd bg-orange-500 text-white text-[15px] font-semibold shadow-orange hover:bg-orange-600 hover:shadow-orange-hover hover:-translate-y-0.5 transition">Запросить обучение</a>
              <a href="#stages" className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-rmd bg-white/10 backdrop-blur-sm text-white border border-white/20 text-[15px] font-semibold hover:bg-white/20 hover:border-white/30 transition">
                Как проходит
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M13 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">Плюсы нашего обучения</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">Чем оно отличается от обычных курсов</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">Обучение строится вокруг ролей и реальных сценариев работы, а не модулей продукта по списку. Каждый сотрудник видит то, что нужно лично ему.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1080px] mx-auto">
            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-7 8-7s8 3 8 7" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">Под роль сотрудника</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">Сценаристу не нужно знать про настройки парсинга, а монтажёру — про квиз ToV. Каждый изучает только свою зону кабинета.</p>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h11l5 5v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" /><path d="M14 4v6h6" /><path d="M7 14h8M7 18h6" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">На ваших данных</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">Учимся не на условном примере, а на ядрах и сценариях вашего клиента — сразу применимо в боевой работе.</p>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">Живые сессии и Q&A</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">Не записи на скорость, а созвоны с командой и ответы на конкретные вопросы по вашему процессу.</p>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-5" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">Разбор анализа сценария</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">Учим читать вывод анализа: что значит балл по хуку, на что смотреть в ТЗ монтажу и когда сценарий стоит переписать.</p>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">Парсинг и работа с конкурентами</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">Показываем, как настроить фильтры под нишу и как переносить виральные форматы в свои сценарии.</p>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">Поддержка после обучения</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">Помогаем закрепить — отвечаем на вопросы, когда команда уже работает в кабинете самостоятельно.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-mint-50 to-canvas">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">Кто обучает</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">Те, кто строит продукт и работает с реальными студиями</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">Без «тренеров общего профиля». Обучение ведут люди из команды Эвикс, которые сами проходят все этапы конвейера каждый день.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1080px] mx-auto">
            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h11l5 5v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" /><path d="M14 4v6h6" /><path d="M7 14h8M7 18h6" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">Команда продукта</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">Отвечают за модули сценариев, аватаров, монтажа и обложек. Знают, как устроен каждый шаг изнутри.</p>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="4" /><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" /><circle cx="17" cy="7" r="3" /><path d="M21 21v-2a3 3 0 0 0-3-3" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">Кураторы клиентов</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">Сопровождают команды на этапе внедрения и знают, какие вопросы возникают первыми и почему.</p>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
              <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">Монтажёры команды</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">Подключаются для блока про монтаж и обложки. Показывают, что значит «хороший» ТЗ монтажу.</p>
            </article>
          </div>

          <div className="reveal mt-12 max-w-[820px] mx-auto bg-white border border-line rounded-rxl p-6">
            <p className="text-sm text-ink-soft leading-relaxed">Конкретные люди и их роли согласуются на старте — подбираем под состав вашей команды и приоритетные модули.</p>
          </div>
        </div>
      </section>

      <section className="py-24" id="stages">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">Как проходит</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">Обучение по этапам</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">Каждый этап — отдельная встреча или серия встреч. Идём в темпе команды, не подгоняем.</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-5 max-w-[1180px] mx-auto">
            <article className="reveal relative bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5 hover:border-mint-200 hover:shadow-soft transition">
              <div className="flex items-center gap-3">
                <span className="stage-num">1</span>
              </div>
              <h3 className="text-lg font-extrabold tracking-tight">Обзор кабинета</h3>
              <p className="text-[13.5px] text-ink-soft leading-relaxed">Знакомим со структурой: дашборд, клиенты, библиотека, аватары, сценарии, монтаж, публикации. Показываем, кто что видит.</p>
            </article>

            <article className="reveal relative bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5 hover:border-mint-200 hover:shadow-soft transition">
              <div className="flex items-center gap-3">
                <span className="stage-num">2</span>
              </div>
              <h3 className="text-lg font-extrabold tracking-tight">Ядра и квиз ToV</h3>
              <p className="text-[13.5px] text-ink-soft leading-relaxed">Учим заполнять и поддерживать ядра клиента: ToV, маркетинг, продукт. Разбираем, как они влияют на анализ.</p>
            </article>

            <article className="reveal relative bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5 hover:border-mint-200 hover:shadow-soft transition">
              <div className="flex items-center gap-3">
                <span className="stage-num">3</span>
              </div>
              <h3 className="text-lg font-extrabold tracking-tight">Мастер сценария</h3>
              <p className="text-[13.5px] text-ink-soft leading-relaxed">Проходим все пять шагов: тип, сценарий, аватар и озвучка, генерация видео, монтаж. На реальной теме клиента.</p>
            </article>

            <article className="reveal relative bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5 hover:border-mint-200 hover:shadow-soft transition">
              <div className="flex items-center gap-3">
                <span className="stage-num">4</span>
              </div>
              <h3 className="text-lg font-extrabold tracking-tight">Командная работа</h3>
              <p className="text-[13.5px] text-ink-soft leading-relaxed">Согласования, возвраты на доработку, монтаж и публикации. Разбираем процесс между ролями.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="hero-bg py-24 relative bg-dark text-white isolate overflow-hidden" id="contact">
        <div className="max-w-container mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-mint-300/20 text-mint-300 text-xs font-bold tracking-[0.14em] uppercase">Запросить обучение</span>
              <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight leading-[1.1] mt-4.5 mb-4.5">Подберём программу под вашу команду</h2>
              <p className="text-base text-white/75 leading-relaxed max-w-[460px] mb-7">Опишите состав команды и приоритетные модули — пришлём программу под ваш кейс.</p>
            </div>

            <div className="reveal bg-white text-ink rounded-r2xl p-9 shadow-mockup">
              <h3 className="text-[22px] font-bold tracking-tight mb-2">Заявка на обучение</h3>
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
                  <textarea className="min-h-[110px] px-4 py-3.5 border border-line bg-white rounded-rmd text-[15px] hover:border-line-strong focus:border-mint-400 focus:outline-none focus:ring-4 focus:ring-mint-500/20 transition resize-y leading-relaxed" name="message" placeholder="Состав команды, опыт работы с AI-инструментами, что важно прокачать…" value={form.message} onChange={onChange}></textarea>
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
