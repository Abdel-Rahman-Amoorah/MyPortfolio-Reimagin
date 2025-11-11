"use client"

import { Globe } from "lucide-react"
import { Button } from "./ui/button"
import { useState, useEffect } from "react"

export function LanguageToggle() {
  const [lang, setLang] = useState<string | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem("lang") || "en"
    setLang(saved)
    document.documentElement.lang = saved
    document.documentElement.dir = saved === "ar" ? "rtl" : "ltr"
  }, [])

  // 🧠 Don’t render anything until hydrated
  if (lang === null) return null

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en"
    localStorage.setItem("lang", newLang)
    document.documentElement.lang = newLang
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr"
    window.location.reload()
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      title={lang === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
    >
      <Globe className="h-5 w-5" />
      <span className="sr-only">Toggle Language</span>
    </Button>
  )
}
