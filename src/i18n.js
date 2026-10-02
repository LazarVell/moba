import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import sr from './locales/sr.json';
import en from './locales/en.json';

export const LANGUAGES = [
  { code: 'sr', label: 'SR', name: 'Srpski' },
  { code: 'en', label: 'EN', name: 'English' },
];

// Keep <html lang>, <title> and meta description in sync with the active language.
// Registered before init so it also runs for the initially detected language.
i18n.on('languageChanged', () => {
  document.documentElement.lang = i18n.resolvedLanguage;
  document.title = i18n.t('meta.title');
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', i18n.t('meta.description'));
});

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      sr: { translation: sr },
      en: { translation: en },
    },
    supportedLngs: LANGUAGES.map((l) => l.code),
    nonExplicitSupportedLngs: true, // sr-RS, sr-Latn, en-US… map to sr / en
    fallbackLng: 'sr',
    // Serbian unless the visitor picked another language with the switcher.
    // The browser's language is ignored on purpose. The key was renamed from
    // 'lang', which older builds filled from the browser language.
    detection: {
      order: ['localStorage'],
      lookupLocalStorage: 'language',
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
