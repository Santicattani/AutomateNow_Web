"use client";
import FadeInUp from "@/components/FadeInUp";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const casos = [
  {
    empresa: "3-11 Property Management",
    title: "Chatbot de inversiones",
    problema: "Los asesores dedicaban gran parte del tiempo a responder consultas repetitivas sobre propiedades y procesos de inversión.",
    resultado: "Chatbot IA que responde consultas 24/7, califica prospectos y agenda reuniones automáticamente.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    empresa: "Tech No Living",
    title: "Chatbot de filtrado de leads",
    problema: "El equipo comercial perdía tiempo con prospectos no calificados que llegaban desde múltiples canales sin filtrar.",
    resultado: "Sistema de calificación automática que entrega al equipo solo leads listos para avanzar en el proceso.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    empresa: "Dervinsa",
    title: "Chatbot de RRHH",
    problema: "RRHH atendía a diario cientos de consultas internas repetitivas sobre licencias, procesos y políticas.",
    resultado: "Asistente IA interno que responde consultas de empleados al instante, liberando al equipo de RRHH.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export default function Casos() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <section
      id="casos"
      className="py-28"
      style={{ background: "linear-gradient(180deg, #000000 0%, rgba(125,0,220,0.025) 50%, #000000 100%)" }}
    >
      <div className="w-full max-w-[1160px] mx-auto px-6">
        <FadeInUp className="text-center mb-14">
          <span className="inline-block text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-[#C4FF80] mb-4">
            Casos de Éxito
          </span>
          <h2 className="font-['Syne'] text-[clamp(1.9rem,4vw,3rem)] font-bold text-white leading-[1.1]">
            Resultados reales para negocios reales
          </h2>
        </FadeInUp>

        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10"
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {casos.map((c) => (
            <motion.div
              key={c.empresa}
              variants={cardVariants}
              className="bg-[#0f0f0f] border border-[rgba(255,255,255,0.08)] rounded-[14px] p-7 hover:border-[rgba(125,0,220,0.3)] hover:-translate-y-0.5 transition-all"
            >
              <div className="w-[46px] h-[46px] bg-[rgba(125,0,220,0.1)] rounded-[10px] flex items-center justify-center text-[#7D00DC] mb-5">
                {c.icon}
              </div>
              <div className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-[#7D00DC] mb-[0.45rem]">
                {c.empresa}
              </div>
              <h3 className="font-['Syne'] text-base font-bold text-white mb-3">{c.title}</h3>
              <p className="text-[0.85rem] text-[#9CA3AF] leading-[1.55] mb-4">{c.problema}</p>
              <div className="flex items-start gap-2 bg-[rgba(125,0,220,0.07)] border border-[rgba(125,0,220,0.15)] rounded-lg px-4 py-3 text-[0.825rem] text-[#9CA3AF] leading-[1.45] before:content-['✅'] before:flex-shrink-0">
                {c.resultado}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <FadeInUp delay={0.2}>
          <p className="text-center text-[1.05rem] text-[#9CA3AF]">
            ¿Tu empresa podría ser el próximo caso de éxito?
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
