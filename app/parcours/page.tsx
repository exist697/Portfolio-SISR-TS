import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, GraduationCap } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import AnimatedListItem from "@/components/animated-list-item"

export default function ParcoursPage() {
  return (
    <div className="container py-12">
      <ScrollAnimation>
        <h1 className="text-3xl font-bold tracking-tight mb-6">Parcours scolaire et professionnel</h1>
      </ScrollAnimation>

      <Tabs defaultValue="formation" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="formation" className="transition-all duration-200">
            Formation
          </TabsTrigger>
          <TabsTrigger value="experience" className="transition-all duration-200">
            Expérience professionnelle
          </TabsTrigger>
        </TabsList>

        <TabsContent value="formation" className="mt-6">
          <ScrollAnimation>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Diplômes et Formations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <ScrollAnimation delay={100} direction="left">
                    <div className="relative border-l pl-6 pb-2 timeline-item">
                      <div className="absolute -left-[7px] h-3.5 w-3.5 rounded-full border-2 border-primary bg-background"></div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <div>
                          <h3 className="font-semibold text-lg">
                            Bachelor 3 : Administrateur cybersécurité et réseaux
                          </h3>
                          <p className="text-muted-foreground">ECE École d'ingénieurs Paris</p>
                        </div>
                        <div className="text-sm text-muted-foreground whitespace-nowrap">Sept. 2025 - Août 2026</div>
                      </div>
                      <div className="mt-2">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <AnimatedListItem index={0}>
                            Rythme : 2 semaines formation / 3 semaines entreprise
                          </AnimatedListItem>
                          <AnimatedListItem index={1}>Admissible année 2025-2026</AnimatedListItem>
                        </ul>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation delay={200} direction="left">
                    <div className="relative border-l pl-6 pb-2 timeline-item">
                      <div className="absolute -left-[7px] h-3.5 w-3.5 rounded-full border-2 border-primary bg-background"></div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <div>
                          <h3 className="font-semibold text-lg">BTS SIO - Option SISR</h3>
                          <p className="text-muted-foreground">Efrei Paris Panthéon-Assas, Villejuif</p>
                        </div>
                        <div className="text-sm text-muted-foreground whitespace-nowrap">Sept. 2023 - Juil. 2025</div>
                      </div>
                      <div className="mt-2">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <AnimatedListItem index={0}>
                            Formation en Solutions d'Infrastructure, Systèmes et Réseaux
                          </AnimatedListItem>
                          <AnimatedListItem index={1}>Projets professionnels en entreprise</AnimatedListItem>
                          <AnimatedListItem index={2}>Compétences en administration système et réseau</AnimatedListItem>
                        </ul>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation delay={300} direction="left">
                    <div className="relative border-l pl-6 timeline-item">
                      <div className="absolute -left-[7px] h-3.5 w-3.5 rounded-full border-2 border-primary bg-background"></div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <div>
                          <h3 className="font-semibold text-lg">
                            Bac AGOrA (Assistance à la gestion des organisations)
                          </h3>
                          <p className="text-muted-foreground">Lycée Paul Painlevé, Courbevoie</p>
                        </div>
                        <div className="text-sm text-muted-foreground whitespace-nowrap">Sept. 2020 - Juil. 2023</div>
                      </div>
                      <div className="mt-2">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <AnimatedListItem index={0}>Mention Assez Bien</AnimatedListItem>
                          <AnimatedListItem index={1}>
                            Compétences en gestion administrative et organisation
                          </AnimatedListItem>
                        </ul>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </TabsContent>

        <TabsContent value="experience" className="mt-6">
          <ScrollAnimation>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Expériences professionnelles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <ScrollAnimation delay={100} direction="right">
                    <div className="relative border-l pl-6 pb-2 timeline-item">
                      <div className="absolute -left-[7px] h-3.5 w-3.5 rounded-full border-2 border-primary bg-background"></div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <div>
                          <h3 className="font-semibold text-lg">Assistant Chef de projet IT / DevOps</h3>
                          <p className="text-muted-foreground">Infotel, Nanterre</p>
                        </div>
                        <div className="text-sm text-muted-foreground whitespace-nowrap">Nov. 2024 - Jan. 2025</div>
                      </div>
                      <div className="mt-2">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <AnimatedListItem index={0}>
                            Développement d'un script pour le transfert sécurisé des données de vol vers Skytanking
                          </AnimatedListItem>
                          <AnimatedListItem index={1}>
                            Détection de vulnérabilités et amélioration des échanges de données
                          </AnimatedListItem>
                          <AnimatedListItem index={2}>
                            Participation aux réunions d'équipe et suivi de projet
                          </AnimatedListItem>
                        </ul>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation delay={200} direction="right">
                    <div className="relative border-l pl-6 pb-2 timeline-item">
                      <div className="absolute -left-[7px] h-3.5 w-3.5 rounded-full border-2 border-primary bg-background"></div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <div>
                          <h3 className="font-semibold text-lg">Conseiller de vente</h3>
                          <p className="text-muted-foreground">Extime Duty Free, Roissy CDG</p>
                        </div>
                        <div className="text-sm text-muted-foreground whitespace-nowrap">Juil. 2024 - Oct. 2024</div>
                      </div>
                      <div className="mt-2">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <AnimatedListItem index={0}>Accueil clientèle internationale</AnimatedListItem>
                          <AnimatedListItem index={1}>Gestion des stocks</AnimatedListItem>
                          <AnimatedListItem index={2}>
                            Utilisation de logiciels de caisse et d'inventaire
                          </AnimatedListItem>
                        </ul>
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation delay={300} direction="right">
                    <div className="relative border-l pl-6 timeline-item">
                      <div className="absolute -left-[7px] h-3.5 w-3.5 rounded-full border-2 border-primary bg-background"></div>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                        <div>
                          <h3 className="font-semibold text-lg">Assistant Chef de projet IT</h3>
                          <p className="text-muted-foreground">Infotel, Nanterre</p>
                        </div>
                        <div className="text-sm text-muted-foreground whitespace-nowrap">Mai 2024 - Juin 2024</div>
                      </div>
                      <div className="mt-2">
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <AnimatedListItem index={0}>
                            Optimisation des bases de données des applications Air France
                          </AnimatedListItem>
                          <AnimatedListItem index={1}>
                            Sensibilisation cybersécurité et bonnes pratiques
                          </AnimatedListItem>
                          <AnimatedListItem index={2}>Support technique aux équipes de développement</AnimatedListItem>
                        </ul>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </TabsContent>
      </Tabs>
    </div>
  )
}
