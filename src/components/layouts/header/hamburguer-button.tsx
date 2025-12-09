"use client";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function HamburgerButton({ isOpen, onClick }: HamburgerButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
      aria-expanded={isOpen}
      className="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300"
    >
      {/* Hamburger / X icon */}
      <div className="relative w-4 h-4 flex flex-col justify-center items-center">
        <span
          className={`
            absolute w-4 h-[1.5px] bg-current transition-all duration-300 ease-[cubic-bezier(0.87,0,0.13,1)]
            ${isOpen ? "rotate-45" : "-translate-y-[5px]"}
          `}
        />
        <span
          className={`
            absolute w-4 h-[1.5px] bg-current transition-all duration-300 ease-[cubic-bezier(0.87,0,0.13,1)]
            ${isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}
          `}
        />
        <span
          className={`
            absolute w-4 h-[1.5px] bg-current transition-all duration-300 ease-[cubic-bezier(0.87,0,0.13,1)]
            ${isOpen ? "-rotate-45" : "translate-y-[5px]"}
          `}
        />
      </div>
    </button>
  );
}
