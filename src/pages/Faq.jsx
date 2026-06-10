import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CATEGORIES = [
  {
    id: 'cat-product',
    title: 'Продукт',
    items: [
      ['Что такое Эвикс?', 'Эвикс — это AI-студия контента в одном кабинете: ToV-квиз, библиотека ядер клиента, AI-сценарии с анализом, аватары и голоса, обложки, монтаж (авто и ручной), парсинг конкурентов и трекинг публикаций.'],
      ['Эвикс публикует ролики автоматически?', 'Нет. Готовый ролик вы выкладываете в соцсеть сами, а затем добавляете публикацию в трекер — с превью, площадкой, датой и описанием. Просмотры и лайки заполняются вручную или подгружаются по факту.'],
      ['Можно ли создавать сценарии с нуля или только «по конкуренту»?', 'Можно и так, и так. В мастере 5 шагов первый — выбор типа: «по конкуренту» (с анализом виральности) или своя тема и тезисы. Дальше — сценарий, аватар, генерация видео и монтаж.'],
      ['Что такое «ядра» в библиотеке?', 'Пять «ядер» — общий источник правды для AI: ToV клиента, маркетинговый и продуктовый анализ, ядро аккаунта (что сработало) и ядро ниши. Ядро конкурента сейчас в разработке.'],
      ['Где взять метрики просмотров и лайков?', 'В разделе «Публикации» метрики обновляются по факту публикации. Раздел «Статистика» — сводная аналитика по охватам и удержанию — сейчас помечен «Скоро».'],
    ],
  },
  {
    id: 'cat-pricing',
    title: 'Тарифы',
    items: [
      ['Сколько тарифов и чем отличаются?', 'Два тарифа: Free — все модули и автомонтаж по шаблону. Pro — то же плюс ручной монтаж от живого монтажёра и приоритет на автомонтаже.'],
      ['Сколько стоит Pro?', 'Цена обсуждается индивидуально и зависит от объёма роликов и состава команды. Оставьте заявку — пришлём расчёт под ваш кейс.'],
      ['Есть ли отдельный тариф для агентств?', 'Корпоративные условия для сетевых агентств с большим потоком клиентов обсуждаем отдельно. Пишите в форму — соберём план под ваши процессы.'],
    ],
  },
  {
    id: 'cat-ai',
    title: 'AI-функции',
    items: [
      ['Как Эвикс анализирует сценарий?', 'Сценарий проходит сверку по группам: хук + удержание (основной вес), средние критерии (визуал, CTA), мелкие критерии. Дополнительно сверяется с ToV, маркетинговым и продуктовым ядром, а в режиме «по конкуренту» — с самим конкурентом. На выходе — балл, чек-листы и рекомендации.'],
      ['Можно ли загрузить свой голос для аватара?', 'В каталог можно добавить аватар (фото) и голос (аудиосемпл) — с выбором пола, стиля, тона и эмоции. Если ничего не загружать, продукт использует имитацию для превью.'],
      ['Как работает парсинг конкурентов?', 'Можно добавить конкурентов вручную, массово или запустить автопоиск по нише (платформы, регион, ER, размер аудитории). После парсинга открывается сетка «залетевших» роликов с разбором по хуку, удержанию и триггерам.'],
    ],
  },
  {
    id: 'cat-socials',
    title: 'Соцсети',
    items: [
      ['Какие соцсети поддерживаются?', 'В трекере публикаций: Instagram, TikTok, YouTube, ВКонтакте и прочие. В парсинге конкурентов и автопоиске дополнительно: VK Клипы, YouTube Shorts, Facebook, Telegram, Дзен.'],
      ['Где привязать соцсети?', 'В профиле клиента и в библиотеке данных, раздел «Подключённые соцсети». В форме публикации можно выбирать только привязанные платформы.'],
    ],
  },
  {
    id: 'cat-team',
    title: 'Команда',
    items: [
      ['Какие роли есть в продукте?', 'Владелец, технический отдел, менеджеры сценариев / монтажа / публикаций, исполнители (сценарист, монтажёр, паблишер) и гостевой клиентский доступ. Для сотрудников есть отдельный служебный вход с демо-доступами.'],
      ['Как назначить клиента сотруднику?', 'При создании клиента владелец сразу выбирает менеджеров (по сценариям, монтажу и публикациям). Они уже назначают своих исполнителей. У сотрудника видны «свои» клиенты и заблокированные карточки остальных — для прозрачности команды.'],
      ['Можно ли отклонить сценарий с комментарием?', 'Да. Сценарии и монтаж можно вернуть с причиной отказа — автор увидит комментарий. То же самое работает в очереди монтажа.'],
    ],
  },
];

