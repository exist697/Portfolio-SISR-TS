"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState, useCallback } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isChanging, setIsChanging] = useState(false)

  // Éviter les problèmes d'hydratation
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = useCallback(() => {
    if (isChanging) return

    // Marquer le début de la transition
    setIsChanging(true)

    // Changer le thème
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)

    // Réinitialiser l'état après la transition
    setTimeout(() => {
      setIsChanging(false)
    }, 300)
  }, [theme, setTheme, isChanging])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="opacity-0">
        <span className="sr-only">Changer de thème</span>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={`transition-all duration-300 ease-in-out ${isChanging ? "scale-90" : ""}`}
      aria-label="Changer de thème"
      disabled={isChanging}
    >
      {theme === "light" ? (
        <Moon className="h-[1.2rem] w-[1.2rem] theme-icon" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] theme-icon" />
      )}
      <span className="sr-only">Changer de thème</span>
    </Button>
  )
}
