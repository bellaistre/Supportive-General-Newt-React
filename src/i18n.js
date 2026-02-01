import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// importer les fichiers JSON directement (Vite supporte ça)
import fr from './locales/fr.json'
import en from './locales/en.json'

i18n
  .use(initReactI18next) // passe i18n à react-i18next
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
    },
    lng: 'fr',           // langue par défaut
    fallbackLng: 'en',   // langue de secours
    interpolation: { escapeValue: false }, // pour React
  })

export default i18n
