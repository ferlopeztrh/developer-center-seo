"use client";

import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMotion } from "@/providers";

// Registrar plugin una sola vez
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseHeroAnimationRefs {
  heroMediaRef: React.RefObject<HTMLDivElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  gridImagesRef: React.RefObject<HTMLDivElement | null>;
}

export function useHeroAnimation(): UseHeroAnimationRefs {
  const { shouldReduceMotion } = useMotion();

  const heroMediaRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const gridImagesRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const cleanup = useCallback(() => {
    // Matar timeline específico
    if (timelineRef.current) {
      timelineRef.current.kill();
      timelineRef.current = null;
    }

    // Matar ScrollTrigger específico
    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.kill();
      scrollTriggerRef.current = null;
    }
  }, []);

  const initAnimation = useCallback(() => {
    // Limpiar animaciones previas
    cleanup();

    const gridImagesElement = gridImagesRef.current;

    // Modo reducido: mostrar todo sin animación
    if (shouldReduceMotion) {
      if (gridImagesElement) {
        const gridImageContainers =
          gridImagesElement.querySelectorAll(".grid-image");
        const gridImageElements = gridImagesElement.querySelectorAll(
          ".grid-image-element"
        );
        const gridTitleLines =
          gridImagesElement.querySelectorAll(".grid-title-line");

        gsap.set(gridImageContainers, { opacity: 1, y: 0 });
        gsap.set(gridImageElements, { scale: 1 });
        gsap.set(gridTitleLines, { clipPath: "inset(0 0% 0 0)" });
      }
      return;
    }

    // No animar en mobile
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const heroElement = heroMediaRef.current;
    const containerElement = containerRef.current;

    if (!heroElement || !containerElement || !gridImagesElement) return;

    // Cachear queries del DOM (evita múltiples queries)
    const heroTextContent = heroElement.querySelector(".hero-text-content");
    const heroImageContainer = heroElement.querySelector(
      ".hero-image-container"
    );
    const floatCards = heroElement.querySelectorAll(".float-card");
    const merchantLogos = heroElement.querySelector(".merchant-logos");
    const gridSvgs = heroElement.querySelectorAll("[class*='GridSVG']");

    const gridImageContainers =
      gridImagesElement.querySelectorAll(".grid-image");
    const gridImageElements = gridImagesElement.querySelectorAll(
      ".grid-image-element"
    );
    const gridTitleLines =
      gridImagesElement.querySelectorAll(".grid-title-line");

    // Estados iniciales - usar will-change solo donde es necesario
    gsap.set(gridImageContainers, { opacity: 0, y: 50 });
    gsap.set(gridImageElements, { scale: 0.85 });
    gsap.set(gridTitleLines, { clipPath: "inset(0 100% 0 0)" });

    // Crear timeline con ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerElement,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
        invalidateOnRefresh: true,
        fastScrollEnd: true, // Optimización para scroll rápido
        onEnter: () => {
          // Agregar will-change solo cuando es necesario
          heroElement.style.willChange = "transform";
        },
        onLeave: () => {
          // Remover will-change cuando no se necesita
          heroElement.style.willChange = "auto";
        },
        onEnterBack: () => {
          heroElement.style.willChange = "transform";
        },
        onLeaveBack: () => {
          heroElement.style.willChange = "auto";
        },
      },
    });

    // Guardar referencias para cleanup
    timelineRef.current = tl;
    scrollTriggerRef.current = tl.scrollTrigger as ScrollTrigger;

    // === PARALLAX - usar transforms en vez de propiedades costosas ===
    if (heroTextContent) {
      tl.to(heroTextContent, { yPercent: -80, opacity: 0, ease: "none" }, 0);
    }

    if (merchantLogos) {
      tl.to(merchantLogos, { yPercent: -60, opacity: 0, ease: "none" }, 0);
    }

    // Animar float cards de forma más eficiente (batch)
    if (floatCards.length > 0) {
      floatCards.forEach((card, index) => {
        const speed = 40 + index * 15;
        tl.to(
          card,
          { yPercent: -speed, opacity: 0, scale: 0.9, ease: "none" },
          0
        );
      });
    }

    if (heroImageContainer) {
      tl.to(
        heroImageContainer,
        { yPercent: -50, opacity: 0, scale: 0.95, ease: "none" },
        0
      );
    }

    if (gridSvgs.length > 0) {
      tl.to(gridSvgs, { yPercent: -30, opacity: 0, ease: "none" }, 0);
    }

    tl.to(heroElement, { yPercent: -100, ease: "none" }, 0);

    // === GRID - stagger optimizado ===
    tl.to(
      gridImageContainers,
      {
        opacity: 1,
        y: 0,
        stagger: { each: 0.015, from: "random" },
        ease: "none",
      },
      0.2
    );

    tl.to(
      gridImageElements,
      {
        scale: 1,
        stagger: { each: 0.015, from: "random" },
        ease: "none",
      },
      0.2
    );

    // === TÍTULO ===
    if (gridTitleLines[0]) {
      tl.to(
        gridTitleLines[0],
        { clipPath: "inset(0 0% 0 0)", ease: "none", duration: 0.4 },
        0.3
      );
    }

    if (gridTitleLines[1]) {
      tl.to(
        gridTitleLines[1],
        { clipPath: "inset(0 0% 0 0)", ease: "none", duration: 0.4 },
        0.5
      );
    }
  }, [shouldReduceMotion, cleanup]);

  useEffect(() => {
    // Esperar al siguiente frame para evitar layout thrashing
    const rafId = requestAnimationFrame(() => {
      initAnimation();
    });

    // Debounced resize handler
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        cleanup();
        initAnimation();
      }, 250);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      cleanup();
    };
  }, [initAnimation, cleanup]);

  return { heroMediaRef, containerRef, gridImagesRef };
}
