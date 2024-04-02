import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  // use http backend
  .use(HttpApi)
  // auto detect user's language
  .use(LanguageDetector)
  // pass i18next to react-i18next
  .use(initReactI18next)
  .init({
    // default language
    fallbackLng: 'zh',
    backend: {
      loadPath: 'portfolio/locales/{{lng}}/translation.json',
    },
    interpolation: {
      // no need for xss protection because React already provides it
      escapeValue: false,
    },
  })

export default i18n
