const items = [
  "Tu equipo pierde horas en tareas repetitivas que nadie debería hacer a mano.",
  "La información está desordenada o duplicada en múltiples herramientas.",
  "Dependés de personas clave para ejecutar procesos críticos del negocio.",
  "Las oportunidades se pierden por falta de seguimiento automático.",
  "Sabés que la IA puede ayudar, pero no sabés por dónde empezar.",
];

export default function Problema() {
  return (
    <section id="problema" className="py-28 bg-black">
      <div className="w-full max-w-[1160px] mx-auto px-6">
        <span className="inline-block text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-[#C4FF80] mb-4">
          El Problema
        </span>
        <h2 className="font-['Syne'] text-[clamp(1.9rem,4vw,3rem)] font-bold text-white mb-5 leading-[1.1]">
          Tu negocio creció.<br />Tus procesos, no.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12 items-start">
          <div className="flex flex-col gap-[0.85rem]">
            {items.map((text, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-[1.1rem_1.25rem] bg-[#0f0f0f] border border-[rgba(255,255,255,0.08)] rounded-[10px] hover:border-[rgba(239,68,68,0.3)] transition-colors"
              >
                <div className="flex-shrink-0 w-[26px] h-[26px] bg-[rgba(239,68,68,0.12)] rounded-[6px] flex items-center justify-center text-[0.8rem] text-red-500 font-bold mt-px">
                  ✗
                </div>
                <p className="text-[0.9rem] text-[#9CA3AF] leading-[1.55]">{text}</p>
              </div>
            ))}
          </div>

          <div className="md:sticky md:top-28">
            <blockquote className="relative pl-10 pr-8 py-8 bg-[#0f0f0f] border border-[rgba(255,255,255,0.08)] border-l-[3px] border-l-[#7D00DC] rounded-xl text-[1.05rem] italic text-[rgba(249,250,251,0.75)] leading-[1.7]">
              <span className="absolute top-2 left-4 text-[4rem] font-['Georgia',serif] text-[#7D00DC] opacity-20 leading-none">&ldquo;</span>
              El problema no es la falta de herramientas. Es no tener una estrategia clara de automatización.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
