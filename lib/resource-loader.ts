// Utilitaires pour optimiser le chargement des ressources

// Fonction pour charger les ressources de manière différée
export function lazyLoadResources() {
  if (typeof window === "undefined") return

  // Attendre que la page soit complètement chargée
  if (document.readyState === "complete") {
    initLazyLoading()
  } else {
    window.addEventListener("load", initLazyLoading)
  }
}

function initLazyLoading() {
  // Utiliser Intersection Observer pour charger les images à la demande
  const imageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          const src = img.dataset.src
          if (src) {
            img.src = src
            img.removeAttribute("data-src")
            imageObserver.unobserve(img)
          }
        }
      })
    },
    { rootMargin: "200px 0px" },
  ) // Précharger les images avant qu'elles n'entrent dans la vue

  // Observer toutes les images avec data-src
  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img)
  })

  // Précharger les polices importantes
  const fontUrls = ["/fonts/inter-var.woff2"]

  // Utiliser requestIdleCallback pour charger les polices pendant les périodes d'inactivité
  if ("requestIdleCallback" in window) {
    ;(window as any).requestIdleCallback(() => {
      fontUrls.forEach((url) => {
        const link = document.createElement("link")
        link.href = url
        link.rel = "preload"
        link.as = "font"
        link.type = "font/woff2"
        link.crossOrigin = "anonymous"
        document.head.appendChild(link)
      })
    })
  } else {
    // Fallback pour les navigateurs qui ne supportent pas requestIdleCallback
    setTimeout(() => {
      fontUrls.forEach((url) => {
        const link = document.createElement("link")
        link.href = url
        link.rel = "preload"
        link.as = "font"
        link.type = "font/woff2"
        link.crossOrigin = "anonymous"
        document.head.appendChild(link)
      })
    }, 1000)
  }
}

// Fonction pour optimiser les animations en fonction des capacités du navigateur
export function optimizeAnimations() {
  if (typeof window === "undefined") return

  // Détecter si le navigateur prend en charge les animations fluides
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  const hasLowPerformance = localStorage.getItem("performance-mode") === "low"

  if (prefersReducedMotion || hasLowPerformance) {
    document.documentElement.classList.add("reduce-motion")
  } else {
    // Activer les animations optimisées pour les appareils performants
    document.documentElement.classList.add("enable-animations")

    // Utiliser requestAnimationFrame pour les animations
    const animateElements = document.querySelectorAll(".animate-on-view")

    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated")
            animationObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    animateElements.forEach((el) => {
      animationObserver.observe(el)
    })
  }
}
