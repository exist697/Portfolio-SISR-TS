"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import { memo } from "react"

const ScrollAnimation = memo(function ScrollAnimation({
  children,
  direction = "up",
  delay = 0,
  className = "",
  threshold = 0.1,
  once = true,
  duration = 400,
}) {
  const { ref, animationClasses } = useScrollAnimation({
    direction,
    delay,
    threshold,
    once,
  })

  return (
    <div
      ref={ref}
      className={cn(`transition-all ease-out`, animationClasses, className)}
      style={{
        transitionDuration: `${duration}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  )
})

export default ScrollAnimation
