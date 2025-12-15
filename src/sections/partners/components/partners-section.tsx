"use client";

import Image from "next/image";
import { useAnimateOnView, useIsDesktop, AnimationType } from "@/hooks";
import { useLocale } from "@/hooks/use-locale";
import { CopyRevealText } from "@/components/ui";
import { PARTNERS } from "../constants";

export function PartnersSection() {
  useAnimateOnView();
  const isDesktop = useIsDesktop();
  const { t } = useLocale();

  const partnersTexts = t.sections.partners;

  return (
    <section
      className="relative bg-white overflow-hidden"
      aria-labelledby="partners-heading"
    >
      {/* Header */}
      <div className="relative w-full px-5 lg:px-12 xl:px-16">
        <div className="flex flex-col items-start text-left gap-4 mb-6 lg:mb-8 max-w-xl">
          <span className="inline-block font-gilroy font-normal text-xs lg:text-sm tracking-widest text-secondary uppercase">
            {partnersTexts.header.tag}
          </span>

          <CopyRevealText>
            <h2
              id="partners-heading"
              className="font-gilroy font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl"
            >
              <span className="block">{partnersTexts.header.titleLine1}</span>
              <span className="block text-primary">
                {partnersTexts.header.titleLine2}
              </span>
            </h2>
          </CopyRevealText>

          <p
            className="font-notosans text-sm xl:text-base text-label leading-relaxed"
            data-animate={AnimationType.FadeIn}
            data-delay="0.1"
          >
            {partnersTexts.header.description}
          </p>
        </div>
      </div>

      {/* Logos Grid */}
      <div className="px-5 lg:px-12 xl:px-16 mb-4">
        <div
          className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-9 gap-6 lg:gap-8 items-center"
          role="list"
          aria-label={partnersTexts.a11y.sectionLabel}
        >
          {PARTNERS.map((partner, index) => {
            const height = isDesktop
              ? partner.maxHeight
              : partner.maxHeightMobile;

            const partnerName =
              partnersTexts.brands[
                partner.id as keyof typeof partnersTexts.brands
              ] || partner.name;

            return (
              <div
                key={partner.id}
                className="flex items-center justify-center h-12 lg:h-20"
                data-animate={AnimationType.FadeIn}
                data-delay={(index + 1) * 0.08}
                role="listitem"
              >
                <Image
                  src={partner.logo}
                  alt={`${partnersTexts.a11y.logoAlt} ${partnerName}`}
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
      <div className="min-w-dvw h-12 bg-[#f8f7fc]"></div>
    </section>
  );
}