const PILLS = [
  { id: 'cat-product', label: 'Продукт', primary: true },
  { id: 'cat-pricing', label: 'Тарифы' },
  { id: 'cat-ai', label: 'AI-функции' },
  { id: 'cat-socials', label: 'Соцсети' },
  { id: 'cat-team', label: 'Команда' },
];

export default function Faq() {
  useEffect(() => {
    document.title = 'FAQ — Эвикс';
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="hero-bg relative pt-[152px] pb-20 bg-dark text-white isolate overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-6 max-w-[820px] mx-auto">
            <div className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full bg-mint-300/10 border border-mint-300/20 text-mint-300 text-[12.5px] font-semibold">
              <span className="w-[22px] h-[22px] rounded-full bg-mint-500 grid place-items-center text-[#04241a] text-xs font-extrabold">?</span>
              Частые вопросы
            </div>
            <h1 className="text-[clamp(32px,5vw,56px)] leading-[1.06] font-extrabold tracking-tight max-w-[820px]">
              Ответы на <em className="not-italic text-grad-mint">типичные вопросы</em>
            </h1>
            <p className="text-[clamp(15px,1.6vw,17px)] text-white/75 leading-relaxed max-w-[620px]">
              Что есть в продукте, как работают тарифы Free и Pro, что делает AI и какие соцсети поддерживаем. Если не нашли — спросите в форме.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {PILLS.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  onClick={scrollTo(p.id)}
                  className={p.primary
                    ? 'px-4 py-2 rounded-full bg-mint-500 text-white text-sm font-semibold shadow-mint'
                    : 'px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/85 text-sm font-medium hover:bg-white/20 transition'}
                >
                  {p.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[940px] mx-auto px-6 flex flex-col gap-14">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} id={cat.id} className="reveal">
              <h2 className="text-2xl font-extrabold tracking-tight mb-6">{cat.title}</h2>
              <div className="flex flex-col gap-3">
                {cat.items.map(([q, a]) => (
                  <details key={q} className="bg-white border border-line rounded-rxl p-6 group">
                    <summary className="cursor-pointer flex items-center justify-between gap-4 font-bold text-[15.5px] tracking-tight">
                      {q}
                      <svg className="w-5 h-5 text-mint-700 transition group-open:rotate-45 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </summary>
                    <p className="text-[14px] text-ink-soft leading-relaxed mt-4">{a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}

          <div className="reveal bg-gradient-to-br from-mint-700 to-mint-800 text-white rounded-r2xl p-10 flex flex-col md:flex-row items-center justify-between gap-7">
            <div>
              <h3 className="text-xl font-extrabold tracking-tight mb-2">Не нашли ответ?</h3>
              <p className="text-white/80 text-[14.5px]">Опишите вопрос — ответим в форме обратной связи.</p>
            </div>
            <Link to="/contacts" className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-rmd bg-orange-500 text-white text-[15px] font-semibold shadow-orange hover:bg-orange-600 hover:shadow-orange-hover hover:-translate-y-0.5 transition">Задать вопрос</Link>
          </div>
        </div>
      </section>
    </>
  );
}
