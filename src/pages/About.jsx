import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  useEffect(() => {
    document.title = 'О компании — Эвикс';
  }, []);

  return (
    <>
      <section className="hero-bg relative pt-[152px] pb-20 bg-dark text-white isolate overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-6 max-w-[820px] mx-auto">
            <div className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full bg-mint-300/10 border border-mint-300/20 text-mint-300 text-[12.5px] font-semibold">
              <span className="w-[22px] h-[22px] rounded-full bg-mint-500 grid place-items-center text-[#04241a] text-xs font-extrabold">О</span>
              О компании
            </div>
            <h1 className="text-[clamp(32px,5vw,52px)] leading-[1.06] font-extrabold tracking-tight">
              Контент-конвейер,<br />
              построенный <em className="not-italic text-grad-mint">в одном кабинете</em>
            </h1>
            <p className="text-[clamp(15px,1.6vw,17px)] text-white/75 leading-relaxed">
              Эвикс — это AI-студия контента: продукт, который соединяет сценарии, аватары, монтаж, обложки и трекинг публикаций. Мы строим инструмент для тех, кто живёт в контенте, а не пишет про него слайды.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">Что мы строим</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">Один кабинет вместо пяти SaaS</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">Сценарии, AI-аватары, монтаж, обложки и публикации обычно живут в разных сервисах. Мы собрали всё в одну систему, где данные клиента (ToV, маркетинг, продукт) — общий источник правды для каждого шага.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1080px] mx-auto">
            {[
              { title: 'Сохранить голос бренда', desc: 'ToV-квиз собирает фирменный голос клиента, и сверка с ToV встроена в анализ сценария — генерация не превращается в обезличенный AI-текст.', icon: (<svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>) },
              { title: 'Меньше ручной рутины', desc: 'Команда тратит часы на согласования, перекидывания файлов и сверку версий. В Эвикс шаги связаны: сценарий, монтаж, обложка и публикация хранятся вместе.', icon: (<svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-5" /></svg>) },
              { title: 'Опора на данные конкурентов', desc: 'Парсинг, автопоиск и разбор виральных роликов — встроены в продукт. Идеи берутся не из воздуха, а из того, что реально работает в нише.', icon: (<svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>) },
            ].map((c) => (
              <article key={c.title} className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3.5">
                <div className="w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center">{c.icon}</div>
                <h3 className="text-lg font-bold tracking-tight">{c.title}</h3>
                <p className="text-[14px] text-ink-soft leading-relaxed">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-mint-50 to-canvas">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">Принципы продукта</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">Как мы делаем Эвикс</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-[920px] mx-auto">
            {[
              { n: '01', title: 'Только то, что работает', desc: 'Не показываем в маркетинге функции, которых нет в кабинете. Если раздел в разработке — на странице стоит метка «Скоро».' },
              { n: '02', title: 'Один кабинет — все шаги', desc: 'Не экспорты между сервисами, а единая связка: ToV → сценарий → аватар → монтаж → обложка → публикация.' },
              { n: '03', title: 'Командные роли из коробки', desc: 'Владелец, менеджеры (сценарии / монтаж / публикации), исполнители и клиент-гость. У каждой роли свой набор прав.' },
              { n: '04', title: 'Анализ перед генерацией', desc: 'До запуска видео — сверка темы и сценария по ToV, маркетинговому и продуктовому ядру с рекомендациями.' },
            ].map((p) => (
              <article key={p.n} className="reveal bg-white border border-line rounded-rxl p-7 flex flex-col gap-3">
                <span className="text-xs font-extrabold tracking-[0.14em] uppercase text-mint-600">{p.n}</span>
                <h3 className="text-[17px] font-bold tracking-tight">{p.title}</h3>
                <p className="text-[14px] text-ink-soft leading-relaxed">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold tracking-[0.14em] uppercase">Команда — скоро</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">Расскажем о команде позже</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">Готовим страницу с командой, которая строит Эвикс. Пока — обсуждайте продукт с теми, кто его делает, через форму обратной связи.</p>
            <Link to="/#contact" className="mt-2 inline-flex items-center justify-center gap-2 h-14 px-7 rounded-rmd bg-orange-500 text-white text-[15px] font-semibold shadow-orange hover:bg-orange-600 hover:shadow-orange-hover hover:-translate-y-0.5 transition">Связаться с командой</Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-mint-50 to-canvas">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal relative overflow-hidden bg-gradient-to-br from-mint-700 to-mint-800 text-white rounded-r2xl p-11 grid lg:grid-cols-[1.4fr_auto] gap-8 items-center">
            <div className="absolute -top-24 -right-14 w-[320px] h-[320px] rounded-full bg-[radial-gradient(circle,rgba(116,223,187,0.3),transparent_70%)]"></div>
            <div className="relative">
              <h3 className="text-[clamp(22px,2.6vw,28px)] font-extrabold tracking-tight mb-2.5">Покажем продукт под вашу студию</h3>
              <p className="text-[15px] text-white/80 leading-relaxed">Демо под ваш кейс: соберём пример сценария по вашему ToV и пройдём конвейер до публикации.</p>
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
