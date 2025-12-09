"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocale } from "@/hooks/use-locale";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const GRID_IMAGES = {
  top: [
    {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
    },
    {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop",
    },
  ],
  bottom: [
    {
      src: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=400&h=400&fit=crop",
    },
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
    },
    {
      src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=400&fit=crop",
    },
  ],
};

const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

export function GridMobileSection() {
  const { t } = useLocale();
  const heroTexts = t.sections.hero;
  const { grid, gridImages } = heroTexts;

  const sectionRef = useRef<HTMLElement>(null);
  const gridTopRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const gridBottomRef = useRef<HTMLDivElement>(null);

  const initAnimations = useCallback(() => {
    if (!sectionRef.current) return;

    // Respetar preferencias de accesibilidad
    if (prefersReducedMotion()) {
      if (titleLine1Ref.current) {
        gsap.set(titleLine1Ref.current, { clipPath: "inset(0 0% 0 0)" });
      }
      if (titleLine2Ref.current) {
        gsap.set(titleLine2Ref.current, { clipPath: "inset(0 0% 0 0)" });
      }
      return;
    }

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

  useEffect(() => {
    const cleanup = initAnimations();

    // Listener para cambios en preferencia de movimiento
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      initAnimations();
    };

    mediaQuery.addEventListener("change", handleMotionChange);

    return () => {
      cleanup?.();
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, [initAnimations]);

  // Mapeo de alts para mobile (usa subset del grid desktop)
  const mobileGridAlts = {
    top: [
      gridImages.row1[0]?.alt,
      gridImages.row2[1]?.alt,
      gridImages.row2[3]?.alt,
    ],
    bottom: [
      gridImages.row4[0]?.alt,
      gridImages.row5[0]?.alt,
      gridImages.row5[2]?.alt,
    ],
  };

  return (
    <section
      ref={sectionRef}
      className="block md:hidden bg-white py-8 px-4"
      aria-labelledby="grid-heading-mobile"
    >
      <div className="max-w-[400px] mx-auto">
        {/* Grid Superior */}
        <div
          ref={gridTopRef}
          className="grid grid-cols-3 gap-3 mb-8"
          role="presentation"
        >
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
                alt={mobileGridAlts.top[index] ?? ""}
                fill
                className="object-cover"
                sizes="(max-width: 400px) 33vw, 130px"
                loading="lazy"
                unoptimized
              />
            </div>
          ))}
        </div>

        {/* Texto Central */}
        <header className="text-center my-12 px-4">
          <h2
            id="grid-heading-mobile"
            className="font-gilroy font-semibold text-primary text-3xl sm:text-4xl leading-tight"
          >
            <span ref={titleLine1Ref} className="block">
              {grid.titleLine1}
            </span>
            <span ref={titleLine2Ref} className="block">
              {grid.titleLine2}
            </span>
          </h2>
        </header>

        {/* Grid Inferior */}
        <div
          ref={gridBottomRef}
          className="grid grid-cols-3 gap-3 mt-8"
          role="presentation"
        >
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
                alt={mobileGridAlts.bottom[index] ?? ""}
                fill
                className="object-cover"
                sizes="(max-width: 400px) 33vw, 130px"
                loading="lazy"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
