import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="es">
      <body className="bg-black text-white overflow-x-hidden">{children}</body>
    </html>
  );
}
