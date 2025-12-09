import Image from "next/image";
import { useLocale } from "@/hooks/use-locale";

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

interface HeroImageSectionProps {
  isStatic?: boolean;
}

export function HeroImageSection({ isStatic = false }: HeroImageSectionProps) {
  const { t } = useLocale();
  const heroTexts = t.sections.hero;
  const { stats, floatingCards, images, a11y } = heroTexts;

  // Clases base para cards flotantes
  const getFloatCardClasses = (position: string, delay: string) => {
    if (isStatic) {
      return `absolute bg-white rounded-xl shadow-lg`;
    }
    return `float-card ${position} ${delay} absolute bg-white rounded-xl shadow-lg`;
  };

  return (
    <div
      className="absolute top-0 left-0 w-full h-[600px] md:h-[700px] lg:h-[800px]"
      aria-hidden="false"
    >
      <div className="relative h-full max-w-[1440px] mx-auto">
        <div className="absolute top-0 right-0 w-full h-full z-8">
          {/* Imagen del hero con cards flotantes */}
          <figure
            className="absolute block
              w-1/2 top-[19%] left-[20%]
              min-[550px]:w-1/3 min-[550px]:left-[30%]
              md:w-2/5 md:top-[20%] md:left-[55%]
              lg:left-[50%] lg:top-[22%] lg:w-[35%]
              xl:left-[52%] xl:top-[20%] xl:w-[32%]
              min-[1440px]:top-[18%] min-[1440px]:left-[60%]"
          >
            <div
              className={`relative ${isStatic ? "" : "hero-image-container"}`}
            >
              <div
                className={`relative overflow-hidden ${
                  isStatic ? "" : "hero-image-reveal"
                }`}
              >
                <Image
                  src={heroImage}
                  alt={a11y.heroImageAlt}
                  className="w-full h-auto"
                  priority
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 32vw"
                />
              </div>

              {/* Card flotante - Transacciones mensuales */}
              <div
                className={`${getFloatCardClasses(
                  "float-card-left",
                  "delay-card-1"
                )}
                  -left-4 top-[15%]
                  sm:-left-8 sm:top-[20%]
                  md:-left-16 md:top-[15%]
                  lg:-left-24 lg:top-[10%]
                  p-3 sm:p-4
                  min-w-[120px] sm:min-w-[140px] md:min-w-40 lg:min-w-[180px]`}
                role="presentation"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      focusable="false"
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
                      {stats.monthlyMovementsLabel}
                    </p>
                    <p className="font-gilroy text-sm sm:text-base md:text-lg font-bold text-primary">
                      {stats.monthlyMovements}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card flotante - Visa/Mastercard */}
              <div
                className={`${getFloatCardClasses(
                  "float-card-right",
                  "delay-card-2"
                )}
                  -right-2 top-[5%]
                  sm:-right-4 sm:top-[8%]
                  md:-right-8 md:top-[5%]
                  lg:-right-12 lg:top-[0%]
                  p-3 sm:p-4`}
                role="presentation"
              >
                <div className="flex items-center">
                  <Image
                    src={mastercard}
                    alt={images.paymentBrands.mastercard}
                    className="h-4 sm:h-5 md:h-6 w-auto"
                    height={24}
                    width={38}
                  />
                  <Image
                    src={visa}
                    alt={images.paymentBrands.visa}
                    className="h-4 sm:h-5 md:h-6 w-auto"
                    height={24}
                    width={38}
                  />
                </div>
                <p className="font-notosans text-[10px] sm:text-xs text-label mt-1">
                  {floatingCards.creditDebit}
                </p>
              </div>

              {/* Card flotante - Wallets digitales */}
              <div
                className={`${getFloatCardClasses(
                  "float-card-right",
                  "delay-card-3"
                )}
                  -right-4 bottom-[30%]
                  sm:-right-8 sm:bottom-[35%]
                  md:-right-16 md:bottom-[30%]
                  lg:-right-20 lg:bottom-[25%]
                  p-3 sm:p-4
                  min-w-[110px] sm:min-w-[130px] md:min-w-[150px]`}
                role="presentation"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={gpay}
                    alt={images.paymentBrands.googlePay}
                    className="h-5 sm:h-6 md:h-7 w-auto"
                    height={28}
                    width={44}
                  />
                  <Image
                    src={applePay}
                    alt={images.paymentBrands.applePay}
                    className="h-5 sm:h-6 md:h-7 w-auto"
                    height={28}
                    width={44}
                  />
                  <Image
                    src={clickToPay}
                    alt={images.paymentBrands.clickToPay}
                    className="h-5 sm:h-6 md:h-7 w-auto"
                    height={28}
                    width={44}
                  />
                </div>
                <p className="font-notosans text-[10px] sm:text-xs text-label mt-1">
                  {floatingCards.frictionlessPayments}
                </p>
              </div>

              {/* Card flotante - Tasa de aceptación */}
              <div
                className={`${getFloatCardClasses(
                  "float-card-left",
                  "delay-card-4"
                )}
                  -left-2 bottom-[15%]
                  sm:-left-6 sm:bottom-[20%]
                  md:-left-12 md:bottom-[15%]
                  lg:-left-20 lg:bottom-[10%]
                  p-3 sm:p-4`}
                role="presentation"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div
                    className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-full h-full transform -rotate-90"
                      viewBox="0 0 36 36"
                      aria-hidden="true"
                      focusable="false"
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
                      {stats.acceptanceRate}
                    </span>
                  </div>
                  <div>
                    <p className="font-notosans text-[10px] sm:text-xs text-label">
                      {stats.acceptanceRateLabel}
                    </p>
                    <p className="font-gilroy text-xs sm:text-sm font-semibold text-primary">
                      {stats.acceptanceRateValue}
                    </p>
                  </div>
                </div>
              </div>

              {/* Líneas conectoras decorativas (solo desktop y con animaciones) */}
              {!isStatic && (
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
                  style={{ overflow: "visible" }}
                  aria-hidden="true"
                  focusable="false"
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
              )}
            </div>
          </figure>

          {/* SVG Grids decorativos */}
          <div
            className="hidden absolute top-0 md:block md:w-[70%] md:left-[40%] md:top-[10%] lg:w-[70%] lg:left-[40%] xl:top-0 min-[1440px]:w-[80%] min-[1440px]:left-[40%]"
            aria-hidden="true"
          >
            <TopGridSVG />
          </div>

          <div
            className="absolute w-full top-[20%] left-0 right-0 mx-auto block max-w-[525px] md:hidden"
            aria-hidden="true"
          >
            <TopGridMobileSVG />
          </div>
        </div>

        <div
          className="hidden absolute top-0 md:block md:w-[70%] md:left-[40%] md:top-[10%] lg:w-[70%] lg:left-[40%] xl:top-0 min-[1440px]:w-[80%] min-[1440px]:left-[40%]"
          aria-hidden="true"
        >
          <BottomGridSVG />
        </div>

        <div
          className="absolute w-full top-[20%] left-0 right-0 mx-auto block max-w-[525px] md:hidden z-99"
          aria-hidden="true"
        >
          <BottomGridMobileSVG />
        </div>
      </div>
    </div>
  );
}
