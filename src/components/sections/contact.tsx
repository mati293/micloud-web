"use client"

import { useState, type FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from "@/lib/i18n/language-provider"

const CONTACT_EMAIL = "contacto@micloud.uy"

export function Contact() {
  const { t } = useLanguage()
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") ?? "")
    const company = String(data.get("company") ?? "")
    const email = String(data.get("email") ?? "")
    const message = String(data.get("message") ?? "")

    const subject = encodeURIComponent(`Solicitud de propuesta — ${company || name}`)
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmpresa: ${company}\nEmail: ${email}\n\n${message}`
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contacto" className="bg-[var(--mc-navy)]">
      <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--mc-blue)]">
              05
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {t.contact.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              {t.contact.subtitle}
            </p>
            <p className="mt-8 text-sm text-white/60">
              {t.contact.direct}{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-semibold text-[var(--mc-blue)] underline-offset-4 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="name">{t.contact.form.name}</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="company">{t.contact.form.company}</Label>
                <Input
                  id="company"
                  name="company"
                  placeholder={t.contact.form.companyPlaceholder}
                />
              </div>
            </div>

            <div className="mt-5 space-y-1.5">
              <Label htmlFor="email">{t.contact.form.email}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder={t.contact.form.emailPlaceholder}
              />
            </div>

            <div className="mt-5 space-y-1.5">
              <Label htmlFor="message">{t.contact.form.message}</Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                placeholder={t.contact.form.messagePlaceholder}
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex h-12 w-full cursor-pointer items-center justify-center rounded-md bg-[var(--mc-navy)] px-6 text-base font-semibold text-white transition-colors hover:bg-[var(--mc-navy-light)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {t.contact.form.submit}
            </button>

            {sent && (
              <p className="mt-4 text-center text-sm text-muted-foreground">
                {t.contact.direct}{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-semibold text-[var(--mc-navy)] hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
