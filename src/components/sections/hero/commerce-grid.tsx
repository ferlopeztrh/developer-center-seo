// commerces-grid.tsx
import Image from "next/image";

const GRID_IMAGES = {
  row1: [
    {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
      alt: "Comercio minorista usando terminal de pago",
    },
    {
      src: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400&h=400&fit=crop",
      alt: "Transacción de pago digital",
    },
    {
      src: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=400&fit=crop",
      alt: "Compra online",
    },
    {
      src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=400&fit=crop",
      alt: "Pago móvil",
    },
  ],
  row2: [
    {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
      alt: "Punto de venta",
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
      alt: "Dashboard de ventas",
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
      alt: "Análisis de datos",
    },
    {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop",
      alt: "Equipo de trabajo",
    },
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop",
      alt: "Colaboración empresarial",
    },
  ],
  row4: [
    {
      src: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=400&h=400&fit=crop",
      alt: "Startup tecnológica",
    },
    {
      src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=400&fit=crop",
      alt: "Reunión de negocios",
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=400&fit=crop",
      alt: "Oficina moderna",
    },
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=400&fit=crop",
      alt: "Taller de capacitación",
    },
    {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop",
      alt: "Trabajo remoto",
    },
  ],
  row5: [
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
      alt: "Planificación estratégica",
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop",
      alt: "Espacio coworking",
    },
    {
      src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=400&fit=crop",
      alt: "Equipo de desarrollo",
    },
    {
      src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=400&fit=crop",
      alt: "Soporte al cliente",
    },
  ],
};

interface CommercesGridProps {
  ref?: React.Ref<HTMLDivElement>;
}

export function CommercesGrid({ ref }: CommercesGridProps) {
  return (
    <div ref={ref} className="hidden md:block absolute inset-0 bg-white z-[1]">
      <div className="max-w-[1400px] mx-auto h-screen flex flex-col justify-center gap-12 py-8 px-6">
        {/* Grid Superior */}
        <div className="grid grid-cols-9 gap-3">
          {GRID_IMAGES.row1.map((image, index) => (
            <div
              key={`row1-${index}`}
              className="grid-image aspect-square relative"
              style={{ gridColumn: (index + 1) * 2, gridRow: 1 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="grid-image-element object-cover rounded-2xl"
                unoptimized
              />
            </div>
          ))}

          {GRID_IMAGES.row2.map((image, index) => (
            <div
              key={`row2-${index}`}
              className="grid-image aspect-square relative"
              style={{ gridColumn: index * 2 + 1, gridRow: 2 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="grid-image-element object-cover rounded-2xl"
                unoptimized
              />
            </div>
          ))}
        </div>

        {/* Texto Central - con clases para animación */}
        <div className="grid-title-container text-center px-4 py-6">
          <h2 className="font-gilroy font-semibold text-4xl lg:text-5xl xl:text-6xl leading-tight">
            <span className="grid-title-line block text-primary">
              Sin importar tu rubro,
            </span>
            <span className="grid-title-line block text-primary">
              crecé con dinelco.
            </span>
          </h2>
        </div>

        {/* Grid Inferior */}
        <div className="grid grid-cols-9 gap-3">
          {GRID_IMAGES.row4.map((image, index) => (
            <div
              key={`row4-${index}`}
              className="grid-image aspect-square relative"
              style={{ gridColumn: index * 2 + 1, gridRow: 1 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="grid-image-element object-cover rounded-2xl"
                unoptimized
              />
            </div>
          ))}

          {GRID_IMAGES.row5.map((image, index) => (
            <div
              key={`row5-${index}`}
              className="grid-image aspect-square relative"
              style={{ gridColumn: (index + 1) * 2, gridRow: 2 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="grid-image-element object-cover rounded-2xl"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
