import { Link } from "next-view-transitions";

const MERCHANT_IMAGES = Array.from(
  { length: 20 },
  (_, i) => `https://picsum.photos/800/600?random=${i + 1}`
);

export const MerchantsMobile = () => {
  return (
    <section className="relative bg-white py-16 px-5 overflow-hidden">
      {/* Fila superior de imágenes (Mantenida) */}
      <div className="flex gap-3 mb-6 -mx-5 px-5 overflow-hidden">
        {MERCHANT_IMAGES.slice(0, 4).map((src, i) => (
          <div
            key={`top-${i}`}
            className="shrink-0 w-24 h-32 rounded-xl overflow-hidden"
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Contenido Central (Adaptado a OutroCard) */}
      <div className="relative z-10 text-center py-12">
        {/* Título Adaptado de OutroCard */}
        <h2 className="font-gilroy font-medium text-5xl text-black mb-12 leading-none tracking-tight">
          Da el <span className="text-primary">siguiente</span> paso
        </h2>

        {/* CTA Único (Adaptado de OutroCard) */}
        <div className="flex flex-col items-center">
          <Link
            href="/comenzar"
            className="w-full max-w-xs px-8 py-4 bg-black text-white font-gilroy font-medium text-base rounded-full hover:bg-neutral-100 transition-colors text-center"
          >
            Comenzar ahora
          </Link>
        </div>
      </div>

      {/* Fila inferior de imágenes (Mantenida) */}
      <div className="flex gap-3 mt-6 -mx-5 px-5 overflow-hidden">
        {MERCHANT_IMAGES.slice(4, 8).map((src, i) => (
          <div
            key={`bottom-${i}`}
            className="shrink-0 w-24 h-32 rounded-xl overflow-hidden"
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
