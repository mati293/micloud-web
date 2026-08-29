"use client"

import { Logo } from "@/components/logo"
import { LineNode } from "@/components/line-node"
import { useLanguage } from "@/lib/i18n/language-provider"

export function SiteFooter() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Logo className="text-lg" />
            <p className="mt-1 text-sm text-muted-foreground">
              {t.footer.tagline}
            </p>
          </div>
          <p className="font-mono text-xs leading-relaxed text-muted-foreground/80">
            {t.footer.address}
          </p>
        </div>

        <LineNode className="mt-8" />

        <p className="mt-4 text-xs text-muted-foreground/70">
          © {year} MiCloud SAS. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
