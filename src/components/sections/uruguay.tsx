"use client"

import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/lib/i18n/language-provider"
import { Landmark, Clock, Cpu, Scale } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const icons: LucideIcon[] = [Landmark, Clock, Cpu, Scale]

export function Uruguay() {
  const { t } = useLanguage()

  return (
    <section id="uruguay" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--mc-blue)]">
            05 · {t.uruguay.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.uruguay.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2">
          {t.uruguay.items.map((item, index) => {
            const Icon = icons[index % icons.length]
            return (
              <Reveal key={item.title} delay={(index % 2) * 0.08}>
                <div className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[var(--mc-navy)]/5 text-[var(--mc-navy)]">
                    <Icon className="size-5" strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 max-w-md leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
