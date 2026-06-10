import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TABLE_ROWS = [
  ['Дашборд студии', '✓', '✓'],
  ['Клиенты и Workspace', '✓', '✓'],
  ['Библиотека ядер (ToV, маркетинг, продукт, аккаунт, ниша)', '✓', '✓'],
  ['База визуальных форматов', '✓', '✓'],
  ['AI-сценарии (5 шагов мастера)', '✓', '✓'],
  ['AI-анализ сценария (10 критериев)', '✓', '✓'],
  ['Аватары и голоса', '✓', '✓'],
  ['AI-обложки (5 шагов мастера)', '✓', '✓'],
  ['Автомонтаж', '✓', 'с приоритетом'],
  ['Ручной монтаж от живого монтажёра', '—', '✓'],
  ['Трекер публикаций', '✓', '✓'],
  ['Парсинг конкурентов и виральные ролики', '✓', '✓'],
  ['Командные роли и согласования', '✓', '✓'],
  ['Уведомления и квиз ToV', '✓', '✓'],
];

export default function Pricing() {
  useEffect(() => {
    document.title = 'Тарифы — Эвикс. Free и Pro';
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero-bg relative pt-[152px] pb-20 bg-dark text-white isolate overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-6 max-w-[880px] mx-auto">
            <div className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full bg-mint-300/10 border border-mint-300/20 text-mint-300 text-[12.5px] font-semibold">
              <span className="w-[22px] h-[22px] rounded-full bg-mint-500 grid place-items-center text-[#04241a] text-xs font-extrabold">₽</span>
              Тарифы Эвикс
            </div>
            <h1 className="text-[clamp(32px,5vw,56px)] leading-[1.06] font-extrabold tracking-tight max-w-[820px]">
              Два тарифа:<br />
              <em className="not-italic text-grad-mint">Free и Pro</em>
            </h1>
            <p className="text-[clamp(15px,1.6vw,17px)] text-white/75 leading-relaxed max-w-[660px]">
              Free даёт всё для самостоятельной работы: AI-сценарии, аватары, автомонтаж и трекинг публикаций. Pro подключает живого монтажёра и приоритет на автомонтаже. Стоимость Pro обсуждаем индивидуально.
            </p>
            <div className="flex gap-3 flex-wrap justify-center mt-1.5">
              <a href="#tariffs" className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-rmd bg-orange-500 text-white text-[15px] font-semibold shadow-orange hover:bg-orange-600 hover:shadow-orange-hover hover:-translate-y-0.5 transition">Сравнить тарифы</a>
              <Link to="/#contact" className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-rmd bg-white/10 backdrop-blur-sm text-white border border-white/20 text-[15px] font-semibold hover:bg-white/20 hover:border-white/30 transition">
                Узнать цену Pro
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TARIFFS */}
      <section className="py-24" id="tariffs">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">Тарифная сетка</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">Free и Pro — отличаются только монтажом</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">Все модули продукта, AI-функции и роли доступны на обоих тарифах. Pro нужен, когда хочется ручной монтаж от живого монтажёра вместо автоматического.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5.5 items-stretch max-w-[860px] mx-auto">
            {/* Free */}
            <article className="reveal relative bg-white border-[1.5px] border-line rounded-r2xl p-9 pb-8 flex flex-col gap-6 hover:border-mint-200 hover:shadow-soft hover:-translate-y-1 transition">
              <div>
                <div className="text-lg font-extrabold tracking-tight mb-1.5">Free</div>
                <p className="text-[13.5px] text-ink-soft leading-relaxed">Базовый тариф. Всё, что нужно для самостоятельной работы со студией контента.</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-baseline gap-2.5 flex-wrap">
                  <span className="text-5xl font-extrabold tracking-tight leading-none text-grad-price">0</span>
                  <span className="text-2xl font-bold">₽</span>
                  <span className="text-[13px] text-ink-mute font-medium">/мес</span>
                </div>
              </div>
              <ul className="list-none m-0 p-0 flex flex-col gap-3 flex-1 list-check list-check-lg text-sm leading-relaxed">
                <li>Дашборд: обзор, сценарии, публикации</li>
                <li>Клиенты и Workspace под каждого</li>
                <li>Библиотека ядер: ToV, маркетинг, продукт, аккаунт, ниша</li>
                <li>База визуальных форматов и свои шаблоны</li>
                <li>AI-сценарии — мастер из 5 шагов</li>
                <li>AI-анализ сценария по 10 критериям</li>
                <li>Каталог аватаров и голосов</li>
                <li>AI-обложки — мастер из 5 шагов</li>
                <li><strong className="text-ink font-bold">Автомонтаж</strong> по шаблону</li>
                <li>Трекинг публикаций (ручное добавление)</li>
                <li>Парсинг конкурентов и виральные ролики</li>
                <li>Командные роли и согласования</li>
              </ul>
              <Link to="/#contact" className="inline-flex items-center justify-center gap-2 h-14 w-full rounded-rmd bg-transparent text-ink border border-line-strong text-[15px] font-semibold hover:bg-mint-50 hover:border-mint-300 hover:text-mint-700 transition">Запросить доступ</Link>
            </article>

            {/* Pro */}
            <article className="reveal relative bg-gradient-to-br from-[#07251f] via-[#0a3a2c] to-[#115a45] border-[1.5px] border-mint-500 rounded-r2xl p-9 pb-8 flex flex-col gap-6 text-white shadow-mint-glow hover:-translate-y-1 transition">
              <div className="absolute inset-0 rounded-r2xl overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-20 w-[260px] h-[260px] rounded-full bg-[radial-gradient(circle,rgba(116,223,187,0.32),transparent_70%)]"></div>
              </div>
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-500 text-white text-[11.5px] font-extrabold tracking-wider uppercase shadow-orange-badge whitespace-nowrap z-20">Живой монтажёр</span>
              <div className="relative z-10">
                <div className="text-lg font-extrabold tracking-tight mb-1.5">Pro</div>
                <p className="text-[13.5px] text-white/75 leading-relaxed">Всё из Free плюс ручной монтаж от живого монтажёра и приоритет на автомонтаже.</p>
              </div>
              <div className="relative z-10 flex flex-col gap-2">
                <div className="flex items-baseline gap-2.5 flex-wrap">
                  <span style={{ fontSize: 'clamp(26px, 3.6vw, 36px)' }} className="font-extrabold tracking-tight leading-none text-grad-price-white">По запросу</span>
                </div>
                <span className="text-[13px] text-white/55 leading-relaxed">Цена зависит от объёма роликов и команды. Обсудим на демо.</span>
              </div>
              <ul className="relative z-10 list-none m-0 p-0 flex flex-col gap-3 flex-1 list-check list-check-lg list-check-white text-sm leading-relaxed text-white/90">
                <li>Всё из тарифа <strong className="text-white font-bold">Free</strong></li>
                <li><strong className="text-white font-bold">Ручной монтаж</strong> от живого монтажёра</li>
                <li>Приоритет в очереди автомонтажа</li>
                <li>Согласования и возврат на доработку с комментарием</li>
              </ul>
              <Link to="/#contact" className="relative z-10 inline-flex items-center justify-center gap-2 h-14 w-full rounded-rmd bg-orange-500 text-white text-[15px] font-semibold shadow-orange hover:bg-orange-600 hover:shadow-orange-hover hover:-translate-y-0.5 transition">Узнать стоимость Pro</Link>
            </article>
          </div>

          <div className="reveal mt-14 max-w-[860px] mx-auto bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
            <h3 className="text-base font-bold tracking-tight">Корпоративные условия</h3>
            <p className="text-[14px] text-ink-soft leading-relaxed">Если у вас сетевое агентство с большим потоком клиентов или специфические требования по командной работе — напишите. Обсудим формат сотрудничества и стоимость.</p>
            <Link to="/#contact" className="self-start inline-flex items-center gap-1.5 text-mint-700 font-semibold text-[14px] hover:text-mint-800 hover:gap-2.5 transition-all">
              Обсудить корпоративный план
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-24 bg-gradient-to-b from-mint-50 to-canvas">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">Сравнение</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">Что входит в каждый тариф</h2>
          </div>

          <div className="reveal bg-white border border-line rounded-rxl overflow-hidden max-w-[920px] mx-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-canvas">
                  <th className="text-left py-4 px-5 font-bold tracking-tight">Возможность</th>
                  <th className="text-center py-4 px-5 font-bold tracking-tight">Free</th>
                  <th className="text-center py-4 px-5 font-bold tracking-tight bg-mint-50 text-mint-800">Pro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {TABLE_ROWS.map(([label, free, pro]) => (
                  <tr key={label}>
                    <td className="py-3.5 px-5">{label}</td>
                    <td className={`text-center ${free === '—' ? 'text-ink-mute' : 'text-mint-700'}`}>{free}</td>
                    <td className={`text-center bg-mint-50/40 ${pro === '✓' ? 'text-mint-700 font-bold' : 'text-mint-700'}`}>{pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal relative overflow-hidden bg-gradient-to-br from-mint-700 to-mint-800 text-white rounded-r2xl p-11 grid lg:grid-cols-[1.4fr_auto] gap-8 items-center">
            <div className="absolute -top-24 -right-14 w-[320px] h-[320px] rounded-full bg-[radial-gradient(circle,rgba(116,223,187,0.3),transparent_70%)]"></div>
            <div className="relative">
              <h3 className="text-[clamp(22px,2.6vw,28px)] font-extrabold tracking-tight mb-2.5">Подберём тариф под вашу задачу</h3>
              <p className="text-[15px] text-white/80 leading-relaxed">Покажем кабинет под вашу команду, ответим на вопросы про Pro и обсудим, как сценарии встанут в ваш процесс.</p>
            </div>
            <div className="relative flex gap-3">
              <Link to="/#contact" className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-rmd bg-orange-500 text-white text-[15px] font-semibold shadow-orange hover:bg-orange-600 hover:shadow-orange-hover hover:-translate-y-0.5 transition">Записаться на демо</Link>
              <Link to="/functions" className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-rmd bg-white/10 backdrop-blur-sm text-white border border-white/20 text-[15px] font-semibold hover:bg-white/20 hover:border-white/30 transition">Все функции</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
