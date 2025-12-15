export const products = {
  // Header
  header: {
    tag: "Nuestras soluciones",
    titleLine1: "Un proceso de pago",
    titleLine2: "sin complicaciones",
    description:
      "Todo lo que tu negocio necesita para aceptar pagos, automatizar procesos y crecer sin complicaciones.",
  },

  // Soluciones (keys coinciden con los IDs de SOLUTIONS)
  solutions: {
    checkout: {
      title: "Dinelco Checkout",
      description:
        "Integra pagos en tu sitio web o app con nuestra solución de checkout personalizable y segura.",
      cta: "Ver solución",
    },
    "payment-links": {
      title: "Dinelco Link",
      description:
        "Genera enlaces de pago únicos para compartir por WhatsApp, email o redes sociales.",
      cta: "Ver solución",
    },
    subscriptions: {
      title: "Pagos recurrentes",
      description:
        "Automatiza cobros recurrentes y gestiona suscripciones de forma simple y eficiente.",
      cta: "Ver solución",
    },
  },

  // Portal Card
  portal: {
    title: "Conocé nuestro portal",
    description:
      "Gestioná toda tu información de manera simple, rápida y segura desde un solo lugar.",
    ctaLearnMore: "Conocer más",
    ctaLogin: "Ingresar al portal",
  },

  // Accesibilidad
  a11y: {
    sectionLabel: "Soluciones de pago disponibles",
    prevButton: "Anterior",
    nextButton: "Siguiente",
    viewMore: "Ver más",
  },
};

export type ProductsDictionary = typeof products;
