"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";

function NodeCanvas() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const NS = "http://www.w3.org/2000/svg";
    const W = () => svg.clientWidth || window.innerWidth;
    const H = () => svg.clientHeight || window.innerHeight;
    const N = 42;
    const DIST = 150;
    const COL = "125,0,220";
    let nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    let rafId: number;
    let resizeTimer: ReturnType<typeof setTimeout>;

    function rand(a: number, b: number) {
      return Math.random() * (b - a) + a;
    }

    function init() {
      nodes = [];
      const w = W(), h = H();
      for (let i = 0; i < N; i++) {
        nodes.push({ x: rand(0, w), y: rand(0, h), vx: rand(-0.25, 0.25), vy: rand(-0.18, 0.22), r: rand(1.5, 2.8) });
      }
    }

    function draw() {
      if (!svg) return;
      svg.innerHTML = "";
      const w = W(), h = H();
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const d = Math.hypot(dx, dy);
          if (d < DIST) {
            const op = (1 - d / DIST) * 0.3;
            const line = document.createElementNS(NS, "line");
            line.setAttribute("x1", String(nodes[i].x));
            line.setAttribute("y1", String(nodes[i].y));
            line.setAttribute("x2", String(nodes[j].x));
            line.setAttribute("y2", String(nodes[j].y));
            line.setAttribute("stroke", `rgba(${COL},${op})`);
            line.setAttribute("stroke-width", "0.75");
            svg.appendChild(line);
          }
        }
      }
      nodes.forEach((n) => {
        const c = document.createElementNS(NS, "circle");
        c.setAttribute("cx", String(n.x));
        c.setAttribute("cy", String(n.y));
        c.setAttribute("r", String(n.r));
        c.setAttribute("fill", `rgba(${COL},0.5)`);
        svg.appendChild(c);
      });
      void w; void h;
    }

    function update() {
      const w = W(), h = H();
      nodes.forEach((n) => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      });
    }

    function loop() {
      update();
      draw();
      rafId = requestAnimationFrame(loop);
    }

    init();
    loop();

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(init, 200);
    };
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60 z-[1]"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    />
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden p-0"
    >
      <AnimatedGradientBackground
        startingGap={80}
        Breathing={true}
        animationSpeed={0.015}
        breathingRange={4}
        topOffset={60}
        gradientPosition="50% 20%"
        gradientColors={[
          "#0A0A0A",
          "#0A0A0A",
          "#1a0a2e",
          "#2d1054",
          "#4a1a8a",
          "#6b21c8",
          "#7c3aed",
        ]}
        gradientStops={[20, 35, 50, 62, 73, 85, 100]}
      />

      {/* Animated node network */}
      <NodeCanvas />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-[180px] bg-gradient-to-b from-transparent to-black pointer-events-none z-[2]" />

      <div className="relative z-[3] max-w-[820px] px-6 pt-[9rem] pb-[6rem] flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 0.68, 0, 1.2] }}
          className="inline-flex items-center gap-2 bg-[rgba(196,255,128,0.08)] border border-[rgba(196,255,128,0.25)] rounded-full px-[1.1rem] py-[0.35rem] text-[0.78rem] font-medium tracking-[0.08em] text-[#C4FF80] mb-8"
        >
          <span className="w-[6px] h-[6px] rounded-full bg-[#C4FF80] animate-pulse" />
          Consultoría en IA &amp; Automatización
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 0.68, 0, 1.2] }}
          className="font-['Syne'] text-[clamp(1.9rem,3.5vw,3rem)] font-extrabold text-white mb-6 leading-[1.1] tracking-[-0.02em]"
        >
          Entendemos tu negocio.<br />
          Lo potenciamos con<br />
          <em className="not-italic text-[#C4FF80]">IA y automatización.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="text-[1.1rem] text-[#9CA3AF] mb-9 max-w-[540px] leading-[1.7]"
        >
          Trabajamos como consultores: primero entendemos tus procesos, después diseñamos y construimos las soluciones que realmente necesitás.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-[0.6rem] mb-10"
        >
          {["Automatización de procesos", "IA aplicada", "Soluciones a medida"].map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-[0.4rem] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-full px-[0.9rem] py-[0.35rem] text-[0.825rem] text-[#9CA3AF]"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#7D00DC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {b}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center gap-[0.9rem]"
        >
          <a
            href="#cta-final"
            className="inline-flex items-center gap-2 px-[2.2rem] py-4 text-base font-semibold text-white rounded-full no-underline cursor-pointer transition-transform hover:scale-105 active:scale-95"
            style={{
              background: "transparent",
              boxShadow: "0 0 8px rgba(0,0,0,0.03), 0 2px 6px rgba(0,0,0,0.08), inset 3px 3px 0.5px -3.5px rgba(255,255,255,0.09), inset -3px -3px 0.5px -3.5px rgba(255,255,255,0.85), inset 1px 1px 1px -0.5px rgba(255,255,255,0.60), inset -1px -1px 1px -0.5px rgba(255,255,255,0.60), inset 0 0 6px 6px rgba(255,255,255,0.12), inset 0 0 2px 2px rgba(255,255,255,0.06), 0 0 12px rgba(0,0,0,0.15)",
            }}
          >
            → Agendar llamada de diagnóstico
          </a>
          <p className="text-[0.78rem] text-[#9CA3AF] opacity-60 tracking-[0.03em]">
            Sin compromiso · Enfoque consultivo · Soluciones a medida
          </p>
        </motion.div>
      </div>
    </section>
  );
}
