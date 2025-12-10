"use client";

import Image from "next/image";
import { useAnimateOnView, useIsDesktop, AnimationType } from "@/hooks";
import { CopyRevealText } from "@/components/ui";
import { BRANDS } from "../constants";

export function BrandsSection() {
  useAnimateOnView();
  const isDesktop = useIsDesktop();

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Header */}
      <div className="relative w-full px-5 lg:px-12 xl:px-16">
        <div className="flex flex-col items-start text-left gap-4 mb-6 lg:mb-8 max-w-xl">
          <span className="inline-block font-gilroy font-normal text-xs lg:text-sm tracking-widest text-secondary uppercase">
            Nuestros aliados
          </span>

          <CopyRevealText>
            <h2 className="font-gilroy font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
              <span className="block">Marcas con las que</span>
              <span className="block text-primary">trabajamos</span>
            </h2>
          </CopyRevealText>

          <p
            className="font-notosans text-sm xl:text-base text-label leading-relaxed"
            data-animate={AnimationType.FadeIn}
            data-delay="0.1"
          >
            Cuando te adherís a la Red Dinelco empezás a trabajar con las marcas
            más importantes del mercado.
          </p>
        </div>
      </div>

      {/* Logos Grid */}
      <div className="px-5 lg:px-12 xl:px-16">
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-9 gap-6 lg:gap-8 items-center">
          {BRANDS.map((brand, index) => {
            const height = isDesktop ? brand.maxHeight : brand.maxHeightMobile;

            return (
              <div
                key={brand.id}
                className="flex items-center justify-center h-12 lg:h-20"
                data-animate={AnimationType.FadeIn}
                data-delay={(index + 1) * 0.08}
              >
                <Image
                  src={brand.logo}
                  alt={`Logo de ${brand.name}`}
                  className="object-contain max-h-full w-auto"
                  style={{ maxHeight: `${height}px` }}
                  width={140}
                  height={height}
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
