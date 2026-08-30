"use client"

import { ArrowRight } from "lucide-react"
import { GlassCta } from "@/components/glass-cta"
import { useLanguage } from "@/lib/i18n/language-provider"
import { withBase } from "@/lib/base"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="relative">
      <div className="relative flex min-h-svh flex-col overflow-hidden bg-[var(--mc-navy)]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={withBase("/hero-poster.jpg")}
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={withBase("/hero-video.mp4")} type="video/mp4" />
        </video>
        {/* legibility overlay */}
        <div className="absolute inset-0 bg-[var(--mc-navy)]/70" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#051320]/90 via-[#051320]/55 to-[#083459]/40" />
        {/* engineering-spec grid, tying the hero to the SLA section */}
        <div
          aria-hidden="true"
          className="blueprint-grid pointer-events-none absolute inset-0 text-white/40 opacity-40"
        />
        {/* electric spotlight for depth */}
        <div aria-hidden="true" className="spotlight pointer-events-none absolute inset-0" />

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 pb-28 pt-32 sm:px-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/70">
            {t.hero.context}
          </p>

          <h1 className="mt-6 max-w-4xl font-heading fs-display font-bold text-balance text-white">
            {t.hero.headline1}
            <br />
            <span className="text-white/90">{t.hero.headline2}</span>
          </h1>

          <p className="mt-7 max-w-2xl fs-lead text-pretty text-white/80">
            {t.hero.subheadline}
          </p>

          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <GlassCta href="#contacto" className="px-8 py-3.5 text-base">
              {t.hero.ctaPrimary}
            </GlassCta>
            <a
              href="#sla"
              className="group inline-flex items-center gap-2 text-base font-semibold text-white underline-offset-8 transition-colors hover:text-[var(--mc-blue)]"
            >
              {t.hero.ctaSecondary}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* real context bar — no vanity counters */}
          <div className="mt-16 border-t border-white/15 pt-6">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/55">
              {t.hero.stack}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
