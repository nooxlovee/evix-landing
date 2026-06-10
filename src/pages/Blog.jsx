import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const POSTS = [
  { tag: 'Гайд', title: 'Как описать Tone of Voice, чтобы AI не «соскальзывал»', desc: 'Что войдёт в материал: структура ToV, частые ошибки, шаблон под эксперта и под бренд.', grad: 'from-mint-200 to-mint-500' },
  { tag: 'Разбор', title: 'Анализ сценария по 10 критериям: на что смотрит Эвикс', desc: 'Хук, удержание, ТЗ монтажу, сверка с ToV — что входит в каждую группу критериев.', grad: 'from-orange-300 to-orange-600' },
  { tag: 'Гайд', title: 'Парсинг конкурентов: как настроить автопоиск под нишу', desc: 'Платформы, ER, охваты, регион — какие фильтры дают релевантных кандидатов.', grad: 'from-mint-700 to-ink' },
];

export default function Blog() {
  useEffect(() => {
    document.title = 'Блог — Эвикс';
  }, []);

  return (
    <>
      <section className="hero-bg relative pt-[152px] pb-20 bg-dark text-white isolate overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-6 max-w-[820px] mx-auto">
            <div className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full bg-mint-300/10 border border-mint-300/20 text-mint-300 text-[12.5px] font-semibold">
              <span className="w-[22px] h-[22px] rounded-full bg-mint-500 grid place-items-center text-[#04241a] text-xs font-extrabold">Б</span>
              Блог Эвикс
            </div>
            <h1 className="text-[clamp(32px,5vw,56px)] leading-[1.06] font-extrabold tracking-tight max-w-[820px]">
              Материалы про <em className="not-italic text-grad-mint">контент-конвейер</em>
            </h1>
            <p className="text-[clamp(15px,1.6vw,17px)] text-white/75 leading-relaxed max-w-[660px]">
              Разборы кейсов, гайды по продакшену и обновления продукта. Первые материалы выходят — следите за лентой ниже.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold tracking-[0.14em] uppercase">Материалы готовятся</span>
            <h2 className="text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">Скоро здесь появятся первые статьи и кейсы</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">Готовим разборы по сценариям, AI-анализу, парсингу конкурентов и работе команды. Если хотите получать материалы — оставьте email в форме.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {POSTS.map((p) => (
              <article key={p.title} className="bg-white border border-dashed border-line-strong rounded-rxl overflow-hidden flex flex-col">
                <div className={`h-[180px] bg-gradient-to-br ${p.grad} grid place-items-center text-white`}>
                  <span className="text-sm font-bold tracking-wider uppercase opacity-80">В работе</span>
                </div>
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-2 text-xs text-ink-mute mb-3">
                    <span className="inline-flex px-2.5 py-0.5 rounded-full bg-mint-50 text-mint-800 font-bold text-[11px] tracking-wide">{p.tag}</span>
                    <span>Скоро</span>
                  </div>
                  <h3 className="text-[17px] font-bold tracking-tight mb-2 leading-snug">{p.title}</h3>
                  <p className="text-[13.5px] text-ink-soft leading-relaxed">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="reveal mt-14 max-w-[820px] mx-auto bg-white border border-line rounded-r2xl p-9 flex flex-col md:flex-row items-center justify-between gap-7">
            <div>
              <h3 className="text-xl font-extrabold tracking-tight mb-2">Получать материалы первыми</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed">Оставьте email — пришлём, когда выйдут первые разборы и гайды.</p>
            </div>
            <Link to="/contacts" className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-rmd bg-orange-500 text-white text-[15px] font-semibold shadow-orange hover:bg-orange-600 hover:shadow-orange-hover hover:-translate-y-0.5 transition shrink-0">Подписаться</Link>
          </div>
        </div>
      </section>
    </>
  );
}
