"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useLanguage } from "@/lib/i18n/language-provider"
import { privacyContent } from "@/lib/i18n/privacy-content"
import { withBase } from "@/lib/base"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
  const { lang } = useLanguage()
  const c = privacyContent[lang]

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader solid />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <a
            href={withBase("/")}
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-[var(--mc-blue)]"
          >
            <ArrowLeft className="size-3.5" />
            {c.back}
          </a>

          <p className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-[var(--mc-blue)]">
            {c.eyebrow}
          </p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-foreground">
            {c.title}
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">{c.updated}</p>
          <p className="mt-4 rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
            {c.draftNote}
          </p>

          <div className="mt-10 space-y-9">
            {c.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-heading text-lg font-semibold text-foreground">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="mt-3 leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-3 space-y-1.5">
                    {section.list.map((item) => (
                      <li key={item} className="flex gap-2.5 leading-relaxed text-muted-foreground">
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--mc-blue)]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
