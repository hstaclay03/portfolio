"use client";

import { useState, useEffect } from "react";
import { navLinks } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  /* ── scroll listener ── */
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const currentSection = navLinks
        .map((link) => link.href.slice(1))
        .find((sectionId) => {
          const element = document.getElementById(sectionId);
          if (!element) return false;
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        });
      if (currentSection) setActiveSection(currentSection);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── smooth-scroll click handler ── */
  const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const element = document.getElementById(href.slice(1));
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${isScrolled
        ? "glass-strong py-3 shadow-lg shadow-black/25"
        : "bg-transparent py-5"
        }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* ── Brand ── */}
        <a
          href="#hero"
          onClick={(event) => handleSmoothScroll(event, "#hero")}
          className="font-display text-xl font-extrabold tracking-tight gradient-text select-none"
          aria-label="Hanin Taclay — Go to top"
        >
          Hanin&nbsp;Taclay
        </a>

        {/* ── Desktop links ── */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map(({ href, label }) => {
            const isActive = activeSection === href.slice(1);
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(event) => handleSmoothScroll(event, href)}
                  className={`relative text-[0.84rem] font-medium tracking-wide transition-colors duration-300 ${isActive ? "text-yellow" : "text-text/60 hover:text-text"
                    }`}
                >
                  {label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-yellow transition-all duration-300 ${isActive ? "w-full" : "w-0"
                      }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* ── CTA + mobile toggle ── */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(event) => handleSmoothScroll(event, "#contact")}
            className="hidden md:inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-semibold text-white gradient-bg transition-transform duration-300 hover:scale-105 active:scale-95 animate-pulse-glow"
          >
            Hire&nbsp;Me
          </a>

          <button
            onClick={() => setIsMobileMenuOpen((prevState) => !prevState)}
            className="md:hidden p-2 text-text/70 hover:text-yellow transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <ul className="mx-5 mt-3 flex flex-col gap-1 border-t border-white/10 pt-4 pb-5">
          {navLinks.map(({ href, label }) => {
            const isActive = activeSection === href.slice(1);
            return (
              <li key={href}>
                <a
                  href={href}
                  onClick={(event) => handleSmoothScroll(event, href)}
                  className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${isActive
                    ? "text-yellow bg-white/5"
                    : "text-text/60 hover:text-text hover:bg-white/5"
                    }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="#contact"
              onClick={(event) => handleSmoothScroll(event, "#contact")}
              className="mt-2 block rounded-full px-5 py-3 text-center text-sm font-semibold text-white gradient-bg"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
