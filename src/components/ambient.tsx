import { cn } from "@/lib/utils"

/**
 * Soft blurred glow orb for section backgrounds — adds depth so dark
 * sections don't read as flat/empty. Purely decorative.
 */
export function AmbientGlow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full blur-[130px]",
        className
      )}
    />
  )
}
