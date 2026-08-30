"use client"

import { useState, type FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/lib/i18n/language-provider"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

const CONTACT_EMAIL = "contacto@micloud.uy"
const CONTACT_PHONE = "+598 2518 2723"
const WHATSAPP_URL = "https://wa.me/59825182723"

const selectClass =
  "h-9 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"

export function Contact() {
  const { t } = useLanguage()
  const f = t.contact.form
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const get = (k: string) => String(data.get(k) ?? "")
    const subject = encodeURIComponent(
      `Consulta web — ${get("company") || get("name")}`
    )
    const body = encodeURIComponent(
      [
        `Nombre: ${get("name")}`,
        `Empresa: ${get("company")}`,
        `Email: ${get("email")}`,
        `Teléfono: ${get("phone")}`,
        `País: ${get("country")}`,
        `Nº de empleados: ${get("size")}`,
        `Necesita: ${get("need")}`,
        "",
        get("message"),
      ].join("\n")
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contacto" className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          {/* left: intro + direct contact */}
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--mc-blue)]">
              07 · {t.contact.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.contact.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {t.contact.subtitle}
            </p>

            <div className="mt-8 space-y-3 text-sm">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-3 text-foreground transition-colors hover:text-[var(--mc-blue)]"
              >
                <Mail className="size-4 text-[var(--mc-blue)]" />
                {CONTACT_EMAIL}
              </a>
              <a
                href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-foreground transition-colors hover:text-[var(--mc-blue)]"
              >
                <Phone className="size-4 text-[var(--mc-blue)]" />
                {CONTACT_PHONE}
              </a>
              <p className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--mc-blue)]" />
                {t.footer.address}
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-10 items-center gap-2 rounded-full border border-border bg-background px-5 text-sm font-semibold text-foreground transition-colors hover:border-[var(--mc-blue)]/50"
            >
              <MessageCircle className="size-4 text-[var(--mc-blue)]" />
              {t.contact.whatsapp}
            </a>
          </Reveal>

          {/* right: form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="hairline rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="name">{f.name}</Label>
                  <Input id="name" name="name" required placeholder={f.namePlaceholder} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="company">{f.company}</Label>
                  <Input id="company" name="company" required placeholder={f.companyPlaceholder} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">{f.email}</Label>
                  <Input id="email" name="email" type="email" required placeholder={f.emailPlaceholder} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone">{f.phone}</Label>
                  <Input id="phone" name="phone" type="tel" placeholder={f.phonePlaceholder} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="country">{f.country}</Label>
                  <select id="country" name="country" required defaultValue="" className={selectClass}>
                    <option value="" disabled>{f.placeholderSelect}</option>
                    {f.countryOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="size">{f.size}</Label>
                  <select id="size" name="size" required defaultValue="" className={selectClass}>
                    <option value="" disabled>{f.placeholderSelect}</option>
                    {f.sizeOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-5 space-y-1.5">
                <Label htmlFor="need">{f.need}</Label>
                <select id="need" name="need" required defaultValue="" className={selectClass}>
                  <option value="" disabled>{f.placeholderSelect}</option>
                  {f.needOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>

              <div className="mt-5 space-y-1.5">
                <Label htmlFor="message">{f.message}</Label>
                <Textarea id="message" name="message" rows={4} placeholder={f.messagePlaceholder} />
              </div>

              <label className="mt-5 flex items-start gap-2.5 text-sm text-muted-foreground">
                <input type="checkbox" name="consent" required className="mt-0.5 size-4 accent-[var(--mc-blue)]" />
                <span>{f.consent}</span>
              </label>

              <button
                type="submit"
                className="glow-primary mt-6 inline-flex h-12 w-full cursor-pointer items-center justify-center rounded-full bg-[var(--mc-blue)] px-6 text-base font-semibold text-[var(--primary-foreground)] transition-colors hover:bg-[var(--mc-blue-bright)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {f.submit}
              </button>

              {sent && (
                <p className="mt-4 rounded-lg bg-[var(--mc-blue)]/10 px-4 py-3 text-center text-sm text-[var(--mc-blue)]">
                  {t.contact.success}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
