"use client";

import { createContext, useContext, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import type { Locale } from "@/config/i18n.config";
import { getDictionary, type Dictionary } from "@/locales";
import {
  getRoute,
  getRouteWithParams,
  switchLocale as switchLocaleRoute,
  type RouteName,
} from "@/config/routes.config";

interface LocaleContextType {
  locale: Locale;
  t: Dictionary;
  route: (routeName: RouteName) => string;
  routeWithParams: (
    routeName: RouteName,
    params?: Record<string, string | number>
  ) => string;
  switchLocale: (newLocale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const t = getDictionary(locale);

  const route = (routeName: RouteName) => getRoute(routeName, locale);

  const routeWithParams = (
    routeName: RouteName,
    params?: Record<string, string | number>
  ) => getRouteWithParams(routeName, locale, params);

  const switchLocale = (newLocale: Locale) => {
    const newPath = switchLocaleRoute(pathname, newLocale);
    router.push(newPath);
  };

  return (
    <LocaleContext.Provider
      value={{ locale, t, route, routeWithParams, switchLocale }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used within LocaleProvider");
  return context;
};
