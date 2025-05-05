import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, FileText, Server, Shield, Workflow } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export default function ProjetsPage() {
  const projets = [
    {
      id: "sps1",
      title: "Mise en place d'une infrastructure réseau sécurisée",
      description:
        "Conception et déploiement d'une infrastructure réseau sécurisée pour une PME, incluant segmentation VLAN, pare-feu et VPN.",
      technologies: ["Cisco", "pfSense", "VPN", "VLAN", "Active Directory"],
      icon: <Server className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />,
    },
    {
      id: "sps2",
      title: "Automatisation du déploiement de postes de travail",
      description:
        "Création d'un système automatisé de déploiement d'images Windows pour un parc informatique de 50 postes.",
      technologies: ["Windows Deployment Services", "MDT", "PowerShell", "SCCM"],
      icon: <Workflow className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />,
    },
    {
      id: "sps3",
      title: "Audit de sécurité et remédiation",
      description:
        "Réalisation d'un audit de sécurité complet sur l'infrastructure d'une entreprise et mise en place des correctifs nécessaires.",
      technologies: ["Kali Linux", "Nessus", "Metasploit", "OWASP"],
      icon: <Shield className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />,
    },
    {
      id: "sps4",
      title: "Migration vers une solution cloud hybride",
      description:
        "Planification et exécution de la migration d'une partie des services d'une entreprise vers une solution cloud hybride.",
      technologies: ["Azure", "AWS", "Hybrid Cloud", "Docker", "Kubernetes"],
      icon: <Server className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />,
    },
  ]

  return (
    <div className="container py-12">
      <ScrollAnimation>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Projets professionnels</h1>
        <p className="text-muted-foreground mb-8">
          Situations Professionnelles Significatives (SPS) réalisées dans le cadre du BTS SIO SISR
        </p>
      </ScrollAnimation>

      <div className="grid gap-6 md:grid-cols-2">
        {projets.map((projet, index) => (
          <ScrollAnimation key={projet.id} delay={index * 100}>
            <Card className="flex flex-col transition-all duration-200 hover:border-primary/20 hover:shadow-md group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="flex items-center gap-2">
                      {projet.icon}
                      {projet.title}
                    </CardTitle>
                    <CardDescription>{projet.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {projet.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="transition-all duration-200 hover:scale-105">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <Link href={`/projets/${projet.id}`} className="w-full">
                  <Button variant="outline" className="w-full gap-1 transition-all duration-200 group">
                    Voir le détail
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </ScrollAnimation>
        ))}
      </div>

      <ScrollAnimation delay={400} direction="up" className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight mb-4">Documentation des projets</h2>
        <p className="text-muted-foreground mb-6">
          Retrouvez ci-dessous les documents complémentaires liés aux projets réalisés.
        </p>

        <div className="space-y-4">
          {projets.map((projet, index) => (
            <ScrollAnimation key={`doc-${projet.id}`} delay={500 + index * 100} direction="right">
              <div className="flex items-center gap-4 p-4 border rounded-lg transition-all duration-200 hover:border-primary/30 hover:shadow-sm hover:translate-x-1">
                <FileText className="h-8 w-8 text-primary transition-transform duration-200 group-hover:scale-110" />
                <div className="flex-1">
                  <h3 className="font-medium">{projet.title}</h3>
                  <p className="text-sm text-muted-foreground">Documentation technique et rapport de projet</p>
                </div>
                <Button variant="ghost" size="sm" className="transition-transform duration-200 hover:scale-105">
                  Télécharger
                </Button>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </ScrollAnimation>
    </div>
  )
}
