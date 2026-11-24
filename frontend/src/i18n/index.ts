import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ro from './locales/ro.json';
import ru from './locales/ru.json';
import en from './locales/en.json';

export const SUPPORTED_LANGUAGES = ['ro', 'ru', 'en'] as const;
export type Language = (typeof SUPPORTED_LANGUAGES)[number];

export const DEFAULT_LANGUAGE: Language = 'ro';
const STORAGE_KEY = 'language';

export const resources = {
  ro: { translation: ro },
  ru: { translation: ru },
  en: { translation: en },
} as const;

function isLanguage(value: unknown): value is Language {
  return SUPPORTED_LANGUAGES.includes(value as Language);
}

function getStoredLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return isLanguage(stored) ? stored : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng;
  document.title = i18n.t('meta.homeTitle');
  try {
    localStorage.setItem(STORAGE_KEY, lng);
  } catch {}
});

i18n.use(initReactI18next).init({
  resources,
  lng: getStoredLanguage(),
  fallbackLng: DEFAULT_LANGUAGE,
  supportedLngs: SUPPORTED_LANGUAGES,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
