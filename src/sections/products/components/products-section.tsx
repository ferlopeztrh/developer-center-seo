"use client";

import Image from "next/image";
import Link from "next/link";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

import { useAnimateOnView, useIsDesktop, AnimationType } from "@/hooks";

import { CopyRevealText } from "@/components/ui";
import { ArrowIcon, ChevronIcon } from "@/components/icons";
import { SolutionCard } from "@/sections/products/components/solution-card";

import { SOLUTIONS } from "@/sections/products/constants";

export function ProductsSection() {
  useAnimateOnView();
  const isDesktop = useIsDesktop();
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current || isDesktop) return;

    const gap = 12;
    const cardWidth = window.innerWidth * 0.8;

    gsap.to(trackRef.current, {
      x: -(currentIndex * (cardWidth + gap)),
      duration: 0.6,
      ease: "power2.out",
    });
  }, [currentIndex, isDesktop]);

  const goToNext = () => {
    if (currentIndex < SOLUTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const currentSolution = SOLUTIONS[currentIndex];

  return (
    <section className="relative py-8 lg:py-12 bg-white overflow-hidden">
      {/* Header */}
      <div className="relative w-full px-5 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 lg:gap-8 mb-6 lg:mb-8">
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

          <div className="hidden lg:flex lg:items-start lg:pt-8 max-w-xs xl:max-w-sm shrink-0">
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
      {isDesktop && (
        <div className="grid grid-cols-3 gap-8 xl:gap-10 px-12 xl:px-16">
          {SOLUTIONS.map((solution, index) => (
            <SolutionCard key={solution.id} solution={solution} index={index} />
          ))}
        </div>
      )}

      {/* Mobile Carousel */}
      {!isDesktop && (
        <>
          <div className="relative w-full overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-3 pl-5"
              style={{ width: "max-content" }}
            >
              {SOLUTIONS.map((solution) => (
                <div
                  key={solution.id}
                  className="relative rounded-xl overflow-hidden shrink-0 bg-neutral-200"
                  style={{
                    width: "80vw",
                    height: "35vh",
                    minHeight: "200px",
                  }}
                >
                  <Image
                    src={solution.imageStatic}
                    alt={solution.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full px-5 mt-5">
            <div className="flex flex-col gap-4">
              <div className="max-w-sm">
                <h3 className="font-gilroy font-medium text-base text-foreground mb-1">
                  {currentSolution.title}
                </h3>
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
                  disabled={currentIndex === SOLUTIONS.length - 1}
                  className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Siguiente"
                >
                  <ArrowIcon direction="right" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
