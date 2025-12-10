import { ViewTransitions } from "next-view-transitions";
import type { Viewport } from "next";
import "@/app/styles/globals.css";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ViewTransitions>{children}</ViewTransitions>;
}
