import type { Solution } from "../interfaces";
import type { Dictionary } from "@/locales/es";

import dLinkStatic from "@/assets/d-link.jpg";
import checkoutStatic from "@/assets/products/checkout.png";
import dLinkGif from "@/assets/products/dinelco-link.gif";
import checkoutGif from "@/assets/checkout.gif";

export const getSolutions = (t: Dictionary): Solution[] => {
  const { solutions } = t.sections.products;

  return [
    {
      id: "checkout",
      title: solutions.checkout.title,
      description: solutions.checkout.description,
      cta: solutions.checkout.cta,
      ctaHref: "/soluciones/checkout",
      imageStatic: checkoutStatic,
      imageGif: checkoutGif,
    },
    {
      id: "payment-links",
      title: solutions["payment-links"].title,
      description: solutions["payment-links"].description,
      cta: solutions["payment-links"].cta,
      ctaHref: "/soluciones/payment-links",
      imageStatic: dLinkStatic,
      imageGif: dLinkGif,
    },
    {
      id: "subscriptions",
      title: solutions.subscriptions.title,
      description: solutions.subscriptions.description,
      cta: solutions.subscriptions.cta,
      ctaHref: "/soluciones/subscriptions",
      imageStatic: checkoutStatic,
      imageGif: checkoutGif,
    },
  ];
};
