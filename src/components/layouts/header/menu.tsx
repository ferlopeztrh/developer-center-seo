"use client";

import Link from "next/link";
import { ChevronDown, LucideIcon } from "lucide-react";
import { useLocale } from "@/hooks/use-locale";

interface ProductLink {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
}

interface MenuProps {
  isOpen: boolean;
  products: ProductLink[];
  isHeaderVisible: boolean;
}

export function Menu({ isOpen, products, isHeaderVisible }: MenuProps) {
  const { t } = useLocale();

  return (
    <div
      className={`hidden lg:block fixed left-0 right-0 bg-white transition-all duration-300 ease-out origin-top z-40 ${
        isOpen && isHeaderVisible
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-2 pointer-events-none"
      }`}
      style={{
        top: "76px",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
      }}
    >
      <div className="max-w-[1100px] mx-auto px-8 py-10">
        {/* Section Title */}
        <div className="mb-8">
          <h3 className="font-gilroy text-[11px] font-semibold tracking-wider text-gray-900 uppercase">
            {t.menu.title}
          </h3>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-3 gap-x-10 gap-y-7">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Link
                key={`mega-product-${index}`}
                href={product.href}
                className="group flex items-start gap-3.5 py-2"
              >
                {/* Icon */}
                <div className="shrink-0 mt-0.5">
                  <div className="w-9 h-9 rounded-lg bg-[#753BBD]/8 flex items-center justify-center group-hover:bg-[#753BBD]/12 transition-colors duration-200">
                    <Icon
                      className="w-[18px] h-[18px] text-primary"
                      strokeWidth={2}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-gilroy font-semibold text-[15px] text-gray-900 mb-1 group-hover:text-primary transition-colors duration-200">
                    {product.label}
                  </h4>
                  <p className="font-notosans text-[13px] text-gray-500 leading-normal">
                    {product.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Links */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link
            href="#"
            className="inline-flex items-center gap-1.5 font-gilroy text-[14px] font-semibold text-[#753BBD] hover:text-[#CE0058] transition-colors duration-200"
          >
            {t.menu.viewAllDocs}
            <ChevronDown className="w-3.5 h-3.5 -rotate-90" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </div>
  );
}
