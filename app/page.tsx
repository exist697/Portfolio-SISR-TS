import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Briefcase, Code, FileText, Lightbulb, GraduationCap, ClipboardList } from "lucide-react"
import OptimizedImage from "@/components/image-optimization"
import { Suspense } from "react"
import ScrollAnimation from "@/components/scroll-animation"

// Composant de chargement léger pour le Suspense
function CardSkeleton() {
  return (
    <div className="border rounded-lg p-6 flex flex-col items-center text-center gap-4 animate-pulse">
      <div className="w-10 h-10 rounded-full bg-muted"></div>
      <div className="space-y-2 w-full">
        <div className="h-4 bg-muted rounded w-3/4 mx-auto"></div>
        <div className="h-3 bg-muted rounded w-full mx-auto"></div>
      </div>
      <div className="w-full h-9 bg-muted rounded mt-auto"></div>
    </div>
  )
}

export default function Home() {
  // Données des sections pour éviter la répétition de code
  const sections = [
    {
      id: "bts-sio",
      title: "BTS SIO & Options",
      description: "Découvrez la formation BTS SIO et ses options SISR et SLAM",
      icon: <BookOpen className="h-10 w-10 text-primary card-icon" />,
      href: "/bts-sio",
    },
    {
      id: "parcours",
      title: "Parcours",
      description: "Mon parcours scolaire et professionnel",
      icon: <Briefcase className="h-10 w-10 text-secondary card-icon" />,
      href: "/parcours",
    },
    {
      id: "competences",
      title: "Compétences",
      description: "Mes compétences techniques en informatique",
      icon: <Code className="h-10 w-10 text-accent card-icon" />,
      href: "/competences",
    },
    {
      id: "projets",
      title: "Projets E5",
      description: "Mes situations professionnelles significatives",
      icon: <FileText className="h-10 w-10 text-primary card-icon" />,
      href: "/projets",
    },
    {
      id: "epreuve-e6",
      title: "Épreuve E6",
      description: "Présentation et documentation de l'épreuve E6",
      icon: <ClipboardList className="h-10 w-10 text-secondary card-icon" />,
      href: "/epreuve-e6",
    },
    {
      id: "veille",
      title: "Veille technologique",
      description: "Ma démarche de veille et ses résultats",
      icon: <Lightbulb className="h-10 w-10 text-accent card-icon" />,
      href: "/veille",
    },
  ]

  // Données des certifications pour éviter la répétition de code
  const certifications = [
    { name: "Cisco", title: "Cybersecurity Essentials", year: "2024", color: "primary" },
    { name: "AWS", title: "AWS Essentials", year: "2024", color: "secondary" },
    { name: "Azure", title: "Azure Essentials", year: "2023", color: "primary" },
    { name: "GCP", title: "Google Cloud Platform", year: "2023", color: "accent" },
  ]

  return (
    <div className="flex flex-col gap-12 pb-8">
      {/* Hero Section - Optimisée avec animation */}
      <section className="w-full py-12 md:py-24 lg:py-32 gradient-bg">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <ScrollAnimation direction="left" className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Mohamad Dit Salamoun
                </h1>
                <p className="text-xl text-foreground">Portfolio professionnel - BTS SIO option SISR</p>
                <p className="text-muted-foreground max-w-[600px] mt-4">
                  Bienvenue sur mon portfolio numérique réalisé dans le cadre de l'épreuve E5 du BTS SIO. Découvrez mon
                  parcours, mes compétences et mes projets en informatique, spécialisés dans les infrastructures,
                  systèmes et réseaux.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/projets">
                  <Button className="gap-1 bg-primary hover:bg-primary/90 btn-hover-effect">
                    Voir mes projets
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-primary/20 hover:bg-primary/10 hover:text-primary btn-hover-effect"
                  >
                    Me contacter
                  </Button>
                </Link>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="right" className="flex items-center justify-center">
              <div className="relative h-[350px] w-[350px] rounded-full bg-gradient-to-b from-primary/20 to-secondary/20 p-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-[300px] w-[300px] overflow-hidden rounded-full bg-background border-4 border-primary/20">
                    <div className="image-scale">
                      <OptimizedImage
                        src="/images/profile.png"
                        alt="Mohamad Dit Salamoun"
                        width={300}
                        height={300}
                        priority={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Sections Overview - Optimisée avec Suspense et animations */}
      <section className="container px-4 md:px-6">
        <ScrollAnimation>
          <h2 className="text-2xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Découvrez mon portfolio
          </h2>
        </ScrollAnimation>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Suspense
            fallback={
              <>
                {[...Array(6)].map((_, i) => (
                  <CardSkeleton key={i} />
                ))}
              </>
            }
          >
            {sections.map((section, index) => (
              <ScrollAnimation key={section.id} delay={index * 100} threshold={0.1}>
                <Card className="card-hover-effect border-primary/10 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4 h-full">
                    {section.icon}
                    <div>
                      <h2 className="text-xl font-semibold">{section.title}</h2>
                      <p className="text-sm text-muted-foreground mt-2">{section.description}</p>
                    </div>
                    <Link href={section.href} className="mt-auto w-full">
                      <Button
                        variant="outline"
                        className="w-full border-primary/20 hover:bg-primary/10 hover:text-primary btn-hover-effect"
                      >
                        En savoir plus
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </Suspense>
        </div>
      </section>

      {/* À propos de moi - Code optimisé avec animations */}
      <section className="container px-4 md:px-6 py-8 gradient-bg rounded-lg">
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <ScrollAnimation direction="left">
            <h2 className="text-2xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              À propos de moi
            </h2>
            <p className="text-muted-foreground mb-4">
              Étudiant passionné en BTS SIO option SISR, je me spécialise dans les infrastructures réseau, la
              cybersécurité et l'administration système. Mon objectif est de poursuivre mes études en Bachelor
              Administrateur cybersécurité et réseaux pour approfondir mes connaissances dans ce domaine.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
              <Link href="/cv">
                <Button
                  variant="outline"
                  className="gap-1 border-primary/20 hover:bg-primary/10 hover:text-primary btn-hover-effect"
                >
                  Voir mon CV complet
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="right">
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <GraduationCap className="h-8 w-8 text-primary mb-2" />,
                  title: "Formation",
                  desc: "BTS SIO SISR 2023-2025",
                },
                {
                  icon: <Briefcase className="h-8 w-8 text-secondary mb-2" />,
                  title: "Expérience",
                  desc: "Assistant Chef de projet IT",
                },
                {
                  icon: <Code className="h-8 w-8 text-accent mb-2" />,
                  title: "Compétences",
                  desc: "Réseaux, Systèmes, Cloud",
                },
                {
                  icon: <Lightbulb className="h-8 w-8 text-primary mb-2" />,
                  title: "Intérêts",
                  desc: "Cybersécurité, IA, Cloud",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-background p-4 rounded-lg shadow-sm border border-primary/10 transition-all duration-300 hover:shadow-md hover:border-primary/30"
                >
                  {item.icon}
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Certifications - Code optimisé avec animations */}
      <section className="container px-4 md:px-6">
        <ScrollAnimation>
          <h2 className="text-2xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Certifications
          </h2>
        </ScrollAnimation>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, index) => (
            <ScrollAnimation key={index} delay={index * 100} direction="up">
              <div
                className={`flex items-center p-4 border border-primary/10 rounded-lg transition-all duration-300 hover:shadow-md hover:bg-${cert.color}/10 hover:border-${cert.color}/30`}
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Badge variant="outline" className="text-primary border-primary/30">
                    {cert.name}
                  </Badge>
                </div>
                <div>
                  <h3 className="font-medium">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.year}</p>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>
    </div>
  )
}
