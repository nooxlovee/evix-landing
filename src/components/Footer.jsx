import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#0a1410] text-white/70 pt-16 pb-7">
      <div className="max-w-container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 pb-10 border-b border-white/10">
          <div>
            <div className="text-white font-extrabold text-lg tracking-[0.2em] uppercase mb-3.5">
              Эвикс
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-[340px] mb-4.5">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <div className="text-xs font-bold text-white uppercase tracking-[0.14em] mb-4">{t('footer.productCol')}</div>
            <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
              <li><Link to="/functions" className="text-sm text-white/70 hover:text-mint-300 transition">{t('footer.functions')}</Link></li>
              <li><Link to="/pricing" className="text-sm text-white/70 hover:text-mint-300 transition">{t('footer.pricing')}</Link></li>
              <li><Link to="/#how" className="text-sm text-white/70 hover:text-mint-300 transition">{t('footer.howWorks')}</Link></li>
              <li><Link to="/clients" className="text-sm text-white/70 hover:text-mint-300 transition">{t('footer.clients')}</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold text-white uppercase tracking-[0.14em] mb-4">{t('footer.companyCol')}</div>
            <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
              <li><Link to="/about" className="text-sm text-white/70 hover:text-mint-300 transition">{t('footer.about')}</Link></li>
              <li><Link to="/blog" className="text-sm text-white/70 hover:text-mint-300 transition">{t('footer.blog')}</Link></li>
              <li><Link to="/#contact" className="text-sm text-white/70 hover:text-mint-300 transition">{t('footer.requestDemo')}</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold text-white uppercase tracking-[0.14em] mb-4">{t('footer.supportCol')}</div>
            <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
              <li><Link to="/knowledge-base" className="text-sm text-white/70 hover:text-mint-300 transition">{t('footer.knowledgeBase')}</Link></li>
              <li><Link to="/faq" className="text-sm text-white/70 hover:text-mint-300 transition">{t('footer.faq')}</Link></li>
              <li><Link to="/contacts" className="text-sm text-white/70 hover:text-mint-300 transition">{t('footer.contacts')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex justify-between flex-wrap gap-3 text-[12.5px] text-white/50">
          <span>{t('footer.rights')}</span>
          <div className="flex gap-4.5">
            <a href="#" className="text-white/50 hover:text-mint-300 transition">{t('footer.privacy')}</a>
            <a href="#" className="text-white/50 hover:text-mint-300 transition">{t('footer.offer')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
