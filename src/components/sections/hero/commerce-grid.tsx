import Image from "next/image";
import { forwardRef } from "react";
import { useLocale } from "@/hooks/use-locale";

const GRID_IMAGES = {
  row1: [
    {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
    },
    {
      src: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400&h=400&fit=crop",
    },
    {
      src: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=400&fit=crop",
    },
    {
      src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=400&fit=crop",
    },
  ],
  row2: [
    {
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop",
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop",
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop",
    },
    {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop",
    },
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop",
    },
  ],
  row4: [
    {
      src: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=400&h=400&fit=crop",
    },
    {
      src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=400&fit=crop",
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=400&fit=crop",
    },
    {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=400&fit=crop",
    },
    {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop",
    },
  ],
  row5: [
    {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
    },
    {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=400&fit=crop",
    },
    {
      src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=400&fit=crop",
    },
    {
      src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=400&fit=crop",
    },
  ],
};

interface CommercesGridProps {
  isStatic?: boolean;
}

export const CommercesGrid = forwardRef<HTMLDivElement, CommercesGridProps>(
  function CommercesGrid({ isStatic = false }, ref) {
    const { t } = useLocale();
    const heroTexts = t.sections.hero;
    const { grid, gridImages } = heroTexts;

    // Clases condicionales según modo
    const sectionClasses = isStatic
      ? "hidden md:block bg-white py-16"
      : "hidden md:block absolute inset-0 bg-white z-[1]";

    const containerClasses = isStatic
      ? "max-w-[1400px] mx-auto flex flex-col gap-12 px-6"
      : "max-w-[1400px] mx-auto h-screen flex flex-col justify-center gap-12 py-8 px-6";

    const gridImageClass = isStatic ? "" : "grid-image";

    const gridImageElementClass = isStatic
      ? "object-cover rounded-2xl"
      : "grid-image-element object-cover rounded-2xl";

    const titleLineClass = isStatic
      ? "block text-primary"
      : "grid-title-line block text-primary";

    return (
      <section
        ref={isStatic ? undefined : ref}
        className={sectionClasses}
        aria-labelledby="grid-heading"
      >
        <div className={containerClasses}>
          {/* Grid Superior */}
          <div className="grid grid-cols-9 gap-3" role="presentation">
            {GRID_IMAGES.row1.map((image, index) => (
              <div
                key={`row1-${index}`}
                className={`${gridImageClass} aspect-square relative`.trim()}
                style={{ gridColumn: (index + 1) * 2, gridRow: 1 }}
              >
                <Image
                  src={image.src}
                  alt={gridImages.row1[index]?.alt ?? ""}
                  fill
                  className={gridImageElementClass}
                  sizes="(max-width: 1400px) 11vw, 155px"
                  loading="lazy"
                  unoptimized
                />
              </div>
            ))}

            {GRID_IMAGES.row2.map((image, index) => (
              <div
                key={`row2-${index}`}
                className={`${gridImageClass} aspect-square relative`.trim()}
                style={{ gridColumn: index * 2 + 1, gridRow: 2 }}
              >
                <Image
                  src={image.src}
                  alt={gridImages.row2[index]?.alt ?? ""}
                  fill
                  className={gridImageElementClass}
                  sizes="(max-width: 1400px) 11vw, 155px"
                  loading="lazy"
                  unoptimized
                />
              </div>
            ))}
          </div>

          {/* Texto Central */}
          <header className="text-center px-4 py-6">
            <h2
              id="grid-heading"
              className="font-gilroy font-semibold text-4xl lg:text-5xl xl:text-6xl leading-tight"
            >
              <span className={titleLineClass}>{grid.titleLine1}</span>
              <span className={titleLineClass}>{grid.titleLine2}</span>
            </h2>
          </header>

          {/* Grid Inferior */}
          <div className="grid grid-cols-9 gap-3" role="presentation">
            {GRID_IMAGES.row4.map((image, index) => (
              <div
                key={`row4-${index}`}
                className={`${gridImageClass} aspect-square relative`.trim()}
                style={{ gridColumn: index * 2 + 1, gridRow: 1 }}
              >
                <Image
                  src={image.src}
                  alt={gridImages.row4[index]?.alt ?? ""}
                  fill
                  className={gridImageElementClass}
                  sizes="(max-width: 1400px) 11vw, 155px"
                  loading="lazy"
                  unoptimized
                />
              </div>
            ))}

            {GRID_IMAGES.row5.map((image, index) => (
              <div
                key={`row5-${index}`}
                className={`${gridImageClass} aspect-square relative`.trim()}
                style={{ gridColumn: (index + 1) * 2, gridRow: 2 }}
              >
                <Image
                  src={image.src}
                  alt={gridImages.row5[index]?.alt ?? ""}
                  fill
                  className={gridImageElementClass}
                  sizes="(max-width: 1400px) 11vw, 155px"
                  loading="lazy"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
);
