"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/lib/i18n/language-provider"
import { slaContent } from "@/lib/i18n/sla-content"
import { Clock, Radio, MessagesSquare, FileBarChart, ArrowLeft } from "lucide-react"

const coverageIcons = [Clock, Radio, MessagesSquare, FileBarChart]

export default function SlaPage() {
  const { lang } = useLanguage()
  const c = slaContent[lang]

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader solid />
      <main className="flex-1">
        {/* header band */}
        <section className="bg-[var(--mc-navy)]">
          <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft className="size-3.5" />
              {c.back}
            </a>
            <p className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-[var(--mc-blue)]">
              {c.eyebrow}
            </p>
            <h1 className="mt-3 max-w-3xl font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              {c.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
              {c.intro}
            </p>
          </div>
        </section>

        {/* severity table */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <Reveal>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                {c.tableTitle}
              </h2>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-border">
                      {c.columns.map((col, i) => (
                        <th
                          key={col}
                          className={`py-3 pr-4 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground ${
                            i > 0 && i < 3 ? "text-center" : ""
                          }`}
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {c.rows.map((row, i) => (
                      <tr key={row.s} className={i > 0 ? "border-t border-border/70" : ""}>
                        <td className="py-4 pr-4">
                          <span className="flex items-center gap-2.5">
                            <span
                              aria-hidden="true"
                              className={`size-2 rounded-full ${
                                i === 0
                                  ? "bg-[var(--mc-blue)]"
                                  : i === 1
                                    ? "bg-[var(--mc-blue)]/70"
                                    : "bg-muted-foreground/40"
                              }`}
                            />
                            <span className="font-heading font-semibold text-foreground">
                              {row.s}
                            </span>
                          </span>
                        </td>
                        <td className="py-4 pr-4 text-center font-heading text-lg font-semibold text-[var(--mc-navy)]">
                          {row.r}
                        </td>
                        <td className="py-4 pr-4 text-center text-foreground">{row.res}</td>
                        <td className="py-4 text-sm leading-relaxed text-muted-foreground">
                          {row.d}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>
        </section>

        {/* coverage */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <Reveal>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                {c.coverageTitle}
              </h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
              {c.coverage.map((item, i) => {
                const Icon = coverageIcons[i % coverageIcons.length]
                return (
                  <Reveal key={item.t} delay={(i % 2) * 0.08}>
                    <div className="flex gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-[var(--mc-navy)]/5 text-[var(--mc-navy)]">
                        <Icon className="size-5" strokeWidth={1.7} />
                      </span>
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-foreground">
                          {item.t}
                        </h3>
                        <p className="mt-1.5 leading-relaxed text-muted-foreground">
                          {item.d}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* exclusions */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
            <Reveal className="max-w-3xl">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                {c.exclusionsTitle}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {c.exclusions}
              </p>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[var(--mc-navy)]">
          <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6">
            <h2 className="mx-auto max-w-2xl font-heading text-2xl font-bold text-white sm:text-3xl">
              {c.ctaTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/75">
              {c.ctaText}
            </p>
            <a
              href="/#contacto"
              className="mt-8 inline-flex h-12 items-center rounded-full bg-[var(--mc-blue)] px-8 text-base font-semibold text-white transition-colors hover:bg-[#3dabe7]"
            >
              {c.cta}
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
