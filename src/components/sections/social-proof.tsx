"use client"

import { useLanguage } from "@/lib/i18n/language-provider"

export function SocialProof() {
  const { t } = useLanguage()

  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xs">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {t.social.title}
            </p>
            <p className="mt-2 text-xs italic text-muted-foreground/70">
              {t.social.note}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-6">
            {t.social.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-3xl font-bold text-[var(--mc-navy)]">
                  {stat.value}
                </div>
                <div className="mt-1 max-w-[9rem] text-xs leading-snug text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 border-t border-border pt-6 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground/80">
          {t.social.industries.join("  ·  ")}
        </p>
      </div>
    </section>
  )
}
