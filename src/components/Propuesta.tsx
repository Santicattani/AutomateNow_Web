"use client";
import FadeInUp from "@/components/FadeInUp";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const cards = [
  {
    num: "01",
    title: "Diagnóstico",
    desc: "Analizamos tu negocio, tus procesos actuales y tus objetivos para encontrar los puntos de mayor impacto.",
  },
  {
    num: "02",
    title: "Estrategia",
    desc: "Diseñamos la solución de automatización + IA ideal para tu operación, con herramientas y flujos a medida.",
  },
  {
    num: "03",
    title: "Construcción y mejora continua",
    desc: "Desarrollamos, implementamos y optimizamos junto a tu equipo. La relación no termina en el lanzamiento.",
  },
];

export default function Propuesta() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <section id="propuesta" className="py-28 bg-black">
      <div className="w-full max-w-[1160px] mx-auto px-6">
        <FadeInUp>
          <span className="inline-block text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-[#C4FF80] mb-4">
            Lo que hacemos
          </span>
          <div className="max-w-[640px] mb-12">
            <h2 className="font-['Inter'] text-[clamp(1.5rem,2.5vw,2.1rem)] font-bold text-white mb-5 leading-[1.1]">
              No vendemos software. Entendemos tu negocio y construimos las herramientas que necesitás.
            </h2>
            <p className="text-[1.05rem] text-[#9CA3AF] max-w-[580px]">
              Cada solución nace de un diagnóstico profundo de tus procesos, recursos y objetivos. No hay fórmulas mágicas, hay metodología.
            </p>
          </div>
        </FadeInUp>

        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12"
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {cards.map((c) => (
            <motion.div
              key={c.num}
              variants={cardVariants}
              className="relative bg-[#0f0f0f] border border-[rgba(255,255,255,0.08)] rounded-[14px] p-[2rem_1.75rem_1.75rem] overflow-hidden min-h-[220px] flex flex-col justify-between hover:border-[rgba(125,0,220,0.3)] hover:shadow-[0_0_30px_rgba(125,0,220,0.07)] transition-all group"
            >
              <div>
                <h3 className="font-['Inter'] text-base font-bold text-white mb-[0.6rem]">{c.title}</h3>
                <p className="text-[0.875rem] text-[#9CA3AF] leading-[1.6]">{c.desc}</p>
              </div>
              <span className="absolute bottom-5 right-6 font-['Inter'] text-[3.5rem] font-extrabold text-[rgba(255,255,255,0.04)] leading-none select-none group-hover:text-[rgba(125,0,220,0.08)] transition-colors">
                {c.num}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <FadeInUp delay={0.1}>
          <blockquote className="relative pl-10 pr-8 py-8 bg-[#0f0f0f] border border-[rgba(255,255,255,0.08)] border-l-[3px] border-l-[#7D00DC] rounded-xl text-[1.05rem] italic text-[rgba(249,250,251,0.75)] leading-[1.7]">
            <span className="absolute top-2 left-4 text-[4rem] font-['Georgia',serif] text-[#7D00DC] opacity-20 leading-none">&ldquo;</span>
            Automatizar sin entender el negocio es un error. Por eso trabajamos como consultores, no como proveedores de software.
          </blockquote>
        </FadeInUp>
      </div>
    </section>
  );
}
