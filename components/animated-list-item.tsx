"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AnimatedListItemProps {
  children: ReactNode
  className?: string
  index?: number
}

export default function AnimatedListItem({ children, className, index = 0 }: AnimatedListItemProps) {
  return (
    <li
      className={cn("transition-all duration-200", className)}
      style={{
        animationDelay: `${index * 50}ms`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </li>
  )
}
