import { useEffect } from 'react';

export default function KnowledgeBase() {
  useEffect(() => {
    document.title = 'База знаний — Эвикс';
  }, []);

  return (
    <>
      <section className="hero-bg relative pt-[152px] pb-20 bg-dark text-white isolate overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-6 max-w-[820px] mx-auto">
            <div className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full bg-mint-300/10 border border-mint-300/20 text-mint-300 text-[12.5px] font-semibold"><span className="w-[22px] h-[22px] rounded-full bg-mint-500 grid place-items-center text-[#04241a] text-xs font-extrabold">Б</span>База знаний</div>
            <h1 className="text-[clamp(32px,5vw,56px)] leading-[1.06] font-extrabold tracking-tight max-w-[820px]">Гайды по <em className="not-italic text-grad-mint">модулям продукта</em></h1>
            <p className="text-[clamp(15px,1.6vw,17px)] text-white/75 leading-relaxed max-w-[620px]">Разделы организованы под модули кабинета. База пополняется по мере выхода новых функций — на месте материалов, которые ещё в работе, стоит метка «Скоро».</p>

            <div className="relative w-full max-w-[600px] mt-3">
              <svg className="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2 text-ink-mute" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
              <input type="search" placeholder="Поиск по разделам базы…" className="w-full h-14 pl-14 pr-5 rounded-rxl bg-white text-ink placeholder:text-ink-mute border border-transparent focus:outline-none focus:ring-4 focus:ring-mint-500/30 shadow-mockup text-base" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24" id="tree">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal mb-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase mb-3.5">Структура базы</span>
            <h2 className="text-[clamp(24px,3vw,36px)] font-extrabold tracking-tight leading-[1.1]">Разделы по модулям продукта</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <article className="reveal bg-white border border-line rounded-rxl p-7 hover:border-mint-200 hover:shadow-soft transition">
              <header className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-line">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center"><svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" fill="currentColor" /></svg></div>
                  <div><h3 className="text-[17px] font-extrabold tracking-tight">Начало работы</h3></div>
                </div>
              </header>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5 text-[13.5px] text-ink-soft">
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Регистрация и первый вход</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Служебный вход для сотрудников</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Квиз ToV: 12 вопросов о бренде</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Профиль и подключение соцсетей</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 hover:border-mint-200 hover:shadow-soft transition">
              <header className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-line">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center"><svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9" rx="1.5" /><rect x="14" y="3" width="7" height="5" rx="1.5" /><rect x="14" y="12" width="7" height="9" rx="1.5" /><rect x="3" y="16" width="7" height="5" rx="1.5" /></svg></div>
                  <div><h3 className="text-[17px] font-extrabold tracking-tight">Дашборд</h3></div>
                </div>
              </header>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5 text-[13.5px] text-ink-soft">
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Обзор: сводка по студии</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Аналитика по сценариям</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Аналитика по публикациям</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0 opacity-50"></span><span className="opacity-60">Статистика — раздел в разработке</span></li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 hover:border-mint-200 hover:shadow-soft transition">
              <header className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-line">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center"><svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg></div>
                  <div><h3 className="text-[17px] font-extrabold tracking-tight">Клиенты и Workspace</h3></div>
                </div>
              </header>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5 text-[13.5px] text-ink-soft">
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Добавление клиента и пакет Free/Pro</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Назначение менеджеров на клиента</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Workspace: разделы и навигация</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Статусы клиента: активен / пауза / просрочка</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 hover:border-mint-200 hover:shadow-soft transition">
              <header className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-line">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center"><svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h11l5 5v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" /><path d="M14 4v6h6" /><path d="M7 14h8M7 18h6" /></svg></div>
                  <div><h3 className="text-[17px] font-extrabold tracking-tight">AI-сценарии</h3></div>
                </div>
              </header>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5 text-[13.5px] text-ink-soft">
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Мастер 5 шагов: от типа до монтажа</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Сценарий «по конкуренту» и с нуля</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Анализ темы и тезисов</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Анализ сценария по 10 критериям</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Статусы и согласования</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 hover:border-mint-200 hover:shadow-soft transition">
              <header className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-line">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center"><svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-7 8-7s8 3 8 7" /></svg></div>
                  <div><h3 className="text-[17px] font-extrabold tracking-tight">Аватары и голоса</h3></div>
                </div>
              </header>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5 text-[13.5px] text-ink-soft">
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Загрузка фото и аудио в каталог</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Стили и эмоции аватара</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Тоны голоса: дружеский, экспертный, прямой</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Привязка аватара и голоса к сценарию</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 hover:border-mint-200 hover:shadow-soft transition">
              <header className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-line">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center"><svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" /></svg></div>
                  <div><h3 className="text-[17px] font-extrabold tracking-tight">Монтаж и обложки</h3></div>
                </div>
              </header>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5 text-[13.5px] text-ink-soft">
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Автомонтаж по сценарию</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Ручной монтаж на тарифе Pro</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Статусы очереди и возврат на доработку</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Мастер обложек: 5 шагов</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 hover:border-mint-200 hover:shadow-soft transition">
              <header className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-line">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center"><svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" /></svg></div>
                  <div><h3 className="text-[17px] font-extrabold tracking-tight">Публикации</h3></div>
                </div>
              </header>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5 text-[13.5px] text-ink-soft">
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Добавление публикации вручную</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Привязка к смонтированному ролику</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Площадки: IG, TikTok, YouTube, ВКонтакте</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Учёт просмотров и лайков</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 hover:border-mint-200 hover:shadow-soft transition">
              <header className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-line">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center"><svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h6v16H4zM14 4h6v10h-6zM14 16h6v4h-6z" /></svg></div>
                  <div><h3 className="text-[17px] font-extrabold tracking-tight">Библиотека данных</h3></div>
                </div>
              </header>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5 text-[13.5px] text-ink-soft">
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Ядра: ToV, маркетинг, продукт, аккаунт, ниша</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>База визуальных форматов</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Подключённые соцсети</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Избранное: залетевшие ролики</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0 opacity-50"></span><span className="opacity-60">Ядро конкурента — в разработке</span></li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 hover:border-mint-200 hover:shadow-soft transition">
              <header className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-line">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center"><svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg></div>
                  <div><h3 className="text-[17px] font-extrabold tracking-tight">Конкуренты</h3></div>
                </div>
              </header>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5 text-[13.5px] text-ink-soft">
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Добавление вручную и массово</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Автопоиск по нише, ER и аудитории</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Настройки парсинга и платформы</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Анализ виральных роликов</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0 opacity-50"></span><span className="opacity-60">Статистика конкурентов — в разработке</span></li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 hover:border-mint-200 hover:shadow-soft transition">
              <header className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-line">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center"><svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="4" /><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" /><circle cx="17" cy="7" r="3" /><path d="M21 21v-2a3 3 0 0 0-3-3" /></svg></div>
                  <div><h3 className="text-[17px] font-extrabold tracking-tight">Команда и роли</h3></div>
                </div>
              </header>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5 text-[13.5px] text-ink-soft">
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Владелец и технический отдел</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Менеджеры сценариев, монтажа, публикаций</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Сценарист, монтажёр, паблишер</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Гостевой клиентский доступ</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 hover:border-mint-200 hover:shadow-soft transition">
              <header className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-line">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center"><svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v12M9 9h4.5a2.5 2.5 0 0 1 0 5H8" /></svg></div>
                  <div><h3 className="text-[17px] font-extrabold tracking-tight">Тарифы Free и Pro</h3></div>
                </div>
              </header>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5 text-[13.5px] text-ink-soft">
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Что входит в Free</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Что даёт Pro: ручной монтаж + приоритет</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Переход с Free на Pro</li>
              </ul>
            </article>

            <article className="reveal bg-white border border-line rounded-rxl p-7 hover:border-mint-200 hover:shadow-soft transition">
              <header className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-line">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center"><svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8" /><path d="M10 21a2 2 0 0 0 4 0" /></svg></div>
                  <div><h3 className="text-[17px] font-extrabold tracking-tight">Уведомления</h3></div>
                </div>
              </header>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5 text-[13.5px] text-ink-soft">
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Лента событий и фильтры</li>
                <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-mint-500 shrink-0"></span>Прочитанные и непрочитанные</li>
              </ul>
            </article>

          </div>

          <div className="reveal mt-12 bg-mint-50 border border-mint-100 rounded-rxl p-7">
            <p className="text-[14px] text-mint-800 leading-relaxed">База пополняется по мере выхода новых функций. Если нужного гайда пока нет — напишите вопрос через форму, и команда поможет напрямую.</p>
          </div>
        </div>
      </section>
    </>
  );
}
