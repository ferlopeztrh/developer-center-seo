import { env } from "@/config";

/**
 * Prefija la ruta con el basePath configurado para deploy en subdirectorio.
 * Ej: "/about" → "/developer-center/about"
 */
export const buildRoute = (path: string) => {
  const base = env.basePath;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
};
