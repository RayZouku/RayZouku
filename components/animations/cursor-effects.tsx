"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TrailPoint {
  x: number
  y: number
  id: number
  timestamp: number
}

// Effect 1: Magical Sparkles
export function MagicalSparkles() {
  const [trail, setTrail] = useState<TrailPoint[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024
    setIsVisible(isDesktop)
    if (!isDesktop) return

    let trailId = 0
    const maxTrailLength = 12

    const handleMouseMove = (e: MouseEvent) => {
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

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {trail.map((point, index) => (
          <motion.div
            key={point.id}
            initial={{ 
              opacity: 1,
              scale: 0,
              x: point.x,
              y: point.y,
              rotate: 0
            }}
            animate={{ 
              opacity: 0,
              scale: [0, 1.5, 0],
              x: point.x + (Math.random() - 0.5) * 40,
              y: point.y + (Math.random() - 0.5) * 40,
              rotate: 360
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 1.5,
              ease: "easeOut",
              delay: index * 0.03
            }}
            className="absolute"
          >
            <div className="relative">
              {/* Star shape */}
              <div 
                className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-pink-400 transform rotate-45"
                style={{
                  clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
                }}
              />
              <div className="absolute inset-0 w-3 h-3 bg-white/50 blur-sm rounded-full" />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

// Effect 2: Neon Glow Trail
export function NeonGlowTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024
    setIsVisible(isDesktop)
    if (!isDesktop) return

    let trailId = 0
    const maxTrailLength = 20

    const handleMouseMove = (e: MouseEvent) => {
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

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {trail.map((point, index) => {
          const opacity = 1 - (index / trail.length)
          const size = Math.max(4, 16 - index * 0.6)
          
          return (
            <motion.div
              key={point.id}
              initial={{ 
                opacity: opacity,
                scale: 1,
                x: point.x - size/2,
                y: point.y - size/2
              }}
              animate={{ 
                opacity: 0,
                scale: 0.3,
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.8,
                ease: "easeOut"
              }}
              className="absolute rounded-full"
              style={{
                width: size,
                height: size,
                background: `radial-gradient(circle, 
                  rgba(59, 130, 246, ${opacity}) 0%, 
                  rgba(147, 51, 234, ${opacity * 0.8}) 50%, 
                  transparent 70%
                )`,
                boxShadow: `0 0 ${size}px rgba(59, 130, 246, ${opacity * 0.5}), 
                           0 0 ${size * 2}px rgba(147, 51, 234, ${opacity * 0.3})`
              }}
            />
          )
        })}
      </AnimatePresence>
    </div>
  )
}

// Effect 3: Bubble Trail
export function BubbleTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024
    setIsVisible(isDesktop)
    if (!isDesktop) return

    let trailId = 0
    const maxTrailLength = 10

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.7) { // Only create bubbles 30% of the time
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
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {trail.map((point) => {
          const size = Math.random() * 20 + 10
          const direction = Math.random() * 360
          
          return (
            <motion.div
              key={point.id}
              initial={{ 
                opacity: 0.8,
                scale: 0,
                x: point.x - size/2,
                y: point.y - size/2
              }}
              animate={{ 
                opacity: 0,
                scale: 1,
                x: point.x - size/2 + Math.cos(direction) * 50,
                y: point.y - size/2 + Math.sin(direction) * 50 - 30
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 2,
                ease: "easeOut"
              }}
              className="absolute rounded-full border-2 border-blue-400/30"
              style={{
                width: size,
                height: size,
                background: `radial-gradient(circle at 30% 30%, 
                  rgba(255, 255, 255, 0.3) 0%, 
                  rgba(59, 130, 246, 0.1) 50%, 
                  transparent 100%
                )`,
                backdropFilter: "blur(1px)"
              }}
            />
          )
        })}
      </AnimatePresence>
    </div>
  )
}

// Effect 4: Lightning Trail
export function LightningTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const isDesktop = window.innerWidth >= 1024
    setIsVisible(isDesktop)
    if (!isDesktop) return

    let trailId = 0
    const maxTrailLength = 8

    const handleMouseMove = (e: MouseEvent) => {
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

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <svg className="absolute inset-0 w-full h-full">
        <AnimatePresence>
          {trail.length > 1 && trail.slice(0, -1).map((point, index) => {
            const nextPoint = trail[index + 1]
            if (!nextPoint) return null
            
            const strokeWidth = Math.max(1, 4 - index * 0.5)
            
            return (
              <motion.line
                key={`line-${point.id}`}
                initial={{ 
                  opacity: 0.8,
                  pathLength: 0
                }}
                animate={{ 
                  opacity: 0,
                  pathLength: 1
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 0.5,
                  ease: "easeOut"
                }}
                x1={point.x}
                y1={point.y}
                x2={nextPoint.x + (Math.random() - 0.5) * 10}
                y2={nextPoint.y + (Math.random() - 0.5) * 10}
                stroke="url(#lightning-gradient)"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                filter="url(#glow)"
              />
            )
          })}
        </AnimatePresence>
        
        <defs>
          <linearGradient id="lightning-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="1" />
            <stop offset="50%" stopColor="#A855F7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  )
}