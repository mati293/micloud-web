"use client"

import { ArrowRight } from "lucide-react"
import { GlassEffect, GlassFilter } from "@/components/ui/liquid-glass"
import { GlassCta } from "@/components/glass-cta"
import { useLanguage } from "@/lib/i18n/language-provider"

export function Hero() {
  const { t } = useLanguage()
  // duplicated list -> seamless marquee loop
  const marqueeItems = [...t.social.industries, ...t.social.industries]

  return (
    <section id="top" className="relative">
      <GlassFilter />
      {/* ---- Full-bleed video hero ---- */}
      <div className="relative flex min-h-svh flex-col overflow-hidden bg-[var(--mc-navy)]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* legibility overlay */}
        <div className="absolute inset-0 bg-[var(--mc-navy)]/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#051320]/70 via-transparent to-[#051320]/85" />

        {/* centered content */}
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-4 pb-40 pt-32 text-center sm:px-6">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/80">
            {t.hero.badge}
          </p>

          <h1 className="mt-5 font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {t.hero.headlineTop}
            <br />
            {t.hero.headlineBottom}{" "}
            <span className="text-[var(--mc-blue)]">{t.hero.headlineAccent}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            {t.hero.subheadlineShort}
          </p>

          <GlassCta href="#contacto" className="mt-9 px-8 py-3.5 text-base">
            {t.hero.cta}
          </GlassCta>

          {/* trusted strip + marquee */}
          <div className="mt-24 w-full">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-white/70">
              {t.hero.trusted}
            </p>
            <div
              className="relative mt-6 overflow-hidden"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
              }}
            >
              <div className="animate-marquee flex w-max items-center">
                {marqueeItems.map((industry, i) => (
                  <span
                    key={`${industry}-${i}`}
                    className="mx-8 flex items-center gap-3 whitespace-nowrap font-heading text-lg font-semibold text-white/60"
                  >
                    <span
                      aria-hidden="true"
                      className="size-1.5 rounded-full bg-[var(--mc-blue)]/70"
                    />
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ---- glass cards, integrated over the video ---- */}
        <div className="relative z-20 mx-auto w-full max-w-5xl px-4 pb-12 sm:px-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {t.hero.cards.map((card) => (
              <GlassEffect
                key={card.title}
                href={card.href}
                target="_self"
                className="h-full rounded-3xl transition-transform duration-300 hover:-translate-y-1.5 [&>div.z-30]:w-full"
              >
                <div className="flex h-full flex-col px-7 py-8 text-center">
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {card.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm font-normal leading-relaxed text-white/80">
                    {card.body}
                  </p>
                  <span className="mt-5 inline-flex items-center justify-center gap-2 text-sm font-semibold text-white">
                    <span className="flex size-6 items-center justify-center rounded-full bg-[var(--mc-blue)] text-white">
                      <ArrowRight className="size-3.5" />
                    </span>
                    {card.cta}
                  </span>
                </div>
              </GlassEffect>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
