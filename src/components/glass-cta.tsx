"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * CTA pill with a clean liquid-glass treatment: brand-blue tint,
 * backdrop blur and inner specular highlight (no SVG distortion,
 * which warps small surfaces).
 */
export function GlassCta({
  href,
  children,
  className,
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      className={cn(
        "group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full font-semibold text-white transition-transform duration-300 hover:scale-[1.04]",
        className
      )}
      style={{
        boxShadow: "0 6px 18px rgba(0, 0, 0, 0.25)",
      }}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[var(--mc-blue)]/45 backdrop-blur-md transition-colors duration-300 group-hover:bg-[var(--mc-blue)]/65"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow:
            "inset 2px 2px 1px 0 rgba(255, 255, 255, 0.45), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.22)",
        }}
      />
      <span className="relative">{children}</span>
    </a>
  )
}
