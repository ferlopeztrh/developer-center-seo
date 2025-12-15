import type { Locale } from "@/config/i18n.config";

export const routes = {
  home: {
    es: "/",
    en: "/en",
  },
  novedades: {
    es: "/novedades",
    en: "/en/news",
  },
  recursos: {
    es: "/recursos",
    en: "/en/resources",
  },
  productos: {
    es: "/productos",
    en: "/en/products",
  },
  contacto: {
    es: "/contacto",
    en: "/en/contact",
  },
  // Productos individuales
  checkoutApi: {
    es: "/productos/checkout-api",
    en: "/en/products/checkout-api",
  },
  paymentLink: {
    es: "/productos/payment-link",
    en: "/en/products/payment-link",
  },
  cardRegistry: {
    es: "/productos/registro-tarjetas",
    en: "/en/products/card-registry",
  },
  recurringPayments: {
    es: "/productos/pagos-recurrentes",
    en: "/en/products/recurring-payments",
  },
  portal: {
    es: "/productos/portal",
    en: "/en/products/portal",
  },
} as const;

export type RouteName = keyof typeof routes;

export function getRoute(routeName: RouteName, locale: Locale): string {
  return routes[routeName][locale];
}

export function getRouteWithParams(
  routeName: RouteName,
  locale: Locale,
  params?: Record<string, string | number>
): string {
  let path: string = routes[routeName][locale];

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      path = path.replace(`[${key}]`, String(value));
    });
  }

  return path;
}

/**
 * Remueve el prefijo de locale de un pathname
 */
export function getPathnameWithoutLocale(pathname: string): string {
  return pathname.replace(/^\/en/, "") || "/";
}

/**
 * Cambia el locale de una ruta manteniendo la página actual
 */
export function switchLocale(currentPath: string, newLocale: Locale): string {
  const pathWithoutLocale = getPathnameWithoutLocale(currentPath);

  // Buscar qué ruta coincide con el path en español
  for (const [_routeName, paths] of Object.entries(routes)) {
    if (paths.es === pathWithoutLocale) {
      return paths[newLocale];
    }
  }

  // Si no encuentra coincidencia, ir al home
  return routes.home[newLocale];
}
