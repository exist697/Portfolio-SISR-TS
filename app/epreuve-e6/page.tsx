import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, CheckCircle2 } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export default function EpreuveE6Page() {
  const projets = [
    {
      id: "projet1",
      title: "Déploiement de GLPI avec FusionInventory pour la gestion des incidents et du parc informatique",
      description:
        "Mise en place d'une solution de gestion des incidents et d'inventaire automatisé du parc informatique pour améliorer le support utilisateur et le suivi des équipements.",
      tasks: [
        "Installation et configuration de GLPI avec une base de données MariaDB.",
        "Mise en place du système de gestion des tickets d'incidents.",
        "Intégration de FusionInventory pour automatiser l'inventaire du parc informatique.",
        "Ajout de matériels, utilisateurs, contrats, et configuration des droits d'accès.",
      ],
      documentationFile: "Fiche_descriptive_GLPI_E6_Mohamad_Dit_Salamoun.pdf",
    },
    {
      id: "projet2",
      title: "Implémentation d'Active Directory Domain Services pour une gestion centralisée des utilisateurs",
      description:
        "Conception et déploiement d'une infrastructure Active Directory pour centraliser la gestion des utilisateurs, des postes de travail et des ressources partagées.",
      tasks: [
        "Installation et configuration de deux contrôleurs de domaine AD DS pour assurer la redondance.",
        "Création et organisation des utilisateurs et groupes dans le domaine.",
        "Application des stratégies de groupe (GPO) pour sécuriser et uniformiser les postes clients.",
        "Configuration des accès aux ressources partagées avec tests de validation.",
      ],
      documentationFile: "Fiche_Descriptive_AD_DS_E6_Mohamad_Dit_Salamoun.pdf",
    },
  ]

  return (
    <div className="container py-12">
      <ScrollAnimation>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Épreuve E6 - Parcours de professionnalisation</h1>
        <p className="text-muted-foreground mb-8">
          Présentation des projets réalisés dans le cadre de l'épreuve E6 du BTS SIO
        </p>
      </ScrollAnimation>

      <Tabs defaultValue="projets" className="w-full">
        <TabsList className="grid w-full grid-cols-1 mb-8">
          <TabsTrigger value="projets">Mes projets E6</TabsTrigger>
        </TabsList>

        <TabsContent value="projets" className="space-y-8">
          {projets.map((projet, index) => (
            <ScrollAnimation key={projet.id} delay={index * 100}>
              <Card>
                <CardHeader>
                  <CardTitle>{projet.title}</CardTitle>
                  <CardDescription>{projet.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Tâches réalisées</h3>
                    <ul className="space-y-2">
                      {projet.tasks.map((task, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-end mt-4">
                    <a
                      href={`/docs/${projet.documentationFile}`}
                      download
                      className="inline-flex items-center justify-center gap-1 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                    >
                      <FileText className="h-4 w-4" />
                      Voir la documentation
                    </a>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
