import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "./i18n/LocaleContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PodOS",
  description: "PodOS - Podolog Wrocław",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={poppins.className}>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
