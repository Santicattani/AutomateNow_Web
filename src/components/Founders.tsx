const founders = [
  {
    name: "Santiago Cattani",
    role: "Co-founder & CTO",
    photo: "/founders/santiago.jpeg",
  },
  {
    name: "Valentín",
    role: "Co-founder & CMO",
    photo: "/founders/valentin.jpeg",
  },
];

export default function Founders() {
  return (
    <section
      id="founders"
      className="relative py-28 overflow-hidden"
      style={{
        background: `linear-gradient(180deg, #000000 0%, rgba(17,24,39,0.4) 50%, #000000 100%)`,
      }}
    >
      <div className="relative z-[1] w-full max-w-[1160px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-[#C4FF80] mb-4">
            El equipo
          </span>
          <h2 className="font-['Neue_Haas_Grotesk_Display'] text-[clamp(1.9rem,4vw,3rem)] font-bold text-white leading-[1.1]">
            Las personas detrás de Automate Now
          </h2>
          <p className="text-[1.05rem] text-[#9CA3AF] mt-5 max-w-[560px] mx-auto leading-[1.7]">
            No somos una agencia. Somos dos personas que entienden de negocios y de tecnología.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[780px] mx-auto">
          {founders.map((f) => (
            <div
              key={f.name}
              className="flex flex-col items-center text-center p-8 rounded-2xl border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.02)]"
            >
              <div className="w-24 h-24 rounded-full mb-6 overflow-hidden bg-[rgba(125,0,220,0.12)] border border-[rgba(125,0,220,0.25)] flex-shrink-0">
                <img src={f.photo} alt={f.name} className="w-full h-full object-cover" />
              </div>

              <h3 className="font-['Neue_Haas_Grotesk_Display'] text-[1.1rem] font-bold text-white mb-1">{f.name}</h3>
              <span className="text-[0.78rem] font-semibold tracking-[0.1em] uppercase text-[#7D00DC]">{f.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
