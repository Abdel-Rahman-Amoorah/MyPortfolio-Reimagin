"use client"

import { Globe } from "lucide-react"
import { Button } from "./ui/button"
import { useState, useEffect } from "react"

export function LanguageToggle() {
  const [lang, setLang] = useState("en")

  useEffect(() => {
    const saved = localStorage.getItem("lang") || "en"
    setLang(saved)
    document.documentElement.lang = saved
    document.documentElement.dir = saved === "ar" ? "rtl" : "ltr"
  }, [])

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en"
    localStorage.setItem("lang", newLang)

    // apply immediately before reload
    document.documentElement.lang = newLang
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr"

    // Force reload for clean translation update
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
