"use client"

import { usePathname, useRouter } from "next/navigation"
import { useEffect, useRef, memo } from "react"

const RouteOptimizer = memo(function RouteOptimizer() {
  const router = useRouter()
  const pathname = usePathname()
  const isNavigatingRef = useRef(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    // Optimiser les liens pour une navigation instantanée
    const optimizeLinks = () => {
      // Sélectionner tous les liens internes non optimisés
      const links = document.querySelectorAll('a[href^="/"]:not([data-optimized])')

      links.forEach((link) => {
        link.setAttribute("data-optimized", "true")

        // Précharger le contenu au survol
        link.addEventListener("mouseenter", () => {
          const href = link.getAttribute("href")
          if (href && href !== pathname && !isNavigatingRef.current) {
            router.prefetch(href)
          }
        })

        // Optimiser le clic pour une navigation plus rapide
        link.addEventListener("click", (e) => {
          const href = link.getAttribute("href")
          if (href && href !== pathname && !href.startsWith("#")) {
            e.preventDefault()

            // Éviter les navigations multiples
            if (isNavigatingRef.current) return
            isNavigatingRef.current = true

            // Appliquer une transition minimale
            document.body.style.opacity = "0.98"

            // Naviguer après un délai minimal
            setTimeout(() => {
              router.push(href)

              // Réinitialiser après la navigation
              setTimeout(() => {
                document.body.style.opacity = "1"
                isNavigatingRef.current = false
              }, 50)
            }, 10)
          }
        })
      })
    }

    // Exécuter l'optimisation après le chargement initial et après chaque changement de page
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(optimizeLinks, 100)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [pathname, router])

  return null
})

export default RouteOptimizer
