"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Calendar, MapPin, GraduationCap, Award } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { personalInfo, skills } from "@/lib/data/personal"
import { calculateAge } from "@/lib/utils"

export function About() {
  const t = useTranslations("about")
  const age = calculateAge(personalInfo.birthDate)

  const stats = [
    {
      icon: Calendar,
      label: t("stats.age"),
      value: `${age} years`,
    },
    {
      icon: GraduationCap,
      label: t("stats.gpa"),
      value: personalInfo.gpa.toString(),
    },
    {
      icon: Award,
      label: t("stats.projects"),
      value: "15+",
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
    },
  ]

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              {t("title")}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 xl:gap-16 items-start mb-12 md:mb-16">
          {/* About Content */}
          <FadeIn delay={0.2}>
            <div className="space-y-4 md:space-y-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {t("description")}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-background/50 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-border/50 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-2 md:space-x-3">
                      <div className="p-1.5 md:p-2 bg-blue-500/10 rounded-lg flex-shrink-0">
                        <stat.icon className="h-4 w-4 md:h-5 md:w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs md:text-sm text-muted-foreground truncate">{stat.label}</p>
                        <p className="font-semibold text-sm md:text-base">{stat.value}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Skills Visualization */}
          <FadeIn delay={0.4} direction="right">
            <div className="space-y-6 md:space-y-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{t("skills.title")}</h3>
              
              {/* Programming Languages */}
              <div>
                <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-blue-600 dark:text-blue-400">
                  {t("skills.languages")}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
                  {skills.languages.slice(0, 6).map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      className="bg-background/50 backdrop-blur-sm rounded-lg p-2 md:p-3 border border-border/50 hover:border-blue-500/50 transition-all duration-300 group"
                    >
                      <div className="text-center">
                        <p className="font-medium text-xs md:text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                          {skill.name}
                        </p>
                        <div className="mt-1.5 md:mt-2 bg-muted rounded-full h-1.5 md:h-2">
                          <motion.div
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{skill.level}%</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Frameworks */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-purple-600 dark:text-purple-400">
                  {t("skills.frameworks")}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.slice(0, 8).map((framework, index) => (
                    <motion.span
                      key={framework.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      className="px-3 py-1 bg-background/50 backdrop-blur-sm rounded-full text-sm border border-border/50 hover:border-purple-500/50 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 cursor-default"
                    >
                      {framework.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Skills Categories */}
        <FadeIn delay={0.6}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills.categories).map(([category, techs], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <h4 className="text-lg font-semibold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {t(`skills.categories.${category}`)}
                </h4>
                <div className="space-y-2">
                  {techs.slice(0, 4).map((tech) => (
                    <div key={tech} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span className="text-sm text-muted-foreground">{tech}</span>
                    </div>
                  ))}
                  {techs.length > 4 && (
                    <p className="text-xs text-muted-foreground mt-2">
                      +{techs.length - 4} more
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}