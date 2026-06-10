import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const REVIEWS = [
  { text: 'За первый месяц переехали с трёх SaaS-инструментов на один. Сценарист стал успевать в 4 раза больше клиентов, а согласования сократились с трёх дней до одного.', initials: 'АК', name: 'Анна Кузнецова', role: 'Co-founder, Layers SMM', tag: 'SMM-агентство' },
  { text: 'Главное — сценарии перестали звучать «по-нейросетевому». Подгружаешь ToV клиента — и получаешь текст, который реально звучит как продакт. Это меняет всё.', initials: 'ДС', name: 'Дмитрий Соловьёв', role: 'Креативный директор, PlayLab', tag: 'Продакшен' },
  { text: 'Я веду блог как эксперт и снимать каждый день невозможно. Аватар Эвикса — единственное решение, где «AI-я» не превращается в карикатуру. Подписчики до сих пор не догадываются.', initials: 'МЛ', name: 'Мария Лебедева', role: 'Эксперт по нутрициологии', tag: 'Эксперт' },
  { text: 'У нас стоматология на четыре кабинета. Раньше маркетолог уходил «писать сценарии» на полдня. Сейчас на полный пост-план уходит час, и это с разбором конкурентов.', initials: 'ИМ', name: 'Игорь Морозов', role: 'Главврач, клиника «Адамант»', tag: 'Клиника' },
  { text: 'Маленькое кафе, без маркетолога. Эвикс собирает контент про блюда и акции за вечер. Через два месяца после старта мы первые в районе по броням в Instagram.', initials: 'ЕП', name: 'Елена Петрова', role: 'Владелица, кафе «Свет»', tag: 'HoReCa' },
  { text: 'У нас онлайн-школа дизайна на 8 потоков. Маркетинговый цикл стоял дороже преподавателей. Через Эвикс закрыли его в три раза дешевле — и заявок стало больше.', initials: 'СВ', name: 'Сергей Власов', role: 'Директор, школа «Линия»', tag: 'Образование' },
  { text: 'Продюсер 3 коммерческих съёмок в неделю. Брифы и сценарии раньше длились дольше съёмочного дня. Сейчас они занимают 20 минут — а ребята считают, что я перестала «гнобить» сроки.', initials: 'ТО', name: 'Татьяна Орлова', role: 'Продюсер, Nomos studio', tag: 'Продакшен' },
  { text: 'Веду 14 клиентов как соло-фрилансер. Без Эвикса перешёл бы на пять — выгорел бы. Сейчас фактически работаю как маленькое агентство, и клиенты этого даже не видят.', initials: 'МА', name: 'Михаил Андреев', role: 'SMM-фрилансер', tag: 'Фриланс' },
  { text: 'У нас 4 локации в трёх городах. Эвикс — единственный продукт, где брендинг каждой локации хранится отдельно, а контент-команда видит всё в одном кабинете.', initials: 'ОТ', name: 'Олег Терехов', role: 'Маркетинг-директор, фитнес-сеть «Этаж»', tag: 'Фитнес' },
];

const CASES = [
  { tag: 'Клиника', title: 'Стоматология «Адамант»', desc: 'Маркетолог тратил 4 часа в день на сценарии и сторис. Подключили библиотеку врачей, ToV клиники и AI-аватары — освободили половину дня под другие задачи.', grad: 'from-mint-400 to-mint-700', stats: [['×3', 'постов в нед'], ['−40%', 'на согласование'], ['+28%', 'записей в мес']], statColor: 'mint' },
  { tag: 'HoReCa', title: 'Кафе «Свет»', desc: 'Без штатного маркетолога, владелица сама делала контент по вечерам. Эвикс генерирует постинг про блюда и акции — в день уходит 20 минут вместо 2 часов.', grad: 'from-orange-300 to-orange-600', stats: [['+52%', 'броней'], ['×6', 'постов в нед'], ['+12 ч', 'в неделю']], statColor: 'orange' },
  { tag: 'Образование', title: 'Школа дизайна «Линия»', desc: 'Контент-команда из 3 человек не успевала выпускать материалы по 8 потокам. Эвикс ускорил продакшен в 4 раза — без увеличения штата.', grad: 'from-mint-700 to-ink', stats: [['×4', 'потока заявок'], ['−66%', 'CAC за лид'], ['8', 'программ']], statColor: 'mint' },
  { tag: 'Продакшен', title: 'Nomos studio', desc: 'Продакшен на 12 коммерческих съёмок в месяц. Брифы стали занимать 20 минут вместо 4 часов — команда успевает на одну съёмку больше каждую неделю.', grad: 'from-mint-500 to-mint-800', stats: [['−60%', 'часов на бриф'], ['+25%', 'съёмок в мес'], ['+38%', 'охватов']], statColor: 'mint' },
  { tag: 'Эксперт', title: 'Мария Лебедева', desc: 'Нутрициолог с 80k подписчиков. Снимать в кадр каждый день невозможно — теперь публикуется через AI-аватар. Контент идёт регулярно, подписчики не замечают подмены.', grad: 'from-orange-400 to-orange-700', stats: [['×5', 'видео в нед'], ['+34%', 'охват'], ['2 ч', 'съёмки в мес']], statColor: 'orange' },
  { tag: 'Фитнес-сеть', title: '«Этаж» — 4 локации', desc: 'Раньше каждая локация делала контент отдельно, бренд расползался. Сейчас весь контент проходит через единый кабинет — с локальным брендингом каждого клуба.', grad: 'from-ink to-mint-700', stats: [['4', 'локации'], ['+18%', 'новых клиентов'], ['100%', 'бренд-единства']], statColor: 'mint' },
];

