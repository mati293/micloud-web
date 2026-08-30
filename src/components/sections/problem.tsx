"use client"

import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/lib/i18n/language-provider"

export function Problem() {
  const { t } = useLanguage()

  return (
    <section id="problema" className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--mc-blue)]">
            01 · {t.problem.eyebrow}
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            {t.problem.title}
          </h2>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-foreground/70">
            {t.problem.lead}
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {t.problem.items.map((item, index) => (
            <Reveal
              key={item.title}
              delay={(index % 2) * 0.08}
              className="bg-card p-7 sm:p-8"
            >
              <span className="font-mono text-sm text-[var(--mc-blue)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
