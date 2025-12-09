"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { CopyRevealText } from "@/components/ui/copy-reveal-text";
import { useAnimateOnView, AnimationType } from "@/hooks/use-animate-on-view";

import dLinkStatic from "@/assets/d-link.jpg";
import checkoutStatic from "@/assets/products/checkout.png";

import dLinkGif from "@/assets/products/dinelco-link.gif";
import checkoutGif from "@/assets/checkout.gif";

interface Solution {
  id: string;
  title: string;
  description: string;
  cta: string;
  ctaHref: string;
  imageStatic: string;
  imageGif: string;
}

const solutions: Solution[] = [
  {
    id: "checkout",
    title: "Dinelco Checkout",
    description:
      "Integra pagos en tu sitio web o app con nuestra solución de checkout personalizable y segura.",
    cta: "Ver solución",
    ctaHref: "/soluciones/checkout",
    imageStatic: checkoutStatic.src,
    imageGif: checkoutGif.src,
  },
  {
    id: "payment-links",
    title: "Dinelco Link",
    description:
      "Genera enlaces de pago únicos para compartir por WhatsApp, email o redes sociales.",
    cta: "Ver solución",
    ctaHref: "/soluciones/payment-links",
    imageStatic: dLinkStatic.src,
    imageGif: dLinkGif.src,
  },
  {
    id: "subscriptions",
    title: "Pagos recurrentes",
    description:
      "Automatiza cobros recurrentes y gestiona suscripciones de forma simple y eficiente.",
    cta: "Ver solución",
    ctaHref: "/soluciones/subscriptions",
    imageStatic: checkoutStatic.src,
    imageGif: checkoutGif.src,
  },
];

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={direction === "left" ? "rotate-180" : ""}
    >
      <path
        d="M3.333 8h9.334M8.667 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-1"
    >
      <path
        d="M6 12l4-4-4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProductsSection() {
  useAnimateOnView();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animate carousel
  useEffect(() => {
    if (!trackRef.current) return;

    const gap = isMobile ? 12 : 20;
    const cardWidth = isMobile
      ? window.innerWidth * 0.8
      : Math.min(window.innerWidth * 0.55, 800);

    gsap.to(trackRef.current, {
      x: -(currentIndex * (cardWidth + gap)),
      duration: 0.6,
      ease: "power2.out",
    });
  }, [currentIndex, isMobile]);

  const goToNext = () => {
    if (currentIndex < solutions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const currentSolution = solutions[currentIndex];

  return (
    <section
      ref={sectionRef}
      className="relative py-8 lg:py-12 bg-white overflow-hidden"
    >
      {/* Header */}
      <div className="relative w-full px-5 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 lg:gap-8 mb-6 lg:mb-8">
          {/* Left side - Title */}
          <div className="flex flex-col items-start text-left">
            <span className="inline-block font-gilroy font-normal text-xs lg:text-sm tracking-widest text-secondary uppercase mb-2 lg:mb-3">
              Nuestras soluciones
            </span>

            <CopyRevealText>
              <h2 className="font-gilroy font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                <span className="block">Un proceso de pago</span>
                <span className="block text-primary">sin complicaciones</span>
              </h2>
            </CopyRevealText>
          </div>

          {/* Right side - Description (desktop only) */}
          <div className="hidden lg:flex lg:items-start lg:pt-8 max-w-xs xl:max-w-sm flex-shrink-0">
            <p
              className="font-notosans text-sm xl:text-base text-label leading-relaxed"
              data-animate={AnimationType.SlideUp}
              data-delay="0.4"
            >
              Todo lo que tu negocio necesita para aceptar pagos, automatizar
              procesos y crecer sin complicaciones.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-8 xl:gap-10 px-12 xl:px-16">
        {solutions.map((solution, index) => {
          const [isHovered, setIsHovered] = useState(false);

          return (
            <Link
              key={solution.id}
              href={solution.ctaHref}
              className="group block will-change-transform"
              data-animate={AnimationType.ScaleIn}
              data-delay={((0.4 * index) / 3).toString()}
            >
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

                {/* GIF con transición de opacidad + zoom */}
                <Image
                  src={solution.imageGif}
                  alt={solution.title}
                  fill
                  className={`absolute top-0 left-0 w-full h-full object-cover pointer-events-none
                   transition-all duration-700 ease-out
                    ${
                      isHovered
                        ? "opacity-100 scale-105"
                        : "opacity-0 scale-100"
                    }`}
                />
              </div>

              <h3 className="font-gilroy font-medium text-xl xl:text-2xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {solution.title}
              </h3>
              <p className="font-notosans text-sm xl:text-base text-label leading-relaxed">
                {solution.description}
              </p>
            </Link>
          );
        })}
      </div>

      {/* Mobile Carousel */}
      <div className="lg:hidden relative w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-3 pl-5"
          style={{ width: "max-content" }}
        >
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="relative rounded-xl overflow-hidden shrink-0 bg-neutral-200"
              style={{
                width: "80vw",
                height: "35vh",
                minHeight: "200px",
              }}
            >
              {/* Image */}
              <Image
                src={solution.imageStatic}
                alt={solution.title}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom section - Mobile only */}
      <div className="lg:hidden relative w-full px-5 mt-5">
        <div className="flex flex-col gap-4">
          {/* Description */}
          <div className="max-w-sm">
            <h4 className="font-gilroy font-medium text-base text-foreground mb-1">
              {currentSolution.title}
            </h4>
            <p className="font-notosans text-sm text-label leading-relaxed mb-2">
              {currentSolution.description}
            </p>
            <Link
              href={currentSolution.ctaHref}
              className="inline-flex items-center font-gilroy font-medium text-sm text-foreground hover:text-primary transition-colors"
            >
              {currentSolution.cta}
              <ChevronIcon />
            </Link>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={goToPrev}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Anterior"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              onClick={goToNext}
              disabled={currentIndex === solutions.length - 1}
              className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Siguiente"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
