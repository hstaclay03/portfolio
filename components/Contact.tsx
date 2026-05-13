"use client";

import { useIntersectionObserver } from "@/lib/hooks/useIntersectionObserver";

export default function Contact() {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="contact" ref={elementRef} className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-x-0 top-0 h-px gradient-bg opacity-20" />
      <div className="absolute left-1/4 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-purple/20 blur-[120px]" />
      <div className="absolute right-1/4 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-pink/20 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          
          {/* Left Column: Text & Info */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <p className="mb-4 text-xs font-semibold tracking-[0.3em] uppercase text-yellow">Get in touch</p>
            <h2 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl text-white">
              Let&apos;s build <br />
              <span className="gradient-text">something extraordinary.</span>
            </h2>
            <p className="mb-10 max-w-md text-base leading-relaxed text-text-muted sm:text-lg">
              I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions. Drop me a message and let&apos;s make it happen.
            </p>
            
            <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
              <div>
                <p className="mb-1 text-sm font-medium text-text/60">Email</p>
                <a href="mailto:taclaynen.sua@gmail.com" className="text-lg font-semibold text-white transition-colors hover:text-pink">
                  taclaynen.sua@gmail.com
                </a>
              </div>
              <div>
                <p className="mb-1 text-sm font-medium text-text/60">Socials</p>
                <div className="flex gap-4">
                  <a href="#" className="text-white/80 transition-colors hover:text-pink">Facebook</a>
                  <a href="#" className="text-white/80 transition-colors hover:text-purple">LinkedIn</a>
                  <a href="#" className="text-white/80 transition-colors hover:text-[#5CE1E6]">GitHub</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form inside Glass Card */}
          <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            {/* Decorative border gradient */}
            <div className="absolute -inset-[1px] rounded-[2.5rem] bg-gradient-to-br from-pink/30 via-purple/30 to-transparent opacity-50" />
            
            <form
              className="relative rounded-[2.5rem] bg-surface/60 backdrop-blur-2xl p-8 sm:p-10 shadow-2xl"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="mb-8 grid gap-6 sm:grid-cols-2">
                <div className="group">
                  <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-text/60 transition-colors group-focus-within:text-pink">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-2xl border border-white/5 bg-white/[0.02] px-5 py-4 text-sm text-white placeholder:text-white/20 outline-none transition-all focus:border-pink/50 focus:bg-white/[0.05]"
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-text/60 transition-colors group-focus-within:text-pink">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-2xl border border-white/5 bg-white/[0.02] px-5 py-4 text-sm text-white placeholder:text-white/20 outline-none transition-all focus:border-pink/50 focus:bg-white/[0.05]"
                  />
                </div>
              </div>

              <div className="mb-8 group">
                <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-text/60 transition-colors group-focus-within:text-pink">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-2xl border border-white/5 bg-white/[0.02] px-5 py-4 text-sm text-white placeholder:text-white/20 outline-none transition-all focus:border-pink/50 focus:bg-white/[0.05]"
                />
              </div>

              <button
                type="submit"
                className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full px-8 py-5 text-sm font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="absolute inset-0 gradient-bg transition-opacity group-hover:opacity-90" />
                <span className="relative z-10">Send Message</span>
                <svg className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
