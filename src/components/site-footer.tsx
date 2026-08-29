"use client"

import { Logo } from "@/components/logo"
import { LineNode } from "@/components/line-node"
import { useLanguage } from "@/lib/i18n/language-provider"

export function SiteFooter() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Logo className="text-lg" />
            <p className="mt-1 text-sm text-muted-foreground">{t.footer.tagline}</p>
          </div>
          <div className="text-sm sm:text-right">
            <p className="font-mono text-xs leading-relaxed text-muted-foreground/80">
              {t.footer.address}
            </p>
            <p className="mt-2 flex gap-4 sm:justify-end">
              <a
                href="mailto:contacto@micloud.uy"
                className="text-foreground transition-colors hover:text-[var(--mc-blue)]"
              >
                contacto@micloud.uy
              </a>
              <a
                href="tel:+59825182723"
                className="text-foreground transition-colors hover:text-[var(--mc-blue)]"
              >
                +598 2518 2723
              </a>
            </p>
          </div>
        </div>

        <LineNode className="mt-8" />

        <div className="mt-4 flex flex-col gap-2 text-xs text-muted-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {t.footer.company}. {t.footer.rights}
          </p>
          <p className="flex gap-4">
            <a href="/privacidad" className="transition-colors hover:text-foreground">
              {t.footer.privacy}
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
