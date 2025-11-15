import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import cz from "./locales/cz.json";

i18n
    .use(LanguageDetector) // auto-detect browser language
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            cz: { translation: cz }
        },
        fallbackLng: "en",
        interpolation: {
            escapeValue: false // React already escapes
        },
        detection: {
            // Optional: you can store user's language in localStorage
            order: ["localStorage", "navigator"],
            caches: ["localStorage"]
        }
    });

export default i18n;
