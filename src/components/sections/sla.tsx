"use client"

import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/lib/i18n/language-provider"
import { withBase } from "@/lib/base"
import { ArrowRight } from "lucide-react"

export function Sla() {
  const { t } = useLanguage()

  return (
    <section id="sla" className="relative overflow-hidden bg-[var(--mc-navy)] text-white">
      {/* engineering-spec grid */}
      <div
        aria-hidden="true"
        className="blueprint-grid blueprint-grid-fade pointer-events-none absolute inset-0 text-[var(--mc-blue)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--mc-blue)]">
            04 · {t.sla.eyebrow}
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            {t.sla.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70">{t.sla.lead}</p>
        </Reveal>

        {/* the numbers — the signature */}
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {t.sla.rows.map((row, i) => (
            <Reveal
              key={row.severity}
              delay={i * 0.07}
              className="flex flex-col bg-[var(--mc-navy)] p-6"
            >
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-white/60">
                <span
                  aria-hidden="true"
                  className={`size-2 rounded-full ${
                    i === 0
                      ? "bg-[var(--mc-blue)]"
                      : i === 1
                        ? "bg-[var(--mc-blue)]/70"
                        : "bg-white/40"
                  }`}
                />
                {row.severity}
              </div>
              <div className="mt-6 font-heading text-4xl font-bold tabular tracking-tight lg:text-5xl">
                {row.response}
              </div>
              <div className="mt-1 font-mono text-xs uppercase tracking-wide text-white/45">
                {t.sla.columns[1]}
              </div>
              <div className="mt-5 border-t border-white/10 pt-4 text-sm text-white/70">
                <span className="tabular font-semibold text-white">{row.resolution}</span>{" "}
                <span className="text-white/45">· {t.sla.columns[2]}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-white/55">
            {t.sla.footnote}
          </p>
          <a
            href={withBase("/sla")}
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[var(--mc-blue)]"
          >
            {t.sla.cta}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
