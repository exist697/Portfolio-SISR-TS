import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, CheckCircle2, FileText, Server, Shield, Workflow } from "lucide-react"

// Données des projets (dans un projet réel, ces données seraient stockées dans une base de données)
const projetsData = {
  sps1: {
    title: "Mise en place d'une infrastructure réseau sécurisée",
    description:
      "Conception et déploiement d'une infrastructure réseau sécurisée pour une PME, incluant segmentation VLAN, pare-feu et VPN.",
    technologies: ["Cisco", "pfSense", "VPN", "VLAN", "Active Directory"],
    icon: <Server className="h-5 w-5" />,
    contexte:
      "Une PME de 30 employés souhaitait renforcer la sécurité de son infrastructure réseau suite à une tentative d'intrusion. L'entreprise disposait d'un réseau plat sans segmentation et d'un pare-feu obsolète.",
    objectifs: [
      "Segmenter le réseau en VLANs distincts selon les services",
      "Mettre en place un pare-feu nouvelle génération",
      "Configurer un accès VPN sécurisé pour le télétravail",
      "Documenter l'infrastructure et former les administrateurs",
    ],
    outils: ["Switches Cisco Catalyst", "Pare-feu pfSense", "OpenVPN", "Windows Server 2019", "Active Directory"],
    livrables: [
      "Schéma d'infrastructure réseau",
      "Documentation technique de déploiement",
      "Procédures d'administration",
      "Rapport de tests de sécurité",
    ],
    competences: [
      "Administration des réseaux",
      "Sécurisation des accès",
      "Configuration de VLANs",
      "Mise en place de règles de pare-feu",
      "Documentation technique",
    ],
    autoEvaluation:
      "Ce projet m'a permis de mettre en pratique mes connaissances en segmentation réseau et en sécurité. J'ai particulièrement développé mes compétences en configuration de pare-feu et en gestion des VLANs. La principale difficulté a été de maintenir la continuité de service pendant la migration, mais j'ai réussi à minimiser les interruptions grâce à une planification rigoureuse.",
  },
  sps2: {
    title: "Automatisation du déploiement de postes de travail",
    description:
      "Création d'un système automatisé de déploiement d'images Windows pour un parc informatique de 50 postes.",
    technologies: ["Windows Deployment Services", "MDT", "PowerShell", "SCCM"],
    icon: <Workflow className="h-5 w-5" />,
    contexte:
      "Une entreprise devait renouveler son parc informatique de 50 postes de travail et souhaitait standardiser la configuration des machines tout en automatisant le processus de déploiement pour gagner du temps.",
    objectifs: [
      "Créer une image de référence Windows 10 avec les logiciels métiers préinstallés",
      "Mettre en place un serveur de déploiement automatisé",
      "Automatiser la configuration post-installation via scripts",
      "Réduire le temps de déploiement à moins de 30 minutes par poste",
    ],
    outils: [
      "Windows Deployment Services (WDS)",
      "Microsoft Deployment Toolkit (MDT)",
      "PowerShell",
      "System Center Configuration Manager (SCCM)",
    ],
    livrables: [
      "Image de référence Windows 10 Enterprise",
      "Scripts PowerShell d'automatisation",
      "Documentation du processus de déploiement",
      "Rapport de performance du déploiement",
    ],
    competences: [
      "Gestion de parc informatique",
      "Automatisation par scripts",
      "Déploiement d'OS Windows",
      "Configuration de services WDS/MDT",
      "Gestion de projet IT",
    ],
    autoEvaluation:
      "Ce projet a été très formateur sur les aspects d'automatisation et de standardisation. J'ai pu réduire le temps de déploiement d'un poste de 2 heures (installation manuelle) à 25 minutes en moyenne. J'ai particulièrement apprécié la partie scripting PowerShell qui m'a permis d'automatiser des tâches répétitives. Pour améliorer ce projet, j'aurais pu intégrer une solution de gestion de configuration pour maintenir les postes à jour après le déploiement initial.",
  },
  sps3: {
    title: "Audit de sécurité et remédiation",
    description:
      "Réalisation d'un audit de sécurité complet sur l'infrastructure d'une entreprise et mise en place des correctifs nécessaires.",
    technologies: ["Kali Linux", "Nessus", "Metasploit", "OWASP"],
    icon: <Shield className="h-5 w-5" />,
    contexte:
      "Une entreprise du secteur financier souhaitait évaluer le niveau de sécurité de son infrastructure IT suite à plusieurs incidents de cybersécurité dans son secteur. L'audit devait couvrir l'ensemble des systèmes, réseaux et applications web de l'entreprise.",
    objectifs: [
      "Identifier les vulnérabilités de l'infrastructure réseau et des serveurs",
      "Tester la sécurité des applications web de l'entreprise",
      "Évaluer la robustesse des politiques de sécurité existantes",
      "Proposer et mettre en œuvre des solutions de remédiation",
    ],
    outils: ["Kali Linux", "Nessus Professional", "Metasploit Framework", "OWASP ZAP", "Wireshark"],
    livrables: [
      "Rapport d'audit détaillé avec classification des vulnérabilités",
      "Plan de remédiation priorisé",
      "Documentation des correctifs appliqués",
      "Recommandations pour améliorer la politique de sécurité",
    ],
    competences: [
      "Analyse de vulnérabilités",
      "Tests d'intrusion",
      "Sécurité des applications web",
      "Hardening de serveurs",
      "Rédaction de rapports techniques",
    ],
    autoEvaluation:
      "Cet audit m'a permis de mettre en pratique mes connaissances en cybersécurité dans un environnement réel. J'ai découvert l'importance d'une approche méthodique et documentée lors d'un audit. La phase de remédiation a été particulièrement enrichissante car elle m'a obligé à trouver des solutions adaptées aux contraintes de l'entreprise. J'ai également appris à communiquer efficacement sur des sujets techniques avec des interlocuteurs non-techniques.",
  },
  sps4: {
    title: "Migration vers une solution cloud hybride",
    description:
      "Planification et exécution de la migration d'une partie des services d'une entreprise vers une solution cloud hybride.",
    technologies: ["Azure", "AWS", "Hybrid Cloud", "Docker", "Kubernetes"],
    icon: <Server className="h-5 w-5" />,
    contexte:
      "Une entreprise de taille moyenne souhaitait moderniser son infrastructure IT en migrant certains services vers le cloud tout en conservant des systèmes critiques sur site. L'objectif était d'améliorer la scalabilité et la résilience tout en optimisant les coûts.",
    objectifs: [
      "Analyser les charges de travail existantes et déterminer celles à migrer vers le cloud",
      "Concevoir une architecture cloud hybride sécurisée",
      "Mettre en place une connectivité sécurisée entre l'infrastructure on-premise et le cloud",
      "Migrer les services sélectionnés avec un minimum d'interruption",
    ],
    outils: ["Microsoft Azure", "AWS", "Azure ExpressRoute", "Docker", "Kubernetes", "Terraform"],
    livrables: [
      "Architecture détaillée de la solution cloud hybride",
      "Plan de migration par phases",
      "Documentation de l'infrastructure déployée",
      "Rapport de performance et d'optimisation des coûts",
    ],
    competences: [
      "Architecture cloud",
      "Virtualisation et conteneurisation",
      "Réseaux étendus et connectivité hybride",
      "Infrastructure as Code (IaC)",
      "Gestion de projet de migration",
    ],
    autoEvaluation:
      "Ce projet de migration cloud a été très enrichissant car il m'a permis de travailler sur des technologies modernes tout en prenant en compte les contraintes de l'existant. J'ai particulièrement apprécié la partie conception de l'architecture hybride qui nécessitait de trouver le bon équilibre entre performances, sécurité et coûts. La principale difficulté a été de gérer la migration des données avec un minimum d'impact sur l'activité, ce qui a nécessité une planification minutieuse et des tests approfondis.",
  },
}

