"use client";

import { useIsDesktop } from "@/hooks/use-media-query";
import checkoutGif from "@/assets/checkout.gif";

export function MenuVisual() {
  const isDesktop = useIsDesktop();

  if (!isDesktop) return null;

  return (
    <img
      src={checkoutGif.src}
      alt="Dinelco checkout"
      className="h-full w-full object-cover object-[50%_center]"
      loading="lazy"
    />
  );
}
