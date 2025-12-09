"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";

type MotionPreference = "system" | "reduce" | "allow";

interface MotionContextValue {
  /** Preferencia actual del usuario */
  preference: MotionPreference;
  /** Si las animaciones deben reducirse (resultado final) */
  shouldReduceMotion: boolean;
  /** Preferencia del sistema operativo */
  systemPreference: boolean;
  /** Cambiar preferencia */
  setPreference: (pref: MotionPreference) => void;
}

const MotionContext = createContext<MotionContextValue | null>(null);

const STORAGE_KEY = "motion-preference";

export function MotionProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] = useState<MotionPreference>("system");
  const [systemPreference, setSystemPreference] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  // Detectar preferencia del sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setSystemPreference(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setSystemPreference(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Cargar preferencia guardada
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as MotionPreference | null;
    if (stored && ["system", "reduce", "allow"].includes(stored)) {
      setPreferenceState(stored);
    }
    setIsHydrated(true);
  }, []);

  const setPreference = useCallback((pref: MotionPreference) => {
    setPreferenceState(pref);
    localStorage.setItem(STORAGE_KEY, pref);
  }, []);

  // Calcular si debe reducir motion
  const shouldReduceMotion =
    preference === "reduce" || (preference === "system" && systemPreference);

  // Sincronizar con atributo en el HTML para CSS
  useEffect(() => {
    if (!isHydrated) return;

    if (shouldReduceMotion) {
      document.documentElement.setAttribute("data-reduce-motion", "true");
    } else {
      document.documentElement.removeAttribute("data-reduce-motion");
    }
  }, [shouldReduceMotion, isHydrated]);

  return (
    <MotionContext.Provider
      value={{
        preference,
        shouldReduceMotion,
        systemPreference,
        setPreference,
      }}
    >
      {children}
    </MotionContext.Provider>
  );
}

export function useMotion() {
  const context = useContext(MotionContext);
  if (!context) {
    throw new Error("useMotion must be used within MotionProvider");
  }
  return context;
}
