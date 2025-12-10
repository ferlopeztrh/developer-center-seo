import type { Solution } from "../interfaces";

import dLinkStatic from "@/assets/d-link.jpg";
import checkoutStatic from "@/assets/products/checkout.png";
import dLinkGif from "@/assets/products/dinelco-link.gif";
import checkoutGif from "@/assets/checkout.gif";

export const SOLUTIONS: Solution[] = [
  {
    id: "checkout",
    title: "Dinelco Checkout",
    description:
      "Integra pagos en tu sitio web o app con nuestra solución de checkout personalizable y segura.",
    cta: "Ver solución",
    ctaHref: "/soluciones/checkout",
    imageStatic: checkoutStatic,
    imageGif: checkoutGif,
  },
  {
    id: "payment-links",
    title: "Dinelco Link",
    description:
      "Genera enlaces de pago únicos para compartir por WhatsApp, email o redes sociales.",
    cta: "Ver solución",
    ctaHref: "/soluciones/payment-links",
    imageStatic: dLinkStatic,
    imageGif: dLinkGif,
  },
  {
    id: "subscriptions",
    title: "Pagos recurrentes",
    description:
      "Automatiza cobros recurrentes y gestiona suscripciones de forma simple y eficiente.",
    cta: "Ver solución",
    ctaHref: "/soluciones/subscriptions",
    imageStatic: checkoutStatic,
    imageGif: checkoutGif,
  },
];
