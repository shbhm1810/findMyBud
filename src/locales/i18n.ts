import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import env from './en.json';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector

  // pass the i18n instance to react-i18next.
  .use(initReactI18next)

  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: env,
    },
  });

export default i18n;
