"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useSyncExternalStore,
  useCallback,
} from "react";
import Lenis from "lenis";
import { useMotion } from "./motion-provider";

interface LenisContextType {
  lenis: Lenis | null;
}

const LenisContext = createContext<LenisContextType>({ lenis: null });

export function useLenis() {
  return useContext(LenisContext);
}

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { shouldReduceMotion } = useMotion();
  const lenisRef = useRef<Lenis | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const subscribersRef = useRef(new Set<() => void>());

  const subscribe = useCallback((callback: () => void) => {
    subscribersRef.current.add(callback);
    return () => {
      subscribersRef.current.delete(callback);
    };
  }, []);

  const getSnapshot = useCallback(() => lenisRef.current, []);
  const getServerSnapshot = useCallback(() => null, []);

  const lenis = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    // Si debe reducir motion, no inicializar Lenis
    if (shouldReduceMotion) {
      // Asegurar scroll nativo desde el inicio
      window.scrollTo(0, 0);
      return;
    }

    const subscribers = subscribersRef.current;

    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });

    lenisRef.current = lenisInstance;
    subscribers.forEach((cb) => cb());

    function raf(time: number) {
      lenisInstance.raf(time);
      rafIdRef.current = requestAnimationFrame(raf);
    }

    rafIdRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      lenisInstance.destroy();
      lenisRef.current = null;
      subscribers.forEach((cb) => cb());
    };
  }, [shouldReduceMotion]);

  return (
    <LenisContext.Provider value={{ lenis }}>{children}</LenisContext.Provider>
  );
}
