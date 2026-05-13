"use client";

import { useEffect, useState } from "react";
import Hero3DBackground from "./Hero3DBackground";
import Image from "next/image";

export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setShow(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg"
    >
      {/* ── 3D Starfield & Geometry Background ── */}
      <Hero3DBackground />

      {/* ── Decorative Images ── */}

      <div className={`absolute bottom-0 right-0 z-0 pointer-events-none transition-all duration-1000 delay-300 ease-out ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <Image
          src="/astronautonamoon.png"
          alt="Astronaut on a moon"
          width={600}
          height={600}
          className="h-auto w-[300px] object-contain object-bottom translate-x-5 md:w-[450px] lg:w-[600px] lg:translate-x-8"
          priority
        />
      </div>

      {/* ── Gradient orbs ── */}
      <div
        className="pointer-events-none absolute animate-float"
        style={{
          width: 650,
          height: 650,
          top: "-12%",
          left: "-10%",
          borderRadius: "50%",
          background: "radial-gradient(circle, #FF6B9A 0%, transparent 70%)",
          filter: "blur(120px)",
          opacity: 0.32,
        }}
      />
      <div
        className="pointer-events-none absolute animate-float"
        style={{
          width: 520,
          height: 520,
          bottom: "-14%",
          right: "-8%",
          borderRadius: "50%",
          background: "radial-gradient(circle, #7B5CFF 0%, transparent 70%)",
          filter: "blur(120px)",
          opacity: 0.3,
          animationDelay: "3s",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-3xl px-5 py-24 pt-32 text-center sm:px-8">
        <div
          className={`transition-all duration-[1200ms] ease-out ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {/* Eyebrow */}
          <p className="mb-5 text-xs font-semibold tracking-[0.3em] uppercase text-yellow sm:text-sm animate-fade-in-up">
            Welcome to my portfolio
          </p>

          {/* Name */}
          <h1 className="font-display mb-4 text-4xl font-extrabold leading-[1.06] sm:text-5xl md:text-6xl lg:text-7xl gradient-text">
            Hanin S. Taclay
          </h1>

          {/* Role */}
          <p className="mb-4 text-lg font-light text-text/80 sm:text-2xl md:text-3xl">
            Web Developer
          </p>

          {/* Bio */}
          <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-text-muted sm:text-base">
            I build accessible, pixel-perfect digital experiences. Currently deep diving into modern web architecture as an IT student at Western Mindanao State University.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* View Projects – gradient */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white sm:text-base gradient-bg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink/20 active:scale-95"
            >
              View my work
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Contact Me – yellow outline */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-yellow px-8 py-4 text-sm font-semibold text-yellow sm:text-base transition-all duration-300 hover:bg-yellow/10 hover:scale-105 active:scale-95"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-text/30 hover:text-yellow transition-colors z-10"
        aria-label="Scroll to About section"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </section>
  );
}
