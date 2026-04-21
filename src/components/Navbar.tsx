"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileNav = () => setMobileOpen(false);

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-[900] py-[1.1rem] transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(10,10,15,0.75)] backdrop-blur-[14px] shadow-[0_1px_0_rgba(255,255,255,0.08)]"
            : ""
        }`}
      >
        <div className="w-full max-w-[1160px] mx-auto px-6 flex items-center justify-between gap-6">
          <a href="#" className="flex-shrink-0 no-underline">
            <img src="/logo.png" alt="Automate Now" className="h-8 w-auto" />
          </a>

          <ul className="hidden md:flex items-center gap-8 list-none">
            {["Servicios", "Proceso", "Casos de Éxito", "Contacto"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item === "Casos de Éxito" ? "casos" : item === "Contacto" ? "cta-final" : item.toLowerCase()}`}
                  className="text-sm font-medium text-[#9CA3AF] hover:text-white transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#cta-final"
            className="hidden md:inline-flex items-center gap-2 px-[1.35rem] py-[0.6rem] text-[0.85rem] font-semibold text-white rounded-full relative cursor-pointer no-underline"
            style={{
              background: "transparent",
              borderRadius: "100px",
              isolation: "isolate",
              boxShadow: "0 0 8px rgba(0,0,0,0.03), 0 2px 6px rgba(0,0,0,0.08), inset 3px 3px 0.5px -3.5px rgba(255,255,255,0.09), inset -3px -3px 0.5px -3.5px rgba(255,255,255,0.85), inset 1px 1px 1px -0.5px rgba(255,255,255,0.60), inset -1px -1px 1px -0.5px rgba(255,255,255,0.60), inset 0 0 6px 6px rgba(255,255,255,0.12), inset 0 0 2px 2px rgba(255,255,255,0.06), 0 0 12px rgba(0,0,0,0.15)",
            }}
          >
            Agendar llamada
          </a>

          <button
            className="flex md:hidden flex-col gap-[5px] cursor-pointer bg-transparent border-none p-1"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menú"
          >
            <span className="block w-[22px] h-[2px] bg-white rounded-sm" />
            <span className="block w-[22px] h-[2px] bg-white rounded-sm" />
            <span className="block w-[22px] h-[2px] bg-white rounded-sm" />
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-[rgba(10,10,15,0.97)] z-[800] flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-6 right-6 bg-transparent border-none text-[#9CA3AF] text-2xl cursor-pointer"
            onClick={closeMobileNav}
            aria-label="Cerrar menú"
          >
            ✕
          </button>
          {["Servicios", "Proceso", "Casos de Éxito", "Contacto"].map((item) => (
            <a
              key={item}
              href={`#${item === "Casos de Éxito" ? "casos" : item === "Contacto" ? "cta-final" : item.toLowerCase()}`}
              className="font-['Neue_Haas_Grotesk_Display'] text-2xl font-bold text-white hover:text-[#7D00DC] transition-colors"
              onClick={closeMobileNav}
            >
              {item}
            </a>
          ))}
          <a
            href="#cta-final"
            className="mt-4 px-6 py-3 bg-[#7D00DC] text-white rounded-lg font-semibold hover:bg-[#6600B8] transition-colors"
            onClick={closeMobileNav}
          >
            Agendar llamada
          </a>
        </div>
      )}
    </>
  );
}
