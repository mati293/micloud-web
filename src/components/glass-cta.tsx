"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/**
 * Premium liquid-glass CTA: frosted blur, brand-blue tint, inner specular
 * highlight and an electric-blue glow. House easing on hover.
 */
export function GlassCta({
  href,
  children,
  className,
  target,
}: {
  href: string
  children: ReactNode
  className?: string
  target?: string
}) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={cn(
        "group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full font-semibold text-white transition-[transform,box-shadow] duration-500 hover:-translate-y-0.5",
        "shadow-[0_10px_34px_-10px_rgba(27,154,225,0.5)] hover:shadow-[0_16px_44px_-10px_rgba(27,154,225,0.7)]",
        className
      )}
    >
      {/* frosted base */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[var(--mc-blue)]/25 backdrop-blur-md transition-colors duration-500 group-hover:bg-[var(--mc-blue)]/40"
      />
      {/* top sheen */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/25 to-transparent"
      />
      {/* inner hairline highlight */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow:
            "inset 0 1px 0.5px rgba(255,255,255,0.55), inset 0 0 0 0.5px rgba(255,255,255,0.18)",
        }}
      />
      <span className="relative">{children}</span>
    </a>
  )
}
