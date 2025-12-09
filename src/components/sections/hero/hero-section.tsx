"use client";

import { HeroContent } from "./hero-content";
import { HeroMobile } from "./mobile/hero-mobile";
import { CommercesGrid } from "./commerce-grid";
import { GridMobileSection } from "./mobile/grid-mobile-section";
import { useHeroAnimation } from "./use-hero-animations";

export function HeroSection() {
  const { heroMediaRef, containerRef, gridImagesRef } = useHeroAnimation();

  return (
    <>
      {/* Mobile Hero - Sin animación de cortina */}
      <HeroMobile />

      {/* Desktop Hero - Con animación de cortina */}
      <div
        className="relative hidden md:block md:min-h-[200vh]"
        id="hero-section"
      >
        <div className="md:sticky top-0 h-screen w-full overflow-hidden">
          {/* Hero Principal con efecto cortina */}
          <div
            ref={heroMediaRef}
            className="absolute inset-0 w-full h-full origin-center"
            style={{ zIndex: 50 }}
          >
            {/* Background */}
            <div
              ref={containerRef}
              className="relative w-full h-full overflow-hidden bg-[#f8f7fc]"
            >
              {/* Background SVG Clip Path decorativo */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <svg
                  className="absolute bottom-0 left-0 w-full"
                  viewBox="0 0 1440 400"
                  preserveAspectRatio="none"
                  style={{ height: "50%" }}
                  aria-hidden="true"
                >
                  <path
                    fill="white"
                    d="M0,100 C150,150 350,0 600,100 C850,200 1050,50 1200,100 C1350,150 1400,80 1440,100 L1440,400 L0,400 Z"
                  />
                </svg>
              </div>
            </div>

            {/* Contenido del Hero con ref para animación */}
            <HeroContent />
          </div>

          {/* Grid de comercios - fondo que se revela */}
          <CommercesGrid ref={gridImagesRef} />
        </div>
      </div>

      {/* Grid Mobile */}
      <GridMobileSection />
    </>
  );
}
