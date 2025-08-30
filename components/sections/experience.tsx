"use client"

import { motion } from "framer-motion"
import { useTranslations, useLocale } from "next-intl"
import { GraduationCap, Briefcase, Calendar, Award } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { education, experience } from "@/lib/data/personal"

interface TimelineItemData {
  id: string
  institution?: string
  company?: string
  degree?: string
  position?: string
  period: string
  status: string
  gpa?: number
  description: {
    en: string
    id: string
  }
  achievements?: Array<{
    en: string
    id: string
  }>
}

export function Experience() {
  const t = useTranslations("experience")
  const locale = useLocale()

  const TimelineItem = ({ 
    item, 
    index, 
    type 
  }: { 
    item: TimelineItemData, 
    index: number, 
    type: 'education' | 'work' 
  }) => {
    const isEven = index % 2 === 0
    const Icon = type === 'education' ? GraduationCap : Briefcase

    return (
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
        className={`flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} mb-8`}
      >
        {/* Content */}
        <div className={`flex-1 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
          <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.institution || item.company}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {item.degree || item.position}
                </p>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                item.status === 'current' 
                  ? 'bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20'
                  : 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20'
              }`}>
                {item.status === 'current' ? t('current') : t('completed')}
              </div>
            </div>

            <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{item.period}</span>
              </div>
              {item.gpa && (
                <div className="flex items-center space-x-1">
                  <Award className="h-4 w-4" />
                  <span>GPA: {item.gpa}</span>
                </div>
              )}
            </div>

            <p className="text-muted-foreground mb-4">
              {item.description[locale as 'en' | 'id']}
            </p>

            {item.achievements && (
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Key Achievements:</h4>
                <ul className="space-y-1">
                  {item.achievements.map((achievement, i: number) => (
                    <li key={i} className="flex items-start space-x-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span>{achievement[locale as 'en' | 'id']}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Timeline Icon */}
        <div className="flex-shrink-0 mx-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>

        {/* Spacer for alternating layout */}
        <div className={`flex-1 ${isEven ? 'md:pl-8' : 'md:pr-8'} hidden md:block`} />
      </motion.div>
    )
  }

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>
        </FadeIn>

        {/* Education Timeline */}
        <div className="mb-16">
          <FadeIn delay={0.2}>
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center space-x-3">
                <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <h3 className="text-2xl font-bold">{t("education")}</h3>
              </div>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block" />
            
            {education.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                index={index}
                type="education"
              />
            ))}
          </div>
        </div>

        {/* Work Experience Timeline */}
        <div>
          <FadeIn delay={0.4}>
            <div className="flex items-center justify-center mb-12">
              <div className="flex items-center space-x-3">
                <Briefcase className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                <h3 className="text-2xl font-bold">{t("work")}</h3>
              </div>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 to-blue-500 hidden md:block" />
            
            {experience.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                index={index}
                type="work"
              />
            ))}
          </div>
        </div>

        {/* Future Goals */}
        <FadeIn delay={0.6}>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg p-8 border border-border/50">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Looking Forward
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {locale === 'en' 
                  ? "Currently focused on completing my Information Technology degree while building innovative projects and seeking opportunities to contribute to meaningful software development initiatives."
                  : "Saat ini fokus menyelesaikan gelar Teknologi Informasi sambil membangun proyek-proyek inovatif dan mencari peluang untuk berkontribusi pada inisiatif pengembangan perangkat lunak yang bermakna."
                }
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}