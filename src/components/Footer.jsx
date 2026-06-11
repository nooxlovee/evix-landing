import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function BrandMark() {
  return (
    <div className="flex items-center gap-2.5">
      <span aria-hidden="true" className="relative inline-flex">
        <span className="block w-7 h-7 rounded-[8px] bg-gradient-to-br from-mint-300 via-mint-500 to-mint-700 shadow-[0_6px_18px_rgba(43,191,139,0.35)]" />
        <span className="absolute inset-0 grid place-items-center text-[#04241a] font-black text-[14px] leading-none">Э</span>
      </span>
      <span className="text-white font-extrabold text-lg tracking-[0.18em] uppercase">Эвикс</span>
    </div>
  );
}

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-[#0a1410] text-white/70 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-mint-500/60 to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[640px] h-[320px] rounded-full bg-[radial-gradient(closest-side,rgba(43,191,139,0.18),transparent_75%)]" />

      <div className="relative max-w-container mx-auto px-6 pt-16 pb-7">
        <div className="relative mb-14 rounded-r2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0e1f1a] via-[#0a1410] to-[#0e1f1a] p-8 sm:p-10 grid lg:grid-cols-[1.6fr_1fr] gap-8 items-center">
          <div aria-hidden="true" className="absolute -top-20 -right-16 w-[300px] h-[300px] rounded-full bg-[radial-gradient(closest-side,rgba(43,191,139,0.22),transparent_75%)]" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint-500/10 border border-mint-500/20 text-mint-300 text-[11px] font-bold tracking-[0.14em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-mint-400 animate-pulse" />
              {t('footer.status')}
            </div>
            <h3 className="text-white text-[clamp(20px,2.4vw,28px)] font-extrabold tracking-tight leading-[1.15] mb-2.5">
              {t('footer.cta.title')}
            </h3>
            <p className="text-[14.5px] text-white/65 leading-relaxed max-w-[520px]">
              {t('footer.cta.desc')}
            </p>
          </div>
          <div className="relative flex lg:justify-end">
            <Link
              to="/#contact"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-mint-500 text-[#04241a] text-sm font-bold tracking-tight hover:bg-mint-400 shadow-mint hover:shadow-mint-hover transition-all"
            >
              {t('footer.cta.button')}
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 pb-10 border-b border-white/10">
          <div>
            <BrandMark />
            <p className="text-sm text-white/60 leading-relaxed max-w-[340px] mt-4 mb-5">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-9 h-9 rounded-rmd grid place-items-center bg-white/5 border border-white/10 text-white/70 hover:text-mint-300 hover:bg-white/10 hover:border-white/20 transition"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
                </svg>
              </a>
              <a
                href="mailto:hello@evix.studio"
                aria-label="Email"
                className="w-9 h-9 rounded-rmd grid place-items-center bg-white/5 border border-white/10 text-white/70 hover:text-mint-300 hover:bg-white/10 hover:border-white/20 transition"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-rmd grid place-items-center bg-white/5 border border-white/10 text-white/70 hover:text-mint-300 hover:bg-white/10 hover:border-white/20 transition"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M21.6 7.2c-.2-1-1-1.8-2-2C17.6 4.8 12 4.8 12 4.8s-5.6 0-7.6.4c-1 .2-1.8 1-2 2C2 9.2 2 12 2 12s0 2.8.4 4.8c.2 1 1 1.8 2 2 2 .4 7.6.4 7.6.4s5.6 0 7.6-.4c1-.2 1.8-1 2-2 .4-2 .4-4.8.4-4.8s0-2.8-.4-4.8zM10 15.5v-7l5.5 3.5L10 15.5z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold text-white uppercase tracking-[0.14em] mb-4">{t('footer.productCol')}</div>
            <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
              <li><Link to="/functions" className="footer-link">{t('footer.functions')}</Link></li>
              <li><Link to="/pricing" className="footer-link">{t('footer.pricing')}</Link></li>
              <li><Link to="/#how" className="footer-link">{t('footer.howWorks')}</Link></li>
              <li><Link to="/clients" className="footer-link">{t('footer.clients')}</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold text-white uppercase tracking-[0.14em] mb-4">{t('footer.companyCol')}</div>
            <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
              <li><Link to="/about" className="footer-link">{t('footer.about')}</Link></li>
              <li><Link to="/blog" className="footer-link">{t('footer.blog')}</Link></li>
              <li><Link to="/#contact" className="footer-link">{t('footer.requestDemo')}</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold text-white uppercase tracking-[0.14em] mb-4">{t('footer.supportCol')}</div>
            <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
              <li><Link to="/knowledge-base" className="footer-link">{t('footer.knowledgeBase')}</Link></li>
              <li><Link to="/faq" className="footer-link">{t('footer.faq')}</Link></li>
              <li><Link to="/contacts" className="footer-link">{t('footer.contacts')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex items-center justify-between flex-wrap gap-4 text-[12.5px] text-white/50">
          <div className="flex items-center gap-3 flex-wrap">
            <span>{t('footer.rights')}</span>
            <span className="hidden sm:inline text-white/20">·</span>
            <span className="hidden sm:inline text-white/45">{t('footer.madeIn')}</span>
          </div>
          <div className="flex gap-5">
            <a href="#" className="text-white/50 hover:text-mint-300 transition">{t('footer.privacy')}</a>
            <a href="#" className="text-white/50 hover:text-mint-300 transition">{t('footer.offer')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
