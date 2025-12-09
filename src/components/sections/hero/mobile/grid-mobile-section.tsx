// grid-mobile-section.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Mismas imágenes que CommercesGrid desktop
const GRID_IMAGES = {
  top: [
    {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
      alt: "Comercio minorista",
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
      alt: "Dashboard de ventas",
    },
    {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop",
      alt: "Equipo de trabajo",
    },
  ],
  bottom: [
    {
      src: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=400&h=400&fit=crop",
      alt: "Startup tecnológica",
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
      alt: "Planificación estratégica",
    },
    {
      src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=400&fit=crop",
      alt: "Equipo de desarrollo",
    },
  ],
};

export function GridMobileSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridTopRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const gridBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Grid superior
      if (gridTopRef.current) {
        const topImgs = gridTopRef.current.querySelectorAll(".grid-item");
        gsap.fromTo(
          topImgs,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridTopRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Título línea 1
      if (titleLine1Ref.current) {
        gsap.fromTo(
          titleLine1Ref.current,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: titleLine1Ref.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Título línea 2
      if (titleLine2Ref.current) {
        gsap.fromTo(
          titleLine2Ref.current,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1,
            delay: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: titleLine2Ref.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Grid inferior
      if (gridBottomRef.current) {
        const bottomImgs = gridBottomRef.current.querySelectorAll(".grid-item");
        gsap.fromTo(
          bottomImgs,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridBottomRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="block md:hidden bg-white py-8 px-4">
      <div className="max-w-[400px] mx-auto">
        {/* Grid Superior */}
        <div ref={gridTopRef} className="grid grid-cols-3 gap-3 mb-8">
          {GRID_IMAGES.top.map((image, index) => (
            <div
              key={`top-${index}`}
              className="grid-item aspect-square overflow-hidden relative rounded-2xl"
              style={{
                gridColumn: index + 1,
                gridRow: index === 1 ? 1 : 2,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          ))}
        </div>

        {/* Texto Central - igual que desktop con efecto escribiéndose */}
        <div className="text-center my-12 px-4">
          <h2 className="font-gilroy font-semibold text-primary text-3xl sm:text-4xl leading-tight">
            <span ref={titleLine1Ref} className="block">
              Sin importar tu rubro,
            </span>
            <span ref={titleLine2Ref} className="block">
              crecé con dinelco.
            </span>
          </h2>
        </div>

        {/* Grid Inferior */}
        <div ref={gridBottomRef} className="grid grid-cols-3 gap-3 mt-8">
          {GRID_IMAGES.bottom.map((image, index) => (
            <div
              key={`bottom-${index}`}
              className="grid-item aspect-square overflow-hidden relative rounded-2xl"
              style={{
                gridColumn: index + 1,
                gridRow: index === 1 ? 2 : 1,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
