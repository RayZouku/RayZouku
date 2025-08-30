import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Experience } from "@/components/sections/experience"
import { Contact } from "@/components/sections/contact"
import { ScrollProgress } from "@/components/animations/scroll-progress"
import { CursorTrailSelector } from "@/components/animations/cursor-trail-selector"

export default function HomePage() {
  return (
    <main className="relative">
      <ScrollProgress />
      <CursorTrailSelector />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}