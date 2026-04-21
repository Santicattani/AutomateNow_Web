"use client";
import FadeInUp from "@/components/FadeInUp";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const steps = [
  { n: "1", title: "Llamada de diagnóstico", desc: "Conocemos tu negocio, procesos y dónde están los cuellos de botella." },
  { n: "2", title: "Propuesta de automatización", desc: "Presentamos la solución a medida con impacto esperado en tiempo y costos." },
  { n: "3", title: "Construcción de la solución", desc: "Desarrollamos e implementamos con tu equipo, garantizando adopción real." },
  { n: "4", title: "Acompañamiento y mejoras", desc: "Monitoreamos, optimizamos y seguimos iterando para maximizar el impacto." },
];

export default function Proceso() {
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-80px" });

  return (
    <section id="proceso" className="py-28 bg-black">
      <div className="w-full max-w-[1160px] mx-auto px-6">
        <FadeInUp className="text-center mb-[4.5rem]">
          <span className="inline-block text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-[#C4FF80] mb-4">
            Nuestro Proceso
          </span>
          <h2 className="font-['Inter'] text-[clamp(1.9rem,4vw,3rem)] font-bold text-white leading-[1.1]">
            Cómo trabajamos en Automate Now
          </h2>
        </FadeInUp>

        {/* Desktop timeline */}
        <motion.div
          ref={timelineRef}
          className="hidden md:grid grid-cols-4 gap-6 relative"
          initial="hidden"
          animate={timelineInView ? "visible" : "hidden"}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <div
            className="absolute top-[26px] h-px z-0"
            style={{
              left: "12.5%",
              right: "12.5%",
              background: "linear-gradient(90deg, #7D00DC 0%, rgba(125,0,220,0.5) 50%, rgba(125,0,220,0.15) 100%)",
            }}
          />
          {steps.map((s) => (
            <motion.div
              key={s.n}
              variants={stepVariants}
              className="flex flex-col items-center text-center px-2 relative z-[1]"
            >
              <div className="w-[52px] h-[52px] rounded-full bg-black border-2 border-[#7D00DC] flex items-center justify-center font-['Inter'] font-extrabold text-base text-[#7D00DC] mb-6 relative z-[2] shadow-[0_0_0_6px_black] flex-shrink-0">
                {s.n}
              </div>
              <h3 className="font-['Inter'] text-[0.9rem] font-bold text-white mb-[0.4rem]">{s.title}</h3>
              <p className="text-[0.8rem] text-[#9CA3AF] leading-[1.5]">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile timeline */}
        <div className="flex flex-col gap-8 md:hidden">
          {steps.map((s, i) => (
            <FadeInUp key={s.n} delay={i * 0.1}>
              <div className="flex items-start gap-5 text-left">
                <div className="w-[52px] h-[52px] rounded-full bg-black border-2 border-[#7D00DC] flex items-center justify-center font-['Inter'] font-extrabold text-base text-[#7D00DC] flex-shrink-0">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-['Inter'] text-[0.9rem] font-bold text-white mb-[0.4rem]">{s.title}</h3>
                  <p className="text-[0.8rem] text-[#9CA3AF] leading-[1.5]">{s.desc}</p>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
