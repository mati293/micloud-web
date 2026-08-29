"use client"

import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/lib/i18n/language-provider"

export function Steps() {
  const { t } = useLanguage()

  return (
    <section id="como-empezamos" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--mc-blue)]">
            07 · {t.steps.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.steps.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.items.map((step, index) => (
            <Reveal key={step.n} delay={(index % 4) * 0.08}>
              <div className="flex h-full flex-col border-t-2 border-[var(--mc-blue)]/30 pt-5">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-2xl font-semibold text-[var(--mc-blue)]">
                    {step.n}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                    {step.time}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
