// use-hero-animation.ts
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseHeroAnimationRefs {
  heroMediaRef: React.RefObject<HTMLDivElement | null>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  gridImagesRef: React.RefObject<HTMLDivElement | null>;
}

export function useHeroAnimation(): UseHeroAnimationRefs {
  const heroMediaRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const gridImagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const heroElement = heroMediaRef.current;
    const containerElement = containerRef.current;
    const gridImagesElement = gridImagesRef.current;

    if (!heroElement || !containerElement || !gridImagesElement) return;

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

    gsap.set(gridImageContainers, { opacity: 0, y: 50 });
    gsap.set(gridImageElements, { scale: 0.85 });
    gsap.set(gridTitleLines, {
      clipPath: "inset(0 100% 0 0)",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerElement,
        start: "top top",
        end: "bottom top",
        scrub: 1.5, // Más suave
      },
    });

    // === PARALLAX ===

    if (heroTextContent) {
      tl.to(
        heroTextContent,
        {
          yPercent: -80,
          opacity: 0,
          ease: "none",
        },
        0
      );
    }

    if (merchantLogos) {
      tl.to(
        merchantLogos,
        {
          yPercent: -60,
          opacity: 0,
          ease: "none",
        },
        0
      );
    }

    if (floatCards.length > 0) {
      floatCards.forEach((card, index) => {
        const speed = 40 + index * 15;
        tl.to(
          card,
          {
            yPercent: -speed,
            opacity: 0,
            scale: 0.9,
            ease: "none",
          },
          0
        );
      });
    }

    if (heroImageContainer) {
      tl.to(
        heroImageContainer,
        {
          yPercent: -50,
          opacity: 0,
          scale: 0.95,
          ease: "none",
        },
        0
      );
    }

    if (gridSvgs.length > 0) {
      tl.to(
        gridSvgs,
        {
          yPercent: -30,
          opacity: 0,
          ease: "none",
        },
        0
      );
    }

    tl.to(
      heroElement,
      {
        yPercent: -100,
        ease: "none",
      },
      0
    );

    // === GRID ===

    tl.to(
      gridImageContainers,
      {
        opacity: 1,
        y: 0,
        stagger: {
          each: 0.015,
          from: "random",
        },
        ease: "none",
      },
      0.2
    );

    tl.to(
      gridImageElements,
      {
        scale: 1,
        stagger: {
          each: 0.015,
          from: "random",
        },
        ease: "none",
      },
      0.2
    );

    // === TÍTULO: Escribiéndose suave ===
    tl.to(
      gridTitleLines[0],
      {
        clipPath: "inset(0 0% 0 0)",
        ease: "none",
        duration: 0.4,
      },
      0.3
    );

    tl.to(
      gridTitleLines[1],
      {
        clipPath: "inset(0 0% 0 0)",
        ease: "none",
        duration: 0.4,
      },
      0.5
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === containerElement) trigger.kill();
      });
    };
  }, []);

  return { heroMediaRef, containerRef, gridImagesRef };
}
