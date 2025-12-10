"use client";

import { HeroContent } from "./hero-content";
import { HeroMobile } from "./mobile/hero-mobile";
import { CommercesGrid } from "./commerce-grid";
import { GridMobileSection } from "./mobile/grid-mobile-section";
import { useHeroAnimation } from "../hooks/use-hero-animations";
import { useMotion } from "@/providers";

export function HeroSection() {
  const { shouldReduceMotion } = useMotion();
  const { heroMediaRef, containerRef, gridImagesRef } = useHeroAnimation();

  // Modo estático - secciones normales sin overlay
  if (shouldReduceMotion) {
    return (
      <>
        {/* Mobile */}
        <HeroMobile />

        {/* Desktop Hero - sección normal */}
        <section
          className="hidden md:block relative bg-[#f8f7fc] overflow-hidden"
          id="hero-section"
          aria-labelledby="hero-heading"
        >
          <div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            aria-hidden="true"
          >
            <svg
              className="absolute bottom-0 left-0 w-full"
              viewBox="0 0 1440 400"
              preserveAspectRatio="none"
              style={{ height: "50%" }}
              focusable="false"
            >
              <path
                fill="white"
                d="M0,100 C150,150 350,0 600,100 C850,200 1050,50 1200,100 C1350,150 1400,80 1440,100 L1440,400 L0,400 Z"
              />
            </svg>
          </div>

          <HeroContent isStatic />
        </section>

        {/* Desktop Grid - sección separada abajo */}
        <CommercesGrid isStatic />

        {/* Mobile Grid */}
        <GridMobileSection />
      </>
    );
  }

  // Modo con animaciones - estructura sticky/reveal
  return (
    <>
      <HeroMobile />

      <div
        className="relative hidden md:block md:min-h-[200vh]"
        id="hero-section"
      >
        <div className="md:sticky top-0 h-screen w-full overflow-hidden">
          <div
            ref={heroMediaRef}
            className="absolute inset-0 w-full h-full origin-center will-change-transform"
            style={{ zIndex: 50 }}
          >
            <div
              ref={containerRef}
              className="relative w-full h-full overflow-hidden bg-[#f8f7fc]"
            >
              <div
                className="absolute inset-0 pointer-events-none overflow-hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute bottom-0 left-0 w-full"
                  viewBox="0 0 1440 400"
                  preserveAspectRatio="none"
                  style={{ height: "50%" }}
                  focusable="false"
                >
                  <path
                    fill="white"
                    d="M0,100 C150,150 350,0 600,100 C850,200 1050,50 1200,100 C1350,150 1400,80 1440,100 L1440,400 L0,400 Z"
                  />
                </svg>
              </div>
            </div>

            <HeroContent />
          </div>

          <CommercesGrid ref={gridImagesRef} />
        </div>
      </div>

      <GridMobileSection />
    </>
  );
}
