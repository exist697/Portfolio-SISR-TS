"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState, useCallback } from "react"

export function MobileThemeToggle() {
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
    return null
  }

  return (
    <div className="px-4 py-2 mt-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Mode {theme === "light" ? "clair" : "sombre"}</span>
        <Button
          variant="outline"
          size="sm"
          onClick={toggleTheme}
          className={`transition-all duration-300 ease-in-out ${isChanging ? "scale-95" : ""}`}
          aria-label="Changer de thème"
          disabled={isChanging}
        >
          {theme === "light" ? (
            <Moon className="h-4 w-4 mr-2 theme-icon" />
          ) : (
            <Sun className="h-4 w-4 mr-2 theme-icon" />
          )}
          {theme === "light" ? "Sombre" : "Clair"}
        </Button>
      </div>
    </div>
  )
}
