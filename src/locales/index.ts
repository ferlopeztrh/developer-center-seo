import type { Locale } from "@/config/i18n.config";
import { es } from "./es";
import { en } from "./en";
import type { Dictionary } from "./es";

const dictionaries: Record<Locale, Dictionary> = { es, en };

export const getDictionary = (locale: Locale): Dictionary =>
  dictionaries[locale];

export type { Dictionary };
