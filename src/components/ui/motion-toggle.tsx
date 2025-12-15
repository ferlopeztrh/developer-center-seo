"use client";

import { useMotion } from "@/providers";
import { useLocale } from "@/hooks/use-locale";

export function MotionToggle() {
  const { shouldReduceMotion, setPreference } = useMotion();
  const { t } = useLocale();
  const a11yTexts = t.menu.a11y;

  const handleToggle = () => {
    setPreference(shouldReduceMotion ? "allow" : "reduce");
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={shouldReduceMotion}
      aria-label={a11yTexts.motionLabel}
      onClick={handleToggle}
      className="group relative md:flex hidden items-center gap-2.5 px-3 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-200"
    >
      {/* Icon/Indicator */}
      <div className="relative flex items-center">
        <div
          className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${
            shouldReduceMotion
              ? "border-white/40 bg-white/10"
              : "border-white/60 bg-transparent"
          }`}
        >
          {shouldReduceMotion && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>
          )}
        </div>
      </div>

      {/* Label */}
      <span className="font-gilroy text-xs font-medium text-white/90 whitespace-nowrap tracking-wide">
        {a11yTexts.motionLabel}
      </span>
    </button>
  );
}
