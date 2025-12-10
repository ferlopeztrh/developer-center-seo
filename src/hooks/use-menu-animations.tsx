"use client";

import { useRef, useCallback } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";
import { useMotion } from "@/providers/motion-provider";

if (typeof window !== "undefined") {
  gsap.registerPlugin(CustomEase, SplitText);
  CustomEase.create("hop", "0.87, 0, 0.13, 1");
}

interface MenuRefs {
  overlay: HTMLDivElement | null;
  overlayContent: HTMLDivElement | null;
  mediaWrapper: HTMLDivElement | null;
  menuCols: HTMLElement[];
}

export function useMenuAnimation(
  lenis: { stop: () => void; start: () => void } | null
) {
  const { shouldReduceMotion } = useMotion();
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const splitInstancesRef = useRef<SplitText[][]>([]);
  const wrappersRef = useRef<HTMLDivElement[]>([]);
  const isCleaningUpRef = useRef(false);

  // Duraciones según preferencia
  const duration = shouldReduceMotion ? 0.2 : 1;
  const staggerDuration = shouldReduceMotion ? 0.3 : 2;
  const staggerAmount = shouldReduceMotion ? 0.02 : 0.075;

  const cleanup = useCallback(() => {
    // Evitar cleanup múltiple o durante reload
    if (isCleaningUpRef.current) return;
    isCleaningUpRef.current = true;

    try {
      splitInstancesRef.current.forEach((containerSplits) => {
        containerSplits.forEach((split) => {
          try {
            split.revert();
          } catch {
            // Ignorar errores si el DOM ya no existe
          }
        });
      });

      wrappersRef.current.forEach((wrapper) => {
        try {
          if (wrapper.parentNode && wrapper.firstChild) {
            const line = wrapper.firstChild;
            wrapper.parentNode.insertBefore(line, wrapper);
            wrapper.remove();
          }
        } catch {
          // Ignorar errores si el DOM ya no existe
        }
      });
    } finally {
      splitInstancesRef.current = [];
      wrappersRef.current = [];
      isCleaningUpRef.current = false;
    }
  }, []);

  const initSplitText = useCallback(
    (menuCols: HTMLElement[]) => {
      cleanup();

      menuCols.forEach((container) => {
        if (!container) return;
        const textElements = container.querySelectorAll("a, p");
        const containerSplits: SplitText[] = [];

        textElements.forEach((element) => {
          const split = new SplitText(element, {
            type: "lines",
            linesClass: "menu-line",
          });

          split.lines.forEach((line) => {
            const parent = line.parentNode;
            if (parent) {
              const wrapper = document.createElement("div");
              wrapper.style.overflow = "hidden";
              wrapper.style.lineHeight = "inherit";
              parent.insertBefore(wrapper, line);
              wrapper.appendChild(line);
              wrappersRef.current.push(wrapper);
            }
          });

          containerSplits.push(split);
          gsap.set(split.lines, { yPercent: shouldReduceMotion ? -100 : -110 });
        });

        splitInstancesRef.current.push(containerSplits);
      });
    },
    [cleanup, shouldReduceMotion]
  );

  const openMenu = useCallback(
    (refs: MenuRefs) => {
      timelineRef.current?.kill();
      lenis?.stop();

      timelineRef.current = gsap.timeline();

      if (shouldReduceMotion) {
        timelineRef.current
          .to(refs.overlay, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: duration,
            ease: "power2.out",
          })
          .to(
            refs.overlayContent,
            { yPercent: 0, duration: duration, ease: "power2.out" },
            "<"
          )
          .to(
            refs.mediaWrapper,
            { opacity: 1, duration: duration, ease: "power2.out" },
            "<"
          );
      } else {
        timelineRef.current
          .to(refs.overlay, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: duration,
            ease: "hop",
          })
          .to(
            refs.overlayContent,
            { yPercent: 0, duration: duration, ease: "hop" },
            "<"
          )
          .to(
            refs.mediaWrapper,
            { opacity: 1, duration: 0.75, ease: "power2.out", delay: 0.5 },
            "<"
          );
      }

      splitInstancesRef.current.forEach((containerSplits) => {
        const lines = containerSplits.flatMap((s) => s.lines);
        timelineRef.current?.to(
          lines,
          {
            yPercent: 0,
            duration: staggerDuration,
            ease: shouldReduceMotion ? "power2.out" : "hop",
            stagger: -staggerAmount,
          },
          shouldReduceMotion ? "<" : "<-0.15"
        );
      });
    },
    [lenis, shouldReduceMotion, duration, staggerDuration, staggerAmount]
  );

  const closeMenu = useCallback(
    (refs: MenuRefs) => {
      timelineRef.current?.kill();

      timelineRef.current = gsap.timeline({
        onComplete: () => {
          try {
            splitInstancesRef.current.forEach((containerSplits) => {
              const lines = containerSplits.flatMap((s) => s.lines);
              gsap.set(lines, { yPercent: shouldReduceMotion ? -100 : -110 });
            });
            refs.menuCols.forEach(
              (col) => col && gsap.set(col, { opacity: 1 })
            );
            gsap.set(refs.mediaWrapper, { opacity: 0 });
          } catch {
            // Ignorar si el DOM ya no existe
          }
          lenis?.start();
        },
      });

      if (shouldReduceMotion) {
        timelineRef.current
          .to(refs.menuCols, {
            opacity: 0,
            duration: duration,
            ease: "power2.out",
          })
          .to(
            refs.overlay,
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
              duration: duration,
              ease: "power2.out",
            },
            "<"
          );
      } else {
        timelineRef.current
          .to(refs.menuCols, { opacity: 0.25, duration: duration, ease: "hop" })
          .to(
            refs.overlay,
            {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
              duration: duration,
              ease: "hop",
            },
            "<"
          );
      }
    },
    [lenis, shouldReduceMotion, duration]
  );

  return { initSplitText, cleanup, openMenu, closeMenu };
}
