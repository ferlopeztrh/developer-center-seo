import type { Metadata } from "next";
import { gilroy } from "@/fonts/gilroy";
import { notoSans } from "@/fonts/noto-sans";
import { MotionProvider, SmoothScrollProvider } from "@/providers";
import { LocaleProvider } from "@/hooks/use-locale";
import { Header } from "@/components/layouts/header/header";

export const metadata: Metadata = {
  title: "Developer Center | Dinelco",
  description: "Centro de desarrolladores de Dinelco",
};

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-PY">
      <body className={`${gilroy.variable} ${notoSans.variable} antialiased`}>
        <SmoothScrollProvider>
          <MotionProvider>
            <LocaleProvider locale="es">
              <Header />
              {children}
            </LocaleProvider>
          </MotionProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
