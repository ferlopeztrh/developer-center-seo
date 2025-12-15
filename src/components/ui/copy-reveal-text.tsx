"use client";

import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as SplitTextPlugin } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitTextPlugin);

/* Tipos seguros para SplitText */
interface SplitTextSafe {
  chars: HTMLElement[];
  words: HTMLElement[];
  revert: () => void;
}

function toSplitText(x: unknown): SplitTextSafe {
  const obj = x as {
    chars?: Iterable<unknown>;
    words?: Iterable<unknown>;
    revert?: () => void;
  };
  return {
    chars: obj.chars
      ? Array.from(obj.chars).filter(
          (e): e is HTMLElement => e instanceof HTMLElement
        )
      : [],
    words: obj.words
      ? Array.from(obj.words).filter(
          (e): e is HTMLElement => e instanceof HTMLElement
        )
      : [],
    revert: typeof obj.revert === "function" ? obj.revert : () => {},
  };
}

interface AnimatedCopyProps {
  children: ReactNode;
  colorInitial?: string;
  colorAccent?: string;
  colorFinal?: string;
}

/* Componente principal */
export const CopyRevealText = ({
  children,
  colorInitial = "#dddddd",
  colorAccent = "#753bbd",
  colorFinal = "#000000",
}: AnimatedCopyProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const splitRefs = useRef<
    { wordSplit: SplitTextSafe; charSplit: SplitTextSafe }[]
  >([]);
  const lastScrollProgress = useRef<number>(0);
  const colorTimers = useRef<Map<number, ReturnType<typeof setTimeout>>>(
    new Map()
  );
  const completedChars = useRef<Set<number>>(new Set());
  const isInitialized = useRef<boolean>(false);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      // reset
      splitRefs.current = [];
      lastScrollProgress.current = 0;
      colorTimers.current.clear();
      completedChars.current.clear();
      isInitialized.current = false;

      const elements: HTMLElement[] = container.hasAttribute(
        "data-copy-wrapper"
      )
        ? Array.from(container.children).filter(
            (el): el is HTMLElement => el instanceof HTMLElement
          )
        : [container];

      elements.forEach((el) => {
        try {
          const wordSplitRaw = SplitTextPlugin.create(el, {
            type: "words",
            wordsClass: "word",
          });
          const wordSplit = toSplitText(wordSplitRaw);

          const charSplitRaw = SplitTextPlugin.create(wordSplit.words, {
            type: "chars",
            charsClass: "char",
          });
          const charSplit = toSplitText(charSplitRaw);

          splitRefs.current.push({ wordSplit, charSplit });
        } catch (error) {
          console.warn("Error creating SplitText:", error);
        }
      });

      const allChars = splitRefs.current.flatMap((s) => s.charSplit.chars);

      if (allChars.length === 0) {
        isInitialized.current = false;
        return;
      }

      // Guardamos color final real de cada char
      const charFinalColors = new Map<HTMLElement, string>();
      allChars.forEach((char) => {
        const computedColor = window.getComputedStyle(char).color;
        charFinalColors.set(char, computedColor);
      });

      // valores iniciales
      gsap.set(allChars, { color: colorInitial });

      const scheduleFinalColor = (char: HTMLElement, index: number) => {
        if (colorTimers.current.has(index))
          clearTimeout(colorTimers.current.get(index));

        const timer = setTimeout(() => {
          if (!completedChars.current.has(index)) {
            gsap.to(char, {
              duration: 0.25,
              ease: "none",
              color: charFinalColors.get(char) ?? colorFinal,
              onComplete: () => {
                completedChars.current.add(index);
              },
            });
          }
          colorTimers.current.delete(index);
        }, 100);

        colorTimers.current.set(index, timer);
      };

      ScrollTrigger.create({
        trigger: container,
        start: "top 90%",
        end: "top 60%",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const totalChars = allChars.length;
          const isDown = progress >= lastScrollProgress.current;
          const current = Math.floor(progress * totalChars);

          allChars.forEach((char, i) => {
            if (!isDown && i >= current) {
              const timer = colorTimers.current.get(i);
              if (timer) clearTimeout(timer);
              colorTimers.current.delete(i);
              completedChars.current.delete(i);
              gsap.set(char, { color: colorInitial });
              return;
            }

            if (completedChars.current.has(i)) return;

            if (i <= current) {
              gsap.set(char, { color: colorAccent });
              if (!colorTimers.current.has(i)) scheduleFinalColor(char, i);
            } else {
              gsap.set(char, { color: colorInitial });
            }
          });

          lastScrollProgress.current = progress;
        },
      });

      isInitialized.current = true;

      return () => {
        // Clear timers
        colorTimers.current.forEach((t) => clearTimeout(t));
        colorTimers.current.clear();
        completedChars.current.clear();

        // Safe cleanup of SplitText instances
        if (isInitialized.current) {
          splitRefs.current.forEach(({ wordSplit, charSplit }) => {
            try {
              if (charSplit && typeof charSplit.revert === "function") {
                charSplit.revert();
              }
            } catch {
              // Ignore revert errors on unmount
            }

            try {
              if (wordSplit && typeof wordSplit.revert === "function") {
                wordSplit.revert();
              }
            } catch {
              // Ignore revert errors on unmount
            }
          });
        }

        splitRefs.current = [];
        isInitialized.current = false;
      };
    },
    {
      scope: containerRef,
      dependencies: [colorInitial, colorAccent, colorFinal],
    }
  );

  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
};
