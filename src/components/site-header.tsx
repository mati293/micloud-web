"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"
import { LanguageToggle } from "@/components/language-toggle"
import { GlassCta } from "@/components/glass-cta"
import { useLanguage } from "@/lib/i18n/language-provider"
import { cn } from "@/lib/utils"

export function SiteHeader({ solid = false }: { solid?: boolean }) {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const base = solid ? "/" : ""

  const links = [
    { href: `${base}#modelo`, label: t.nav.model },
    { href: `${base}#servicios`, label: t.nav.services },
    { href: `${base}#sla`, label: t.nav.sla },
    { href: `${base}#nosotros`, label: t.nav.about },
    { href: `${base}#faq`, label: t.nav.faq },
  ]

  return (
    <header
      className={cn(
        "z-50",
        solid
          ? "sticky top-0 border-b border-border bg-background/90 backdrop-blur"
          : "absolute inset-x-0 top-0"
      )}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href={solid ? "/" : "#top"} className="shrink-0">
          <Logo light={!solid} className="text-xl sm:text-2xl" />
        </a>

        {/* desktop nav */}
        <nav
          className={cn(
            "hidden items-center gap-7 text-sm font-semibold lg:flex",
            solid ? "text-muted-foreground" : "text-white/85"
          )}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors",
                solid ? "hover:text-[var(--mc-navy)]" : "hover:text-white"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle
            className={cn(!solid && "border-white/25 bg-white/10 text-white")}
          />
          <div className="hidden sm:block">
            <GlassCta href={`${base}#contacto`} className="px-5 py-2 text-sm">
              {t.nav.cta}
            </GlassCta>
          </div>
          {/* mobile menu button */}
          <button
            type="button"
            aria-label="Menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "inline-flex size-9 items-center justify-center rounded-lg lg:hidden",
              solid
                ? "text-foreground hover:bg-muted"
                : "text-white hover:bg-white/10"
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* mobile menu panel */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-semibold text-foreground last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`${base}#contacto`}
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex h-11 items-center justify-center rounded-full bg-[var(--mc-navy)] px-5 text-sm font-semibold text-white"
            >
              {t.nav.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
