// hero-mobile.tsx
import Image from "next/image";
import { AnimatedProgress } from "@/components/ui/animated-progress";

import heroImage from "@/assets/images/individual-mobile.webp";
import clickToPay from "@/assets/brands/click-to-pay.svg";
import applePay from "@/assets/brands/apple-pay.svg";
import gpay from "@/assets/brands/gpay.svg";
import mastercard from "@/assets/brands/mastercard.svg";
import visa from "@/assets/brands/visa.svg";
import dinelco35 from "@/assets/dinelco-35.svg";

// Merchants - igual que desktop
import contimarket from "@/assets/merchants/contimarket.png";
import nissei from "@/assets/merchants/nissei.png";
import cocaCola from "@/assets/merchants/coca-cola.png";
import dLocal from "@/assets/merchants/d-local.svg";
import superSeis from "@/assets/merchants/superseis.svg";

import {
  TopGridMobileSVG,
  BottomGridMobileSVG,
} from "@/components/sections/hero/svg";

// Logos de marcas de pago
const BRAND_LOGOS = [
  { name: "Mastercard", src: mastercard },
  { name: "Visa", src: visa },
  { name: "GPay", src: gpay },
  { name: "Apple Pay", src: applePay },
  { name: "Click to Pay", src: clickToPay },
];

// Logos de merchants - igual que desktop
const MERCHANTS_LOGOS = [
  { name: "Contimarket", src: contimarket, maxHeight: 28 },
  { name: "Nissei", src: nissei, maxHeight: 32 },
  { name: "Coca Cola", src: cocaCola, maxHeight: 22 },
  { name: "d - Local", src: dLocal, maxHeight: 18 },
  { name: "Superseis", src: superSeis, maxHeight: 24 },
];

