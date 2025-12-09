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
    <div className="md:flex hidden items-center gap-3">
      <span className="font-notosans text-sm text-neutral-400">
        {a11yTexts.motionLabel}
      </span>

      <button
        type="button"
        role="switch"
        aria-checked={shouldReduceMotion}
        aria-label={a11yTexts.motionLabel}
        onClick={handleToggle}
        className={`
          relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black
          ${shouldReduceMotion ? "bg-primary" : "bg-neutral-700"}
        `}
      >
        <span
          className={`
            inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200
            ${shouldReduceMotion ? "translate-x-6" : "translate-x-1"}
          `}
        />
      </button>
    </div>
  );
}
