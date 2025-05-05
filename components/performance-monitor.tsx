"use client"

import { useEffect, useState } from "react"
import { detectSlowConnection } from "@/lib/performance-utils"

// Composant invisible qui surveille les performances et ajuste l'expérience utilisateur
export default function PerformanceMonitor() {
  const [isLowEndDevice, setIsLowEndDevice] = useState(false)
  const [isSlowConnection, setIsSlowConnection] = useState(false)

  useEffect(() => {
    // Détection des appareils à faibles performances
    const checkDeviceCapabilities = () => {
      // Vérifier la mémoire disponible (si l'API est disponible)
      const lowMemory = "deviceMemory" in navigator && (navigator as any).deviceMemory < 4

      // Vérifier le nombre de cœurs CPU
      const lowCPU = "hardwareConcurrency" in navigator && navigator.hardwareConcurrency < 4

      // Vérifier si la connexion est lente
      const slowConn = detectSlowConnection()

      // Vérifier les performances de rendu
      let lowFPS = false

      // Mesurer les FPS si possible
      if ("requestAnimationFrame" in window) {
        let lastTime = performance.now()
        let frames = 0
        let totalTime = 0

        const checkFPS = () => {
          const now = performance.now()
          const elapsed = now - lastTime

          frames++
          totalTime += elapsed

          if (totalTime >= 1000) {
            // Vérifier après 1 seconde
            const fps = Math.round((frames * 1000) / totalTime)
            lowFPS = fps < 30 // Considérer comme faible si moins de 30 FPS

            // Réinitialiser pour la prochaine mesure
            frames = 0
            totalTime = 0
          }

          lastTime = now
          requestAnimationFrame(checkFPS)
        }

        requestAnimationFrame(checkFPS)
      }

      const isLowPerformance = lowMemory || lowCPU || slowConn || lowFPS
      setIsLowEndDevice(isLowPerformance)
      setIsSlowConnection(slowConn)

      // Appliquer des optimisations pour les appareils à faibles performances
      if (isLowPerformance) {
        // Désactiver certaines animations
        document.documentElement.classList.add("reduce-motion")

        // Réduire la qualité des images
        document.documentElement.classList.add("low-image-quality")

        // Stocker la préférence dans localStorage
        localStorage.setItem("performance-mode", "low")
      } else {
        // Activer les transitions fluides pour les appareils performants
        document.documentElement.classList.add("enable-transitions")

        // Stocker la préférence dans localStorage
        localStorage.setItem("performance-mode", "high")
      }
    }

    // Vérifier si une préférence est déjà stockée
    const storedPerfMode = localStorage.getItem("performance-mode")
    if (storedPerfMode === "low") {
      document.documentElement.classList.add("reduce-motion")
      document.documentElement.classList.add("low-image-quality")
      setIsLowEndDevice(true)
    } else if (!storedPerfMode) {
      // Seulement vérifier si aucune préférence n'est stockée
      checkDeviceCapabilities()
    }

    // Surveiller les changements de connexion
    if ("connection" in navigator) {
      const conn = (navigator as any).connection
      if (conn) {
        conn.addEventListener("change", checkDeviceCapabilities)
        return () => conn.removeEventListener("change", checkDeviceCapabilities)
      }
    }
  }, [])

  // Ce composant ne rend rien visuellement
  return null
}
