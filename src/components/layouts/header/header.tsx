"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLenis } from "@/providers";
import { useMenuAnimation } from "@/hooks";
import {
  MenuOverlay,
  MenuOverlayRef,
  HamburgerButton,
} from "@/components/layouts/header";

import dinelcoLogo from "@/assets/isologo-white.svg";

export function Header() {
  const { lenis } = useLenis();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<MenuOverlayRef>(null);
  const { initSplitText, cleanup, openMenu, closeMenu } =
    useMenuAnimation(lenis);

  const getRefs = useCallback(() => {
    if (!menuRef.current) return null;
    return {
      overlay: menuRef.current.overlay,
      overlayContent: menuRef.current.content,
      mediaWrapper: menuRef.current.media,
      menuCols: menuRef.current.cols,
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (menuRef.current?.cols) {
        initSplitText(menuRef.current.cols);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      cleanup();
    };
  }, [initSplitText, cleanup]);

  const handleToggle = useCallback(() => {
    const refs = getRefs();
    if (!refs) return;

    isOpen ? closeMenu(refs) : openMenu(refs);
    setIsOpen(!isOpen);
  }, [isOpen, openMenu, closeMenu, getRefs]);

  const handleLinkClick = useCallback(() => {
    const refs = getRefs();
    if (!isOpen || !refs) return;

    closeMenu(refs);
    setIsOpen(false);
  }, [isOpen, closeMenu, getRefs]);

  return (
    <>
      <header className="header-reveal sticky top-0 left-0 right-0 z-1500 px-4 sm:px-6 lg:px-8 py-4">
        <div className="absolute inset-0">
          <div className="absolute inset-0 backdrop-blur-md border-b border-white/5 bg-black" />

          <div
            className={`absolute inset-0 bg-linear-to-r from-primary to-secondary transition-opacity duration-1000 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        <div className="relative flex items-center justify-between max-w-7xl mx-auto">
          <Link
            href="/es"
            className="flex items-center gap-1 shrink-0"
            aria-label="Ir al inicio"
          >
            <Image
              src={dinelcoLogo}
              alt=""
              width={48}
              height={48}
              className="w-10 h-10"
              priority
            />
            <span
              className="font-gilroy font-semibold text-lg text-white"
              aria-hidden="true"
            >
              |
            </span>
            <span className="text-lg font-gilroy font-semibold tracking-wide text-white">
              Developers
            </span>
          </Link>

          <div className="text-white">
            <HamburgerButton isOpen={isOpen} onClick={handleToggle} />
          </div>
        </div>
      </header>

      <MenuOverlay ref={menuRef} onLinkClick={handleLinkClick} />
    </>
  );
}
