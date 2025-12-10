import type { Metadata } from "next";
import { gilroy } from "@/fonts/gilroy";
import { notoSans } from "@/fonts/noto-sans";
import { MotionProvider, SmoothScrollProvider } from "@/providers";
import { LocaleProvider } from "@/hooks/use-locale";
import { Header } from "@/components/layouts/header";
import { MotionInitScript } from "@/components/scripts";

export const metadata: Metadata = {
  title: {
    default: "Developer Center | Dinelco",
    template: "%s | Developer Center",
  },
  description: "Dinelco Developer Center",
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <MotionInitScript />
      </head>
      <body className={`${gilroy.variable} ${notoSans.variable} antialiased`}>
        <MotionProvider>
          <SmoothScrollProvider>
            <LocaleProvider locale="en">
              <Header />
              {children}
            </LocaleProvider>
          </SmoothScrollProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
