"use client"

import { useLanguage } from "@/lib/i18n/language-provider"
import { cn } from "@/lib/utils"

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage()

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-card/60 p-0.5 text-xs font-semibold",
        className
      )}
    >
      {(["es", "en"] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLang(option)}
          aria-pressed={lang === option}
          className={cn(
            "cursor-pointer rounded-full px-2.5 py-1 uppercase transition-all",
            lang === option
              ? "bg-[var(--mc-blue)] text-white"
              : "text-current opacity-60 hover:opacity-100"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
