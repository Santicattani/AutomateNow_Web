const stats = [
  { label: "Horas ahorradas", value: "+10.000" },
  { label: "Empresas transformadas", value: "+3" },
  { label: "Disponibilidad", value: "24/7" },
];

export default function StatsBar() {
  return (
    <div className="border-t border-b border-[rgba(255,255,255,0.08)] bg-[rgba(17,24,39,0.5)]">
      <div className="w-full max-w-[1160px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-7 px-8 ${i < stats.length - 1 ? "md:border-r border-b md:border-b-0 border-[rgba(255,255,255,0.08)]" : ""}`}
            >
              <div className="text-[0.68rem] font-semibold tracking-[0.14em] uppercase text-[#9CA3AF] mb-[0.35rem]">
                {s.label}
              </div>
              <div className="font-['Inter'] text-[1.75rem] font-extrabold text-[#7D00DC] leading-none">
                {s.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
