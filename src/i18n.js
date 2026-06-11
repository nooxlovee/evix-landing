import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from './locales/ru.json';
import en from './locales/en.json';

const STORAGE_KEY = 'evix-lang';
const supported = ['ru', 'en'];

function initialLanguage() {
  if (typeof window === 'undefined') return 'ru';
  const stored = window.localStorage?.getItem(STORAGE_KEY);
  return supported.includes(stored) ? stored : 'ru';
}

i18n.use(initReactI18next).init({
  resources: { ru: { translation: ru }, en: { translation: en } },
  lng: initialLanguage(),
  fallbackLng: 'ru',
  interpolation: { escapeValue: false },
});

i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined' && supported.includes(lng)) {
    window.localStorage?.setItem(STORAGE_KEY, lng);
    document.documentElement.setAttribute('lang', lng);
  }
});

if (typeof document !== 'undefined') {
  document.documentElement.setAttribute('lang', i18n.language);
}

export default i18n;
