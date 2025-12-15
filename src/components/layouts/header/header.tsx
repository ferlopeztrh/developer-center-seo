"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  ShoppingCart,
  Link2,
  CreditCard,
  RotateCw,
  LayoutDashboard,
} from "lucide-react";
import { useLocale } from "@/hooks/use-locale";
import { LocaleSwitcher, MotionToggle } from "@/components/ui";
import { Menu, MobileMenu } from "@/components/layouts/header";

import dinelcoLogo from "@/assets/isologo-white.svg";

export function Header() {
  const { t, route } = useLocale();

  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  const MENU_LINKS = [
    { label: t.common.home, href: route("home") },
    { label: t.common.resources, href: route("recursos") },
    { label: t.common.news, href: route("novedades") },
  ];

  const PRODUCT_LINKS = [
    {
      label: t.menu.checkoutApi,
      href: route("checkoutApi"),
      description: t.menu.checkoutApiDesc,
      icon: ShoppingCart,
    },
    {
      label: t.menu.paymentLink,
      href: route("paymentLink"),
      description: t.menu.paymentLinkDesc,
      icon: Link2,
    },
    {
      label: t.menu.cardRegistry,
      href: route("cardRegistry"),
      description: t.menu.cardRegistryDesc,
      icon: CreditCard,
    },
    {
      label: t.menu.recurringPayments,
      href: route("recurringPayments"),
      description: t.menu.recurringPaymentsDesc,
      icon: RotateCw,
    },
    {
      label: t.menu.portal,
      href: route("portal"),
      description: t.menu.portalDesc,
      icon: LayoutDashboard,
    },
  ];

  const handleMenuClose = () => {
    setIsOpen(false);
    setProductsOpen(false);
  };

  // Handle scroll hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 10;

      if (currentScrollY > scrollThreshold) {
        if (currentScrollY > lastScrollY.current) {
          setIsVisible(false);
          setProductsOpen(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setProductsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Spacer - ocupa el espacio del header fixed */}
      <div className="h-[60px] sm:h-[68px] lg:h-[76px]" />

      <header
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-16 py-3 sm:py-4 lg:py-5 transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 backdrop-blur-lg" />
          <div className="absolute inset-0 bg-linear-to-r from-primary to-secondary opacity-95" />
        </div>

        <div className="relative flex items-center justify-between max-w-[1600px] mx-auto">
          {/* Logo */}
          <Link
            href={route("home")}
            className="flex items-center gap-2 sm:gap-3 shrink-0 z-10"
            aria-label={t.common.goToHome}
          >
            <Image
              src={dinelcoLogo}
              alt=""
              width={52}
              height={52}
              className="w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12"
              priority
            />
            <span className="font-gilroy font-semibold text-lg sm:text-xl text-white/30">
              |
            </span>
            <span className="text-lg sm:text-xl font-gilroy font-semibold tracking-tight text-white">
              Developers
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-2"
            aria-label={t.common.mainNavigation}
          >
            {MENU_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-2.5 font-gilroy text-[18px] font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}

            {/* Products Mega Menu Trigger */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                onMouseEnter={() => setProductsOpen(true)}
                className="px-5 py-2.5 font-gilroy text-[18px] font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 flex items-center gap-2"
                aria-expanded={productsOpen}
                aria-label={t.menu.a11y.title}
              >
                {t.common.products}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-400 ${
                    productsOpen ? "rotate-180" : ""
                  }`}
                  strokeWidth={2}
                />
              </button>
            </div>
          </nav>

          {/* Desktop Controls */}
          <div className="hidden lg:flex items-center gap-3">
            <LocaleSwitcher />
            <MotionToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? t.common.closeMenu : t.common.openMenu}
            aria-expanded={isOpen}
            className="lg:hidden relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 z-10"
          >
            <div className="relative w-4 h-4 flex flex-col justify-center items-center">
              <span
                className={`absolute w-4 h-[1.5px] bg-white transition-all duration-300 ${
                  isOpen ? "rotate-45" : "-translate-y-[5px]"
                }`}
              />
              <span
                className={`absolute w-4 h-[1.5px] bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                }`}
              />
              <span
                className={`absolute w-4 h-[1.5px] bg-white transition-all duration-300 ${
                  isOpen ? "-rotate-45" : "translate-y-[5px]"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mega Menu */}
      <Menu
        isOpen={productsOpen}
        // onClose={() => setProductsOpen(false)}
        products={PRODUCT_LINKS}
        isHeaderVisible={isVisible}
      />

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isOpen}
        onClose={handleMenuClose}
        menuLinks={MENU_LINKS}
        products={PRODUCT_LINKS}
      />
    </>
  );
}
