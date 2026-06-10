import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { NICHES, MODULES, ALL_MODULES_CARDS, badgeColors } from '../data/functionsData.js';

function RawSvg({ html, className }) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function Functions() {
  useEffect(() => {
    document.title = 'Функции — Эвикс';
  }, []);

  const [niche, setNiche] = useState('smm');
  const [role, setRole] = useState('owner');
  const [swap, setSwap] = useState(false);
  const rolesRef = useRef(null);
  const detailRef = useRef(null);

  const onNicheChange = (key) => {
    if (key === niche) return;
    setSwap(true);
    setTimeout(() => {
      setNiche(key);
      const firstRole = Object.keys(NICHES[key].roles)[0];
      setRole(firstRole);
      setSwap(false);
    }, 300);
    setTimeout(() => {
      if (rolesRef.current) {
        const top = rolesRef.current.getBoundingClientRect().top + window.scrollY - 60;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 320);
  };

  const onRoleChange = (key) => {
    if (key === role) return;
    setRole(key);
    setTimeout(() => {
      if (detailRef.current) {
        const top = detailRef.current.getBoundingClientRect().top + window.scrollY - 60;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 50);
  };

  const currentNiche = NICHES[niche];
  const currentRole = currentNiche.roles[role];

  return (
    <>
      {/* HERO */}
      <section className="hero-bg relative pt-[152px] pb-20 bg-dark text-white isolate overflow-hidden">
        <div className="max-w-container mx-auto px-6">
          <div className="flex flex-col items-center text-center gap-7 max-w-[880px] mx-auto">
            <div className="inline-flex items-center gap-2 pl-2 pr-3.5 py-1.5 rounded-full bg-mint-300/10 border border-mint-300/20 text-mint-300 text-[12.5px] font-semibold">
              <span className="w-[22px] h-[22px] rounded-full bg-mint-500 grid place-items-center text-[#04241a] text-xs font-extrabold">Ф</span>
              Все модули Эвикс в одном месте
            </div>
            <h1 className="text-[clamp(32px,5vw,56px)] leading-[1.06] font-extrabold tracking-tight max-w-[820px]">
              Контент-конвейер<br />для{' '}
              <em className={`hero-em not-italic inline-block text-grad-mint min-w-[1ch] ${swap ? 'is-swapping' : ''}`}>
                {currentNiche.hero}
              </em>
            </h1>
            <p className="text-[clamp(15px,1.6vw,17px)] text-white/75 leading-relaxed max-w-[660px]">
              Эвикс собирает сценарии, парсинг конкурентов, обложки и трекинг публикаций в одном кабинете. Выберите контекст команды — и увидите релевантный набор модулей, без обещаний того, чего нет.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-[640px] mt-2">
              {[
                { v: '16', l: 'Реальных модулей' },
                { v: '4', l: 'Сценария применения' },
                { v: '9', l: 'Ролей команды' },
              ].map((m) => (
                <div key={m.l} className="p-4.5 px-4 bg-white/[0.06] border border-white/10 rounded-rlg backdrop-blur-sm">
                  <div className="text-2xl font-extrabold tracking-tight text-white">{m.v}</div>
                  <div className="text-[11.5px] text-white/60 uppercase tracking-[0.1em] mt-1">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ALL FUNCTIONS */}
      <section className="py-18 bg-white">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">Реальные функции в кабинете</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">16 модулей, которые уже работают в продукте</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">Только то, что реально есть в кабинете. Ниже сможете отфильтровать модули под роль в команде.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {ALL_MODULES_CARDS.map((m) => (
              <article key={m.key} className="reveal relative bg-white border border-line rounded-rlg p-5 flex flex-col gap-2.5 hover:border-mint-300 hover:shadow-soft hover:-translate-y-0.5 transition">
                <span className={`absolute top-3.5 right-3.5 text-[10px] font-bold tracking-[0.08em] uppercase px-2 py-0.5 rounded-full ${badgeColors(m.badge)}`}>{m.badge}</span>
                <RawSvg html={MODULES[m.key].icon} className="w-10 h-10 rounded-[11px] bg-mint-50 text-mint-700 grid place-items-center [&_svg]:w-[19px] [&_svg]:h-[19px]" />
                <div className="text-sm font-bold tracking-tight">{m.title}</div>
                <div className="text-[12.5px] text-ink-soft leading-snug">{m.desc}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NICHE */}
      <section className="py-24 bg-gradient-to-b from-mint-50 to-canvas" id="niches">
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">Ниша</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">Выберите свою нишу</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">Эвикс адаптируется под отрасль. Под каждую нишу — собственные карточки клиентов, шаблоны, документы и роли.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 max-w-[940px] mx-auto">
            {Object.entries(NICHES).map(([key, n]) => (
              <button
                key={key}
                type="button"
                onClick={() => onNicheChange(key)}
                className={`niche reveal relative font-sans bg-white border-[1.5px] border-line rounded-rlg px-5 py-6 text-center cursor-pointer flex flex-col items-center gap-2.5 hover:border-mint-300 hover:shadow-soft-sm hover:-translate-y-0.5 transition ${key === niche ? 'is-active' : ''}`}
              >
                <RawSvg html={n.icon} className="niche-icon w-12 h-12 rounded-rmd bg-mint-50 text-mint-700 grid place-items-center transition" />
                <div className="text-sm font-bold tracking-tight">{n.name}</div>
                <div className="text-[11.5px] text-ink-mute">{n.sub}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section className="py-24" id="roles" ref={rolesRef}>
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">Выбор ролей</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">Кто будет работать в Эвикс?</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">У каждой роли — свой интерфейс и набор модулей. Никаких «универсальных» кабинетов, в которых половина инструментов не нужна.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3.5 min-h-[162px]">
            {Object.entries(currentNiche.roles).map(([key, r]) => (
              <button
                key={key}
                type="button"
                onClick={() => onRoleChange(key)}
                className={`role reveal relative font-sans bg-white border-[1.5px] border-line rounded-rlg p-5.5 cursor-pointer text-left flex flex-col gap-2 hover:border-mint-300 hover:shadow-soft-sm hover:-translate-y-0.5 transition overflow-hidden ${key === role ? 'is-active' : ''}`}
              >
                <div className="flex items-center justify-between gap-2.5">
                  <span className="text-base font-bold tracking-tight">{r.name}</span>
                  <span className="role-count inline-flex items-center px-2.5 py-0.5 rounded-full bg-mint-100 text-mint-800 text-[11px] font-bold">{r.modules.length} модулей</span>
                </div>
                <div className="text-[13px] text-ink-soft leading-snug">{r.desc}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES DETAIL */}
      <section className="py-24 bg-gradient-to-b from-mint-50 to-canvas" id="modulesDetail" ref={detailRef}>
        <div className="max-w-container mx-auto px-6">
          <div className="reveal flex flex-col items-center text-center gap-3.5 mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-[0.14em] uppercase">Модули под вашу роль</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight leading-[1.1] max-w-[780px]">Что именно вы получите в Эвикс</h2>
            <p className="text-[clamp(15px,1.6vw,17px)] text-ink-soft max-w-[640px]">Описание модулей продукта согласно выбранной вами ниши и роли. Каждый блок показывает реальные сценарии использования, а не теоретические возможности.</p>
          </div>

          <div className="bg-white border border-line rounded-rxl px-6 py-4.5 flex flex-wrap items-center gap-3.5 mb-7">
            <span className="text-[11.5px] font-bold tracking-[0.1em] uppercase text-ink-mute">Контекст:</span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-sm font-semibold">{currentNiche.name}</span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold">{currentRole.name}</span>
            <span className="ml-auto text-sm text-ink-soft">Подобрано модулей: <strong className="text-ink">{currentRole.modules.length}</strong></span>
          </div>

          <div className="grid lg:grid-cols-2 gap-4.5">
            {currentRole.modules.length === 0 && (
              <div className="col-span-full p-10 bg-white border border-dashed border-line-strong rounded-rxl text-center text-ink-soft">
                Для этой роли модули пока не подобраны.
              </div>
            )}
            {currentRole.modules.map((modKey, idx) => {
              const m = MODULES[modKey];
              if (!m) return null;
              const perNiche = m.perNiche[niche] || {};
              const title = perNiche.title || m.base.title;
              const desc = perNiche.desc || '';
              const list = perNiche.list || [];
              return (
                <article
                  key={`${role}-${modKey}`}
                  className="module-appear bg-white border border-line rounded-rxl p-7 grid grid-cols-[56px_1fr] gap-5 hover:border-mint-200 hover:shadow-soft hover:-translate-y-0.5 transition"
                  style={{ animationDelay: `${idx * 60}ms` }}
                >
                  <RawSvg html={m.icon} className="module-icon w-14 h-14 rounded-[14px] bg-gradient-to-br from-mint-100 to-mint-50 text-mint-700 grid place-items-center" />
                  <div>
                    <div className="flex items-center flex-wrap gap-2 mb-2">
                      <h3 className="text-lg font-bold tracking-tight">{title}</h3>
                      <span className={`inline-flex text-[10.5px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full ${badgeColors(m.base.badge)}`}>{m.base.badge}</span>
                    </div>
                    <p className="text-sm text-ink-soft leading-relaxed mb-3.5">{desc}</p>
                    <ul className="list-none m-0 p-0 flex flex-col gap-2 list-check text-[13.5px]">
                      {list.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-14 relative overflow-hidden bg-gradient-to-br from-mint-700 to-mint-800 text-white rounded-r2xl p-11 grid lg:grid-cols-[1.4fr_auto] gap-8 items-center">
            <div className="absolute -top-24 -right-14 w-[320px] h-[320px] rounded-full bg-[radial-gradient(circle,rgba(116,223,187,0.3),transparent_70%)]"></div>
            <div className="relative">
              <h3 className="text-[clamp(22px,2.6vw,28px)] font-extrabold tracking-tight mb-2.5">Хотите увидеть это в работе под ваш бизнес?</h3>
              <p className="text-[15px] text-white/80 leading-relaxed">Запишемся на демо, покажем настроенный кабинет с реальными данными вашей ниши и поможем оценить, сколько вы освободите часов в неделю.</p>
            </div>
            <div className="relative flex gap-3">
              <Link to="/#contact" className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-rmd bg-orange-500 text-white text-[15px] font-semibold shadow-orange hover:bg-orange-600 hover:shadow-orange-hover hover:-translate-y-0.5 transition">Получить демо</Link>
              <Link to="/#how" className="inline-flex items-center justify-center gap-2 h-14 px-7 rounded-rmd bg-white/10 backdrop-blur-sm text-white border border-white/20 text-[15px] font-semibold hover:bg-white/20 hover:border-white/30 transition">Как это работает</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
