"use client";

import { createContext, useContext, ReactNode } from "react";
import type { Locale } from "@/config/i18n.config";
import { getDictionary, type Dictionary } from "@/locales";

interface LocaleContextType {
  locale: Locale;
  t: Dictionary;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  const t = getDictionary(locale);

  return (
    <LocaleContext.Provider value={{ locale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used within LocaleProvider");
  return context;
};
