import i18n from 'i18next';
import { initReactI18next, Translation } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import uzTranslation from "../public/locale/uz.json";
import enTranslation from "../public/locale/en.json";

const languageSave = localStorage.getItem('i18nextLng' || 'uz')

i18n

  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uz",
    degub: true,
    lng: languageSave,
    resources: {
      uz: {translation: uzTranslation},
      en: {translation: enTranslation}
    }
  });


export default i18n;