export function HeroMobile() {
  return (
    <section className="md:hidden relative min-h-dvh overflow-hidden bg-[#f8f7fc]">
      {/* Background SVG Clip Path */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          style={{ height: "40%" }}
          aria-hidden="true"
        >
          <path
            fill="white"
            d="M0,100 C150,150 350,0 600,100 C850,200 1050,50 1200,100 C1350,150 1400,80 1440,100 L1440,400 L0,400 Z"
          />
        </svg>
      </div>

      {/* Wrapper principal */}
      <div className="relative max-w-[1440px] mx-auto px-5 sm:px-6 z-10">
        {/* Head - Contenido */}
        <div className="relative md:pt-24 pt-12 pb-6">
          <div className="relative flex flex-col justify-center items-center">
            <h1 className="reveal-text font-gilroy text-[32px] sm:text-4xl text-primary leading-[1.1]">
              <span>Hacelo diferente con</span>
            </h1>

            <div className="slide-up delay-200">
              <Image
                src={dinelco35}
                alt="Dinelco - 35 años procesando pagos en Paraguay"
                width={260}
                height={90}
                className="my-6 sm:my-8"
                priority
              />
            </div>

            {/* Texto completo - igual que desktop */}
            <p className="slide-up delay-300 font-notosans text-[15px] sm:text-base text-label max-w-sm leading-relaxed text-center">
              Hacer las cosas diferente es estar un paso adelante. Es entender
              que para mejorar hay que cambiar. Es elegir de verdad. Es no
              conformarte y buscar algo mejor a lo que tenés.
            </p>

            {/* CTAs */}
            <div className="slide-up delay-400 mt-6 flex flex-wrap gap-3">
              <a
                href="/contacto"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-[10px] font-gilroy font-medium text-[15px] bg-primary text-white hover:bg-primary-400 transition-colors"
              >
                Contactanos
              </a>
              <a
                href="/soluciones"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-[10px] font-gilroy font-medium text-[15px] border-2 border-primary text-primary hover:border-primary-400 transition-colors"
              >
                Conocé más
              </a>
            </div>
          </div>
        </div>

        {/* Hero Image Mobile con SVGs y Cards */}
        <div className="relative py-4">
          <div className="relative max-w-[320px] sm:max-w-sm mx-auto">
            {/* SVG Grid decorativo - Top */}
            <div className="absolute -top-8 -left-8 -right-8 z-0 opacity-60">
              <TopGridMobileSVG />
            </div>

            {/* Imagen principal */}
            <div className="hero-image-container relative z-10 hero-image-reveal">
              <Image
                src={heroImage}
                alt="Usuario realizando pago móvil con Dinelco"
                className="w-full h-auto"
                priority
              />
            </div>

            {/* SVG Grid decorativo - Bottom */}
            <div className="absolute -bottom-12 -left-8 -right-8 z-0 opacity-60">
              <BottomGridMobileSVG />
            </div>

            {/* Card flotante - Stats */}
            <div className="float-card float-card-left delay-card-1 absolute -left-3 top-[18%] bg-white rounded-xl shadow-lg p-2.5 sm:p-3 min-w-[115px] sm:min-w-[130px] z-20">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-notosans text-[9px] sm:text-[10px] text-label">
                    Movimientos/mes
                  </p>
                  <p className="font-gilroy text-sm sm:text-base font-bold text-primary">
                    +2.5M
                  </p>
                </div>
              </div>
            </div>

            {/* Card flotante - Metodos de pago */}
            <div className="float-card float-card-right delay-card-2 absolute -right-2 top-[8%] bg-white rounded-xl shadow-lg p-2.5 sm:p-3 z-20">
              <div className="flex items-center gap-0.5">
                <Image
                  src={mastercard}
                  alt="Mastercard"
                  className="h-4 sm:h-5 w-auto"
                  height={20}
                />
                <Image
                  src={visa}
                  alt="Visa"
                  className="h-4 sm:h-5 w-auto"
                  height={20}
                />
              </div>
              <p className="font-notosans text-[9px] sm:text-[10px] text-label mt-1">
                Crédito y Débito
              </p>
            </div>

            {/* Card flotante - Wallets */}
            <div className="float-card float-card-right delay-card-3 absolute -right-3 bottom-[28%] bg-white rounded-xl shadow-lg p-2.5 sm:p-3 z-20">
              <div className="flex items-center gap-1.5">
                <Image
                  src={gpay}
                  alt="Google Pay"
                  className="h-4 sm:h-5 w-auto"
                  height={20}
                />
                <Image
                  src={applePay}
                  alt="Apple Pay"
                  className="h-4 sm:h-5 w-auto"
                  height={20}
                />
                <Image
                  src={clickToPay}
                  alt="Click To Pay"
                  className="h-4 sm:h-5 w-auto"
                  height={20}
                />
              </div>
              <p className="font-notosans text-[9px] sm:text-[10px] text-label mt-1">
                Pagos sin fricción
              </p>
            </div>

            {/* Card flotante - Tasa de aceptación */}
            <div className="float-card float-card-left delay-card-4 absolute -left-2 bottom-[12%] bg-white rounded-xl shadow-lg p-2.5 sm:p-3 z-20">
              <div className="flex items-center gap-2">
                <AnimatedProgress
                  id="hero-mobile"
                  percentage={99}
                  delay={1800}
                  size="sm"
                />
                <div>
                  <p className="font-notosans text-[9px] sm:text-[10px] text-label">
                    Tasa de
                  </p>
                  <p className="font-gilroy text-[11px] sm:text-xs font-semibold text-primary">
                    Aceptación
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Merchants logos - igual que desktop */}
        <div className="slide-up delay-500 relative py-6 overflow-hidden">
          <p className="font-gilroy font-medium text-base text-label mb-3 text-center">
            +<span className="font-bold text-primary">335.956</span> comercios
            que confían en nosotros.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 py-2">
            {MERCHANTS_LOGOS.map((logo, index) => (
              <div
                key={logo.name}
                className="flex items-center justify-center fade-in"
                style={{
                  height: `${logo.maxHeight}px`,
                  animationDelay: `${0.6 + index * 0.1}s`,
                }}
              >
                <Image
                  src={logo.src}
                  alt={`Logo de ${logo.name}`}
                  className="object-contain w-auto grayscale opacity-60"
                  style={{ height: `${logo.maxHeight}px` }}
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
