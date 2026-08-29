import { cn } from "@/lib/utils"

/**
 * Brand signature: the brandbook's circuit line ending in a node,
 * reduced to its minimal form — a hairline with a filled dot.
 */
export function LineNode({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("flex items-center", className)}
    >
      <span className="h-px flex-1 bg-border" />
      <span className="size-1.5 rounded-full bg-[var(--mc-blue)]" />
    </span>
  )
}
