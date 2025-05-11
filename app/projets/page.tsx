import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Server, Shield, Workflow, Database, Code, FileText, Github } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export default function ProjetsPage() {
  const projets = [
    {
      id: "sps1",
      title: "Installation et configuration de Windows Server avec Services Bureau à distance",
      description:
        "Mise en place d'un serveur Windows avec configuration des services RDS pour permettre l'accès à distance aux applications et postes de travail.",
      icon: <Server className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />,
    },
    {
      id: "sps2",
      title: "Création d'une infrastructure réseau sous Windows Server : DHCP, DNS et Active Directory",
      description:
        "Déploiement d'une infrastructure réseau complète avec services DHCP, DNS et Active Directory pour une gestion centralisée des ressources.",
      icon: <Workflow className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />,
    },
    {
      id: "sps3",
      title: "Configuration des filtres ACL",
      description:
        "Implémentation de listes de contrôle d'accès (ACL) pour sécuriser le réseau et contrôler le trafic entre différents segments.",
      icon: <Shield className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />,
    },
    {
      id: "sps4",
      title: "Conception et mise en œuvre d'un réseau VLAN avec intégration de services Windows",
      description:
        "Création d'une infrastructure réseau segmentée en VLANs avec intégration des services Windows pour une gestion optimisée des ressources.",
      icon: <Server className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />,
    },
    {
      id: "sps5",
      title: "Installation et configuration de Proxmox et création d'un Cluster",
      description:
        "Déploiement d'une solution de virtualisation avec Proxmox VE et mise en place d'un cluster haute disponibilité pour les machines virtuelles.",
      icon: <Database className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />,
    },
    {
      id: "sps6",
      title: "Installation de NGINX et configuration de PHP et HTTPS",
      description:
        "Mise en place d'un serveur web NGINX avec support PHP et sécurisation via HTTPS pour l'hébergement d'applications web.",
      icon: <Code className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />,
    },
    {
      id: "airfrance",
      title: "Création d'un script pour Air France",
      description:
        "Documentation d'un script développé pour assurer une migration fluide des données de vols entre SKYTANKING et Infotel, avec gestion des pré-requis, étapes d'exécution et sécurité.",
      icon: <Code className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />,
      documentationFile: "/docs/Procédure_utilisation_TransfertDataVols.pdf",
    },
    {
      id: "security",
      title: "Outils de sécurité powershell",
      description:
        "Un projet de script PowerShell orienté sécurité informatique, comprenant : des outils d'analyse, des automatisations de vérifications, des bonnes pratiques de sécurité système.",
      icon: <Shield className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />,
      githubLink: "https://github.com/exist697/Shell-Security-Toolkit",
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
            <Card className="flex flex-col h-full transition-all duration-200 hover:border-primary/20 hover:shadow-md group">
              <CardHeader className="flex-1">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      {projet.icon}
                      {projet.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3 h-[4.5rem]">{projet.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardFooter className="pt-2">
                {projet.id === "airfrance" ? (
                  <a
                    href={projet.documentationFile}
                    download
                    className="inline-flex w-full items-center justify-center gap-1 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                  >
                    <FileText className="h-4 w-4" />
                    Voir la documentation
                  </a>
                ) : projet.id === "security" ? (
                  <a
                    href={projet.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-1 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                  >
                    <Github className="h-4 w-4" />
                    Voir sur GitHub
                  </a>
                ) : (
                  <Link href={`/projets/${projet.id}`} className="w-full">
                    <Button variant="outline" className="w-full gap-1 transition-all duration-200 group">
                      Voir le détail
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                )}
              </CardFooter>
            </Card>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  )
}
