"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Project } from "@/lib/types";
import { projects } from "@/data/projects";
import { useIntersectionObserver } from "@/lib/hooks/useIntersectionObserver";
import StackIcon from "tech-stack-icons";
import { getIconName } from "@/lib/tagToIconMap";

// TagIcon component for rendering tech stack icons with text
const TagIcon = ({ tag }: { tag: string }) => {
  const iconName = getIconName(tag);
  
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-md transition-colors hover:bg-white/10">
      {iconName && <StackIcon name={iconName as any} className="w-3.5 h-3.5 flex-shrink-0" />}
      <span>{tag}</span>
    </span>
  );
};

export default function Projects() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.15 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);


  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedProject]);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % projects.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projects" ref={elementRef} className="section-padding relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px gradient-bg opacity-20" />

      {/* ── Gradient orbs (matching Hero) ── */}
      <div
        className="pointer-events-none absolute animate-float"
        style={{
          width: 600,
          height: 600,
          top: "-10%",
          left: "-12%",
          borderRadius: "50%",
          background: "radial-gradient(circle, #FF6B9A 0%, transparent 70%)",
          filter: "blur(120px)",
          opacity: 0.18,
        }}
      />
      <div
        className="pointer-events-none absolute animate-float"
        style={{
          width: 500,
          height: 500,
          bottom: "-10%",
          right: "-10%",
          borderRadius: "50%",
          background: "radial-gradient(circle, #7B5CFF 0%, transparent 70%)",
          filter: "blur(120px)",
          opacity: 0.18,
          animationDelay: "3s",
        }}
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        
        {/* Header */}
        <div className={`mb-12 flex flex-col items-center justify-center text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="mb-2 text-xs font-semibold tracking-[0.3em] uppercase text-yellow">My work</p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl gradient-text">Featured Projects</h2>
        </div>

        {/* Stacked Card Carousel */}
        <div className={`relative mx-auto mt-16 mb-20 flex h-[460px] w-full max-w-[340px] sm:h-[500px] sm:max-w-[400px] items-center justify-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          
          {/* Navigation Buttons */}
          <button 
            onClick={handlePrev}
            className="absolute -left-4 sm:-left-12 md:-left-16 top-1/2 z-[60] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-surface/90 text-white shadow-xl backdrop-blur-md transition-all hover:scale-110 hover:bg-white/20 active:scale-95"
            aria-label="Previous project"
          >
            <svg className="h-5 w-5 -ml-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute -right-4 sm:-right-12 md:-right-16 top-1/2 z-[60] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-surface/90 text-white shadow-xl backdrop-blur-md transition-all hover:scale-110 hover:bg-white/20 active:scale-95"
            aria-label="Next project"
          >
            <svg className="h-5 w-5 ml-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {projects.map((p, i) => {
            const offset = (i - activeIndex + projects.length) % projects.length;
            const isFront = offset === 0;
            const isLeaving = offset === projects.length - 1;

            const zIndex = isLeaving ? 50 : 40 - offset;
            const translateY = isLeaving ? -80 : -offset * 24;
            const translateX = isLeaving ? "-120%" : "0%";
            const scale = isLeaving ? 0.9 : 1 - offset * 0.05;
            const rotate = isLeaving ? -12 : 0;
            const opacity = isLeaving ? 0 : 1 - offset * 0.15;

            return (
              <div
                key={p.title}
                className={`absolute inset-0 flex flex-col overflow-hidden rounded-[2rem] border bg-surface/80 backdrop-blur-xl shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${isFront ? 'border-white/[0.15]' : 'border-white/[0.05]'}`}
                style={{
                  zIndex,
                  transform: `translate(${translateX}, ${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
                  opacity,
                  pointerEvents: isFront ? "auto" : "none",
                  boxShadow: isFront ? '0 30px 60px -15px rgba(0, 0, 0, 0.6)' : 'none',
                }}
              >
                {/* Header Image Area */}
                <div className={`relative h-32 sm:h-40 w-full shrink-0 overflow-hidden ${p.image ? '' : `bg-gradient-to-br ${p.color}`}`}>
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 640px) 340px, 400px"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                      {/* Decorative blobs */}
                      <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
                      <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-black/30 blur-2xl" />
                    </>
                  )}
                  {/* Large watermark number */}
                  <span className="absolute -bottom-4 right-4 text-[5rem] font-black leading-none text-white/20 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content Area */}
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="mb-2 text-2xl font-extrabold tracking-tight text-white">{p.title}</h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-text-muted/90">{p.desc}</p>
                  
                  <div className="mb-6 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <TagIcon key={tag} tag={tag} />
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => setSelectedProject(p)}
                    className="group relative flex w-full items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] py-4 text-sm font-semibold text-white transition-all hover:border-white/20 hover:shadow-lg active:scale-[0.98]"
                  >
                    <div className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20 bg-gradient-to-r ${p.color}`} />
                    <span className="relative z-10 flex items-center gap-2">
                      View Details
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Slide-Out Drawer / Side Panel ── */}
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${selectedProject ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setSelectedProject(null)}
      />
      
      {/* Panel */}
      <div 
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-white/10 bg-bg shadow-2xl transition-transform duration-500 ease-in-out ${selectedProject ? "translate-x-0" : "translate-x-full"}`}
      >
        {selectedProject && (
          <>
            {/* Header Image Area */}
            <div className={`relative h-64 shrink-0 overflow-hidden ${selectedProject.image ? '' : `bg-gradient-to-br ${selectedProject.color} opacity-90`}`}>
              {selectedProject.image && (
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover object-center"
                  sizes="448px"
                />
              )}
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-black/60"
                aria-label="Close panel"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {/* Title overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-4">
                <span className="text-lg font-bold text-white">{selectedProject.title}</span>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8">
              <h3 className="mb-4 text-2xl font-bold text-text">{selectedProject.title}</h3>
              
              <div className="mb-8 flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <TagIcon key={tag} tag={tag} />
                ))}
              </div>

              <div className="mb-8">
                <h4 className="mb-3 text-sm font-semibold tracking-wider text-yellow uppercase">Overview</h4>
                <p className="text-base leading-relaxed text-text-muted">{selectedProject.longDesc}</p>
              </div>

              <div className="mt-auto flex flex-col gap-4 pt-8 sm:flex-row">
                <a 
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full py-4 text-sm font-semibold text-white transition-all gradient-bg hover:scale-[1.02] active:scale-[0.98]"
                >
                  Live Demo
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a 
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 py-4 text-sm font-semibold text-text transition-all hover:scale-[1.02] hover:bg-white/5 active:scale-[0.98]"
                >
                  Source Code
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </>
        )}
      </div>

    </section>
  );
}

