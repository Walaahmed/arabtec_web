import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "./ar.json";
import en from "./en.json";

const saved = (() => { try { return localStorage.getItem("arabtec_lang"); } catch { return null; } })();
const lng = saved === "en" ? "en" : "ar";

i18n.use(initReactI18next).init({
  resources: { ar: { translation: ar }, en: { translation: en } },
  lng,
  fallbackLng: "ar",
  interpolation: { escapeValue: false },
  returnObjects: false,
});

document.documentElement.lang = lng;
document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";

export default i18n;
