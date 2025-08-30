"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/lib/data/personal"

export function Footer() {
  const t = useTranslations("footer")

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-muted/50 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <motion.h3
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
              whileHover={{ scale: 1.05 }}
            >
              Ray Zouku
            </motion.h3>
            <p className="text-muted-foreground text-xs md:text-sm">
              Full Stack Developer & Technology Enthusiast
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm mb-2">
              {t("copyright")}
            </p>
            <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground">
              <span>{t("madeWith")}</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="h-4 w-4 text-red-500 fill-current" />
              </motion.div>
            </div>
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="group"
            >
              <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 md:gap-4 text-xs md:text-sm text-muted-foreground">
              <span>Built with Next.js 15</span>
              <span>•</span>
              <span>Styled with Tailwind CSS</span>
              <span>•</span>
              <span>Animated with Framer Motion</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <motion.a
                href={`https://github.com/${personalInfo.social.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub
              </motion.a>
              <motion.a
                href={`https://linkedin.com/in/${personalInfo.social.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                LinkedIn
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Email
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}