function Stars() {
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

export default function Clients() {
  useEffect(() => {
    document.title = 'Клиенты — Эвикс';
  }, []);

  return (
    <>
      <section className="hero-bg relative pt-[152px] pb-20 bg-dark text-white isolate overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-6 max-w-[880px] mx-auto">
            <div className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full bg-mint-300/10 border border-mint-300/20 text-mint-300 text-[12.5px] font-semibold">
              <span className="w-[22px] h-[22px] rounded-full bg-mint-500 grid place-items-center text-[#04241a] text-xs font-extrabold">К</span>
              Клиенты и отзывы
            </div>
            <h1 className="text-[clamp(32px,5vw,56px)] leading-[1.06] font-extrabold tracking-tight max-w-[820px]">
              Команды, которые строят <em className="not-italic text-grad-mint">контент-конвейер</em> на Эвикс
            </h1>
            <p className="text-[clamp(15px,1.6vw,17px)] text-white/75 leading-relaxed max-w-[660px]">
              Студии, агентства и эксперты — у каждой ниши свой кейс. Подборка истории и отзывов от тех, кто уже работает в продукте.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24" id="reviews">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">Примеры успеха</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">Прямые слова тех, кто работает на Эвикс</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">Восемь команд из разных ниш и масштабов. Каждый отзыв — собран в живой беседе, без редактуры.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {REVIEWS.map((r) => (
              <article key={r.initials + r.name} className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-4 hover:border-mint-200 hover:shadow-soft hover:-translate-y-0.5 transition">
                <div className="text-[38px] leading-none text-mint-300 font-serif -mb-2">"</div>
                <p className="text-[14.5px] text-ink leading-relaxed flex-1">{r.text}</p>
                <Stars />
                <div className="flex items-center gap-3 pt-3.5 border-t border-line">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-mint-300 to-mint-500 grid place-items-center text-[#04241a] font-bold text-[15px]">{r.initials}</div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-bold truncate">{r.name}</div>
                    <div className="text-xs text-ink-mute">{r.role}</div>
                  </div>
                  <span className="inline-flex px-2.5 py-1 rounded-full bg-mint-50 text-mint-800 text-[11px] font-semibold shrink-0">{r.tag}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-mint-50 to-canvas" id="cases">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold tracking-[0.14em] uppercase">Примеры использования</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">Примеры использования в реальных бизнесах</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">Краткие кейсы с цифрами «до» и «после». Что было больно, что мы изменили и что получили через 3 месяца.</p>
          </div>

          <article className="reveal mb-7 bg-gradient-to-br from-mint-700 to-mint-800 rounded-r2xl overflow-hidden text-white relative">
            <div className="absolute -top-32 -right-20 w-[440px] h-[440px] rounded-full bg-[radial-gradient(circle,rgba(116,223,187,0.32),transparent_70%)]"></div>
            <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-0 lg:gap-10">
              <div className="p-10 lg:p-12">
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex px-3 py-1 rounded-full bg-white/15 border border-white/20 text-mint-200 text-[11px] font-bold tracking-wider uppercase">Лучший кейс</span>
                  <span className="inline-flex px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white/80 text-[11px] font-bold tracking-wider uppercase">SMM-агентство</span>
                </div>
                <h3 className="text-[clamp(24px,3vw,32px)] font-extrabold tracking-tight leading-tight mb-4">Как Layers SMM вырос с 10 до 30 клиентов за квартал</h3>
                <p className="text-base text-white/80 leading-relaxed mb-7">Агентство держалось на 10 клиентах два года, потому что сценарист тратил 4 часа на ролик. После внедрения Эвикс перевели 100% библиотеки клиентов в кабинет, подключили AI-сценарии и аватар. Команда не увеличилась — производительность увеличилась.</p>
                <div className="flex flex-wrap gap-2">
                  {['Внедрено за 12 дней', 'Команда из 6 человек', 'Тариф «Студия»'].map((b) => (
                    <span key={b} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-white text-[12.5px] font-semibold">
                      <svg className="w-3.5 h-3.5 text-mint-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {b}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-black/15 p-10 lg:p-12 flex flex-col gap-4 justify-center">
                {[
                  ['×3', 'Клиентов в работе', 'было 10 → стало 30'],
                  ['+47%', 'Маржинальность', 'на одного клиента'],
                  ['−72%', 'Время на сценарий', 'с 4 часов до 1 часа'],
                  ['1 день', 'На согласование', 'было 3 дня'],
                ].map(([v, t, s], i) => (
                  <div key={t} className={`flex items-baseline gap-3 ${i < 3 ? 'pb-4 border-b border-white/10' : ''}`}>
                    <span className="text-5xl font-extrabold tracking-tight leading-none text-grad-price-white">{v}</span>
                    <div>
                      <div className="text-sm font-bold">{t}</div>
                      <div className="text-xs text-white/60">{s}</div>
                    </div>
                  </div>
                ))}
                <Link to="/#contact" className="mt-4 inline-flex items-center justify-center gap-2 h-12 px-6 rounded-rmd bg-orange-500 text-white text-sm font-semibold shadow-orange hover:bg-orange-600 hover:shadow-orange-hover transition self-start">
                  Получить такой кейс
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </article>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CASES.map((c) => (
              <article key={c.title} className="reveal bg-white border border-line rounded-r2xl overflow-hidden flex flex-col hover:border-mint-200 hover:shadow-soft hover:-translate-y-0.5 transition">
                <div className={`relative h-32 bg-gradient-to-br ${c.grad} p-5 flex flex-col justify-between text-white overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(255,255,255,0.2),transparent_60%),radial-gradient(50%_50%_at_80%_80%,rgba(0,0,0,0.15),transparent_60%)]"></div>
                  <span className="relative inline-flex self-start px-2.5 py-1 rounded-full bg-white/20 text-white text-[10.5px] font-bold tracking-wider uppercase backdrop-blur-sm">{c.tag}</span>
                  <h3 className="relative text-[19px] font-extrabold tracking-tight leading-tight">{c.title}</h3>
                </div>
                <div className="p-6 flex flex-col gap-5 flex-1">
                  <p className="text-[13.5px] text-ink-soft leading-relaxed">{c.desc}</p>
                  <div className="grid grid-cols-3 gap-2.5">
                    {c.stats.map(([v, t]) => (
                      <div key={t} className={c.statColor === 'orange' ? 'bg-orange-50 rounded-rmd p-3 text-center' : 'bg-mint-50 rounded-rmd p-3 text-center'}>
                        <div className={`text-lg font-extrabold tracking-tight ${c.statColor === 'orange' ? 'text-orange-700' : 'text-mint-800'}`}>{v}</div>
                        <div className="text-[10px] text-ink-mute uppercase tracking-[0.08em] mt-0.5">{t}</div>
                      </div>
                    ))}
                  </div>
                  <a href="#" className="mt-auto inline-flex items-center gap-1.5 text-mint-700 font-semibold text-[13.5px] hover:text-mint-800 hover:gap-2.5 transition-all">
                    Подробный кейс
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="reveal relative overflow-hidden mt-14 bg-gradient-to-br from-mint-700 to-mint-800 text-white rounded-r2xl p-10 grid lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
            <div className="absolute -top-24 -right-14 w-[320px] h-[320px] rounded-full bg-[radial-gradient(circle,rgba(116,223,187,0.32),transparent_70%)]"></div>
            <div className="relative">
              <h3 className="text-[clamp(22px,2.6vw,28px)] font-extrabold tracking-tight mb-3">Эти результаты — не исключения, а среднее по нашим клиентам</h3>
              <p className="text-[15px] text-white/80 leading-relaxed">Мы собираем метрики каждый квартал и публикуем их без округлений. Хотите похожий кейс — расскажите про команду, посчитаем под ваш бизнес.</p>
            </div>
            <div className="relative grid grid-cols-2 gap-3.5">
              {[
                ['×2.4', 'Среднее ускорение'],
                ['+31%', 'Средний рост охватов'],
                ['−54%', 'Часов на согласование'],
                ['1.7 мес', 'Окупаемость тарифа'],
              ].map(([v, t]) => (
                <div key={t} className="bg-white/10 border border-white/15 rounded-rlg p-4">
                  <div className="text-2xl font-extrabold tracking-tight">{v}</div>
                  <div className="text-xs text-white/70 uppercase tracking-[0.08em] mt-1">{t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
