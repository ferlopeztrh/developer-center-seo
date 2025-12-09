// hero-image-section.tsx
import Image from "next/image";

import {
  TopGridSVG,
  TopGridMobileSVG,
  BottomGridSVG,
  BottomGridMobileSVG,
} from "@/components/sections/hero/svg";

import heroImage from "@/assets/images/individual-mobile.webp";
import clickToPay from "@/assets/brands/click-to-pay.svg";
import applePay from "@/assets/brands/apple-pay.svg";
import gpay from "@/assets/brands/gpay.svg";
import mastercard from "@/assets/brands/mastercard.svg";
import visa from "@/assets/brands/visa.svg";

export function HeroImageSection() {
  return (
    <div className="absolute top-0 left-0 w-full h-[600px] md:h-[700px] lg:h-[800px]">
      <div className="relative h-full max-w-[1440px] mx-auto">
        <div className="absolute top-0 right-0 w-full h-full z-8">
          {/* Imagen del hero con cards flotantes */}
          <div
            className="absolute block
              w-1/2 top-[19%] left-[20%]
              min-[550px]:w-1/3 min-[550px]:left-[30%]
              md:w-2/5 md:top-[20%] md:left-[55%]
              lg:left-[50%] lg:top-[22%] lg:w-[35%]
              xl:left-[52%] xl:top-[20%] xl:w-[32%]
              min-[1440px]:top-[18%] min-[1440px]:left-[60%]"
          >
            <div className="relative hero-image-container">
              <div className="relative overflow-hidden hero-image-reveal">
                <Image
                  src={heroImage}
                  alt="Usuario realizando pago móvil con Dinelco"
                  className="w-full h-auto"
                  priority
                />
              </div>

              {/* Card flotante - Transacciones mensuales */}
              <div
                className="float-card float-card-left delay-card-1 absolute 
                  -left-4 top-[15%]
                  sm:-left-8 sm:top-[20%]
                  md:-left-16 md:top-[15%]
                  lg:-left-24 lg:top-[10%]
                  bg-white rounded-xl shadow-lg p-3 sm:p-4
                  min-w-[120px] sm:min-w-[140px] md:min-w-40 lg:min-w-[180px]"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-primary"
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
                    <p className="font-notosans text-[10px] sm:text-xs text-label">
                      Movimientos/mes
                    </p>
                    <p className="font-gilroy text-sm sm:text-base md:text-lg font-bold text-primary">
                      +2.5M
                    </p>
                  </div>
                </div>
              </div>

              {/* Card flotante - Visa/Mastercard */}
              <div
                className="float-card float-card-right delay-card-2 absolute 
                  -right-2 top-[5%]
                  sm:-right-4 sm:top-[8%]
                  md:-right-8 md:top-[5%]
                  lg:-right-12 lg:top-[0%]
                  bg-white rounded-xl shadow-lg p-3 sm:p-4"
              >
                <div className="flex items-center">
                  <Image
                    src={mastercard}
                    alt="Mastercard"
                    className="h-4 sm:h-5 md:h-6 w-auto"
                    height={24}
                  />
                  <Image
                    src={visa}
                    alt="Visa"
                    className="h-4 sm:h-5 md:h-6 w-auto"
                    height={24}
                  />
                </div>
                <p className="font-notosans text-[10px] sm:text-xs text-label mt-1">
                  Crédito y Débito
                </p>
              </div>

              {/* Card flotante - Wallets digitales */}
              <div
                className="float-card float-card-right delay-card-3 absolute 
                  -right-4 bottom-[30%]
                  sm:-right-8 sm:bottom-[35%]
                  md:-right-16 md:bottom-[30%]
                  lg:-right-20 lg:bottom-[25%]
                  bg-white rounded-xl shadow-lg p-3 sm:p-4
                  min-w-[110px] sm:min-w-[130px] md:min-w-[150px]"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={gpay}
                    alt="Google Pay"
                    className="h-5 sm:h-6 md:h-7 w-auto"
                    height={28}
                  />
                  <Image
                    src={applePay}
                    alt="Apple Pay"
                    className="h-5 sm:h-6 md:h-7 w-auto"
                    height={28}
                  />
                  <Image
                    src={clickToPay}
                    alt="Click To Pay"
                    className="h-5 sm:h-6 md:h-7 w-auto"
                    height={28}
                  />
                </div>
                <p className="font-notosans text-[10px] sm:text-xs text-label mt-1">
                  Pagos sin fricción
                </p>
              </div>

              {/* Card flotante - Tasa de aceptación */}
              <div
                className="float-card float-card-left delay-card-4 absolute 
                  -left-2 bottom-[15%]
                  sm:-left-6 sm:bottom-[20%]
                  md:-left-12 md:bottom-[15%]
                  lg:-left-20 lg:bottom-[10%]
                  bg-white rounded-xl shadow-lg p-3 sm:p-4"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0">
                    <svg
                      className="w-full h-full transform -rotate-90"
                      viewBox="0 0 36 36"
                      aria-hidden="true"
                    >
                      <defs>
                        <linearGradient
                          id="progress-gradient-desktop"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#753bbd" />
                          <stop offset="100%" stopColor="#ce0058" />
                        </linearGradient>
                      </defs>

                      <circle
                        cx="18"
                        cy="18"
                        r="15"
                        fill="none"
                        stroke="#e3d8f2"
                        strokeWidth="3"
                      />

                      <circle
                        className="progress-circle"
                        cx="18"
                        cy="18"
                        r="15"
                        fill="none"
                        stroke="url(#progress-gradient-desktop)"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="progress-number absolute inset-0 flex items-center justify-center font-gilroy text-[10px] sm:text-xs font-bold text-primary">
                      99%
                    </span>
                  </div>
                  <div>
                    <p className="font-notosans text-[10px] sm:text-xs text-label">
                      Tasa de
                    </p>
                    <p className="font-gilroy text-xs sm:text-sm font-semibold text-primary">
                      Aceptación
                    </p>
                  </div>
                </div>
              </div>

              {/* Líneas conectoras decorativas (solo desktop) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
                style={{ overflow: "visible" }}
                aria-hidden="true"
              >
                <path
                  className="animated-path delay-card-2"
                  d="M 20% 30% Q 5% 25%, -15% 20%"
                  stroke="#753bbd"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="4 4"
                  opacity="0"
                />
                <path
                  className="animated-path delay-card-3"
                  d="M 80% 20% Q 95% 15%, 105% 10%"
                  stroke="#753bbd"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="4 4"
                  opacity="0"
                />
              </svg>
            </div>
          </div>

          {/* SVG Grids - sin cambios */}
          <div className="hidden absolute top-0 md:block md:w-[70%] md:left-[40%] md:top-[10%] lg:w-[70%] lg:left-[40%] xl:top-0 min-[1440px]:w-[80%] min-[1440px]:left-[40%]">
            <TopGridSVG />
          </div>

          <div className="absolute w-full top-[20%] left-0 right-0 mx-auto block max-w-[525px] md:hidden">
            <TopGridMobileSVG />
          </div>
        </div>

        <div className="hidden absolute top-0 md:block md:w-[70%] md:left-[40%] md:top-[10%] lg:w-[70%] lg:left-[40%] xl:top-0 min-[1440px]:w-[80%] min-[1440px]:left-[40%]">
          <BottomGridSVG />
        </div>

        <div className="absolute w-full top-[20%] left-0 right-0 mx-auto block max-w-[525px] md:hidden z-99">
          <BottomGridMobileSVG />
        </div>
      </div>
    </div>
  );
}
