import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Automate Now — Consultores en automatización e IA",
  description: "Consultores en automatización e IA. Entendemos tu negocio y lo potenciamos con IA y automatización.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="bg-black text-white overflow-x-hidden">{children}</body>
    </html>
  );
}
