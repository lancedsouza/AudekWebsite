// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "hearingSolutions": "Hearing Solutions",
        "software": "Software",
        "contactUs": "Contact Us",
        "locations": "Locations",
        "support": "Support",
        "languages": "Languages",
      }
    },
    es: {
      translation: {
        "hearingSolutions": "Soluciones auditivas",
        "software": "Software",
        "contactUs": "Contáctenos",
        "locations": "Ubicaciones",
        "support": "Soporte",
        "languages": "Idiomas",
      }
    },
    fr: {
      translation: {
        "hearingSolutions": "Solutions auditives",
        "software": "Logiciel",
        "contactUs": "Contactez-nous",
        "locations": "Emplacements",
        "support": "Soutien",
        "languages": "Langues",
      }
    },
    mx: {
      translation: {
        "hearingSolutions": "Soluciones auditivas",
        "software": "Software",
        "contactUs": "Contáctenos",
        "locations": "Ubicaciones",
        "support": "Soporte",
        "languages": "Idiomas",
      }
    }
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language if translation is missing
  interpolation: {
    escapeValue: false, // React already escapes
  },
});

export default i18n;
