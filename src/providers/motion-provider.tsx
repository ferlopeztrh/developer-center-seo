"use client";

import {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useRef,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type MotionPreference = "system" | "reduce" | "allow";

interface MotionContextValue {
  preference: MotionPreference;
  shouldReduceMotion: boolean;
  systemPreference: boolean;
  setPreference: (pref: MotionPreference) => void;
}

const MotionContext = createContext<MotionContextValue | null>(null);

const STORAGE_KEY = "motion-preference";

function subscribeToStorage(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getStoredPreference(): MotionPreference {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && ["system", "reduce", "allow"].includes(stored)) {
    return stored as MotionPreference;
  }
  return "system";
}

function getServerSnapshot(): MotionPreference {
  return "system";
}

function createMediaQueryStore() {
  let mediaQuery: MediaQueryList | null = null;

  return {
    subscribe(callback: () => void) {
      mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      mediaQuery.addEventListener("change", callback);
      return () => mediaQuery?.removeEventListener("change", callback);
    },
    getSnapshot() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    },
    getServerSnapshot() {
      return false;
    },
  };
}

const mediaQueryStore = createMediaQueryStore();

export function MotionProvider({ children }: { children: ReactNode }) {
  const isReloadingRef = useRef(false);

  const preference = useSyncExternalStore(
    subscribeToStorage,
    getStoredPreference,
    getServerSnapshot
  );

  const systemPreference = useSyncExternalStore(
    mediaQueryStore.subscribe,
    mediaQueryStore.getSnapshot,
    mediaQueryStore.getServerSnapshot
  );

  const setPreference = useCallback((pref: MotionPreference) => {
    // Marcar que estamos por recargar para evitar errores de cleanup
    isReloadingRef.current = true;

    localStorage.setItem(STORAGE_KEY, pref);
    window.dispatchEvent(new Event("storage"));

    // Reload más rápido, el delay era innecesario
    setTimeout(() => {
      window.location.reload();
    }, 50);
  }, []);

  const shouldReduceMotion =
    preference === "reduce" || (preference === "system" && systemPreference);

  useEffect(() => {
    if (shouldReduceMotion) {
      document.documentElement.setAttribute("data-reduce-motion", "true");
    } else {
      document.documentElement.removeAttribute("data-reduce-motion");
    }
  }, [shouldReduceMotion]);

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
