"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

/**
 * Uso:
 *
 * <div data-animate={AnimationType.SlideUp} data-delay="0.2">Contenido</div>
 * <h2 data-animate={AnimationType.RevealText}>Texto con máscara reveal</h2>
 * <svg data-animate={AnimationType.AnimatedPath}>...</svg>
 *
 * Animations disponibles:
 * - SlideUp: entrada desde abajo con fade
 * - FadeIn: fade simple
 * - ScaleIn: fade + escala
 * - FloatCardLeft: desde la izquierda
 * - FloatCardRight: desde la derecha
 * - RevealText: animación de cada span
 * - AnimatedPath: trazo SVG
 * - ProgressCircle: relleno círculo
 * - ProgressNumber: fade del número de progreso
 */
export enum AnimationType {
  SlideUp = "slide-up",
  FadeIn = "fade-in",
  ScaleIn = "scale-in",
  FloatCardLeft = "float-card-left",
  FloatCardRight = "float-card-right",
  HeroImageReveal = "hero-image-reveal",
  RevealText = "reveal-text",
  AnimatedPath = "animated-path",
  ProgressCircle = "progress-circle",
  ProgressNumber = "progress-number",
}

export function useAnimateOnView(rootMargin = "0px 0px -50px 0px") {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          const type = el.dataset.animate as AnimationType;
          const delay = parseFloat(el.dataset.delay || "0");

          if (!type) return;

          const animations: Record<
            AnimationType,
            { from: gsap.TweenVars; to: gsap.TweenVars }
          > = {
            [AnimationType.SlideUp]: {
              from: { opacity: 0, y: 20 },
              to: { opacity: 1, y: 0, duration: 0.6, ease: "expo.out", delay },
            },
            [AnimationType.FadeIn]: {
              from: { opacity: 0 },
              to: { opacity: 1, duration: 0.6, ease: "power1.out", delay },
            },
            [AnimationType.ScaleIn]: {
              from: { opacity: 0, scale: 0.95 },
              to: {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: "expo.out",
                delay,
              },
            },
            [AnimationType.FloatCardLeft]: {
              from: { opacity: 0, x: -20 },
              to: { opacity: 1, x: 0, duration: 0.6, ease: "expo.out", delay },
            },
            [AnimationType.FloatCardRight]: {
              from: { opacity: 0, x: 20 },
              to: { opacity: 1, x: 0, duration: 0.6, ease: "expo.out", delay },
            },
            [AnimationType.HeroImageReveal]: {
              from: { opacity: 0, scale: 0.95 },
              to: {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: "expo.out",
                delay,
              },
            },
            [AnimationType.RevealText]: {
              from: { y: "100%" },
              to: { y: "0%", duration: 0.8, ease: "expo.out", delay },
            },
            [AnimationType.AnimatedPath]: {
              from: { strokeDashoffset: 100 },
              to: {
                strokeDashoffset: 0,
                duration: 0.8,
                ease: "power1.out",
                delay,
              },
            },
            [AnimationType.ProgressCircle]: {
              from: { strokeDasharray: "0 100" },
              to: {
                strokeDasharray: "89.5 100",
                duration: 1,
                ease: "expo.out",
                delay,
              },
            },
            [AnimationType.ProgressNumber]: {
              from: { opacity: 0 },
              to: { opacity: 1, duration: 0.4, ease: "expo.out", delay },
            },
          };

          if (entry.isIntersecting) {
            gsap.killTweensOf(el);

            if (type === AnimationType.RevealText) {
              const spans = Array.from(el.querySelectorAll("span"));
              gsap.set(spans, { y: "100%" });
              gsap.to(spans, {
                y: "0%",
                duration: 0.8,
                ease: "expo.out",
                stagger: 0.1,
                delay,
              });
            } else {
              gsap.fromTo(el, animations[type].from, animations[type].to);
            }
          } else {
            // Animación inversa
            gsap.killTweensOf(el);

            if (type === AnimationType.RevealText) {
              const spans = Array.from(el.querySelectorAll("span"));
              gsap.to(spans, {
                y: "100%",
                duration: 0.8,
                ease: "expo.out",
                stagger: 0.1,
              });
            } else {
              gsap.to(el, {
                ...animations[type].from,
                duration: animations[type].to.duration,
                ease: "expo.out",
              });
            }
          }
        });
      },
      { threshold: 0.2, rootMargin }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [rootMargin]);
}
