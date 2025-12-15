"use client";

import Image from "next/image";
import { useState } from "react";
import { Link } from "next-view-transitions";
import { ArrowRight } from "lucide-react";
import { AnimationType } from "@/hooks/use-animate-on-view";
import { useLocale } from "@/hooks/use-locale";
import type { Solution } from "@/sections/products/interfaces";

export const SolutionCard = ({
  solution,
  index,
}: {
  solution: Solution;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLocale();
  const viewMore = t.sections.products.a11y.viewMore || "Ver más";

  return (
    <Link
      href={solution.ctaHref}
      className="group block will-change-transform"
      data-animate={AnimationType.ScaleIn}
      data-delay={((0.4 * index) / 3).toString()}
    >
      {/* CARD */}
      <div
        className="relative rounded-2xl overflow-hidden bg-neutral-100 aspect-4/3 mb-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Imagen estática */}
        <Image
          src={solution.imageStatic}
          alt={solution.title}
          fill
          className="object-cover"
        />

        {/* GIF hover */}
        <img
          src={solution.imageGif.src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none
            transition-all duration-700 ease-out
            ${isHovered ? "opacity-100 scale-105" : "opacity-0 scale-100"}`}
        />

        {/* Bloque degradado abajo */}
        <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black via-black/70 to-transparent">
          <div className="flex flex-col items-start text-left p-4 lg:p-6">
            {/* Título con "Ver más →" al lado derecho */}
            <div className="flex justify-between items-center w-full mb-2">
              <h3 className="font-gilroy font-semibold text-white text-base sm:text-lg lg:text-xl drop-shadow">
                {solution.title}
              </h3>

              <span className="flex items-center gap-1 text-white/90 group-hover:text-white text-sm sm:text-base transition-colors">
                {viewMore} <ArrowRight size={16} />
              </span>
            </div>

            {/* Línea separadora completa */}
            <div className="w-full h-0.5 bg-white/70 mb-2 rounded-full" />

            <p className="text-white font-notosans text-xs sm:text-sm lg:text-base leading-snug drop-shadow">
              {solution.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
