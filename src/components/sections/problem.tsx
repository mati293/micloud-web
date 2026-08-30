"use client"

import { Reveal } from "@/components/reveal"
import { AmbientGlow } from "@/components/ambient"
import { useLanguage } from "@/lib/i18n/language-provider"

export function Problem() {
  const { t } = useLanguage()

  return (
    <section id="problema" className="relative overflow-hidden border-t border-border bg-card">
      <AmbientGlow className="right-[-8rem] top-[-6rem] size-[30rem] bg-[var(--mc-blue)]/8" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--mc-blue)]">
            01 · {t.problem.eyebrow}
          </p>
          <h2 className="mt-4 font-heading fs-h2 font-bold text-balance text-foreground">
            {t.problem.title}
          </h2>
          <p className="mt-6 max-w-2xl fs-lead text-pretty text-foreground/70">
            {t.problem.lead}
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {t.problem.items.map((item, index) => (
            <Reveal
              key={item.title}
              delay={(index % 2) * 0.08}
              className="group bg-card p-7 transition-colors duration-300 hover:bg-[var(--panel-2)] sm:p-8"
            >
              <span className="font-mono text-sm text-[var(--mc-blue)] transition-opacity duration-300 group-hover:opacity-100">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-heading fs-h3 font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground text-pretty">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
