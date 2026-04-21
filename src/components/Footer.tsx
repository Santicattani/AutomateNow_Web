const links = [
  {
    label: "WhatsApp",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82A16 16 0 0 0 16 17l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.01z" />
      </svg>
    ),
  },
  {
    label: "Calendly",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[rgba(255,255,255,0.08)] py-12">
      <div className="w-full max-w-[1160px] mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-['Syne'] font-bold text-base text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1 C12 1 10.8 10.8 1 12 C10.8 13.2 12 23 12 23 C12 23 13.2 13.2 23 12 C13.2 10.8 12 1 12 1 Z" fill="#C4FF80" />
              </svg>
              <span>
                <span className="font-extrabold">Automate</span>
                <span className="font-normal text-[#C4FF80] text-[0.9em]">now</span>
              </span>
            </div>
            <p className="text-[0.78rem] text-[#9CA3AF] mt-1">Consultores en automatización e IA</p>
          </div>

          <ul className="flex gap-6 list-none flex-wrap">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-[0.35rem] text-[0.85rem] text-[#9CA3AF] hover:text-[#7D00DC] transition-colors no-underline"
                >
                  {l.icon}
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-center text-[0.75rem] text-[#9CA3AF] opacity-40 mt-6">
          © 2025 Automate Now. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
