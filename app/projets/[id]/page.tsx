import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge" - Supprimé car non utilisé
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, FileText, Server, Shield, Workflow, Database, Code } from "lucide-react"

// Données des projets (dans un projet réel, ces données seraient stockées dans une base de données)
const projetsData = {
  sps1: {
    title: "Installation et configuration de Windows Server avec Services Bureau à distance",
    description:
      "Mise en place d'un serveur Windows avec configuration des services RDS pour permettre l'accès à distance aux applications et postes de travail.",
    technologies: ["Windows Server", "RDS", "Active Directory", "Group Policy", "PowerShell"],
    icon: <Server className="h-5 w-5" />,
    contexte:
      "Une entreprise de 50 employés souhaitait mettre en place une solution permettant à ses collaborateurs d'accéder à distance aux applications métier et à leur environnement de travail, notamment pour faciliter le télétravail.",
    objectifs: [
      "Installer et configurer Windows Server 2019",
      "Déployer les services Bureau à distance (RDS)",
      "Configurer les collections d'applications et de postes de travail",
      "Sécuriser les accès via SSL et authentification multifacteur",
      "Former les administrateurs à la gestion de la solution",
    ],
    outils: ["Windows Server 2019", "Remote Desktop Services", "Active Directory", "Group Policy", "PowerShell"],
    livrables: [
      "Documentation technique d'installation et de configuration",
      "Guide d'administration des services RDS",
      "Procédures de dépannage",
    ],
    competences: [
      "Installation et configuration de Windows Server",
      "Déploiement des services RDS (Session Host, Connection Broker, Gateway)",
      "Configuration des stratégies de groupe pour la sécurité",
      "Gestion des certificats SSL",
      "Automatisation via PowerShell",
    ],
    autoEvaluation:
      "Ce projet m'a permis d'approfondir mes connaissances sur Windows Server et particulièrement sur les services Bureau à distance. J'ai dû faire face à plusieurs défis, notamment la configuration de la passerelle RDS pour permettre un accès sécurisé depuis Internet et l'optimisation des performances pour les utilisateurs distants. La partie la plus enrichissante a été la mise en place de scripts PowerShell pour automatiser certaines tâches d'administration. Si je devais refaire ce projet, j'explorerais davantage les possibilités d'intégration avec Azure AD pour renforcer la sécurité.",
    // Nom du fichier PDF pour la documentation
    pdfFileName: "doc-windows-server-rds.pdf",
  },
  sps2: {
    title: "Création d'une infrastructure réseau sous Windows Server : DHCP, DNS et Active Directory",
    description:
      "Déploiement d'une infrastructure réseau complète avec services DHCP, DNS et Active Directory pour une gestion centralisée des ressources.",
    technologies: ["Windows Server", "DHCP", "DNS", "Active Directory", "PowerShell"],
    icon: <Workflow className="h-5 w-5" />,
    contexte:
      "Une PME en pleine croissance avait besoin de restructurer son infrastructure réseau pour améliorer la gestion des utilisateurs, des postes de travail et des ressources partagées. L'entreprise passait de 15 à 40 employés et son ancien système peer-to-peer n'était plus adapté.",
    objectifs: [
      "Mettre en place un serveur Windows avec les rôles DHCP, DNS et Active Directory",
      "Configurer les plages d'adresses IP et les réservations DHCP",
      "Créer une structure d'annuaire AD DS avec unités d'organisation adaptées",
      "Implémenter des stratégies de groupe pour la sécurité et la configuration des postes",
      "Mettre en place un système de sauvegarde automatisé",
    ],
    outils: [
      "Windows Server 2019",
      "Active Directory Domain Services",
      "DHCP Server",
      "DNS Server",
      "Group Policy Management",
    ],
    livrables: [
      "Documentation technique de l'infrastructure",
      "Schéma d'architecture réseau",
      "Procédures d'administration",
    ],
    competences: [
      "Installation et configuration des services réseau Windows",
      "Conception et implémentation d'une structure Active Directory",
      "Configuration avancée du DHCP (failover, réservations, options)",
      "Gestion des zones DNS et des enregistrements",
      "Élaboration de stratégies de groupe",
    ],
    autoEvaluation:
      "Ce projet a été très formateur car il m'a permis de mettre en pratique les fondamentaux de l'administration Windows Server. La partie la plus complexe a été la conception de la structure Active Directory pour qu'elle soit à la fois adaptée aux besoins actuels de l'entreprise et suffisamment évolutive pour accompagner sa croissance. J'ai particulièrement apprécié la mise en place des stratégies de groupe qui permettent d'automatiser la configuration des postes clients. Pour améliorer ce projet, j'aurais pu mettre en place une solution de monitoring plus complète pour surveiller l'état des services et anticiper les problèmes potentiels.",
    // Nom du fichier PDF pour la documentation
    pdfFileName: "doc-ad-dhcp-dns.pdf",
  },
  sps3: {
    title: "Configuration des filtres ACL",
    description:
      "Implémentation de listes de contrôle d'accès (ACL) pour sécuriser le réseau et contrôler le trafic entre différents segments.",
    technologies: ["Cisco IOS", "ACL", "Sécurité réseau", "VLANs", "Routage"],
    icon: <Shield className="h-5 w-5" />,
    contexte:
      "Une entreprise disposant de plusieurs départements (comptabilité, RH, R&D, production) souhaitait renforcer la sécurité de son réseau en contrôlant précisément les flux entre ces différents services, tout en maintenant les communications nécessaires au bon fonctionnement de l'organisation.",
    objectifs: [
      "Analyser les besoins de communication entre les différents services",
      "Concevoir une politique de filtrage adaptée",
      "Implémenter des ACL standard et étendues sur les équipements Cisco",
      "Tester et valider les règles de filtrage",
      "Documenter la configuration pour faciliter la maintenance",
    ],
    outils: ["Routeurs Cisco", "Cisco IOS", "Packet Tracer", "Wireshark", "Documentation Cisco"],
    livrables: [
      "Documentation technique des ACL implémentées",
      "Matrice des flux autorisés entre les différents segments",
    ],
    competences: [
      "Configuration d'ACL standard et étendues sur Cisco IOS",
      "Analyse et filtrage de trafic réseau",
      "Sécurisation des accès inter-VLAN",
      "Dépannage des problèmes de connectivité liés aux ACL",
      "Documentation technique des règles de filtrage",
    ],
    autoEvaluation:
      "Ce projet m'a permis d'approfondir mes connaissances en matière de sécurité réseau et de filtrage de trafic. La principale difficulté a été de trouver le bon équilibre entre sécurité et fonctionnalité : des règles trop restrictives bloquaient des communications légitimes, tandis que des règles trop permissives ne remplissaient pas l'objectif de sécurisation. J'ai particulièrement apprécié la phase de test qui m'a permis de vérifier concrètement l'efficacité des ACL mises en place. Si je devais améliorer ce projet, j'utiliserais des ACL nommées pour faciliter la maintenance et j'implémenterais un système de journalisation plus détaillé pour analyser les tentatives de connexion bloquées.",
    // Nom du fichier PDF pour la documentation
    pdfFileName: "doc-filtres-acl.pdf",
  },
  sps4: {
    title: "Conception et mise en œuvre d'un réseau VLAN avec intégration de services Windows",
    description:
      "Création d'une infrastructure réseau segmentée en VLANs avec intégration des services Windows pour une gestion optimisée des ressources.",
    technologies: ["VLANs", "Windows Server", "Cisco", "Routage inter-VLAN", "Sécurité réseau"],
    icon: <Server className="h-5 w-5" />,
    contexte:
      "Une entreprise de taille moyenne souhaitait restructurer son réseau pour améliorer les performances et la sécurité. L'objectif était de segmenter le réseau en VLANs par département tout en garantissant l'accès aux services Windows centralisés (Active Directory, partages de fichiers, impression).",
    objectifs: [
      "Concevoir une architecture réseau basée sur des VLANs",
      "Configurer les switches Cisco pour la gestion des VLANs",
      "Mettre en place le routage inter-VLAN",
      "Intégrer les services Windows dans cette architecture",
      "Sécuriser les communications entre les différents segments",
    ],
    outils: [
      "Switches Cisco Catalyst",
      "Routeurs Cisco",
      "Windows Server 2019",
      "Active Directory",
      "DHCP avec options de VLAN",
    ],
    livrables: ["Documentation technique de l'architecture réseau", "Schéma détaillé des VLANs et du routage"],
    competences: [
      "Configuration de VLANs sur équipements Cisco",
      "Mise en place du routage inter-VLAN (Router-on-a-Stick ou SVIs)",
      "Configuration du protocole VTP (VLAN Trunking Protocol)",
      "Adaptation des services Windows à une architecture multi-VLAN",
      "Sécurisation des flux entre VLANs",
    ],
    autoEvaluation:
      "Ce projet a été particulièrement enrichissant car il combinait des compétences réseau (configuration des VLANs, routage) et des compétences système (adaptation des services Windows). La principale difficulté a été de configurer correctement le DHCP pour qu'il attribue les adresses IP appropriées selon le VLAN d'appartenance des clients. J'ai beaucoup appris sur l'interaction entre la couche réseau et les services applicatifs. Pour améliorer ce projet, j'aurais pu mettre en place une solution de QoS (Quality of Service) pour prioriser certains types de trafic, notamment la voix sur IP qui était envisagée comme évolution future.",
    // Nom du fichier PDF pour la documentation
    pdfFileName: "doc-vlan-windows.pdf",
  },
  sps5: {
    title: "Installation et configuration de Proxmox et création d'un Cluster",
    description:
      "Déploiement d'une solution de virtualisation avec Proxmox VE et mise en place d'un cluster haute disponibilité pour les machines virtuelles.",
    technologies: ["Proxmox VE", "Virtualisation", "Clustering", "Linux", "HA"],
    icon: <Database className="h-5 w-5" />,
    contexte:
      "Une entreprise souhaitait moderniser son infrastructure IT en migrant vers une solution de virtualisation open source. L'objectif était de consolider plusieurs serveurs physiques en une infrastructure virtualisée hautement disponible, tout en réduisant les coûts de licence.",
    objectifs: [
      "Installer Proxmox VE sur plusieurs serveurs physiques",
      "Configurer un cluster Proxmox pour la haute disponibilité",
      "Mettre en place un stockage partagé (Ceph ou NFS)",
      "Migrer les services existants vers des machines virtuelles",
      "Configurer les sauvegardes automatisées des VMs",
    ],
    outils: ["Proxmox VE 7.x", "Ceph", "ZFS", "Linux Debian", "Shell scripting"],
    livrables: ["Documentation technique de l'infrastructure Proxmox", "Procédures d'administration et de maintenance"],
    competences: [
      "Installation et configuration de Proxmox VE",
      "Mise en place d'un cluster haute disponibilité",
      "Configuration du stockage distribué avec Ceph",
      "Gestion des machines virtuelles et conteneurs LXC",
      "Automatisation des tâches d'administration via API et scripts",
    ],
    autoEvaluation:
      "Ce projet m'a permis de développer mes compétences en virtualisation open source et en clustering. La partie la plus complexe a été la configuration du stockage distribué Ceph, qui nécessite une compréhension approfondie des concepts de réplication et de distribution des données. J'ai particulièrement apprécié la flexibilité de Proxmox et sa capacité à gérer à la fois des machines virtuelles et des conteneurs. Si je devais améliorer ce projet, j'explorerais davantage les possibilités d'automatisation via l'API Proxmox et je mettrais en place un système de monitoring plus complet pour surveiller les performances du cluster.",
    // Nom du fichier PDF pour la documentation
    pdfFileName: "doc-proxmox-cluster.pdf",
  },
  sps6: {
    title: "Installation de NGINX et configuration de PHP et HTTPS",
    description:
      "Mise en place d'un serveur web NGINX avec support PHP et sécurisation via HTTPS pour l'hébergement d'applications web.",
    technologies: ["NGINX", "PHP-FPM", "HTTPS", "SSL/TLS", "Linux"],
    icon: <Code className="h-5 w-5" />,
    contexte:
      "Une startup développant des applications web avait besoin d'un environnement d'hébergement performant et sécurisé pour ses projets. L'équipe souhaitait migrer de Apache vers NGINX pour bénéficier de meilleures performances et d'une configuration plus adaptée à leurs besoins.",
    objectifs: [
      "Installer et configurer NGINX sur un serveur Linux",
      "Mettre en place PHP-FPM pour le traitement des scripts PHP",
      "Configurer HTTPS avec Let's Encrypt pour sécuriser les communications",
      "Optimiser les performances du serveur web",
      "Mettre en place un système de logs et de monitoring",
    ],
    outils: ["NGINX", "PHP-FPM", "Let's Encrypt", "Certbot", "Ubuntu Server"],
    livrables: [
      "Documentation technique de l'installation et de la configuration",
      "Guide des bonnes pratiques de sécurité pour NGINX",
    ],
    competences: [
      "Installation et configuration de NGINX",
      "Configuration de PHP-FPM et optimisation des performances",
      "Mise en place de HTTPS avec Let's Encrypt",
      "Configuration de la sécurité web (headers, CORS, CSP)",
      "Gestion des logs et analyse des performances",
    ],
    autoEvaluation:
      "Ce projet m'a permis d'approfondir mes connaissances sur les serveurs web modernes et les bonnes pratiques de sécurité. La partie la plus intéressante a été l'optimisation des performances de NGINX et PHP-FPM pour gérer efficacement les pics de charge. J'ai également beaucoup appris sur la configuration HTTPS et l'automatisation du renouvellement des certificats avec Certbot. Pour améliorer ce projet, j'aurais pu mettre en place une solution de cache plus avancée (comme Varnish) et explorer davantage les possibilités de NGINX en tant que reverse proxy pour d'autres services.",
    // Nom du fichier PDF pour la documentation
    pdfFileName: "doc-nginx-php-https.pdf",
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
      </div>

      <Tabs defaultValue="bilan" className="w-full">
        <TabsList className="grid w-full grid-cols-1">
          <TabsTrigger value="bilan">Bilan</TabsTrigger>
        </TabsList>

        <TabsContent value="bilan" className="mt-6 space-y-6">
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
                    <h3 className="font-medium">Documentation technique</h3>
                    <p className="text-sm text-muted-foreground">Document PDF</p>
                  </div>
                  {/* Fichier PDF à télécharger en fonction du projet */}
                  {params.id === "sps1" && (
                    <a
                      href="/docs/Installation_et_configuration_de_Windows_Server_avec_Services.pdf"
                      download
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                    >
                      Télécharger
                    </a>
                  )}
                  {params.id === "sps2" && (
                    <a
                      href="/docs/Création_dune_infrastructure_réseau_sous_Windows_Server_DHCP_ET_DNS.pdf"
                      download
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                    >
                      Télécharger
                    </a>
                  )}
                  {params.id === "sps3" && (
                    <a
                      href="/docs/Configuration_des_filtres_ACL.pdf"
                      download
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                    >
                      Télécharger
                    </a>
                  )}
                  {params.id === "sps4" && (
                    <a
                      href="/docs/Conception_et_mise_en_oeuvre_dun_réseau_Vlan_avec_intégration_de_services.pdf"
                      download
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                    >
                      Télécharger
                    </a>
                  )}
                  {params.id === "sps5" && (
                    <a
                      href="/docs/Projet_Proxmox.pdf"
                      download
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                    >
                      Télécharger
                    </a>
                  )}
                  {params.id === "sps6" && (
                    <a
                      href="/docs/Documentation_NGINX_et_Configuration_de_PHP_et_HTTPS.pdf"
                      download
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                    >
                      Télécharger
                    </a>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
