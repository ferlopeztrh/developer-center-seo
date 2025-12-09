import type { Metadata } from "next";
import { gilroy } from "@/fonts/gilroy";
import { notoSans } from "@/fonts/noto-sans";
import { SmoothScrollProvider } from "@/providers";
import { LocaleProvider } from "@/hooks/use-locale";
import { Header } from "@/components/layouts/header/header";

export const metadata: Metadata = {
  title: "Developer Center | Dinelco",
  description: "Dinelco developer center",
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${gilroy.variable} ${notoSans.variable} antialiased`}>
        <SmoothScrollProvider>
          <LocaleProvider locale="en">
            <Header />
            {children}
          </LocaleProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
