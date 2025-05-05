"use client"

import React from "react"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AnimatedListProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  direction?: "up" | "down" | "left" | "right" | "fade"
}

export default function AnimatedList({ children, className, staggerDelay = 50, direction = "up" }: AnimatedListProps) {
  // Convertir les enfants en tableau pour pouvoir les mapper
  const childrenArray = React.Children.toArray(children)

  // Calculer les classes d'animation en fonction de la direction
  const getAnimationClass = (index: number) => {
    const baseClass = "opacity-0 transition-all duration-300 ease-out"
    const directionClass = {
      up: "translate-y-4",
      down: "-translate-y-4",
      left: "translate-x-4",
      right: "-translate-x-4",
      fade: "",
    }[direction]

    return `${baseClass} ${directionClass} animate-in`
  }

  return (
    <ul className={cn("space-y-2", className)}>
      {childrenArray.map((child, index) => (
        <li
          key={index}
          className={getAnimationClass(index)}
          style={{
            animationDelay: `${index * staggerDelay}ms`,
            animationFillMode: "forwards",
          }}
        >
          {child}
        </li>
      ))}
    </ul>
  )
}
