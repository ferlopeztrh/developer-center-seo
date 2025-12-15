"use client";

import { env } from "@/config";
import { useLocale } from "@/hooks/use-locale";

export function LocaleSwitcher() {
  const { locale, switchLocale } = useLocale();

  return (
    <div className="relative flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
      {/* Pill indicator */}
      <div
        className={`absolute h-7 w-10 bg-white/20 rounded-full transition-transform duration-300 ease-out ${
          locale === "en" ? "translate-x-10" : "translate-x-0"
        }`}
      />

      <button
        onClick={() => switchLocale("es")}
        className={`relative z-10 px-3 py-1 text-xs font-medium uppercase tracking-wider transition-colors duration-300 ${
          locale === "es"
            ? "text-white font-semibold"
            : "text-white/60 hover:text-white/80"
        }`}
      >
        ES
      </button>

      <button
        onClick={() => switchLocale("en")}
        className={`relative z-10 px-3 py-1 text-xs font-medium uppercase tracking-wider transition-colors duration-300 ${
          locale === "en"
            ? "text-white font-semibold"
            : "text-white/60 hover:text-white/80"
        }`}
      >
        EN
      </button>
    </div>
  );
}
