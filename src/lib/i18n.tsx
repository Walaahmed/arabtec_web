import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";

export type Lang = "ar" | "en";

/** Kept for compatibility; react-i18next is initialised in src/i18n/index.ts. */
export function I18nProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export function useI18n() {
  const { t: rt, i18n } = useTranslation();
  const lang: Lang = i18n.language === "en" ? "en" : "ar";
  const dir = lang === "ar" ? "rtl" : "ltr";
  const setLang = (l: Lang) => {
    i18n.changeLanguage(l);
    try { localStorage.setItem("arabtec_lang", l); } catch { /* ignore */ }
    document.documentElement.lang = l;
    document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
  };
  const t = (key: string, values?: Record<string, string | number>) => rt(key, values ?? {}) as string;
  return { lang, setLang, t, dir } as const;
}

export function pick<T>(lang: Lang, obj: { ar: T; en: T }): T {
  return obj[lang];
}
