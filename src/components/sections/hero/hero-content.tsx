import Image from "next/image";
import Link from "next/link";
import { HeroImageSection } from "./hero-image-section";
import { useLocale } from "@/hooks/use-locale";

import dinelco35 from "@/assets/dinelco-35.svg";
import contimarket from "@/assets/merchants/contimarket.png";
import nissei from "@/assets/merchants/nissei.png";
import cocaCola from "@/assets/merchants/coca-cola.png";
import dLocal from "@/assets/merchants/d-local.svg";
import superSeis from "@/assets/merchants/superseis.svg";

const MERCHANTS_LOGOS = [
  { key: "contimarket", src: contimarket, maxHeight: 36 },
  { key: "nissei", src: nissei, maxHeight: 40 },
  { key: "cocaCola", src: cocaCola, maxHeight: 28 },
  { key: "dLocal", src: dLocal, maxHeight: 24 },
  { key: "superSeis", src: superSeis, maxHeight: 32 },
] as const;

interface HeroContentProps {
  isStatic?: boolean;
}

export function HeroContent({ isStatic = false }: HeroContentProps) {
  const { t } = useLocale();
  const heroTexts = t.sections.hero;
  const { stats, images, a11y } = heroTexts;

  // Clases condicionales para modo estático vs animado
  const wrapperClass = isStatic ? "relative z-5" : "absolute inset-0 z-5";

  const textContentClass = isStatic
    ? "relative pt-20 pb-8"
    : "hero-text-content relative pt-20 pb-8";

  const merchantLogosClass = isStatic
    ? "relative py-12 md:py-16 overflow-hidden"
    : "merchant-logos slide-up delay-500 relative py-12 md:py-16 overflow-hidden";

  return (
    <div className={wrapperClass}>
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full z-10">
        <article className={textContentClass}>
          <header className="relative max-w-xl">
            <h1
              id="hero-heading"
              className="font-gilroy text-4xl sm:text-5xl lg:text-[40px] text-primary leading-[1.1]"
            >
              {heroTexts.title}
              <span className="sr-only"> Dinelco</span>
            </h1>

            <div className={isStatic ? "" : "slide-up delay-200"}>
              <Image
                src={dinelco35}
                alt={images.heroLogoAlt}
                width={360}
                height={128}
                className="my-12"
                priority
              />
            </div>

            <p
              className={`${
                isStatic ? "" : "slide-up delay-300"
              } mt-6 font-notosans text-base sm:text-lg text-label max-w-md`}
            >
              {heroTexts.subtitle}
            </p>

            <nav
              className={`${
                isStatic ? "" : "slide-up delay-400"
              } mt-8 flex flex-wrap gap-6`}
              aria-label={a11y.ctaNavLabel}
            >
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-[17px] py-[9px] rounded-[10px] font-gilroy font-medium text-base bg-primary text-white hover:bg-primary-400 transition-colors leading-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {heroTexts.ctaPrimary}
              </Link>
              <Link
                href="/soluciones"
                className="inline-flex items-center justify-center px-[17px] py-[9px] rounded-[10px] font-gilroy font-medium text-base border-2 border-primary text-primary hover:border-primary-400 transition-colors leading-6 max-h-[42px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {heroTexts.ctaSecondary}
              </Link>
            </nav>
          </header>
        </article>

        <aside
          className={merchantLogosClass}
          aria-labelledby="merchants-heading"
        >
          <p
            id="merchants-heading"
            className="font-gilroy font-medium text-xl text-label mb-4"
          >
            +<span className="font-bold text-primary">{stats.commerces}</span>{" "}
            {stats.commercesText}
          </p>

          <ul
            className="flex flex-nowrap items-center gap-10 overflow-x-auto md:overflow-visible py-2"
            role="list"
            aria-label={a11y.merchantsListLabel}
          >
            {MERCHANTS_LOGOS.map((logo, index) => {
              const merchantData = images.merchants[index];
              return (
                <li
                  key={logo.key}
                  className={`flex items-center justify-center shrink-0 ${
                    isStatic ? "" : "fade-in"
                  }`}
                  style={{
                    height: `${logo.maxHeight}px`,
                    animationDelay: isStatic
                      ? undefined
                      : `${0.6 + index * 0.1}s`,
                  }}
                >
                  <Image
                    src={logo.src}
                    alt={merchantData?.alt ?? `Logo de ${logo.key}`}
                    className="object-contain w-auto transition-all duration-300 grayscale opacity-60 hover:grayscale-0 hover:opacity-100"
                    style={{ height: `${logo.maxHeight}px` }}
                    width={100}
                    height={logo.maxHeight}
                    loading="eager"
                  />
                </li>
              );
            })}
          </ul>
        </aside>
      </div>

      <HeroImageSection isStatic={isStatic} />
    </div>
  );
}
