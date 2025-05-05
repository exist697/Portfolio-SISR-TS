import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import { Providers } from "./providers"
import PageTransition from "./page-transition"
import RouteOptimizer from "@/components/route-optimizer"
import Script from "next/script"

// Optimisation du chargement de la police
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
})

// Métadonnées optimisées
export const metadata: Metadata = {
  title: "Portfolio - Mohamad Dit Salamoun - BTS SIO SISR",
  description:
    "Portfolio professionnel de Mohamad Dit Salamoun, étudiant en BTS SIO option SISR, présentant ses compétences en infrastructure, systèmes et réseaux.",
  keywords: ["BTS SIO", "SISR", "Portfolio", "Informatique", "Réseaux", "Systèmes"],
  authors: [{ name: "Mohamad Dit Salamoun" }],
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#1e293b" />
        {/* Script d'initialisation du thème */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function() {
              try {
                const storedTheme = localStorage.getItem('theme');
                if (storedTheme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else if (storedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {
                console.error('Error accessing localStorage for theme', e);
              }
            })();
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Providers>
          <RouteOptimizer />
          <div className="flex min-h-screen flex-col">
            <Header />
            <PageTransition>
              <main className="flex-1">{children}</main>
            </PageTransition>
          </div>
        </Providers>
      </body>
    </html>
  )
}
