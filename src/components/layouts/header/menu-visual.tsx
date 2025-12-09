"use client";

import checkoutGif from "@/assets/checkout.gif";

export function MenuVisual() {
  return (
    <img
      src={checkoutGif.src}
      alt="Dinelco checkout"
      className="h-full w-full object-cover object-[50%_center]"
    />
  );
}
