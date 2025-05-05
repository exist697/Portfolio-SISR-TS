// Utilitaires pour améliorer les performances

// Fonction pour différer le chargement des ressources non critiques
export function deferNonCriticalLoad(callback: () => void, delay = 1000) {
  if (typeof window === "undefined") return

  if ("requestIdleCallback" in window) {
    ;(window as any).requestIdleCallback(callback, { timeout: delay })
  } else {
    setTimeout(callback, delay)
  }
}

// Fonction pour précharger les pages importantes
export function prefetchImportantPages(paths: string[]) {
  if (typeof window === "undefined") return

  const prefetch = () => {
    paths.forEach((path) => {
      const link = document.createElement("link")
      link.rel = "prefetch"
      link.href = path
      document.head.appendChild(link)
    })
  }

  if ("requestIdleCallback" in window) {
    ;(window as any).requestIdleCallback(prefetch)
  } else {
    setTimeout(prefetch, 2000)
  }
}

// Fonction pour détecter les connexions lentes
export function detectSlowConnection() {
  if (typeof navigator === "undefined") return false

  if ("connection" in navigator) {
    const connection = (navigator as any).connection
    if (connection) {
      if (connection.saveData) return true
      if (connection.effectiveType && ["slow-2g", "2g", "3g"].includes(connection.effectiveType)) return true
      if (connection.downlink !== undefined && connection.downlink < 1.5) return true
      if (connection.rtt !== undefined && connection.rtt > 500) return true
    }
  }

  return false
}

// Fonction pour optimiser le rendu des pages
export function optimizePageRendering() {
  if (typeof window === "undefined") return

  // Détecter si le navigateur prend en charge les animations fluides
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

  // Appliquer des optimisations en fonction des capacités du navigateur
  if (prefersReducedMotion) {
    document.documentElement.classList.add("reduce-motion")
  } else {
    document.documentElement.classList.add("enable-transitions")
  }

  // Optimiser le rendu des images
  if ("loading" in HTMLImageElement.prototype) {
    // Utiliser le chargement natif différé pour les images
    document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
      ;(img as HTMLImageElement).loading = "lazy"
    })
  } else if ("IntersectionObserver" in window) {
    // Fallback pour les navigateurs qui ne supportent pas le chargement différé natif
    const lazyImages = document.querySelectorAll('img[loading="lazy"]')
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          const src = img.dataset.src
          if (src) {
            img.src = src
            img.removeAttribute("data-src")
          }
          imageObserver.unobserve(img)
        }
      })
    })

    lazyImages.forEach((img) => {
      imageObserver.observe(img)
    })
  }
}
