"use client"

import { Languages } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { useRouter, usePathname } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function LanguageToggle() {
  const locale = useLocale()
  const t = useTranslations("language")
  const router = useRouter()
  const pathname = usePathname()

  const toggleLanguage = () => {
    const newLocale = locale === "en" ? "id" : "en"
    router.replace(pathname, { locale: newLocale })
  }

  const getCurrentLanguage = () => {
    return locale === "en" ? "EN" : "ID"
  }

  const getNextLanguage = () => {
    return locale === "en" ? t("indonesian") : t("english")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLanguage}
      className="relative overflow-hidden group"
      title={`Switch to ${getNextLanguage()}`}
    >
      <motion.div
        className="flex items-center space-x-1"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Languages className="h-4 w-4" />
        <span className="text-xs font-medium hidden sm:inline">
          {getCurrentLanguage()}
        </span>
      </motion.div>
    </Button>
  )
}