import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const navLinkBase =
  'px-3.5 py-2.5 rounded-[10px] text-sm font-medium transition';
const navLinkIdle = 'text-ink-soft hover:bg-mint-50 hover:text-mint-800';
const navLinkActive = 'bg-mint-100 text-mint-800 font-semibold';

function navCls({ isActive }) {
  return `${navLinkBase} ${isActive ? navLinkActive : navLinkIdle}`;
}

function DropdownTrigger({ label }) {
  return (
    <button
      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-[10px] text-ink-soft text-sm font-medium hover:bg-mint-50 hover:text-mint-800 transition"
      type="button"
      aria-haspopup="menu"
      aria-expanded="false"
    >
      {label}
      <svg className="nav-chevron w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  );
}

function DropdownItem({ to, title, subtitle, icon }) {
  return (
    <Link
      to={to}
      className="flex items-start gap-3.5 p-3.5 rounded-rmd hover:bg-mint-50 transition group"
      role="menuitem"
    >
      <div className="w-10 h-10 rounded-[11px] bg-mint-50 text-mint-700 grid place-items-center shrink-0 group-hover:bg-mint-500 group-hover:text-white transition">
        {icon}
      </div>
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className="text-sm font-bold text-ink tracking-tight">{title}</span>
        <span className="text-[12.5px] text-ink-soft leading-snug">{subtitle}</span>
      </div>
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('is-menu-open', menuOpen);
    return () => document.body.classList.remove('is-menu-open');
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setOpenGroup(null);
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024 && menuOpen) setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen]);

  const toggleGroup = (key) => {
    if (!menuOpen) return;
    setOpenGroup((cur) => (cur === key ? null : key));
  };

  return (
    <header className={`site-header fixed inset-x-0 top-0 h-[72px] z-50 ${scrolled ? 'is-scrolled' : ''}`} id="siteHeader">
      <div className="max-w-container mx-auto px-6 h-full flex items-center justify-between gap-6">
        <Link to="/" className="inline-flex items-center gap-2 text-ink">
          <span className="brand-mark w-9 h-9 rounded-[10px] grid place-items-center text-white">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3C7 3 3 7 3 12s4 9 9 9h6v-3h-6c-3.3 0-6-2.7-6-6s2.7-6 6-6h6V3h-6z" />
              <rect x="6" y="10.5" width="12" height="3" />
            </svg>
          </span>
        </Link>

        <nav className="site-nav flex items-center gap-1" aria-label="Основная навигация">
          <NavLink to="/functions" className={navCls}>Функции</NavLink>

          <div
            className={`nav-group ${openGroup === 'product' ? 'is-open' : ''}`}
            onClick={(e) => {
              if (e.target.closest('button')) toggleGroup('product');
            }}
          >
            <DropdownTrigger label="О продукте" />
            <div className="nav-dropdown absolute top-[calc(100%+10px)] left-1/2 w-[440px] bg-white border border-line rounded-rxl p-2 shadow-soft-lg z-[60]" role="menu">
              <DropdownItem
                to="/implementation"
                title="Внедрение"
                subtitle="Как встраиваем продукт в работу студии"
                icon={
                  <svg className="w-[19px] h-[19px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91-.78-.79-2.07-.79-2.91-.09z" />
                    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                  </svg>
                }
              />
              <DropdownItem
                to="/training"
                title="Обучение"
                subtitle="Научим команду работать с Эвикс"
                icon={
                  <svg className="w-[19px] h-[19px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6" />
                    <path d="M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 1 4 3 6 3s6-2 6-3v-5" />
                  </svg>
                }
              />
              <DropdownItem
                to="/integrations"
                title="Интеграции"
                subtitle="Подключение соцсетей и площадок"
                icon={
                  <svg className="w-[19px] h-[19px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="2" width="6" height="6" rx="1" />
                    <rect x="2" y="14" width="6" height="6" rx="1" />
                    <rect x="16" y="14" width="6" height="6" rx="1" />
                    <path d="M12 8v3a2 2 0 0 0 2 2h3" />
                    <path d="M12 11H8a2 2 0 0 0-2 2v1" />
                  </svg>
                }
              />
            </div>
          </div>

          <NavLink to="/pricing" className={navCls}>Тарифы</NavLink>
          <NavLink to="/clients" className={navCls}>Клиенты</NavLink>
          <NavLink to="/about" className={navCls}>О компании</NavLink>
          <NavLink to="/blog" className={navCls}>Блог</NavLink>

          <div
            className={`nav-group ${openGroup === 'support' ? 'is-open' : ''}`}
            onClick={(e) => {
              if (e.target.closest('button')) toggleGroup('support');
            }}
          >
            <DropdownTrigger label="Поддержка" />
            <div className="nav-dropdown absolute top-[calc(100%+10px)] left-1/2 w-[400px] bg-white border border-line rounded-rxl p-2 shadow-soft-lg z-[60]" role="menu">
              <DropdownItem
                to="/knowledge-base"
                title="База знаний"
                subtitle="Гайды по модулям и сценариям"
                icon={
                  <svg className="w-[19px] h-[19px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                }
              />
              <DropdownItem
                to="/faq"
                title="Частые вопросы"
                subtitle="FAQ по продукту и тарифам"
                icon={
                  <svg className="w-[19px] h-[19px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                }
              />
              <DropdownItem
                to="/contacts"
                title="Контакты"
                subtitle="Связаться с командой"
                icon={
                  <svg className="w-[19px] h-[19px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                }
              />
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-2.5">
          <Link
            to="/#contact"
            className="hidden md:inline-flex items-center gap-1.5 h-11 px-4 rounded-rmd border border-line bg-white text-sm font-semibold text-ink-soft hover:bg-mint-50 hover:border-mint-300 hover:text-mint-700 transition"
          >
            Запросить демо
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </Link>
          <button
            className="menu-toggle hidden max-lg:grid w-[42px] h-[42px] rounded-rmd border border-line bg-white text-ink place-items-center relative"
            type="button"
            aria-label={menuOpen ? 'Закрыть меню' : 'Меню'}
            aria-expanded={menuOpen}
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen((v) => !v);
            }}
          >
            {menuOpen ? (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
