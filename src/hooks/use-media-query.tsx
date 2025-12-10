"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

export function useMediaQuery(query: string, serverDefault = false): boolean {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => serverDefault
  );
}

export function useIsDesktop(): boolean {
  return useMediaQuery("(min-width: 1024px)", false);
}

export function useIsMobile(): boolean {
  return useMediaQuery("(max-width: 1023px)", true);
}
