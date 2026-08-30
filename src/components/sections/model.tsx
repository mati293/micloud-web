"use client"

import { Reveal } from "@/components/reveal"
import { GcDiagram } from "@/components/gc-diagram"
import { useLanguage } from "@/lib/i18n/language-provider"

export function Model() {
  const { t } = useLanguage()

  return (
    <section id="modelo" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="lg:pt-4">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--mc-blue)]">
              02 · {t.model.eyebrow}
            </p>
            <h2 className="mt-3 font-heading fs-h2 font-bold text-balance text-foreground">
              {t.model.title}
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              {t.model.body}
            </p>
            <p className="mt-4 font-heading text-lg font-semibold text-foreground">
              {t.model.bodyStrong}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {t.model.body2}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <GcDiagram />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
