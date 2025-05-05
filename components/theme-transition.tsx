"use client"

import { useTheme } from "next-themes"
import { useEffect, useState, useRef } from "react"

export function ThemeTransition() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const prevThemeRef = useRef(resolvedTheme)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Si le thème a changé et qu'on a un thème précédent
    if (resolvedTheme && prevThemeRef.current && resolvedTheme !== prevThemeRef.current) {
      // Déclencher l'animation de transition
      setIsTransitioning(true)

      // Réinitialiser après la fin de l'animation
      const timer = setTimeout(() => {
        setIsTransitioning(false)
      }, 500) // Durée de l'animation

      return () => clearTimeout(timer)
    }

    // Mettre à jour le thème précédent
    prevThemeRef.current = resolvedTheme
  }, [resolvedTheme, mounted])

  if (!mounted) return null

  return <div className={`theme-transition-overlay ${isTransitioning ? "active" : ""}`} aria-hidden="true" />
}
