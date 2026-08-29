import { cn } from "@/lib/utils"

export function Logo({
  className,
  light = false,
}: {
  className?: string
  light?: boolean
}) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline font-heading font-bold tracking-tight",
        className
      )}
    >
      <span className={light ? "text-white" : "text-[var(--mc-navy)]"}>Mi</span>
      <span className="text-[var(--mc-blue)]">Cloud</span>
    </span>
  )
}
