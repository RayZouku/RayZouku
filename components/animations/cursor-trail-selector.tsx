"use client"

import { useState, useEffect } from "react"
import { CursorTrail } from "./cursor-trail"
import { MagicalSparkles, NeonGlowTrail, BubbleTrail, LightningTrail } from "./cursor-effects"

type CursorEffect = 'default' | 'sparkles' | 'neon' | 'bubbles' | 'lightning' | 'none'

const cursorEffects = {
  default: CursorTrail,
  sparkles: MagicalSparkles,
  neon: NeonGlowTrail,
  bubbles: BubbleTrail,
  lightning: LightningTrail,
  none: () => null
}

export function CursorTrailSelector() {
  const [currentEffect, setCurrentEffect] = useState<CursorEffect>('neon')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load saved preference
    const saved = localStorage.getItem('cursor-effect') as CursorEffect
    if (saved && saved in cursorEffects) {
      setCurrentEffect(saved)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('cursor-effect', currentEffect)
    }
  }, [currentEffect, mounted])

  if (!mounted) return null

  const CurrentEffectComponent = cursorEffects[currentEffect]

  return (
    <>
      <CurrentEffectComponent />
      
      {/* Effect Selector - Hidden by default, can be toggled with keyboard shortcut */}
      <div className="fixed bottom-4 right-4 z-50 hidden group-[.show-cursor-selector]:block">
        <div className="bg-background/80 backdrop-blur-sm border border-border/50 rounded-lg p-3 shadow-lg">
          <p className="text-xs text-muted-foreground mb-2">Cursor Effect:</p>
          <div className="flex flex-wrap gap-1">
            {Object.keys(cursorEffects).map((effect) => (
              <button
                key={effect}
                onClick={() => setCurrentEffect(effect as CursorEffect)}
                className={`px-2 py-1 text-xs rounded transition-colors ${
                  currentEffect === effect
                    ? 'bg-blue-500 text-white'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                {effect.charAt(0).toUpperCase() + effect.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

// Hook to toggle cursor selector visibility
export function useCursorSelector() {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault()
        document.body.classList.toggle('show-cursor-selector')
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [])
}