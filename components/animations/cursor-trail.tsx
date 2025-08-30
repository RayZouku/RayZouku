"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TrailPoint {
  x: number
  y: number
  id: number
  timestamp: number
}

export function CursorTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Only show on desktop devices
    const isDesktop = window.innerWidth >= 1024
    setIsVisible(isDesktop)

    if (!isDesktop) return

    let trailId = 0
    const maxTrailLength = 15

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
      
      const newPoint: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        id: trailId++,
        timestamp: Date.now()
      }

      setTrail(prev => {
        const newTrail = [newPoint, ...prev]
        return newTrail.slice(0, maxTrailLength)
      })
    }

    const handleMouseLeave = () => {
      setTrail([])
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main Cursor Glow */}
      <motion.div
        className="absolute w-8 h-8 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30 blur-sm"
        animate={{
          x: cursorPosition.x - 16,
          y: cursorPosition.y - 16,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5
        }}
      />

      {/* Trailing Particles */}
      <AnimatePresence>
        {trail.map((point, index) => {
          const age = index / trail.length
          const size = Math.max(2, 8 - index * 0.4)
          
          return (
            <motion.div
              key={point.id}
              initial={{ 
                opacity: 0.9,
                scale: 1,
                x: point.x - size/2,
                y: point.y - size/2
              }}
              animate={{ 
                opacity: 0,
                scale: 0.2,
                x: point.x - size/2 + (Math.random() - 0.5) * 20,
                y: point.y - size/2 + (Math.random() - 0.5) * 20
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 1.2,
                ease: "easeOut",
                delay: index * 0.02
              }}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                background: `linear-gradient(45deg, 
                  hsl(${220 + index * 10}, 70%, ${60 + age * 20}%), 
                  hsl(${280 + index * 8}, 70%, ${60 + age * 20}%)
                )`,
                boxShadow: `0 0 ${size * 2}px hsl(${250 + index * 5}, 70%, ${60 + age * 20}%, 0.3)`
              }}
            />
          )
        })}
      </AnimatePresence>

      {/* Sparkle Effects */}
      <AnimatePresence>
        {trail.filter((_, index) => index % 3 === 0).map((point, index) => (
          <motion.div
            key={`sparkle-${point.id}`}
            initial={{ 
              opacity: 0.8,
              scale: 0,
              x: point.x,
              y: point.y,
              rotate: 0
            }}
            animate={{ 
              opacity: 0,
              scale: 1.5,
              x: point.x + (Math.random() - 0.5) * 30,
              y: point.y + (Math.random() - 0.5) * 30,
              rotate: 180
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.1
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              boxShadow: "0 0 6px rgba(255, 255, 255, 0.8)"
            }}
          />
        ))}
      </AnimatePresence>

      {/* Ripple Effect on Click */}
      <motion.div
        className="absolute w-12 h-12 border-2 border-blue-400/50 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          x: cursorPosition.x - 24,
          y: cursorPosition.y - 24,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 200
        }}
      />
    </div>
  )
}