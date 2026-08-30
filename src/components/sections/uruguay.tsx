"use client"

import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/lib/i18n/language-provider"

export function Uruguay() {
  const { t } = useLanguage()

  return (
    <section id="uruguay" className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[20rem_1fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--mc-blue)]">
              05 · {t.uruguay.eyebrow}
            </p>
            <h2 className="mt-4 font-heading fs-h2 font-bold text-balance text-foreground">
              {t.uruguay.title}
            </h2>
          </Reveal>

          <div>
            {t.uruguay.items.map((item, index) => (
              <Reveal key={item.title} delay={(index % 2) * 0.06}>
                <div className="group grid grid-cols-[2.5rem_1fr] gap-4 border-t border-border py-6 transition-colors duration-300 first:border-t-0 first:pt-0 hover:border-[var(--mc-blue)]/40 sm:grid-cols-[3rem_1fr] sm:gap-6">
                  <span className="font-mono text-sm text-muted-foreground transition-colors duration-300 group-hover:text-[var(--mc-blue)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading fs-h3 font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
