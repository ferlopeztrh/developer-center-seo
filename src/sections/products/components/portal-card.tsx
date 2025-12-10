import Image from "next/image";

export const PortalCard = () => {
  return (
    <div className="flex flex-col w-full h-full px-5 lg:px-12 xl:px-16 py-6">
      {/* Contenedor con imagen */}
      <div
        className="
          relative 
          w-full 
          h-[340px] sm:h-[400px] md:h-[440px] lg:h-[480px] xl:h-[520px]
          rounded-lg 
          overflow-hidden
        "
      >
        <Image
          src="https://www.dinelco.com.py/uploads/productos/productos/seccion1-imagen1-1-1656102583.png"
          alt="banner"
          fill
          className="object-cover object-center"
        />

        {/* Overlay suave para legibilidad general */}
        <div className="absolute inset-0 bg-linear-to-l from-black/70 via-black/40 to-transparent" />

        {/* Overlay adicional solo en mobile */}
        <div className="absolute inset-0 bg-black/50 sm:hidden" />

        {/* Contenido del lado derecho con padding */}
        <div className="absolute inset-0 flex flex-col justify-center items-end pr-4 sm:pr-6 lg:pr-12 pl-4 sm:pl-6 lg:pl-8">
          <div className="flex flex-col items-start max-w-xs sm:max-w-sm lg:max-w-md">
            <h2 className="font-gilroy font-semibold text-2xl sm:text-3xl lg:text-4xl text-white tracking-wide mb-3 drop-shadow">
              Conocé nuestro portal
            </h2>

            <p className="text-white/90 font-notosans text-base sm:text-lg lg:text-xl leading-relaxed drop-shadow">
              Gestioná toda tu información de manera simple, rápida y segura
              desde un solo lugar.
            </p>

            {/* Botones responsive */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                className="
                  w-full sm:w-auto
                  px-6 py-3 sm:px-8 sm:py-4
                  rounded-full 
                  bg-white/20 
                  text-white 
                  font-gilroy 
                  text-sm sm:text-base lg:text-lg
                  shadow-md 
                  hover:bg-white/30 
                  transition-all
                "
              >
                Conocer más
              </button>

              <button
                className="
                  w-full sm:w-auto
                  px-6 py-3 sm:px-8 sm:py-4
                  rounded-full 
                  bg-primary 
                  text-white 
                  font-gilroy 
                  text-sm sm:text-base lg:text-lg
                  shadow-md 
                  hover:bg-primary-400 
                  transition-all
                "
              >
                Ingresar al portal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
