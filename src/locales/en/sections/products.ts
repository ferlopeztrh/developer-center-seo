export const products = {
  // Header
  header: {
    tag: "Our solutions",
    titleLine1: "A payment process",
    titleLine2: "without complications",
    description:
      "Everything your business needs to accept payments, automate processes, and grow without complications.",
  },

  // Solutions (keys match SOLUTIONS IDs)
  solutions: {
    checkout: {
      title: "Dinelco Checkout",
      description:
        "Integrate payments into your website or app with our customizable and secure checkout solution.",
      cta: "View solution",
    },
    "payment-links": {
      title: "Dinelco Link",
      description:
        "Generate unique payment links to share via WhatsApp, email, or social media.",
      cta: "View solution",
    },
    subscriptions: {
      title: "Recurring payments",
      description:
        "Automate recurring charges and manage subscriptions simply and efficiently.",
      cta: "View solution",
    },
  },

  // Portal Card
  portal: {
    title: "Discover our portal",
    description:
      "Manage all your information simply, quickly, and securely from one place.",
    ctaLearnMore: "Learn more",
    ctaLogin: "Log in to portal",
  },

  // Accessibility
  a11y: {
    sectionLabel: "Available payment solutions",
    prevButton: "Previous",
    nextButton: "Next",
    viewMore: "View more",
  },
};

export type ProductsDictionary = typeof products;
