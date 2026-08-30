"use client"

import { useLanguage } from "@/lib/i18n/language-provider"

function Connector({ tone = "muted" }: { tone?: "muted" | "brand" }) {
  return (
    <span
      aria-hidden="true"
      className={`h-4 w-0.5 ${tone === "brand" ? "bg-[var(--mc-blue)]/50" : "bg-border"}`}
    />
  )
}

/**
 * "Antes / Con MiCloud" — the single-point-of-contact diagram.
 * Left: client wired to four disconnected vendors.
 * Right: everything funnels through MiCloud as the one owner.
 */
export function GcDiagram() {
  const { t } = useLanguage()
  const d = t.model.diagram

  const vendorChip =
    "rounded-md border px-3 py-2 text-center text-sm font-medium"

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {/* ---- Antes ---- */}
      <figure className="hairline rounded-2xl border border-border bg-card p-6">
        <figcaption className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {d.before}
        </figcaption>

        <div className="mt-5 flex flex-col items-center">
          <div className="w-full rounded-lg border border-border bg-[var(--ground)] px-4 py-3 text-center font-heading font-semibold text-foreground">
            {d.client}
          </div>
          <Connector />
          <div className="grid w-full grid-cols-2 gap-2">
            {d.vendors.map((v) => (
              <span
                key={v}
                className={`${vendorChip} border-border bg-[var(--ground)] text-muted-foreground`}
              >
                {v}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-5 text-center font-mono text-xs text-muted-foreground">
          {d.beforeNote}
        </p>
      </figure>

      {/* ---- Con MiCloud ---- */}
      <figure className="rounded-2xl border-2 border-[var(--mc-blue)]/30 bg-card p-6 glow-primary-soft">
        <figcaption className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--mc-blue)]">
          {d.after}
        </figcaption>

        <div className="mt-5 flex flex-col items-center">
          <div className="w-full rounded-lg border border-border bg-[var(--ground)] px-4 py-3 text-center font-heading font-semibold text-foreground">
            {d.client}
          </div>
          <Connector tone="brand" />
          <div className="glow-primary w-full rounded-lg bg-[var(--mc-blue)] px-4 py-3 text-center font-heading font-semibold text-[var(--primary-foreground)]">
            MiCloud
          </div>
          <Connector tone="brand" />
          <div className="grid w-full grid-cols-2 gap-2 rounded-lg border border-dashed border-[var(--mc-blue)]/40 p-2">
            {d.vendors.map((v) => (
              <span
                key={v}
                className={`${vendorChip} border-transparent bg-[var(--mc-blue)]/8 text-foreground`}
              >
                {v}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-5 text-center font-mono text-xs text-[var(--mc-blue)]">
          {d.afterNote}
        </p>
      </figure>
    </div>
  )
}
