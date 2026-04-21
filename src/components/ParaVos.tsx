const ideal = [
  "Negocios en crecimiento con procesos manuales que frenan el avance",
  "Equipos que quieren escalar sin contratar más personas",
  "Dueños y gerentes que buscan operar con mayor eficiencia",
  "Empresas B2B y pymes con operaciones repetibles",
];

const noIdeal = [
  "Quien busca una herramienta plug-and-play sin personalización",
  "Quien no está dispuesto a revisar y mejorar sus procesos internos",
  "Quien solo quiere \"probar IA\" sin una estrategia ni objetivo claro",
];

export default function ParaVos() {
  return (
    <section id="para-vos" className="py-28 bg-black">
      <div className="w-full max-w-[1160px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-[#C4FF80] mb-4">
            ¿Es para vos?
          </span>
          <h2 className="font-['Neue_Haas_Grotesk_Display'] text-[clamp(1.9rem,4vw,3rem)] font-bold text-white leading-[1.1]">
            Trabajamos con negocios que quieren crecer en serio.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#0f0f0f] border border-[rgba(255,255,255,0.08)] border-t-[3px] border-t-[#22C55E] rounded-[14px] p-8">
            <h3 className="font-['Neue_Haas_Grotesk_Display'] text-base font-bold text-[#22C55E] mb-5">✅ Ideal para</h3>
            <ul className="flex flex-col gap-3 list-none">
              {ideal.map((item) => (
                <li key={item} className="flex items-start gap-[0.6rem] text-[0.875rem] text-[#9CA3AF] leading-[1.5]">
                  <span className="flex-shrink-0 mt-px">✅</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0f0f0f] border border-[rgba(255,255,255,0.08)] border-t-[3px] border-t-[#EF4444] rounded-[14px] p-8">
            <h3 className="font-['Neue_Haas_Grotesk_Display'] text-base font-bold text-[#EF4444] mb-5">❌ No es para</h3>
            <ul className="flex flex-col gap-3 list-none">
              {noIdeal.map((item) => (
                <li key={item} className="flex items-start gap-[0.6rem] text-[0.875rem] text-[#9CA3AF] leading-[1.5]">
                  <span className="flex-shrink-0 mt-px">❌</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
