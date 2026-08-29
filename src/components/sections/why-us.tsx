"use client"

import { LineNode } from "@/components/line-node"
import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/lib/i18n/language-provider"

export function WhyUs() {
  const { t } = useLanguage()

  return (
    <section className="border-t border-border bg-card">
      <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--mc-blue)]">
            02
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.why.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t.why.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2">
          {t.why.items.map((item, index) => (
            <Reveal key={item.title} delay={(index % 2) * 0.1}>
              <LineNode className="max-w-[5rem]" />
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 max-w-md leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
