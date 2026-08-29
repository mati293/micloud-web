"use client"

import Image from "next/image"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import { useLanguage } from "@/lib/i18n/language-provider"

export function Showcase() {
  const { t } = useLanguage()

  return (
    <section className="relative z-10 bg-background pt-12 pb-20">
      <ContainerScroll
        titleComponent={
          <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t.showcase.titleTop}
            <br />
            <span className="text-[var(--mc-blue)]">
              {t.showcase.titleAccent}
            </span>
          </h2>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2400&auto=format&fit=crop"
          alt="Panel de monitoreo y analítica de la operación de TI"
          height={720}
          width={1400}
          className="mx-auto h-full rounded-2xl object-cover object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  )
}
