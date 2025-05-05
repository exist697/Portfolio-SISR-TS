"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState, useRef, memo } from "react"

const PageTransition = memo(function PageTransition({ children }) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const prevPathRef = useRef(null)

  useEffect(() => {
    // Ne pas déclencher de transition au chargement initial
    if (prevPathRef.current === null) {
      prevPathRef.current = pathname
      return
    }

    // Éviter les transitions inutiles si le chemin n'a pas changé
    if (prevPathRef.current === pathname) return

    // Déclencher la transition
    setIsTransitioning(true)

    // Utiliser requestAnimationFrame pour synchroniser avec le cycle de rendu
    const frame = requestAnimationFrame(() => {
      // Mettre à jour le chemin précédent
      prevPathRef.current = pathname

      // Terminer la transition après un court délai
      const timer = setTimeout(() => {
        setIsTransitioning(false)
      }, 180)

      return () => clearTimeout(timer)
    })

    return () => cancelAnimationFrame(frame)
  }, [pathname])

  // Appliquer une classe CSS pour la transition
  const transitionClass = isTransitioning ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"

  return (
    <div
      className={`transition-all duration-180 ease-out ${transitionClass}`}
      style={{
        willChange: "opacity, transform",
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </div>
  )
})

export default PageTransition
