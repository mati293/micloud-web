"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/lib/i18n/language-provider"

export function Faq() {
  const { t } = useLanguage()

  return (
    <section id="faq" className="border-t border-border bg-card">
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--mc-blue)]">
            08 · {t.faq.eyebrow}
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.faq.title}
          </h2>
        </Reveal>

        <Accordion className="mt-10" defaultValue={[0]}>
          {t.faq.items.map((item, index) => (
            <AccordionItem key={item.q} value={index} className="border-border">
              <AccordionTrigger className="gap-4 text-left text-base font-semibold text-foreground">
                <span className="flex gap-4">
                  <span className="pt-px font-mono text-xs font-normal text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pl-10 leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
