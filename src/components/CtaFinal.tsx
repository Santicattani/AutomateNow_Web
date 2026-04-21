"use client";
import { useState, FormEvent } from "react";

const WEBHOOK_URL = "YOUR_WEBHOOK_URL_HERE";

export default function CtaFinal() {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; msg: string } | null>(null);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const required = ["nombre", "apellido", "email", "empresa"];
    const newErrors: Record<string, boolean> = {};
    required.forEach((f) => {
      if (!data.get(f)?.toString().trim()) newErrors[f] = true;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setFeedback({ type: "error", msg: "Por favor completá los campos obligatorios." });
      return;
    }

    setErrors({});
    setLoading(true);
    setFeedback(null);

    const payload = {
      nombre: data.get("nombre"),
      apellido: data.get("apellido"),
      email: data.get("email"),
      telefono: data.get("telefono"),
      empresa: data.get("empresa"),
      web: data.get("web"),
      consulta: data.get("consulta"),
      fecha: new Date().toISOString(),
    };

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setFeedback({ type: "success", msg: "¡Mensaje enviado! Te contactamos a la brevedad." });
        form.reset();
      } else {
        throw new Error("Server error");
      }
    } catch {
      setFeedback({ type: "error", msg: "Ocurrió un error. Escribinos directo a nuestro WhatsApp." });
    } finally {
      setLoading(false);
    }
  }

  const inputClass = (field: string) =>
    `w-full bg-[rgba(255,255,255,0.04)] border rounded-lg px-4 py-3 text-white font-['DM_Sans'] text-[0.9rem] outline-none transition-all placeholder:text-[rgba(156,163,175,0.45)] focus:shadow-[0_0_0_3px_rgba(125,0,220,0.08)] ${
      errors[field]
        ? "border-[rgba(239,68,68,0.6)]"
        : "border-[rgba(255,255,255,0.08)] focus:border-[rgba(125,0,220,0.5)]"
    }`;

  return (
    <section
      id="cta-final"
      className="relative py-28 text-center overflow-hidden"
      style={{
        background: `radial-gradient(ellipse 70% 60% at 50% 50%, rgba(125,0,220,0.1) 0%, transparent 70%), linear-gradient(180deg, rgba(17,24,39,0.6) 0%, #000000 100%)`,
      }}
    >
      <div className="relative z-[1] w-full max-w-[1160px] mx-auto px-6">
        <div className="max-w-[700px] mx-auto">
          <span className="inline-block text-[0.7rem] font-semibold tracking-[0.16em] uppercase text-[#C4FF80] mb-4">
            Siguiente paso
          </span>
          <h2 className="font-['Syne'] text-[clamp(1.7rem,3vw,2.4rem)] font-extrabold text-white mb-[1.1rem] leading-[1.1]">
            Empezá con una llamada de diagnóstico
          </h2>
          <p className="text-[1.05rem] text-[#9CA3AF] mb-9 leading-[1.7]">
            Analizamos tu negocio y te mostramos qué procesos se pueden automatizar y cómo impactan en tiempo, costos y resultados.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-[0.4rem]">
                <label className="text-[0.8rem] font-semibold text-[#9CA3AF] tracking-[0.04em]">Nombre</label>
                <input name="nombre" type="text" placeholder="Juan" className={inputClass("nombre")} required />
              </div>
              <div className="flex flex-col gap-[0.4rem]">
                <label className="text-[0.8rem] font-semibold text-[#9CA3AF] tracking-[0.04em]">Apellido</label>
                <input name="apellido" type="text" placeholder="García" className={inputClass("apellido")} required />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-[0.4rem]">
                <label className="text-[0.8rem] font-semibold text-[#9CA3AF] tracking-[0.04em]">Email</label>
                <input name="email" type="email" placeholder="juan@empresa.com" className={inputClass("email")} required />
              </div>
              <div className="flex flex-col gap-[0.4rem]">
                <label className="text-[0.8rem] font-semibold text-[#9CA3AF] tracking-[0.04em]">Teléfono</label>
                <input name="telefono" type="tel" placeholder="+54 11 1234-5678" className={inputClass("telefono")} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-[0.4rem]">
                <label className="text-[0.8rem] font-semibold text-[#9CA3AF] tracking-[0.04em]">Nombre de la empresa</label>
                <input name="empresa" type="text" placeholder="Mi Empresa S.A." className={inputClass("empresa")} required />
              </div>
              <div className="flex flex-col gap-[0.4rem]">
                <label className="text-[0.8rem] font-semibold text-[#9CA3AF] tracking-[0.04em]">Web / Instagram de la empresa</label>
                <input name="web" type="text" placeholder="www.miempresa.com o @miempresa" className={inputClass("web")} />
              </div>
            </div>

            <div className="flex flex-col gap-[0.4rem]">
              <label className="text-[0.8rem] font-semibold text-[#9CA3AF] tracking-[0.04em]">Déjanos tu consulta</label>
              <textarea
                name="consulta"
                placeholder="Contanos brevemente en qué área querés automatizar o qué problema querés resolver..."
                className={`${inputClass("consulta")} resize-y min-h-[110px]`}
              />
            </div>

            <div className="flex flex-col items-center gap-3 mt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 px-[2.2rem] py-4 text-base font-semibold text-white rounded-full cursor-pointer disabled:opacity-60 transition-transform hover:scale-[1.02] active:scale-95"
                style={{
                  background: "transparent",
                  boxShadow: "0 0 8px rgba(0,0,0,0.03), 0 2px 6px rgba(0,0,0,0.08), inset 3px 3px 0.5px -3.5px rgba(255,255,255,0.09), inset -3px -3px 0.5px -3.5px rgba(255,255,255,0.85), inset 1px 1px 1px -0.5px rgba(255,255,255,0.60), inset -1px -1px 1px -0.5px rgba(255,255,255,0.60), inset 0 0 6px 6px rgba(255,255,255,0.12), inset 0 0 2px 2px rgba(255,255,255,0.06), 0 0 12px rgba(0,0,0,0.15)",
                }}
              >
                {loading ? "Enviando..." : "→ Agendar llamada con Automate Now"}
              </button>

              {feedback && (
                <div
                  className={`w-full px-5 py-[0.9rem] rounded-lg text-[0.875rem] font-medium text-center ${
                    feedback.type === "success"
                      ? "bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.25)] text-[#4ade80]"
                      : "bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.25)] text-[#f87171]"
                  }`}
                >
                  {feedback.msg}
                </div>
              )}

              <p className="text-[0.78rem] text-[#9CA3AF] opacity-55 tracking-[0.03em]">
                Sin compromiso · Enfoque consultivo · Soluciones a medida
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
