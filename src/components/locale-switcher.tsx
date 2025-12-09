"use client";

import { Link } from "next-view-transitions";
import { useLocale } from "@/hooks/use-locale";

export function LocaleSwitcher() {
  const { locale } = useLocale();

  return (
    <div className="relative flex items-center bg-neutral-900 rounded-full p-1 border border-neutral-800">
      {/* Pill indicator */}
      <div
        className={`absolute h-7 w-10 bg-[#753BBD] rounded-full transition-transform duration-300 ease-out ${
          locale === "en" ? "translate-x-10" : "translate-x-0"
        }`}
      />

      <Link
        href="/"
        className={`relative z-10 px-3 py-1 text-xs font-medium uppercase tracking-wider transition-colors duration-300 ${
          locale === "es"
            ? "text-white"
            : "text-neutral-500 hover:text-neutral-300"
        }`}
      >
        ES
      </Link>

      <Link
        href="/en"
        className={`relative z-10 px-3 py-1 text-xs font-medium uppercase tracking-wider transition-colors duration-300 ${
          locale === "en"
            ? "text-white"
            : "text-neutral-500 hover:text-neutral-300"
        }`}
      >
        EN
      </Link>
    </div>
  );
}
