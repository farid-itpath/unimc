import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en/translation.json';
import it from './it/translation.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    it: {translation: it},
    en: {translation: en},
  },
  lng: 'it',
  fallbackLng: 'it',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
