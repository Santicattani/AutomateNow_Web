import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
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
    <html lang="es" className={inter.variable}>
      <body className="bg-black text-white overflow-x-hidden">{children}</body>
    </html>
  );
}
