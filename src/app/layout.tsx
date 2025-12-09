import { ViewTransitions } from "next-view-transitions";
import "@/app/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ViewTransitions>{children}</ViewTransitions>;
}
