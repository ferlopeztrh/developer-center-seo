"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMotion } from "@/providers/motion-provider";
import { useLocale } from "@/hooks/use-locale";
import { ScrollVelocity } from "@/components/ui/scroll-velocity";
import { OutroCard } from "./merchants-outro-card";

const MERCHANT_IMAGES = Array.from(
  { length: 12 },
  (_, i) => `https://picsum.photos/800/600?random=${i + 1}`
);

const SCATTER_DIRECTIONS = [
  { x: 1.3, y: 0.7 },
  { x: -1.5, y: 1.0 },
  { x: 1.1, y: -1.3 },
  { x: -1.7, y: -0.8 },
  { x: 0.8, y: 1.5 },
  { x: -1.0, y: -1.4 },
  { x: 1.6, y: 0.3 },
  { x: -0.7, y: 1.7 },
  { x: 1.2, y: -1.6 },
  { x: -1.4, y: 0.9 },
  { x: 1.8, y: -0.5 },
  { x: -1.1, y: -1.8 },
];

export const MerchantsDesktop = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const preContentRef = useRef<HTMLDivElement>(null);
  const imagesContainerRef = useRef<HTMLDivElement>(null);
  const introHeaderRef = useRef<HTMLHeadingElement>(null);
  const outroRef = useRef<HTMLDivElement>(null);
  const { shouldReduceMotion } = useMotion();
  const { t } = useLocale();

  const merchantsTexts = t.sections.merchants;

  useEffect(() => {
    if (shouldReduceMotion || !sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const images =
      imagesContainerRef.current?.querySelectorAll(".merchant-img");
    const introHeader = introHeaderRef.current;
    const background = backgroundRef.current;
    const preContent = preContentRef.current;
    const outro = outroRef.current;

    if (!images || !introHeader || !background || !preContent || !outro) return;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const scatterMultiplier = 0.5;

    const startPositions = Array.from(images).map(() => ({
      x: 0,
      y: 0,
      z: -1000,
      scale: 0,
    }));

    const endPositions = SCATTER_DIRECTIONS.map((dir) => ({
      x: dir.x * screenWidth * scatterMultiplier,
      y: dir.y * screenHeight * scatterMultiplier,
      z: 2000,
      scale: 1,
    }));

    images.forEach((img, index) => {
      gsap.set(img, startPositions[index]);
    });

    const words = introHeader.querySelectorAll(".word");
    gsap.set(words, { opacity: 0 });
    gsap.set(outro, { opacity: 0, scale: 0.8, y: 50 });

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${window.innerHeight * 3.3}px`,
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;

        // Fondo y pre-content (0% - 10%)
        if (progress <= 0.1) {
          const bgProgress = progress / 0.1;
          const bgValue = Math.round(255 * (1 - bgProgress));
          gsap.set(background, {
            backgroundColor: `rgb(${bgValue}, ${bgValue}, ${bgValue})`,
          });
          gsap.set(preContent, {
            opacity: 1 - bgProgress,
            scale: 1 - bgProgress * 0.1,
          });
        } else {
          gsap.set(background, { backgroundColor: "rgb(0, 0, 0)" });
          gsap.set(preContent, { opacity: 0, scale: 0.9 });
        }

        // Imágenes (5% - 60%)
        images.forEach((img, index) => {
          const staggerDelay = index * 0.02;
          const scaleMultiplier = 2;

          const imageProgress = Math.max(
            0,
            (progress - 0.05 - staggerDelay) * 4
          );

          const start = startPositions[index];
          const end = endPositions[index];

          const zValue = gsap.utils.interpolate(start.z, end.z, imageProgress);
          const scaleValue = gsap.utils.interpolate(
            start.scale,
            end.scale,
            imageProgress * scaleMultiplier
          );
          const xValue = gsap.utils.interpolate(start.x, end.x, imageProgress);
          const yValue = gsap.utils.interpolate(start.y, end.y, imageProgress);

          gsap.set(img, {
            z: zValue,
            scale: scaleValue,
            x: xValue,
            y: yValue,
          });
        });

        // Intro text (10% - 70%)
        if (words.length > 0) {
          if (progress >= 0.1 && progress <= 0.17) {
            const fadeInProgress = (progress - 0.1) / 0.07;
            gsap.set(words, { opacity: fadeInProgress });
          } else if (progress > 0.17 && progress < 0.6) {
            gsap.set(words, { opacity: 1 });
          } else if (progress >= 0.6 && progress <= 0.7) {
            const introFadeProgress = (progress - 0.6) / 0.1;
            const totalWords = words.length;

            words.forEach((word, index) => {
              const wordFadeProgress = index / totalWords;
              const fadeRange = 0.12;

              if (introFadeProgress >= wordFadeProgress + fadeRange) {
                gsap.set(word, { opacity: 0 });
              } else if (introFadeProgress <= wordFadeProgress) {
                gsap.set(word, { opacity: 1 });
              } else {
                const wordOpacity =
                  1 - (introFadeProgress - wordFadeProgress) / fadeRange;
                gsap.set(word, { opacity: wordOpacity });
              }
            });
          } else if (progress < 0.1) {
            gsap.set(words, { opacity: 0 });
          } else if (progress > 0.7) {
            gsap.set(words, { opacity: 0 });
          }
        }

        // Outro CTA (70% - 100%)
        if (progress >= 0.7 && progress <= 1) {
          const outroProgress = (progress - 0.7) / 0.3;
          gsap.set(outro, {
            opacity: outroProgress,
            scale: 0.8 + 0.2 * outroProgress,
            y: 50 * (1 - outroProgress),
          });
        } else if (progress < 0.7) {
          gsap.set(outro, { opacity: 0, scale: 0.8, y: 50 });
        } else {
          gsap.set(outro, { opacity: 1, scale: 1, y: 0 });
        }
      },
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      trigger.kill();
    };
  }, [shouldReduceMotion, merchantsTexts.intro.text]);

  if (shouldReduceMotion) {
    return (
      <section
        className="relative w-full min-h-screen bg-black flex items-center justify-center p-8"
        aria-label={merchantsTexts.a11y.sectionLabel}
      >
        <OutroCard />
      </section>
    );
  }

  const headerText = merchantsTexts.intro.text;
  const headerWords = headerText.split(" ");
  const highlightWords = merchantsTexts.intro.highlightWords;

  return (
    <section
      ref={sectionRef}
      className="merchants-section relative w-dvw h-dvh overflow-hidden"
      aria-label={merchantsTexts.a11y.sectionLabel}
    >
      <div
        ref={backgroundRef}
        className="absolute inset-0 w-full h-full bg-white"
        aria-hidden="true"
      />

      {/* Pre-content: ScrollVelocity marquee */}
      <div
        ref={preContentRef}
        className="absolute inset-0 flex flex-col items-center justify-center z-5 select-none pointer-events-none"
      >
        <ScrollVelocity
          texts={[merchantsTexts.marquee.word1, merchantsTexts.marquee.word2]}
          velocity={80}
          className="font-gilroy font-bold text-foreground/10"
          scrollerClassName="!text-[15vw] !leading-none !tracking-tighter"
          parallaxClassName="w-full"
        />
      </div>

      <div
        ref={imagesContainerRef}
        className="absolute inset-0 w-full h-full"
        style={{ transformStyle: "preserve-3d", perspective: "2000px" }}
      >
        {MERCHANT_IMAGES.map((src, index) => (
          <div
            key={index}
            className="merchant-img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] will-change-transform"
          >
            <img
              src={src}
              alt={`${merchantsTexts.a11y.merchantImage} ${index + 1}`}
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Intro header */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <h2
          ref={introHeaderRef}
          className="font-gilroy font-semibold text-5xl lg:text-6xl xl:text-7xl text-white text-center leading-tight w-[60%] px-4"
        >
          {headerWords.map((word, index) => (
            <span
              key={index}
              className="word inline-block mr-[0.3em] opacity-0"
              style={{
                color: highlightWords.includes(word) ? "#8b5cf6" : undefined,
              }}
            >
              {word}
            </span>
          ))}
        </h2>
      </div>

      {/* Outro CTA */}
      <div
        ref={outroRef}
        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
        aria-label={merchantsTexts.a11y.outroSection}
      >
        <OutroCard />
      </div>
    </section>
  );
};
