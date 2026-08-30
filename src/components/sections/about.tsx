"use client"

import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/lib/i18n/language-provider"
import { User } from "lucide-react"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="nosotros" className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--mc-blue)]">
              06 · {t.about.eyebrow}
            </p>
            <h2 className="mt-3 font-heading fs-h2 font-bold text-balance text-foreground">
              {t.about.title}
            </h2>
            <p className="mt-5 fs-lead text-pretty text-foreground/85">
              {t.about.body1}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {t.about.body2}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6">
            {/* team placeholder */}
            <div className="grid grid-cols-3 gap-4">
              {[0, 1, 2].map((i) => (
                <div key={i} className="text-center">
                  <div className="mx-auto flex aspect-square w-full items-center justify-center rounded-xl border border-dashed border-border bg-background text-muted-foreground/50">
                    <User className="size-8" strokeWidth={1.5} />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center font-mono text-xs text-muted-foreground/70">
              {t.about.teamNote}
            </p>

            {/* trust / Kosmos placeholder */}
            <div className="rounded-2xl border border-border bg-background p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {t.about.trustLabel}
              </p>
              <p className="mt-3 font-heading text-lg font-semibold text-foreground">
                {t.about.trustName}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t.about.trustNote}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
