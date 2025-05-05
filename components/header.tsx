"use client"

import { useState, useCallback, memo, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileThemeToggle } from "@/components/mobile-theme-toggle"
import { cn } from "@/lib/utils"

// Données de navigation préchargées
const navigation = [
  { name: "Accueil", href: "/" },
  { name: "BTS SIO", href: "/bts-sio" },
  { name: "Parcours", href: "/parcours" },
  { name: "Compétences", href: "/competences" },
  { name: "Projets", href: "/projets" },
  { name: "Épreuve E6", href: "/epreuve-e6" },
  { name: "Veille", href: "/veille" },
  { name: "CV", href: "/cv" },
  { name: "Contact", href: "/contact" },
]

// Composant de lien optimisé avec memo
const NavLink = memo(function NavLink({ href, pathname, children, onClick, mobile = false, index = 0 }) {
  const isActive = pathname === href
  const [isHovered, setIsHovered] = useState(false)

  const className = mobile
    ? `text-lg ${isActive ? "font-semibold text-primary" : "text-muted-foreground"}`
    : cn(
        "text-sm transition-colors duration-200 ease-in-out nav-link-animation relative",
        isActive ? "font-semibold text-primary" : "text-muted-foreground hover:text-primary",
      )

  return (
    <Link
      href={href}
      className={className}
      onClick={onClick}
      prefetch={true}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 50}ms`,
        willChange: "transform, opacity",
        transform: isHovered ? "translateY(-2px)" : "translateY(0)",
        transition: "transform 0.2s ease",
      }}
    >
      {children}
      {isActive && !mobile && (
        <span
          className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"
          style={{
            transform: "translateY(4px)",
            opacity: 1,
            transition: "all 0.2s ease",
          }}
        />
      )}
    </Link>
  )
})

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  const handleClose = useCallback(() => setOpen(false), [])

  // Effet pour détecter le scroll optimisé
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    setMounted(true)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full border-b header-scroll",
        scrolled
          ? "header-scroll-active border-transparent shadow-sm"
          : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        mounted ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="outline"
                size="icon"
                aria-label="Menu"
                className="transition-transform duration-200 active:scale-95"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="lg:hidden">
              <div className="flex flex-col gap-4 mt-8">
                <div className="px-4 py-2 font-semibold text-lg border border-primary/20 rounded-md">
                  Mohamad Dit Salamoun
                </div>
                <MobileThemeToggle />
                <nav className="flex flex-col gap-4 mt-4">
                  {navigation.map((item, index) => (
                    <NavLink
                      key={item.name}
                      href={item.href}
                      pathname={pathname}
                      onClick={handleClose}
                      mobile={true}
                      index={index}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          <Link
            href="/"
            className="font-semibold text-xl text-primary transition-transform duration-200 hover:scale-105"
          >
            Mohamad Dit Salamoun
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <nav className="hidden lg:flex items-center gap-6">
            {navigation.map((item, index) => (
              <NavLink key={item.name} href={item.href} pathname={pathname} index={index}>
                {item.name}
              </NavLink>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
