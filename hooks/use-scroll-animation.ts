"use client"

import { useEffect, useRef, useState, useMemo } from "react"

export function useScrollAnimation({
  threshold = 0.1,
  direction = "up",
  delay = 0,
  rootMargin = "0px",
  once = true,
} = {}) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  // Vérifier si le navigateur prend en charge IntersectionObserver
  const supportsIntersectionObserver = typeof IntersectionObserver !== "undefined"
  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches

  useEffect(() => {
    // Si l'utilisateur préfère réduire les animations ou si IntersectionObserver n'est pas supporté
    if (prefersReducedMotion || !supportsIntersectionObserver) {
      setIsVisible(true)
      return
    }

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si l'élément est déjà visible et que once est true, ne rien faire
        if (isVisible && once) return

        if (entry.isIntersecting) {
          // Ajouter un délai si spécifié
          if (delay > 0) {
            const timer = setTimeout(() => {
              setIsVisible(true)
              setHasAnimated(true)
            }, delay)
            return () => clearTimeout(timer)
          } else {
            setIsVisible(true)
            setHasAnimated(true)
          }

          // Si once est true, arrêter d'observer après la première apparition
          if (once) {
            observer.unobserve(element)
          }
        } else if (!once && hasAnimated) {
          // Si l'élément n'est plus visible et que once est false, le cacher à nouveau
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [threshold, delay, rootMargin, once, isVisible, hasAnimated, prefersReducedMotion, supportsIntersectionObserver])

  // Calculer les classes CSS en fonction de la direction
  const animationClasses = useMemo(() => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return "opacity-0 translate-y-6"
        case "down":
          return "opacity-0 -translate-y-6"
        case "left":
          return "opacity-0 translate-x-6"
        case "right":
          return "opacity-0 -translate-x-6"
        case "fade":
          return "opacity-0"
        default:
          return "opacity-0"
      }
    }
    return "opacity-100 translate-y-0 translate-x-0"
  }, [isVisible, direction])

  return {
    ref,
    isVisible,
    animationClasses,
  }
}
