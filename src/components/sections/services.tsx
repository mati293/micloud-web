"use client"

import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/lib/i18n/language-provider"
import {
  Rocket,
  Server,
  ShieldCheck,
  BrainCircuit,
  Code2,
  TrendingUp,
  Headset,
  Compass,
} from "lucide-react"

const icons = [
  Rocket,
  Server,
  ShieldCheck,
  BrainCircuit,
  Code2,
  TrendingUp,
  Headset,
  Compass,
]

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="servicios" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--mc-blue)]">
            03 · {t.services.label}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t.services.subtitle}
          </p>
        </Reveal>

        {/* 8 servicios → 2 filas de 4 en desktop */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((service, index) => {
            const Icon = icons[index % icons.length]
            return (
              <Reveal key={service.name} delay={(index % 4) * 0.07}>
                <a
                  href="#contacto"
                  className="group flex h-full flex-col items-center rounded-xl border border-border bg-card p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--mc-blue)]/60 hover:shadow-lg"
                >
                  <span className="flex size-12 items-center justify-center rounded-lg bg-[var(--mc-navy)]/5 text-[var(--mc-navy)] transition-colors group-hover:bg-[var(--mc-blue)]/10 group-hover:text-[var(--mc-blue)]">
                    <Icon className="size-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-semibold leading-snug text-foreground">
                    {service.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.body}
                  </p>
                  <span className="mt-4 text-xs font-semibold text-[var(--mc-navy)] opacity-0 transition-opacity group-hover:opacity-100">
                    {t.services.cta} →
                  </span>
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