export default function ProjetDetailPage({ params }: { params: { id: string } }) {
  const projet = projetsData[params.id as keyof typeof projetsData]

  if (!projet) {
    notFound()
  }

  return (
    <div className="container py-12">
      <div className="flex items-center gap-2 mb-8">
        <Link href="/projets">
          <Button variant="outline" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4" />
            Retour aux projets
          </Button>
        </Link>
      </div>

      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          {projet.icon}
          {projet.title}
        </h1>
        <p className="text-muted-foreground">{projet.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {projet.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <Tabs defaultValue="bilan" className="w-full">
        <TabsList className="grid w-full grid-cols-1">
          <TabsTrigger value="bilan">Bilan</TabsTrigger>
        </TabsList>

        <TabsContent value="bilan" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Compétences mises en œuvre</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {projet.competences.map((competence, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{competence}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Auto-évaluation</CardTitle>
              <CardDescription>Analyse réflexive sur le projet réalisé</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{projet.autoEvaluation}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Documents associés</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <FileText className="h-8 w-8 text-primary" />
                  <div className="flex-1">
                    <h3 className="font-medium">Rapport complet du projet</h3>
                    <p className="text-sm text-muted-foreground">Document PDF - 2.4 Mo</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Télécharger
                  </Button>
                </div>
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <FileText className="h-8 w-8 text-primary" />
                  <div className="flex-1">
                    <h3 className="font-medium">Documentation technique</h3>
                    <p className="text-sm text-muted-foreground">Document PDF - 1.8 Mo</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Télécharger
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
