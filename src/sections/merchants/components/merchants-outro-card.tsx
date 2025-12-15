"use client";

import { Link } from "next-view-transitions";
import Image from "next/image";
import { useLocale } from "@/hooks/use-locale";

import checkoutImage from "@/assets/products-icons/checkout.png";
import dLinkImage from "@/assets/products-icons/d-link.png";
import posImage from "@/assets/products-icons/pos.png";

import pattern from "@/assets/patterns/pattern1.svg";
import pattern2 from "@/assets/patterns/pattern2.svg";

export const OutroCard = () => {
  const { t } = useLocale();
  const merchantsTexts = t.sections.merchants;

  const iconData = [
    {
      src: checkoutImage,
      alt: merchantsTexts.products.checkout,
      className: "",
    },
    { src: dLinkImage, alt: merchantsTexts.products.link, className: "p-4" },
    { src: posImage, alt: merchantsTexts.products.pos, className: "" },
  ];

  return (
    <div className="relative pointer-events-auto flex flex-col items-center gap-16">
      <Image
        src={pattern2}
        alt=""
        width={128}
        height={128}
        className="absolute top-0 -right-16"
        aria-hidden="true"
      />
      <Image
        src={pattern}
        alt=""
        width={90}
        height={90}
        className="absolute bottom-32 -left-16"
        aria-hidden="true"
      />

      {/* Texto principal */}
      <div className="text-center">
        <h3 className="font-gilroy font-medium text-5xl lg:text-6xl xl:text-8xl text-white leading-[0.9] tracking-tight">
          {merchantsTexts.outro.titleLine1}
          <br />
          <span className="text-primary">
            {merchantsTexts.outro.titleLine2}
          </span>
          <br />
          {merchantsTexts.outro.titleLine3}
        </h3>
      </div>

      {/* CTA */}
      <div className="flex flex-col items-center gap-4">
        <Link
          href={merchantsTexts.outro.ctaHref}
          className="group relative px-12 py-5 bg-white text-black font-gilroy font-medium text-base rounded-full overflow-hidden transition-transform hover:scale-105"
        >
          <span className="relative z-10">{merchantsTexts.outro.cta}</span>
        </Link>
      </div>

      {/* Iconos de productos */}
      <div
        className="flex flex-row items-center gap-12"
        role="list"
        aria-label={merchantsTexts.a11y.productIcon}
      >
        {iconData.map((icon, index) => (
          <div
            key={index}
            className="flex items-center gap-6 bg-white rounded-md"
            role="listitem"
          >
            <Image
              src={icon.src}
              alt={icon.alt}
              width={96}
              height={96}
              className={icon.className}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
