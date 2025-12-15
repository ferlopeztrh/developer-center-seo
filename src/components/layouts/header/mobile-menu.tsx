"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";
import { MotionToggle, LocaleSwitcher, PoweredByBepsa } from "@/components/ui";

interface MenuLink {
  label: string;
  href: string;
}

interface ProductLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuLinks: MenuLink[];
  products: ProductLink[];
}

export function MobileMenu({
  isOpen,
  onClose,
  menuLinks,
  products,
}: MobileMenuProps) {
  const { t } = useLocale();

  return (
    <div
      className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
        isOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
      }`}
      style={{ top: "0" }}
    >
      <div className="absolute inset-0 bg-black" style={{ top: "60px" }}>
        <div className="h-full overflow-y-auto">
          <div className="px-4 py-8 flex flex-col min-h-full">
            {/* Main Navigation */}
            <nav
              className="space-y-6 mb-12"
              aria-label={t.common.mainNavigation}
            >
              {menuLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`block font-gilroy text-3xl font-semibold text-white hover:text-[#CE0058] transition-all duration-300 ${
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Product Links */}
            <div className="mb-12">
              <p className="font-gilroy font-bold text-xs tracking-widest text-primary mb-4 uppercase">
                {t.menu.title}
              </p>
              <nav className="space-y-3" aria-label={t.menu.title}>
                {products.map((product, index) => (
                  <Link
                    key={`mobile-product-${index}`}
                    href={product.href}
                    onClick={onClose}
                    className={`block font-gilroy font-semibold text-base text-neutral-400 hover:text-secondary transition-all duration-300 ${
                      isOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isOpen
                        ? `${(menuLinks.length + index) * 50}ms`
                        : "0ms",
                    }}
                  >
                    {product.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Footer Controls */}
            <div className="mt-auto pt-8 border-t border-white/10 flex justify-between items-center">
              <div className="flex flex-col gap-4">
                <LocaleSwitcher />
                <MotionToggle />
              </div>
              <PoweredByBepsa />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
