"use client"

import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/lib/i18n/language-provider"

export function Sla() {
  const { t } = useLanguage()

  return (
    <section id="sla" className="bg-[var(--mc-navy)]">
      <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--mc-blue)]">
            04 · {t.sla.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.sla.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/75">
            {t.sla.lead}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04]">
            {/* header row */}
            <div className="grid grid-cols-3 border-b border-white/15 bg-white/[0.04]">
              {t.sla.columns.map((col, i) => (
                <div
                  key={col}
                  className={`px-5 py-4 font-mono text-xs uppercase tracking-[0.14em] text-white/60 ${
                    i === 0 ? "" : "text-center"
                  }`}
                >
                  {col}
                </div>
              ))}
            </div>
            {/* data rows */}
            {t.sla.rows.map((row, i) => (
              <div
                key={row.severity}
                className={`grid grid-cols-3 items-center ${
                  i > 0 ? "border-t border-white/10" : ""
                }`}
              >
                <div className="flex items-center gap-2.5 px-5 py-5">
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
                  <span className="font-heading font-semibold text-white">
                    {row.severity}
                  </span>
                </div>
                <div className="px-5 py-5 text-center font-heading text-lg font-semibold text-white">
                  {row.response}
                </div>
                <div className="px-5 py-5 text-center text-white/80">
                  {row.resolution}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/60">
            {t.sla.footnote}
          </p>

          <a
            href="#contacto"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--mc-blue)] underline-offset-4 hover:underline"
          >
            {t.sla.cta} →
          </a>
        </Reveal>
      </div>
    </section>
  )
}
