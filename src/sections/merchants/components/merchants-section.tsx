"use client";

import { useIsDesktop } from "@/hooks";
import { MerchantsDesktop } from "./merchants-desktop";
import { MerchantsMobile } from "./merchants-mobile";

export function MerchantsSection() {
  const isDesktop = useIsDesktop();

  return isDesktop ? <MerchantsDesktop /> : <MerchantsMobile />;
}
