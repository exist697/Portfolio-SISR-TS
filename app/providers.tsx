"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { ThemeTransition } from "@/components/theme-transition"
import { memo, useEffect } from "react"

// Composant Providers simplifié et optimisé
export const Providers = memo(function Providers({ children }) {
  // Optimisation du chargement initial
  useEffect(() => {
    // Précharger les pages principales
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      window.requestIdleCallback(() => {
        const importantRoutes = ["/", "/bts-sio", "/competences", "/projets"]
        importantRoutes.forEach((route) => {
          const link = document.createElement("link")
          link.rel = "prefetch"
          link.href = route
          document.head.appendChild(link)
        })
      })
    }
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
      <ThemeTransition />
      {children}
    </ThemeProvider>
  )
})
