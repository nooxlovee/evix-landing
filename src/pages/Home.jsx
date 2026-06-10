import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ReviewStars() {
  return (
    <div className="flex gap-0.5 text-orange-500" aria-label="5 из 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    document.title = 'Эвикс — AI-студия контента для агентств и блогеров';
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

  const inputBase =
    'h-[50px] px-4 border bg-white rounded-rmd text-[15px] hover:border-line-strong focus:border-mint-400 focus:outline-none focus:ring-4 focus:ring-mint-500/20 transition';

  return (
    <>
      {/* HERO */}
      <section className="hero-bg relative min-h-screen flex items-center pt-[132px] pb-20 bg-dark text-white overflow-hidden isolate" id="hero">
        <div className="max-w-container mx-auto px-6 grid lg:grid-cols-[1.05fr_1fr] gap-16 items-center w-full">
          <div className="max-w-[600px]">
            <div className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full bg-mint-300/10 border border-mint-300/20 text-mint-300 text-[12.5px] font-semibold mb-5">
              <span className="w-[22px] h-[22px] rounded-full bg-mint-500 grid place-items-center text-[#04241a] text-xs font-extrabold">AI</span>
              Студия контента в одном кабинете
            </div>
            <h1 className="text-[clamp(36px,5.6vw,64px)] leading-[1.04] font-extrabold tracking-tight mb-5">
              От Tone of Voice<br />
              до публикации —<br />
              <em className="not-italic text-grad-mint">в одном окне</em>
            </h1>
            <p className="text-[clamp(15px,1.6vw,18px)] text-white/75 leading-relaxed max-w-[540px] mb-8">
              Подключите клиента, заполните ToV через квиз — и получите конвейер: AI-сценарий, аватар с голосом, монтаж, обложку и трекинг публикаций. Без переключения между сервисами.
            </p>
            <div className="flex gap-3.5 flex-wrap mb-10">
              <Link to="/#contact" className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-rmd bg-mint-500 text-white text-[15px] font-semibold shadow-mint hover:bg-mint-600 hover:shadow-mint-hover hover:-translate-y-0.5 transition">
                Оставить заявку
              </Link>
              <Link to="/#how" className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-rmd bg-white/10 backdrop-blur-sm text-white border border-white/20 text-[15px] font-semibold hover:bg-white/20 hover:border-white/30 transition">
                Как это работает
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative h-[520px]" aria-hidden="true">
            <div className="float-a absolute right-0 top-[30px] z-20 w-full max-w-[540px] bg-white rounded-[20px] shadow-mockup border border-white/10 overflow-hidden text-ink">
              <div className="h-[38px] flex items-center gap-1.5 px-3.5 bg-canvas border-b border-line">
                <span className="dot dot-r"></span><span className="dot dot-y"></span><span className="dot dot-g"></span>
              </div>
              <div className="p-5">
                <div className="h-2 rounded-full bg-ink w-3/5 mb-2.5"></div>
                <div className="h-2 rounded-full bg-line w-[70%] mb-2.5"></div>
                <div className="h-2 rounded-full bg-line w-1/2 mb-2.5"></div>
                <div className="h-[70px] rounded-rmd bg-gradient-to-br from-mint-100 to-mint-50 border border-mint-100 my-3.5 flex items-center justify-center text-mint-700 font-bold text-[13px]">
                  Анализ сценария — 7.8 / 10
                </div>
                <div className="grid grid-cols-2 gap-2.5 mt-3.5">
                  <div className="p-3 bg-canvas rounded-[10px]">
                    <div className="text-lg font-extrabold">Хук</div>
                    <div className="text-[10px] text-ink-mute uppercase tracking-[0.1em]">сверка с ToV</div>
                  </div>
                  <div className="p-3 bg-canvas rounded-[10px]">
                    <div className="text-lg font-extrabold">CTA</div>
                    <div className="text-[10px] text-ink-mute uppercase tracking-[0.1em]">по продуктовому ядру</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="float-b absolute -left-2.5 bottom-0 z-30 w-[240px] bg-white rounded-[20px] shadow-mockup border border-white/10 overflow-hidden text-ink">
              <div className="h-[38px] flex items-center gap-1.5 px-3.5 bg-canvas border-b border-line">
                <span className="dot dot-r"></span><span className="dot dot-y"></span><span className="dot dot-g"></span>
              </div>
              <div className="p-5">
                <div className="h-2 rounded-full bg-mint-500 w-[35%] mb-2.5"></div>
                <div className="h-2 rounded-full bg-line w-[90%] mb-2.5"></div>
                <div className="h-2 rounded-full bg-line w-[70%] mb-2.5"></div>
                <div className="h-2 rounded-full bg-line w-1/2 mb-2.5"></div>
              </div>
            </div>

            <div className="float-b-slow absolute -right-5 bottom-[30px] z-10 w-[220px] bg-white rounded-[20px] shadow-mockup border border-white/10 overflow-hidden text-ink">
              <div className="h-[38px] flex items-center gap-1.5 px-3.5 bg-canvas border-b border-line">
                <span className="dot dot-r"></span><span className="dot dot-y"></span><span className="dot dot-g"></span>
              </div>
              <div className="p-5">
                <div className="h-2 rounded-full bg-ink w-[40%] mb-2.5"></div>
                <div className="h-2 rounded-full bg-line w-[90%] mb-2.5"></div>
                <div className="h-2 rounded-full bg-line w-[70%] mb-2.5"></div>
              </div>
            </div>
          </div>
        </div>

        <Link to="/#audience" className="scroll-bounce absolute bottom-7 left-1/2 text-white/55 text-[11px] uppercase tracking-[0.16em] flex flex-col items-center gap-2">
          Листайте
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </Link>
      </section>

      {/* AUDIENCE */}
      <section className="py-24 bg-gradient-to-b from-mint-50 to-canvas" id="audience">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">Кому подойдёт</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">Для тех, кто живёт контентом и считает каждый час команды</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">Эвикс заменяет ручную рутину сценарной и продакшен-команды. Продукт собран под конкретные роли — без воды и универсальных «решений для всех».</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'SMM-агентства',
                desc: 'Ведёте несколько клиентов и теряете часы на согласования. Эвикс собирает ToV, конкурентов и фирменные форматы каждого клиента в одну рабочую среду.',
                tags: ['Карточки клиентов', 'Reels / TikTok', 'Роли и доступы'],
                icon: (
                  <svg className="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
                  </svg>
                ),
              },
              {
                title: 'Продакшен-студии',
                desc: 'Тратите больше времени на брифы, чем на съёмку. Получайте сценарий с разбивкой на хук, тело и CTA — сразу под нужный формат и площадку.',
                tags: ['Сценарий + монтаж', 'AI-аватары', 'Шаблоны обложек'],
                icon: (
                  <svg className="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="23 7 16 12 23 17 23 7" />
                    <rect x="1" y="5" width="15" height="14" rx="2" />
                  </svg>
                ),
              },
              {
                title: 'Эксперты и блогеры',
                desc: 'Хотите регулярно публиковаться, но команды нет. Создавайте сценарии под свой голос, генерируйте обложки и ведите публикации в одном месте.',
                tags: ['Личный бренд', 'ToV-квиз', 'Без команды'],
                icon: (
                  <svg className="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
                  </svg>
                ),
              },
            ].map((c) => (
              <article key={c.title} className="reveal relative group bg-white border border-line rounded-rxl p-8 flex flex-col gap-4 hover:border-mint-200 hover:shadow-soft hover:-translate-y-1 transition overflow-hidden">
                <span className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-mint-400 to-mint-600 opacity-0 group-hover:opacity-100 transition"></span>
                <div className="w-14 h-14 rounded-[14px] bg-gradient-to-br from-mint-100 to-mint-50 text-mint-700 grid place-items-center">{c.icon}</div>
                <h3 className="text-[19px] font-bold tracking-tight">{c.title}</h3>
                <p className="text-ink-soft text-[14.5px] leading-relaxed">{c.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {c.tags.map((t) => (
                    <span key={t} className="inline-flex px-2.5 py-1 rounded-full bg-mint-50 text-mint-800 text-[11.5px] font-semibold">{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="py-24" id="modules">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">Модули и функции</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">Конвейер от данных о клиенте до публикации</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">Каждый модуль работает самостоятельно и в связке с другими. В рамках одного кабинета — все шаги создания ролика.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <article className="reveal relative overflow-hidden bg-gradient-to-br from-mint-700 to-mint-800 text-white rounded-rxl p-7 flex flex-col gap-3.5 hover:-translate-y-0.5 transition">
              <div className="absolute -top-20 -right-20 w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(116,223,187,0.4),transparent_70%)]"></div>
              <div className="relative z-10 w-12 h-12 rounded-rmd bg-white/15 text-white grid place-items-center">
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h11l5 5v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                  <path d="M14 4v6h6" />
                  <path d="M7 14h8M7 18h6" />
                </svg>
              </div>
              <h3 className="relative z-10 text-lg font-bold tracking-tight">AI-сценарии</h3>
              <p className="relative z-10 text-sm text-white/75 leading-relaxed">5-шаговый мастер: тип сценария, текст, аватар и озвучка, генерация видео, монтаж. Со сверкой по ToV, маркетинговому и продуктовому ядру.</p>
              <ul className="relative z-10 list-none p-0 m-0 flex flex-col gap-2 list-check list-check-white text-white/85 text-[13.5px]">
                <li>Хук, тело, CTA — раздельно</li>
                <li>Анализ сценария до запуска</li>
                <li>Сценарий «по конкуренту» или с нуля</li>
              </ul>
            </article>

            {[
              {
                title: 'Аватары и голоса',
                desc: 'Каталог лиц и голосов для озвучки сценариев. Можно загрузить своё фото и аудио, выбрать стиль, эмоцию и тон.',
                bullets: ['Деловой, экспертный, молодёжный стиль', 'Тоны: дружеский, прямой, экспертный', 'Подача под выбранный сценарий'],
                icon: (
                  <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
                  </svg>
                ),
              },
              {
                title: 'Дашборд студии',
                desc: 'Сводка по сценариям, монтажу и публикациям. Видно, что в черновиках, что в работе, что опубликовано.',
                bullets: ['Обзор за месяц', 'Аналитика по сценариям', 'Сводка по публикациям'],
                icon: (
                  <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="9" rx="1.5" />
                    <rect x="14" y="3" width="7" height="5" rx="1.5" />
                    <rect x="14" y="12" width="7" height="9" rx="1.5" />
                    <rect x="3" y="16" width="7" height="5" rx="1.5" />
                  </svg>
                ),
              },
              {
                title: 'Библиотека данных',
                desc: 'Ядра клиента: Tone of Voice, маркетинговый и продуктовый анализ, ядра аккаунта и ниши. Источник правды для генерации.',
                bullets: ['ToV из квиза, маркетинг, продукт', 'Ядро аккаунта и ниши', 'База визуальных форматов'],
                icon: (
                  <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h6v16H4zM14 4h6v10h-6zM14 16h6v4h-6z" />
                  </svg>
                ),
              },
              {
                title: 'Обложки',
                desc: '5-шаговый мастер: источник, текст, оценка, концепт, генерация. Под формат и сценарий.',
                bullets: ['4 варианта подачи текста', 'Оценка по 5 критериям', 'Привязка к сценарию'],
                icon: (
                  <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                ),
              },
              {
                title: 'Монтаж',
                desc: 'Сценарий с готовым видео отправляется на монтаж: автоматический за минуту или ручной от живого монтажёра на тарифе Pro.',
                bullets: ['Автомонтаж по сценарию', 'Ручной монтаж на Pro', 'Статусы: в работе, у монтажёра, готово'],
                icon: (
                  <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="6" width="14" height="12" rx="2" />
                    <path d="M16 10l5-3v10l-5-3z" />
                  </svg>
                ),
              },
              {
                title: 'Трекинг публикаций',
                desc: 'Добавляйте выложенный ролик и держите просмотры с лайками в одном месте. Площадки: Instagram, TikTok, YouTube, ВКонтакте и другие.',
                bullets: ['Ручное добавление публикаций', 'Превью, дата, описание', 'Просмотры и лайки по постам'],
                icon: (
                  <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 2L11 13" />
                    <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                ),
              },
              {
                title: 'Анализ конкурентов',
                desc: 'Парсинг аккаунтов по выбранным платформам и порогу просмотров. Залетевшие ролики разбираются по хуку, удержанию и триггерам.',
                bullets: ['Автопоиск по нише и ER', 'Список «залетевших» роликов', 'Перенос форматов в библиотеку'],
                icon: (
                  <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                ),
              },
              {
                title: 'Роли и доступ',
                desc: 'Владелец, менеджеры сценариев / монтажа / публикаций и исполнители. У каждой роли свой набор прав на действия.',
                bullets: ['Свой пул клиентов у сотрудника', 'Согласование и возврат на доработку', 'Отдельный служебный вход'],
                icon: (
                  <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2a10 10 0 1 0 10 10" />
                    <path d="M22 2L12 12" />
                  </svg>
                ),
              },
            ].map((m) => (
              <article key={m.title} className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5 hover:border-mint-200 hover:shadow-soft hover:-translate-y-0.5 transition">
                <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">{m.icon}</div>
                <h3 className="text-lg font-bold tracking-tight">{m.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{m.desc}</p>
                <ul className="list-none p-0 m-0 flex flex-col gap-2 list-check text-[13.5px]">
                  {m.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-gradient-to-b from-mint-50 to-canvas" id="how">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">Как это работает</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">От подключения клиента до публикации — 4 шага</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">Каждый шаг занимает минуты, а не часы. Все шаги — внутри одного кабинета, без выгрузок и переключений.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: 1, title: 'Заполните ToV-квиз', desc: '12 вопросов о бренде, аудитории и тоне. На основе ответов Эвикс собирает ядро — на нём строятся все сценарии.' },
              { n: 2, title: 'Соберите сценарий', desc: '5 шагов мастера: тип, текст, аватар и озвучка, генерация видео, монтаж. Со встроенным анализом сценария.' },
              { n: 3, title: 'Получите обложку и монтаж', desc: 'Аватар озвучивает сценарий, ролик уходит на автомонтаж или к живому монтажёру. Параллельно генерится обложка.' },
              { n: 4, title: 'Опубликуйте и следите', desc: 'Выкладываете ролик в соцсеть и добавляете публикацию в Эвикс — просмотры и лайки попадают в одну сводку.' },
            ].map((s) => (
              <article key={s.n} className="reveal bg-white border border-line rounded-rxl p-6 hover:border-mint-300 hover:shadow-soft transition">
                <div className="w-[38px] h-[38px] rounded-rmd bg-mint-500 text-white font-extrabold grid place-items-center mb-4 shadow-mint">{s.n}</div>
                <h3 className="text-base font-bold tracking-tight mb-2">{s.title}</h3>
                <p className="text-[13.5px] text-ink-soft leading-relaxed">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-24" id="advantages">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">Преимущества</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">Почему стоит выбрать Эвикс</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">Инструмент для тех, кто реально живёт в контенте — а не для слайдов в инвесторской презентации.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: '01', title: 'Контент в вашем голосе', desc: 'Эвикс сверяет каждый сценарий с ToV клиента — никаких обезличенных «AI-текстов».' },
              { n: '02', title: 'Готовый продакшен-пайплайн', desc: 'Сценарий → аватар → монтаж → обложка → публикация. Всё в одном окне, без экспортов.' },
              { n: '03', title: 'Командная работа из коробки', desc: 'Роли владельца, менеджеров и исполнителей. Согласование сценариев и монтажа, возврат на доработку.' },
              { n: '04', title: 'Анализ перед генерацией', desc: 'Сценарий и тема проходят сверку по ToV, маркетинговому и продуктовому ядру до запуска видео.' },
            ].map((a) => (
              <div key={a.n} className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3 hover:border-mint-200 hover:shadow-soft hover:-translate-y-0.5 transition">
                <span className="text-xs font-extrabold tracking-[0.14em] uppercase text-mint-600">{a.n}</span>
                <h3 className="text-[17px] font-bold tracking-tight">{a.title}</h3>
                <p className="text-[13.5px] text-ink-soft leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="py-24 bg-gradient-to-b from-mint-50 to-canvas" id="clients">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">Наши клиенты</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">Студии и блогеры, которые уже работают на Эвикс</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">От независимых экспертов до сетевых SMM-агентств. Подробные кейсы — на странице «Клиенты».</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: 'Nomos', icon: (<svg className="w-[22px] h-[22px] text-mint-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" /></svg>) },
              { name: 'Layers', icon: (<svg className="w-[22px] h-[22px] text-mint-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>) },
              { name: 'PlayLab', icon: (<svg className="w-[22px] h-[22px] text-mint-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" /></svg>) },
              { name: 'Studio M', icon: (<svg className="w-[22px] h-[22px] text-mint-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M9 9h6v6H9z" /></svg>) },
              { name: 'Reel.it', icon: (<svg className="w-[22px] h-[22px] text-mint-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12c0-5 4-9 9-9s9 4 9 9-4 9-9 9c-3 0-5-1-7-3" /><path d="M3 21v-6h6" /></svg>) },
            ].map((c) => (
              <div key={c.name} className="reveal bg-white border border-line rounded-rlg p-5 flex items-center justify-center text-center font-bold text-sm tracking-wider text-ink-soft min-h-[88px] hover:border-mint-300 hover:text-mint-800 hover:-translate-y-0.5 transition">
                <span className="inline-flex items-center gap-2">{c.icon}{c.name}</span>
              </div>
            ))}
          </div>

          <div className="reveal flex justify-center mt-8">
            <Link to="/clients" className="inline-flex items-center gap-1.5 text-mint-700 font-semibold text-[14px] hover:text-mint-800 hover:gap-2.5 transition-all">
              Посмотреть кейсы клиентов
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-24" id="reviews">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">Отзывы</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">Что говорят те, кто уже на Эвикс</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">Прямые слова основателей агентств и контент-команд. Без редактуры под маркетинг.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { text: 'За первый месяц переехали с трёх SaaS-инструментов на один. Сценарист стал успевать в несколько раз больше клиентов, а согласования сократились с трёх дней до одного.', initials: 'АК', name: 'Анна Кузнецова', role: 'Co-founder, Layers SMM' },
              { text: 'Главное — сценарии перестали звучать «по-нейросетевому». Подгружаешь ToV клиента — и получаешь текст, который реально звучит как продакт. Это меняет всё.', initials: 'ДС', name: 'Дмитрий Соловьёв', role: 'Креативный директор, PlayLab' },
              { text: 'Я веду блог как эксперт и снимать каждый день невозможно. Аватар Эвикса — единственное решение, где «AI-я» не превращается в карикатуру.', initials: 'МЛ', name: 'Мария Лебедева', role: 'Эксперт по нутрициологии' },
            ].map((r) => (
              <article key={r.initials} className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-4 hover:border-mint-200 hover:shadow-soft hover:-translate-y-0.5 transition">
                <div className="text-[38px] leading-none text-mint-300 font-serif -mb-2">"</div>
                <p className="text-[14.5px] text-ink leading-relaxed flex-1">{r.text}</p>
                <ReviewStars />
                <div className="flex items-center gap-3 pt-3.5 border-t border-line">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-mint-300 to-mint-500 grid place-items-center text-[#04241a] font-bold text-[15px]">{r.initials}</div>
                  <div>
                    <div className="text-sm font-bold">{r.name}</div>
                    <div className="text-xs text-ink-mute">{r.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="hero-bg py-24 relative bg-dark text-white isolate overflow-hidden" id="contact">
        <div className="max-w-container mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
            <div className="reveal">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-mint-300/20 text-mint-300 text-xs font-bold tracking-[0.14em] uppercase">Запросить демо</span>
              <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight leading-[1.1] mt-4.5 mb-4.5">Покажем продукт под вашу студию</h2>
              <p className="text-base text-white/75 leading-relaxed max-w-[460px] mb-7">Свяжемся, расскажем, как Эвикс встраивается в процесс. Без продающего звонка — только продукт и ваш кейс.</p>

              <ul className="list-none m-0 p-0 flex flex-col gap-3.5">
                {[
                  'Демо под ваш кейс',
                  'Прогон по конвейеру от ToV до публикации',
                  'Ответы на вопросы по тарифам Free / Pro',
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-white/85 text-[14.5px]">
                    <svg className="w-[18px] h-[18px] text-mint-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal bg-white text-ink rounded-r2xl p-9 shadow-mockup">
              <h3 className="text-[22px] font-bold tracking-tight mb-2">Записаться на демо</h3>
              <p className="text-[13.5px] text-ink-soft mb-5">Контакты для связи появятся позже — пока оставьте заявку через форму.</p>

              {!submitted ? (
                <form className="flex flex-col gap-3.5" onSubmit={onSubmit} noValidate>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      className={`${inputBase} ${errors.name ? 'border-orange-500' : 'border-line'}`}
                      type="text" name="name" placeholder="Имя" value={form.name} onChange={onChange} required
                    />
                    <input className={`${inputBase} border-line`} type="text" name="company" placeholder="Студия / компания" value={form.company} onChange={onChange} />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      className={`${inputBase} ${errors.email ? 'border-orange-500' : 'border-line'}`}
                      type="email" name="email" placeholder="E-mail" value={form.email} onChange={onChange} required
                    />
                    <input className={`${inputBase} border-line`} type="tel" name="phone" placeholder="Телефон" value={form.phone} onChange={onChange} />
                  </div>
                  <textarea
                    className="min-h-[110px] px-4 py-3.5 border border-line bg-white rounded-rmd text-[15px] hover:border-line-strong focus:border-mint-400 focus:outline-none focus:ring-4 focus:ring-mint-500/20 transition resize-y leading-relaxed"
                    name="message" placeholder="Коротко о задаче (не обязательно)" value={form.message} onChange={onChange}
                  />
                  <button type="submit" className="inline-flex items-center justify-center gap-2 h-14 w-full rounded-rmd bg-orange-500 text-white text-[15px] font-semibold shadow-orange hover:bg-orange-600 hover:shadow-orange-hover hover:-translate-y-0.5 transition">
                    Отправить заявку
                  </button>
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
