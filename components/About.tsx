"use client";

import { useIntersectionObserver } from "@/lib/hooks/useIntersectionObserver";
import StackIcon from "tech-stack-icons";
import { techStack } from "@/lib/constants";
import { skills, stats } from "@/data/skills";

export default function About() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.25 });

  return (
    <section
      id="about"
      ref={elementRef}
      className="section-padding relative overflow-hidden"
    >
      {/* subtle gradient line at the top */}
      <div className="absolute inset-x-0 top-0 h-px gradient-bg opacity-20" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Heading */}
        <div className={`mb-14 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="mb-2 text-xs font-semibold tracking-[0.3em] uppercase text-yellow">
            Get to know me
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl gradient-text">
            About Me
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* ── Left: bio + stats ── */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="text-text-muted leading-relaxed text-sm sm:text-base">
              I&apos;m a web developer passionate about building accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.
            </p>
            <p className="text-text-muted leading-relaxed text-sm sm:text-base">
              Currently, I&apos;m a 4th-year college student at Western Mindanao State University, diving deep into modern web architecture. I specialize in building scalable, full-stack applications using React, Next.js, and TypeScript, ensuring everything meets web accessibility standards and best practices.
            </p>
            <p className="text-text-muted leading-relaxed text-sm sm:text-base">
              In my spare time, I&apos;m usually climbing, reading, hanging out with my cat, or running around the city exploring new coffee shops.
            </p>

            {/* Stats row — glowing cards */}
            <div className="flex gap-4 pt-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`group relative flex-1 overflow-hidden rounded-2xl border border-white/5 bg-surface/60 p-5 text-center backdrop-blur-md transition-all duration-500 hover:border-white/10 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple/10`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-pink/5 to-purple/5 transition-opacity duration-500" />
                  <p className="text-2xl font-extrabold gradient-text sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs text-text-muted tracking-wide uppercase">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* ── Skill Bars ── */}
            <div className="space-y-4 pt-2">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-text-muted">Proficiency</p>
              {skills.map((skill, index) => (
                <div key={skill.name} style={{ transitionDelay: `${300 + index * 80}ms` }}>
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-xs font-medium text-text/80">{skill.name}</span>
                    <span className="text-xs font-bold gradient-text">{skill.pct}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: isVisible ? `${skill.pct}%` : "0%", transitionDelay: `${400 + index * 120}ms` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Education & Focus ── */}
          <div className={`space-y-6 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

            {/* Education Card */}
            <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/5 bg-surface/60 p-6 shadow-lg backdrop-blur-md transition-all duration-500 hover:border-white/10 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink/10">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-pink/5 via-transparent to-transparent transition-opacity duration-500" />
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-pink/5 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-text">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-pink/10 text-pink">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </span>
                Education
              </h3>
              <div className="relative pl-4 border-l-2 border-white/10">
                <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-yellow ring-2 ring-yellow/30" />
                <h4 className="text-base font-semibold text-text">Western Mindanao State University</h4>
                <p className="mt-1 text-sm text-text-muted">Bachelor of Science in Information Technology</p>
                <span className="mt-2 inline-block rounded-full bg-purple/10 px-3 py-0.5 text-xs font-semibold text-purple uppercase tracking-wider">4th Year • Present</span>
              </div>
            </div>

            {/* Current Focus Card */}
            <div className="group relative overflow-hidden rounded-[1.5rem] border border-white/5 bg-surface/60 p-6 shadow-lg backdrop-blur-md transition-all duration-500 hover:border-white/10 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow/10">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-yellow/5 via-transparent to-transparent transition-opacity duration-500" />
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-yellow/5 blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-text">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-yellow/10 text-yellow">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                Current Focus
              </h3>
              <ul className="space-y-4 text-sm text-text-muted">
                {[
                  { dot: "bg-pink", text: "Building website projects using ReactJS and Next.js." },
                  { dot: "bg-purple", text: "Working on my final year capstone project." },
                  { dot: "bg-yellow", text: "Actively looking for junior roles or internships to kickstart my career!" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={`mt-1.5 h-2 w-2 flex-shrink-0 rounded-full ${item.dot} ring-4 ring-white/5`} />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-surface/40 px-5 py-4">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
              </span>
              <p className="text-sm text-text-muted">
                <span className="font-semibold text-white">Available for work</span> — open to internships & junior roles
              </p>
            </div>
          </div>
        </div>

        {/* ── Tech Stack Marquee ── */}
        <div className={`mt-24 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="mb-8 text-center text-sm font-semibold tracking-[0.2em] uppercase text-text-muted">
            Technologies I Work With
          </p>
          <div className="marquee-wrapper">
            <div className="marquee-track">
              {[...techStack, ...techStack, ...techStack].map((tech, idx) => (
                <div
                  key={`${tech}-${idx}`}
                  className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-surface p-3 border border-white/5 shadow-lg transition-all duration-300 hover:scale-110 hover:border-white/10 hover:shadow-purple/10"
                  title={tech}
                >
                  <StackIcon name={tech as any} className="w-full h-full" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


