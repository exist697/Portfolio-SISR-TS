"use client"

import { memo, useMemo } from "react"
import Image from "next/image"

const OptimizedImage = memo(function OptimizedImage({ src, alt, width, height, className = "", priority = false }) {
  // Générer un placeholder minimaliste
  const placeholderSrc = useMemo(
    () =>
      `data:image/svg+xml,%3Csvg width='${width}' height='${height}' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%233b82f6' opacity='0.05'/%3E%3C/svg%3E`,
    [width, height],
  )

  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
      placeholder="blur"
      blurDataURL={placeholderSrc}
      priority={priority}
      sizes={`(max-width: 768px) 100vw, ${width}px`}
      style={{
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
      }}
    />
  )
})

export default OptimizedImage
