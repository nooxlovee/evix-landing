import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0a1410] text-white/70 pt-16 pb-7">
      <div className="max-w-container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 pb-10 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2.5 text-white font-extrabold text-lg tracking-[0.2em] uppercase mb-3.5">
              <span className="brand-mark w-8 h-8 rounded-[9px] grid place-items-center text-white">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3C7 3 3 7 3 12s4 9 9 9h6v-3h-6c-3.3 0-6-2.7-6-6s2.7-6 6-6h6V3h-6z" />
                  <rect x="6" y="10.5" width="12" height="3" />
                </svg>
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-[340px] mb-4.5">
              AI-студия контента: сценарии, аватары, монтаж и трекинг публикаций в одном кабинете. Для студий, агентств и блогеров.
            </p>
          </div>

          <div>
            <div className="text-xs font-bold text-white uppercase tracking-[0.14em] mb-4">Продукт</div>
            <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
              <li><Link to="/functions" className="text-sm text-white/70 hover:text-mint-300 transition">Функции</Link></li>
              <li><Link to="/pricing" className="text-sm text-white/70 hover:text-mint-300 transition">Тарифы</Link></li>
              <li><Link to="/#how" className="text-sm text-white/70 hover:text-mint-300 transition">Как работает</Link></li>
              <li><Link to="/clients" className="text-sm text-white/70 hover:text-mint-300 transition">Клиенты</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold text-white uppercase tracking-[0.14em] mb-4">Компания</div>
            <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
              <li><Link to="/about" className="text-sm text-white/70 hover:text-mint-300 transition">О компании</Link></li>
              <li><Link to="/blog" className="text-sm text-white/70 hover:text-mint-300 transition">Блог</Link></li>
              <li><Link to="/#contact" className="text-sm text-white/70 hover:text-mint-300 transition">Запросить демо</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold text-white uppercase tracking-[0.14em] mb-4">Поддержка</div>
            <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
              <li><Link to="/knowledge-base" className="text-sm text-white/70 hover:text-mint-300 transition">База знаний</Link></li>
              <li><Link to="/faq" className="text-sm text-white/70 hover:text-mint-300 transition">FAQ</Link></li>
              <li><Link to="/contacts" className="text-sm text-white/70 hover:text-mint-300 transition">Контакты</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex justify-between flex-wrap gap-3 text-[12.5px] text-white/50">
          <span>© 2026 Эвикс. Все права защищены.</span>
          <div className="flex gap-4.5">
            <a href="#" className="text-white/50 hover:text-mint-300 transition">Политика конфиденциальности</a>
            <a href="#" className="text-white/50 hover:text-mint-300 transition">Публичная оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
