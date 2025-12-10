import { Link } from "next-view-transitions";

export const OutroCard = () => {
  return (
    <div className="relative pointer-events-auto flex flex-col items-center gap-16">
      {/* Texto principal - limpio y grande */}
      <div className="text-center">
        <h3 className="font-gilroy font-medium text-5xl lg:text-6xl xl:text-8xl text-white leading-[0.9] tracking-tight">
          Da el
          <br />
          <span className="text-primary">siguiente</span>
          <br />
          paso
        </h3>
      </div>

      {/* CTAs - minimalistas */}
      <div className="flex flex-col items-center gap-4">
        <Link
          href="/comenzar"
          className="group relative px-12 py-5 bg-white text-black font-gilroy font-medium text-base rounded-full overflow-hidden transition-transform"
        >
          <span className="relative z-10">Comenzar ahora</span>
          <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity font-gilroy font-medium">
            Comenzar ahora
          </span>
        </Link>
      </div>
    </div>
  );
};
