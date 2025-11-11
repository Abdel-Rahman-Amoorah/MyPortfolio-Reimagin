"use client"
import { useEffect, useState } from "react"

export function useTranslation() {
  const [translations, setTranslations] = useState<Record<string, string>>({})
  const [lang, setLang] = useState("en")
  const [mounted, setMounted] = useState(false)

  // ✅ Run only after client mount (prevents SSR mismatch)
  useEffect(() => {
    setMounted(true)

    const savedLang = localStorage.getItem("lang") || "en"
    setLang(savedLang)

    document.documentElement.lang = savedLang
    document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr"
    document.body.style.fontFamily =
      savedLang === "ar" ? "'Tajawal', sans-serif" : "'Inter', sans-serif"

    import(`../locales/${savedLang}.json`)
      .then((mod) => setTranslations(mod.default))
      .catch(() => setTranslations({}))
  }, [])

  // ✅ Guard render until client hydration is done
  if (!mounted) {
    return {
      t: (key: string) => key,
      lang: "en"
    }
  }

  const t = (key: string) => translations[key] || key

  return { t, lang }
}
