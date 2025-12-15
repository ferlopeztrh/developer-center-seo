export const merchants = {
  // Marquee (Desktop pre-content)
  marquee: {
    word1: "HACELO",
    word2: "DIFERENTE",
  },

  // Intro (Desktop)
  intro: {
    text: "Unite a miles de comercios y sé parte de la Red Dinelco",
    highlightWords: ["Red", "Dinelco"],
  },

  // Outro CTA
  outro: {
    titleLine1: "Da el",
    titleLine2: "siguiente",
    titleLine3: "paso",
    cta: "Comenzar ahora",
    ctaHref: "/comenzar",
  },

  // Productos (iconos)
  products: {
    checkout: "Dinelco Checkout",
    link: "Dinelco Link",
    pos: "Terminal POS",
  },

  // Accesibilidad
  a11y: {
    sectionLabel: "Únete a la red de comercios Dinelco",
    merchantImage: "Comercio",
    outroSection: "Llamado a la acción para comenzar",
    productIcon: "Icono de producto",
    decorativePattern: "Patrón decorativo",
  },
};

export type MerchantsDictionary = typeof merchants;
