"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"
import { personalInfo } from "@/lib/data/personal"

// Generate consistent particle positions
const generateParticles = () => {
  const particles = []
  for (let i = 0; i < 20; i++) {
    particles.push({
      id: i,
      initialX: (i * 123 + 456) % 1200,
      initialY: (i * 789 + 321) % 800,
      animateX: (i * 234 + 567) % 1200,
      animateY: (i * 890 + 432) % 800,
      duration: (i % 10) + 20,
    })
  }
  return particles
}

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const particles = generateParticles()

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20" />
      
      {/* Animated Background Particles */}
      {mounted && (
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
              initial={{
                x: particle.initialX,
                y: particle.initialY,
              }}
              animate={{
                x: particle.animateX,
                y: particle.animateY,
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 xl:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <FadeIn delay={0.2}>
              <motion.p
                className="text-lg text-muted-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Hello, I&apos;m
              </motion.p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Ray Zouku
                </span>
              </motion.h1>
            </FadeIn>

            <FadeIn delay={0.6}>
              <motion.h2
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 md:mb-6 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Full Stack Developer & Technology Enthusiast
              </motion.h2>
            </FadeIn>

            <FadeIn delay={0.8}>
              <motion.p
                className="text-base sm:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                Passionate about creating innovative digital solutions with modern technologies. Currently pursuing Information Technology degree while building the future of web development.
              </motion.p>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={1.0}>
              <motion.div
                className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start mb-6 md:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <Button
                  variant="gradient"
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className="group"
                >
                  View My Work
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="group hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Get In Touch
                  <Mail className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                </Button>
              </motion.div>
            </FadeIn>

            {/* Social Links */}
            <FadeIn delay={1.2}>
              <motion.div
                className="flex justify-center lg:justify-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 }}
              >
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
              </motion.div>
            </FadeIn>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <FadeIn delay={0.6} direction="right">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />
                
                {/* Image Container */}
                <motion.div
                  className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px]"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 1, -1, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Image
                    src="/rimuru.webp"
                    alt="Ray Zouku"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                    sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 450px"
                  />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 0.8, 0.6]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: 0.5
                  }}
                />
                
                <motion.div
                  className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-500 rounded-full opacity-60"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 0.9, 0.6]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    delay: 1
                  }}
                />
              </motion.div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll Indicator */}
        <FadeIn delay={1.4}>
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <motion.button
              onClick={() => scrollToSection("about")}
              className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors group"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Scroll Down
              </span>
              <ArrowDown className="h-5 w-5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </motion.button>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  )
}