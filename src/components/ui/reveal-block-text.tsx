"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ----------------------------------------------------------------------
// SUBCOMPONENTE AUXILIAR (La clave para eliminar la repetición)
// ----------------------------------------------------------------------

interface RevealLineProps {
  /** El texto que se va a revelar. */
  children: ReactNode;
  /** Clases CSS específicas para el elemento de texto (el <span>.reveal-text) */
  textClassName?: string;
  /** Clases CSS para el contenedor de la línea (el .title-line) */
  lineClassName?: string;
  /** Clases CSS para el bloque de revelado (el .reveal-block), si se quiere cambiar color o forma */
  blockClassName?: string;
}

/**
 * Componente que envuelve una línea de texto en la estructura necesaria
 * para la animación de revelado (RevealBlockText).
 */
export function RevealLine({
  children,
  textClassName = "block text-foreground", // Default si no se pasa nada
  lineClassName = "relative inline-block", // Default, si quieres añadir margen o padding extra
  blockClassName = "rounded-3xl absolute inset-0 bg-primary z-10", // Tus estilos de bloque
}: RevealLineProps) {
  return (
    <div className={`title-line ${lineClassName}`}>
      {/* Opacity: 0 es crucial para que la animación funcione correctamente */}
      <span className={`reveal-text opacity-0 ${textClassName}`}>
        {children}
      </span>
      {/* El bloque de color que se anima */}
      <div className={`reveal-block ${blockClassName}`} />
    </div>
  );
}

// ----------------------------------------------------------------------
// COMPONENTE PRINCIPAL (La lógica de GSAP permanece igual)
// ----------------------------------------------------------------------

interface RevealBlockTextProps {
  // ... (Props de RevealBlockText sin cambios) ...
  children: ReactNode;
  containerClassName?: string;
  scrollTriggerConfig?: {
    start?: string;
    toggleActions?: string;
  };
}

export function RevealBlockText({
  children,
  containerClassName = "",
  scrollTriggerConfig,
}: RevealBlockTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ... (La lógica de GSAP es la misma, busca .title-line, .reveal-text, .reveal-block) ...
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>(
        ".title-line",
        containerRef.current!
      );

      if (lines.length === 0) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: scrollTriggerConfig?.start || "top 80%",
          toggleActions:
            scrollTriggerConfig?.toggleActions || "play none none reverse",
        },
      });

      lines.forEach((line, i) => {
        const block = line.querySelector(".reveal-block");
        const text = line.querySelector(".reveal-text");

        if (!block || !text) {
          // Ya no debería ocurrir si solo se usa RevealLine
          console.warn("RevealBlockText: Estructura de línea inválida.");
          return;
        }

        const lineTl = gsap.timeline();

        lineTl
          .fromTo(
            block,
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 0.6, ease: "expo.inOut" }
          )
          .set(text, { opacity: 1 })
          .to(block, {
            scaleX: 0,
            transformOrigin: "right center",
            duration: 0.6,
            ease: "expo.inOut",
          });

        tl.add(lineTl, i * 0.15);
      });
    }, containerRef);

    return () => ctx.revert();
  }, [scrollTriggerConfig]);

  return (
    <div
      ref={containerRef}
      className={`flex flex-col items-center text-center md:items-start md:text-left ${containerClassName}`}
    >
      {children}
    </div>
  );
}
