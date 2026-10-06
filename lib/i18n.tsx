"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { copy, type Lang } from "@/lib/messages";

type Theme = "light" | "dark";

type I18nValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: (typeof copy)["en"];
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = localStorage.getItem("espacio-lang");
    if (stored === "pt" || stored === "en") setLangState(stored);
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    document.documentElement.lang = stored === "pt" ? "pt" : "en";
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    localStorage.setItem("espacio-lang", next);
    document.documentElement.lang = next;
  };

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("espacio-theme", next);
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, theme, toggleTheme, t: copy[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n requires I18nProvider");
  return value;
}
