import { gilroy } from "@/fonts/gilroy";
import { notoSans } from "@/fonts/noto-sans";
import { MotionProvider, SmoothScrollProvider } from "@/providers";
import { LocaleProvider } from "@/hooks/use-locale";
import { Header } from "@/components/layouts/header";
import { MotionInitScript } from "@/components/scripts";
import { ViewTransitions } from "next-view-transitions";
import "@/app/styles/globals.css";

export const metadata = {
  title: {
    default: "Developer Center | Dinelco",
    template: "%s | Developer Center",
  },
  description: "Dinelco Developer Center",
};

export default function LayoutEn({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className={`${gilroy.variable} ${notoSans.variable} antialiased`}>
          <MotionInitScript />
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
    </ViewTransitions>
  );
}
