"use client"

import { Logo } from "@/components/logo"
import { LanguageToggle } from "@/components/language-toggle"
import { GlassCta } from "@/components/glass-cta"
import { useLanguage } from "@/lib/i18n/language-provider"

export function SiteHeader() {
  const { t } = useLanguage()

  const links = [
    { href: "#quienes-somos", label: t.nav.about },
    { href: "#servicios", label: t.nav.services },
    { href: "#faq", label: t.nav.faq },
    { href: "#contacto", label: t.nav.contact },
  ]

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="shrink-0">
          <Logo light className="text-xl sm:text-2xl" />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-white/85 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle className="border-white/25 bg-white/10 text-white" />
          <div className="hidden sm:block">
            <GlassCta href="#contacto" className="px-5 py-2 text-sm">
              {t.nav.cta}
            </GlassCta>
          </div>
        </div>
      </div>
    </header>
  )
}
