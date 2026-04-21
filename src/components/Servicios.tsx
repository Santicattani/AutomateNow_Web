const services = [
  {
    title: "Atención al cliente con IA",
    desc: "WhatsApp, web y redes con respuestas automáticas inteligentes que resuelven sin intervención humana.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Calificación y seguimiento de leads",
    desc: "Filtrado automático de prospectos sin intervención manual: el equipo comercial recibe solo los leads calificados.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Procesos administrativos y operativos",
    desc: "Eliminá las tareas repetitivas del backoffice: facturación, onboarding, aprobaciones y más.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Integración entre herramientas",
    desc: "CRM, formularios, emails y planillas conectados para que la información fluya sin pasos manuales.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" />
        <path d="M13 6h3a2 2 0 0 1 2 2v7" /><line x1="6" y1="9" x2="6" y2="21" />
      </svg>
    ),
  },
  {
    title: "Reportes automáticos",
    desc: "Control de gestión en tiempo real: dashboards y reportes que se generan solos para mejores decisiones.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: "Automatización comercial",
    desc: "Flujos de ventas, seguimiento y propuestas en piloto automático para que tu equipo se enfoque en cerrar.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-28 bg-gradient-to-b from-black to-[rgba(17,24,39,0.35)]">
      <div className="w-full max-w-[1160px] mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-[#C4FF80] mb-4">
            Servicios
          </span>
          <h2 className="font-['Syne'] text-[clamp(1.9rem,4vw,3rem)] font-bold text-white mb-5 leading-[1.1]">
            ¿Qué podemos automatizar en tu negocio?
          </h2>
          <p className="text-[1.05rem] text-[#9CA3AF] max-w-[580px] mx-auto">
            Desde la atención al cliente hasta la gestión interna, identificamos qué procesos liberan más tiempo y recursos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-[#0f0f0f] border border-[rgba(255,255,255,0.08)] rounded-[14px] p-7 flex gap-5 items-start hover:border-[rgba(125,0,220,0.3)] hover:-translate-y-0.5 transition-all"
            >
              <div className="flex-shrink-0 w-11 h-11 bg-[rgba(125,0,220,0.1)] rounded-[10px] flex items-center justify-center text-[#7D00DC]">
                {s.icon}
              </div>
              <div>
                <h3 className="font-['Syne'] text-[0.95rem] font-bold text-white mb-[0.35rem]">{s.title}</h3>
                <p className="text-[0.85rem] text-[#9CA3AF] leading-[1.55]">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-base text-[#9CA3AF] italic">
          <span className="text-[#7D00DC]">&ldquo;</span>
          Si es un proceso repetitivo, probablemente se puede automatizar.
          <span className="text-[#7D00DC]">&rdquo;</span>
        </p>
      </div>
    </section>
  );
}
