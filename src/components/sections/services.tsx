"use client"

import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/lib/i18n/language-provider"
import { ArrowUpRight } from "lucide-react"

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="servicios" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--mc-blue)]">
            03 · {t.services.eyebrow}
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            {t.services.title}
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">{t.services.subtitle}</p>
        </Reveal>

        {/* Featured — the 3 entry points, as spec cards */}
        <p className="mt-14 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {t.services.featuredLabel}
        </p>
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          {t.services.featured.map((service, index) => (
            <Reveal key={service.name} delay={index * 0.08}>
              <a
                href="#contacto"
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--mc-blue)]/50 hover:shadow-[0_20px_50px_-25px_rgba(8,52,89,0.5)]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-[var(--mc-blue)]">
                    S.{String(index + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight className="size-5 text-muted-foreground/40 transition-colors group-hover:text-[var(--mc-blue)]" />
                </div>
                <h3 className="mt-6 font-heading text-xl font-semibold leading-snug text-foreground">
                  {service.name}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                  {service.body}
                </p>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Secondary — the 5 more, as a spec list */}
        <p className="mt-16 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {t.services.moreLabel}
        </p>
        <div className="mt-2">
          {t.services.more.map((service, index) => (
            <Reveal key={service.name} delay={(index % 5) * 0.05}>
              <div className="grid grid-cols-[3rem_1fr] items-baseline gap-4 border-t border-border py-5 sm:grid-cols-[4rem_16rem_1fr] sm:gap-6">
                <span className="font-mono text-sm text-muted-foreground">
                  S.{String(index + 4).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {service.name}
                </h3>
                <p className="col-span-2 text-sm leading-relaxed text-muted-foreground sm:col-span-1">
                  {service.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
