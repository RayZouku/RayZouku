"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Mail, MapPin, Github, Linkedin, MessageSquare, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"
import { personalInfo } from "@/lib/data/personal"

export function Contact() {
  const t = useTranslations("contact")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
    
    // In a real app, you would handle the form submission here
    alert(t("form.success"))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: t("email"),
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: MapPin,
      label: t("location"),
      value: personalInfo.location,
      color: "text-green-600 dark:text-green-400"
    },
    {
      icon: Github,
      label: "GitHub",
      value: `@${personalInfo.social.github}`,
      href: `https://github.com/${personalInfo.social.github}`,
      color: "text-gray-600 dark:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: personalInfo.social.linkedin,
      href: `https://linkedin.com/in/${personalInfo.social.linkedin}`,
      color: "text-blue-700 dark:text-blue-300"
    }
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              {t("subtitle")}
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {t("description")}
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <FadeIn delay={0.2}>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="group"
                  >
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="block bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 hover:border-blue-500/50 transition-all duration-300"
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-lg bg-muted group-hover:bg-blue-50 dark:group-hover:bg-blue-950/20 transition-colors`}>
                            <info.icon className={`h-6 w-6 ${info.color} group-hover:scale-110 transition-transform`} />
                          </div>
                          <div>
                            <p className="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                              {info.label}
                            </p>
                            <p className="text-muted-foreground text-sm">
                              {info.value}
                            </p>
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-lg bg-muted">
                            <info.icon className={`h-6 w-6 ${info.color}`} />
                          </div>
                          <div>
                            <p className="font-semibold">{info.label}</p>
                            <p className="text-muted-foreground text-sm">
                              {info.value}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social Media Links */}
              <div className="pt-8 border-t border-border/50">
                <h4 className="font-semibold mb-4">{t("social")}</h4>
                <div className="flex space-x-4">
                  <motion.a
                    href={`https://github.com/${personalInfo.social.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="h-5 w-5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </motion.a>
                  
                  <motion.a
                    href={`https://linkedin.com/in/${personalInfo.social.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin className="h-5 w-5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </motion.a>
                  
                  <motion.a
                    href={`mailto:${personalInfo.email}`}
                    className="p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="h-5 w-5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </motion.a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Contact Form */}
          <FadeIn delay={0.4} direction="right">
            <div className="bg-background/50 backdrop-blur-sm rounded-lg p-8 border border-border/50">
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-2xl font-bold">Send Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {t("form.name")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {t("form.email")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    {t("form.subject")}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t("form.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full group"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="mr-2"
                      >
                        ⏳
                      </motion.div>
                      {t("form.sending")}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      {t("form.send")}
                    </>
                  )}
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}