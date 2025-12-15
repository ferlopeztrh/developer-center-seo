"use client";

import { Link } from "next-view-transitions";
import { useLocale } from "@/hooks/use-locale";

const MERCHANT_IMAGES = Array.from(
  { length: 20 },
  (_, i) => `https://picsum.photos/800/600?random=${i + 1}`
);

export const MerchantsMobile = () => {
  const { t } = useLocale();
  const merchantsTexts = t.sections.merchants;

  return (
    <section
      className="relative bg-white py-16 px-5 overflow-hidden"
      aria-label={merchantsTexts.a11y.sectionLabel}
    >
      {/* Fila superior de imágenes */}
      <div className="flex gap-3 mb-6 -mx-5 px-5 overflow-hidden">
        {MERCHANT_IMAGES.slice(0, 4).map((src, i) => (
          <div
            key={`top-${i}`}
            className="shrink-0 w-24 h-32 rounded-xl overflow-hidden"
          >
            <img
              src={src}
              alt={`${merchantsTexts.a11y.merchantImage} ${i + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Contenido Central */}
      <div className="relative z-10 text-center py-12">
        <h2 className="font-gilroy font-medium text-5xl text-black mb-12 leading-none tracking-tight">
          {merchantsTexts.outro.titleLine1}{" "}
          <span className="text-primary">
            {merchantsTexts.outro.titleLine2}
          </span>{" "}
          {merchantsTexts.outro.titleLine3}
        </h2>

        <div className="flex flex-col items-center">
          <Link
            href={merchantsTexts.outro.ctaHref}
            className="w-full max-w-xs px-8 py-4 bg-black text-white font-gilroy font-medium text-base rounded-full hover:bg-neutral-800 transition-colors text-center"
          >
            {merchantsTexts.outro.cta}
          </Link>
        </div>
      </div>

      {/* Fila inferior de imágenes */}
      <div className="flex gap-3 mt-6 -mx-5 px-5 overflow-hidden">
        {MERCHANT_IMAGES.slice(4, 8).map((src, i) => (
          <div
            key={`bottom-${i}`}
            className="shrink-0 w-24 h-32 rounded-xl overflow-hidden"
          >
            <img
              src={src}
              alt={`${merchantsTexts.a11y.merchantImage} ${i + 5}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
