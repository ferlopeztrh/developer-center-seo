export const merchants = {
  // Marquee (Desktop pre-content)
  marquee: {
    word1: "MAKE IT",
    word2: "DIFFERENT",
  },

  // Intro (Desktop)
  intro: {
    text: "Join thousands of businesses and be part of the Dinelco Network",
    highlightWords: ["Dinelco", "Network"],
  },

  // Outro CTA
  outro: {
    titleLine1: "Take the",
    titleLine2: "next",
    titleLine3: "step",
    cta: "Start now",
    ctaHref: "/get-started",
  },

  // Products (icons)
  products: {
    checkout: "Dinelco Checkout",
    link: "Dinelco Link",
    pos: "POS Terminal",
  },

  // Accessibility
  a11y: {
    sectionLabel: "Join the Dinelco merchant network",
    merchantImage: "Merchant",
    outroSection: "Call to action to get started",
    productIcon: "Product icon",
    decorativePattern: "Decorative pattern",
  },
};

export type MerchantsDictionary = typeof merchants;
