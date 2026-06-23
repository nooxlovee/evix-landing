import { useTranslation } from 'react-i18next';

export function LanguageSwitcher({ className = '' }) {
  const { i18n, t } = useTranslation();
  const next = i18n.language === 'ru' ? 'en' : 'ru';
  const toggle = () => i18n.changeLanguage(next);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t('lang.switchTo')}
      title={t('lang.switchTo')}
      className={`inline-flex items-center justify-center h-11 px-3 rounded-[14px] border border-line bg-white text-xs font-bold tracking-[0.14em] text-ink-soft hover:bg-mint-50 hover:border-mint-300 hover:text-mint-700 transition ${className}`}
    >
      <span className={i18n.language === 'ru' ? 'text-mint-700' : ''}>RU</span>
      <span className="mx-1.5 text-line-strong">/</span>
      <span className={i18n.language === 'en' ? 'text-mint-700' : ''}>EN</span>
    </button>
  );
}
