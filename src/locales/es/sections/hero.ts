export const hero = {
  // Contenido principal
  title: "Hacelo diferente con",
  subtitle:
    "Hacer las cosas diferente es estar un paso adelante. Es entender que para mejorar hay que cambiar. Es elegir de verdad. Es no conformarte y buscar algo mejor a lo que tenés.",
  ctaPrimary: "Contactanos",
  ctaSecondary: "Conocé más",

  // Estadísticas
  stats: {
    commerces: "+335.956",
    commercesText: "comercios adheridos que confían en nosotros.",
    monthlyMovements: "+2.5M",
    monthlyMovementsLabel: "Movimientos/mes",
    acceptanceRate: "99%",
    acceptanceRateLabel: "Tasa de",
    acceptanceRateValue: "Aceptación",
  },

  // Cards flotantes
  floatingCards: {
    creditDebit: "Crédito y Débito",
    frictionlessPayments: "Pagos sin fricción",
  },

  // Grid de comercios
  grid: {
    titleLine1: "Sin importar tu rubro,",
    titleLine2: "crecé con dinelco.",
  },

  // Accesibilidad y SEO
  a11y: {
    sectionLabel: "Sección principal - Dinelco soluciones de pago",
    seoHeading: "Dinelco - Soluciones de pago para tu negocio en Paraguay",
    heroImageAlt: "Usuario realizando pago móvil con Dinelco",
    gridSectionLabel: "Comercios que confían en Dinelco",
    ctaNavLabel: "Acciones principales",
    merchantsListLabel: "Comercios adheridos",
  },

  // Imágenes y logos
  images: {
    heroLogoAlt: "Dinelco - 35 años procesando pagos en Paraguay",
    merchants: [
      {
        name: "Contimarket",
        alt: "Logo de Contimarket - comercio adherido a Dinelco",
      },
      { name: "Nissei", alt: "Logo de Nissei - comercio adherido a Dinelco" },
      {
        name: "Coca Cola",
        alt: "Logo de Coca Cola - comercio adherido a Dinelco",
      },
      {
        name: "d-Local",
        alt: "Logo de d-Local - comercio adherido a Dinelco",
      },
      {
        name: "Superseis",
        alt: "Logo de Superseis - comercio adherido a Dinelco",
      },
    ],
    paymentBrands: {
      mastercard: "Mastercard",
      visa: "Visa",
      googlePay: "Google Pay",
      applePay: "Apple Pay",
      clickToPay: "Click to Pay",
    },
  },

  // Grid images
  gridImages: {
    row1: [
      { alt: "Comercio minorista usando terminal de pago" },
      { alt: "Transacción de pago digital" },
      { alt: "Compra online" },
      { alt: "Pago móvil" },
    ],
    row2: [
      { alt: "Punto de venta" },
      { alt: "Dashboard de ventas" },
      { alt: "Análisis de datos" },
      { alt: "Equipo de trabajo" },
      { alt: "Colaboración empresarial" },
    ],
    row4: [
      { alt: "Startup tecnológica" },
      { alt: "Reunión de negocios" },
      { alt: "Oficina moderna" },
      { alt: "Taller de capacitación" },
      { alt: "Trabajo remoto" },
    ],
    row5: [
      { alt: "Planificación estratégica" },
      { alt: "Espacio coworking" },
      { alt: "Equipo de desarrollo" },
      { alt: "Soporte al cliente" },
    ],
  },
};

export type HeroDictionary = typeof hero;
