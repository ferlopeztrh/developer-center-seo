import Image from "next/image";
import { HeroImageSection } from "./hero-image-section";

import { useLocale } from "@/hooks/use-locale";

import dinelco35 from "@/assets/dinelco-35.svg";
import contimarket from "@/assets/merchants/contimarket.png";
import nissei from "@/assets/merchants/nissei.png";
import cocaCola from "@/assets/merchants/coca-cola.png";
import dLocal from "@/assets/merchants/d-local.svg";
import superSeis from "@/assets/merchants/superseis.svg";

const MERCHANTS_LOGOS = [
  { name: "Contimarket", src: contimarket, maxHeight: 36 },
  { name: "Nissei", src: nissei, maxHeight: 40 },
  { name: "Coca Cola", src: cocaCola, maxHeight: 28 },
  { name: "d - Local", src: dLocal, maxHeight: 24 },
  { name: "Superseis", src: superSeis, maxHeight: 32 },
];

export function HeroContent() {
  const { t } = useLocale();
  const heroTexts = t.sections.hero;

  return (
    <div className="absolute inset-0 z-5">
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full z-10">
        {/* Texto - clase para parallax */}
        <div className="hero-text-content relative pt-20 md:pt-32 lg:pt-40 pb-8">
          <div className="relative max-w-xl">
            <h1 className="reveal-text font-gilroy text-4xl sm:text-5xl lg:text-[40px] text-primary leading-[1.1]">
              <span>{heroTexts.title}</span>
            </h1>

            <div className="slide-up delay-200">
              <Image
                src={dinelco35}
                alt="Dinelco - 35 años procesando pagos en Paraguay"
                width={360}
                height={128}
                className="my-12"
                priority
              />
            </div>

            <p className="slide-up delay-300 mt-6 font-notosans text-base sm:text-lg text-label max-w-md">
              Hacer las cosas diferente es estar un paso adelante. Es entender
              que para mejorar hay que cambiar. Es elegir de verdad. Es no
              conformarte y buscar algo mejor a lo que tenés.
            </p>

            <div className="slide-up delay-400 mt-8 flex flex-wrap gap-6">
              <a
                href="/contacto"
                className="inline-flex items-center justify-center px-[17px] py-[9px] rounded-[10px] font-gilroy font-medium text-base bg-primary text-white hover:bg-primary-400 transition-colors leading-6"
              >
                Contactanos
              </a>
              <a
                href="/soluciones"
                className="inline-flex items-center justify-center px-[17px] py-[9px] rounded-[10px] font-gilroy font-medium text-base border-2 border-primary text-primary hover:border-primary-400 transition-colors leading-6 max-h-[42px]"
              >
                Conocé más
              </a>
            </div>
          </div>
        </div>

        {/* Logos - clase para parallax */}
        <div className="merchant-logos slide-up delay-500 relative py-12 md:py-16 overflow-hidden">
          <p className="font-gilroy font-medium text-xl text-label mb-4">
            +<span className="font-bold text-primary">335.956</span> comercios
            adheridos que confían en nosotros.
          </p>

          <div className="flex flex-nowrap items-center gap-10 overflow-x-auto md:overflow-visible py-2">
            {MERCHANTS_LOGOS.map((logo, index) => (
              <div
                key={logo.name}
                className="flex items-center justify-center shrink-0 fade-in"
                style={{
                  height: `${logo.maxHeight}px`,
                  animationDelay: `${0.6 + index * 0.1}s`,
                }}
              >
                <Image
                  src={logo.src}
                  alt={`Logo de ${logo.name} - comercio adherido a Dinelco`}
                  className="object-contain w-auto transition-all duration-300 grayscale opacity-60 hover:grayscale-0 hover:opacity-100"
                  style={{ height: `${logo.maxHeight}px` }}
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <HeroImageSection />
    </div>
  );
}
