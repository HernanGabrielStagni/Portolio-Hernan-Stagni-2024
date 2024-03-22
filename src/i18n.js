import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en.json';
import translationES from './locales/es.json';
import translationFR from './locales/fr.json';


i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: translationES,
      },
      en: {
        translation: translationEN,
      },
      fr: {
        translation: translationFR,
      },
      


    },
    lng: 'es', // Idioma predeterminado
    fallbackLng: 'en', // Idioma de respaldo si el idioma solicitado no está disponible
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
