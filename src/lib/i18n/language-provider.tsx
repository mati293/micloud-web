"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { dictionaries, type Lang } from "./dictionaries"

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (typeof dictionaries)["es"]
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = "mc-lang"

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es")

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "es" || stored === "en") {
      setLangState(stored)
    }
  }, [])

  function setLang(next: Lang) {
    setLangState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return ctx
}
