"use client"

import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/lib/i18n/language-provider"
import {
  Headset,
  Server,
  ShieldCheck,
  Code2,
  Compass,
  TrendingUp,
  Rocket,
  BrainCircuit,
  ArrowRight,
} from "lucide-react"

const featuredIcons = [Headset, Server, ShieldCheck]
const moreIcons = [Code2, Compass, TrendingUp, Rocket, BrainCircuit]

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="servicios" className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--mc-blue)]">
            03 · {t.services.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.services.subtitle}
          </p>
        </Reveal>

        {/* Featured — the 3 entry points */}
        <div className="mt-12">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {t.services.featuredLabel}
          </p>
          <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-3">
            {t.services.featured.map((service, index) => {
              const Icon = featuredIcons[index % featuredIcons.length]
              return (
                <Reveal key={service.name} delay={index * 0.08}>
                  <a
                    href="#contacto"
                    className="group flex h-full flex-col rounded-2xl border border-border bg-background p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--mc-blue)]/50 hover:shadow-lg"
                  >
                    <span className="flex size-12 items-center justify-center rounded-xl bg-[var(--mc-navy)] text-white">
                      <Icon className="size-6" strokeWidth={1.7} />
                    </span>
                    <h3 className="mt-5 font-heading text-lg font-semibold leading-snug text-foreground">
                      {service.name}
                    </h3>
                    <p className="mt-2 flex-1 leading-relaxed text-muted-foreground">
                      {service.body}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--mc-navy)] transition-colors group-hover:text-[var(--mc-blue)]">
                      {t.services.cta}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </a>
                </Reveal>
              )
            })}
          </div>
        </div>

        {/* Secondary — the 5 more */}
        <div className="mt-14">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {t.services.moreLabel}
          </p>
          <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.more.map((service, index) => {
              const Icon = moreIcons[index % moreIcons.length]
              return (
                <Reveal key={service.name} delay={(index % 3) * 0.06}>
                  <div className="flex gap-3.5">
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-[var(--mc-navy)]/5 text-[var(--mc-navy)]">
                      <Icon className="size-4.5" strokeWidth={1.7} />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-foreground">
                        {service.name}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {service.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
