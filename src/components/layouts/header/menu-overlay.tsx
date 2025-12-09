"use client";

import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import Link from "next/link";
import { MenuVisual } from "./menu-visual";
import { useLocale } from "@/hooks/use-locale";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { PoweredByBepsa } from "@/components/powered-by-bepsa";
import { MotionToggle } from "@/components/ui/motion-toggle";

export interface MenuOverlayRef {
  overlay: HTMLDivElement | null;
  content: HTMLDivElement | null;
  media: HTMLDivElement | null;
  cols: HTMLElement[];
}

interface MenuOverlayProps {
  onLinkClick?: () => void;
}

export const MenuOverlay = forwardRef<MenuOverlayRef, MenuOverlayProps>(
  ({ onLinkClick }, ref) => {
    const { t, locale } = useLocale();
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const mediaRef = useRef<HTMLDivElement>(null);
    const colsRef = useRef<HTMLElement[]>([]);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);

    const basePath = locale === "es" ? "" : `/${locale}`;

    const MENU_LINKS = [
      { label: t.common.home, href: `${basePath}/` },
      { label: t.common.products, href: `${basePath}/products` },
      { label: t.common.resources, href: `${basePath}/resources` },
      { label: t.common.news, href: `${basePath}/news` },
    ];

    const MENU_TAGS = [
      { label: t.menu.checkoutApi, href: "#" },
      { label: t.menu.paymentLink, href: "#" },
      { label: t.menu.cardRegistry, href: "#" },
      { label: t.menu.recurringPayments, href: "#" },
      { label: t.menu.portal, href: "#" },
    ];

    useImperativeHandle(ref, () => ({
      overlay: overlayRef.current,
      content: contentRef.current,
      media: mediaRef.current,
      cols: colsRef.current,
    }));

    const setColRef = (el: HTMLElement | null, i: number) => {
      if (el) colsRef.current[i] = el;
    };

    return (
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black z-1000 overflow-hidden"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
        role="dialog"
        aria-modal="true"
        aria-label={t.menu.a11y.title}
      >
        <div
          ref={contentRef}
          className="absolute inset-0 flex lg:flex-row flex-col -translate-y-1/2"
        >
          {/* Visual de Dinelco - solo desktop */}
          <div
            ref={mediaRef}
            className="hidden lg:block flex-2 opacity-0 h-full"
            aria-hidden="true"
          >
            <MenuVisual />
          </div>

          {/* Contenido */}
          <div className="flex-3 relative flex flex-col justify-between h-screen">
            {/* Links principales */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] lg:w-3/4 flex flex-col lg:flex-row gap-8 lg:gap-16">
              {/* Navegación principal */}
              <nav
                ref={(el: HTMLElement | null) => setColRef(el, 0)}
                className="flex flex-col gap-2"
                aria-label={t.common.mainNavigation}
              >
                {MENU_LINKS.map((link, i) => (
                  <div key={i} className="overflow-hidden">
                    <Link
                      href={link.href}
                      onClick={onLinkClick}
                      onMouseEnter={() => setActiveIndex(i)}
                      onMouseLeave={() => setActiveIndex(null)}
                      className="font-gilroy block text-3xl sm:text-4xl lg:text-6xl font-medium text-white group relative overflow-hidden py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
                    >
                      <span
                        className="absolute -left-8 top-1/2 -translate-y-1/2 text-xs font-mono text-[#753BBD] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        aria-hidden="true"
                      >
                        0{i + 1}
                      </span>

                      <span
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-0 group-hover:w-2 h-2 bg-[#753BBD] rounded-full transition-all duration-500 ease-out"
                        aria-hidden="true"
                      />

                      <span
                        className={`inline-block transition-all duration-500 ease-out group-hover:translate-x-6 ${
                          activeIndex !== null && activeIndex !== i
                            ? "opacity-30"
                            : "opacity-100"
                        }`}
                      >
                        {link.label.split("").map((char, charIndex) => (
                          <span
                            key={charIndex}
                            className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5"
                            style={{
                              transitionDelay: `${charIndex * 20}ms`,
                            }}
                            aria-hidden={charIndex > 0}
                          >
                            {char === " " ? "\u00A0" : char}
                          </span>
                        ))}
                      </span>

                      <span
                        className="absolute bottom-0 left-0 w-0 h-px bg-linear-to-r from-[#753BBD] to-[#CE0058] group-hover:w-full transition-all duration-500 ease-out"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                ))}
              </nav>

              {/* Tags de productos */}
              <nav
                ref={(el: HTMLElement | null) => setColRef(el, 1)}
                className="flex flex-col gap-2"
                aria-label={t.menu.title}
              >
                <p className="font-gilroy font-bold text-sm tracking-widest text-[#753BBD] mb-4 uppercase">
                  {t.menu.title}
                </p>
                {MENU_TAGS.map((tag, i) => (
                  <div key={i}>
                    <Link
                      href={tag.href}
                      onClick={onLinkClick}
                      onMouseEnter={() => setActiveTagIndex(i)}
                      onMouseLeave={() => setActiveTagIndex(null)}
                      className={`font-notosans block text-base lg:text-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded ${
                        activeTagIndex === null
                          ? "text-neutral-500"
                          : activeTagIndex === i
                          ? "text-[#CE0058]"
                          : "text-neutral-700"
                      }`}
                    >
                      {tag.label}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>

            {/* Footer con controles */}
            <footer className="absolute bottom-0 left-0 w-full p-6 lg:p-8 flex justify-between items-end">
              <div
                ref={(el: HTMLElement | null) => setColRef(el, 2)}
                className="flex flex-col gap-4"
              >
                <LocaleSwitcher />
                <MotionToggle />
              </div>

              <div ref={(el: HTMLElement | null) => setColRef(el, 3)}>
                <PoweredByBepsa />
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
);

MenuOverlay.displayName = "MenuOverlay";
