export default function Footer() {
  const socialLinks = [
    { label: "GitHub", href: "#", icon: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.7.114 2.5.34 1.9-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.59.67.5A10.013 10.013 0 0022 12c0-5.523-4.477-10-10-10z" },
    { label: "LinkedIn", href: "#", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  ];

  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <a href="#hero" className="font-montserrat text-lg font-bold gradient-text">
          Hanin&nbsp;Taclay
        </a>

        <div className="flex gap-5">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} className="text-text-muted hover:text-yellow transition-colors" aria-label={s.label}>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d={s.icon} /></svg>
            </a>
          ))}
        </div>

        <p className="text-xs text-text-muted">&copy; {new Date().getFullYear()} Hanin Taclay. All rights reserved.</p>
      </div>
    </footer>
  );
}
