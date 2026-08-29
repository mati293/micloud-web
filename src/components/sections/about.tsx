"use client"

import { LineNode } from "@/components/line-node"
import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/lib/i18n/language-provider"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="quienes-somos">
      <Reveal className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[14rem_1fr]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--mc-blue)]">
              01
            </p>
            <h2 className="mt-2 font-heading text-xl font-semibold text-foreground">
              {t.about.title}
            </h2>
            <LineNode className="mt-5 max-w-[8rem]" />
          </div>

          <p className="max-w-2xl text-xl leading-relaxed text-foreground/90 sm:text-2xl sm:leading-relaxed">
            {t.about.body}
          </p>
        </div>
      </Reveal>
    </section>
  )
}
