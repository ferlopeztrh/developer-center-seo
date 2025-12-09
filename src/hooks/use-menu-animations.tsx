"use client";

import { useRef, useCallback } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";

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
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const splitInstancesRef = useRef<SplitText[][]>([]);
  const wrappersRef = useRef<HTMLDivElement[]>([]);

  const cleanup = useCallback(() => {
    splitInstancesRef.current.forEach((containerSplits) => {
      containerSplits.forEach((split) => split.revert());
    });
    wrappersRef.current.forEach((wrapper) => {
      if (wrapper.parentNode) {
        const line = wrapper.firstChild;
        if (line) wrapper.parentNode.insertBefore(line, wrapper);
        wrapper.remove();
      }
    });
    splitInstancesRef.current = [];
    wrappersRef.current = [];
  }, []);

  const initSplitText = useCallback(
    (menuCols: HTMLElement[]) => {
      // Limpiar instancias previas
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
          gsap.set(split.lines, { yPercent: -110 });
        });

        splitInstancesRef.current.push(containerSplits);
      });
    },
    [cleanup]
  );

  const openMenu = useCallback(
    (refs: MenuRefs) => {
      timelineRef.current?.kill();
      lenis?.stop();

      timelineRef.current = gsap.timeline();

      timelineRef.current
        .to(refs.overlay, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1,
          ease: "hop",
        })
        .to(refs.overlayContent, { yPercent: 0, duration: 1, ease: "hop" }, "<")
        .to(
          refs.mediaWrapper,
          { opacity: 1, duration: 0.75, ease: "power2.out", delay: 0.5 },
          "<"
        );

      splitInstancesRef.current.forEach((containerSplits) => {
        const lines = containerSplits.flatMap((s) => s.lines);
        timelineRef.current?.to(
          lines,
          { yPercent: 0, duration: 2, ease: "hop", stagger: -0.075 },
          "<-0.15"
        );
      });
    },
    [lenis]
  );

  const closeMenu = useCallback(
    (refs: MenuRefs) => {
      timelineRef.current?.kill();

      timelineRef.current = gsap.timeline({
        onComplete: () => {
          splitInstancesRef.current.forEach((containerSplits) => {
            const lines = containerSplits.flatMap((s) => s.lines);
            gsap.set(lines, { yPercent: -110 });
          });
          refs.menuCols.forEach((col) => col && gsap.set(col, { opacity: 1 }));
          gsap.set(refs.mediaWrapper, { opacity: 0 });
          lenis?.start();
        },
      });

      timelineRef.current
        .to(refs.menuCols, { opacity: 0.25, duration: 1, ease: "hop" })
        .to(
          refs.overlay,
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 1,
            ease: "hop",
          },
          "<"
        );
    },
    [lenis]
  );

  return { initSplitText, cleanup, openMenu, closeMenu };
}
