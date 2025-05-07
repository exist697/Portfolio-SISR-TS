import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Shield, Server, CheckCircle2 } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export default function EpreuveE6Page() {
  return (
    <div className="container py-12">
      <ScrollAnimation>
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Épreuve E6 - Cybersécurité des services informatiques
        </h1>
        <p className="text-muted-foreground mb-8">Présentation de l'épreuve E6 du BTS SIO et des projets associés</p>
      </ScrollAnimation>

      <Tabs defaultValue="projets" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="projets" className="transition-all duration-200">
            Mes projets E6
          </TabsTrigger>
          <TabsTrigger value="documentation" className="transition-all duration-200">
            Documentation
          </TabsTrigger>
        </TabsList>

        <TabsContent value="projets" className="mt-6">
          <ScrollAnimation>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Mes projets pour l'épreuve E6
                </CardTitle>
                <CardDescription>Projets de cybersécurité réalisés dans le cadre de ma formation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ScrollAnimation delay={100} direction="up">
                  <div className="p-6 border rounded-lg transition-all duration-200 hover:border-primary/30 hover:shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Mise en place d'une solution de sécurité périmétrique</h3>
                        <p className="text-muted-foreground mt-1">
                          Déploiement et configuration d'un pare-feu pfSense avec IDS/IPS pour protéger l'infrastructure
                          réseau d'une PME
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {["pfSense", "Suricata", "VPN", "Pare-feu", "IDS/IPS"].map((tech, i) => (
                            <Badge key={i} variant="secondary" className="transition-all duration-200 hover:scale-105">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="mt-4">
                          <h4 className="font-medium mb-2">Réalisations principales :</h4>
                          <ul className="space-y-2">
                            {[
                              "Configuration d'un pare-feu avec règles de filtrage avancées",
                              "Mise en place d'un système de détection et prévention d'intrusion (Suricata)",
                              "Déploiement d'un VPN site-à-site et d'un VPN SSL pour les accès distants",
                              "Configuration d'un proxy transparent avec filtrage de contenu",
                            ].map((item, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2 transition-all duration-200 hover:translate-x-1"
                              >
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-4 flex justify-end">
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-1 transition-all duration-200 hover:scale-105"
                          >
                            <FileText className="h-4 w-4" />
                            Voir la documentation
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation delay={200} direction="up">
                  <div className="p-6 border rounded-lg transition-all duration-200 hover:border-primary/30 hover:shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Server className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Sécurisation d'une infrastructure Active Directory</h3>
                        <p className="text-muted-foreground mt-1">
                          Audit et renforcement de la sécurité d'un domaine Active Directory existant selon les bonnes
                          pratiques Microsoft
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {["Active Directory", "Group Policy", "LAPS", "Hardening", "Audit"].map((tech, i) => (
                            <Badge key={i} variant="secondary" className="transition-all duration-200 hover:scale-105">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="mt-4">
                          <h4 className="font-medium mb-2">Réalisations principales :</h4>
                          <ul className="space-y-2">
                            {[
                              "Audit de sécurité de l'infrastructure Active Directory existante",
                              "Mise en place de politiques de mot de passe renforcées",
                              "Déploiement de LAPS (Local Administrator Password Solution)",
                              "Configuration de l'audit des événements de sécurité",
                            ].map((item, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2 transition-all duration-200 hover:translate-x-1"
                              >
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-4 flex justify-end">
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-1 transition-all duration-200 hover:scale-105"
                          >
                            <FileText className="h-4 w-4" />
                            Voir la documentation
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </TabsContent>

        <TabsContent value="documentation" className="mt-6">
          <ScrollAnimation>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Documentation pour l'épreuve E6
                </CardTitle>
                <CardDescription>Ressources et documents pour préparer l'épreuve E6</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ScrollAnimation delay={100}>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Documents officiels</h3>
                    <div className="flex items-center gap-4 p-4 border rounded-lg transition-all duration-200 hover:border-primary/30 hover:shadow-sm hover:translate-x-1">
                      <FileText className="h-8 w-8 text-primary" />
                      <div className="flex-1">
                        <h4 className="font-medium">Référentiel de l'épreuve E6</h4>
                        <p className="text-sm text-muted-foreground">Document officiel du référentiel BTS SIO</p>
                      </div>
                      <Button variant="outline" size="sm" className="gap-1 transition-all duration-200 hover:scale-105">
                        <Download className="h-4 w-4" />
                        Télécharger
                      </Button>
                    </div>
                    <div className="flex items-center gap-4 p-4 border rounded-lg transition-all duration-200 hover:border-primary/30 hover:shadow-sm hover:translate-x-1">
                      <FileText className="h-8 w-8 text-primary" />
                      <div className="flex-1">
                        <h4 className="font-medium">Grille d'évaluation E6</h4>
                        <p className="text-sm text-muted-foreground">Critères d'évaluation de l'épreuve</p>
                      </div>
                      <Button variant="outline" size="sm" className="gap-1 transition-all duration-200 hover:scale-105">
                        <Download className="h-4 w-4" />
                        Télécharger
                      </Button>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation delay={200}>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Mes documents pour l'épreuve E6</h3>
                    <div className="flex items-center gap-4 p-4 border rounded-lg transition-all duration-200 hover:border-primary/30 hover:shadow-sm hover:translate-x-1">
                      <FileText className="h-8 w-8 text-primary" />
                      <div className="flex-1">
                        <h4 className="font-medium">Rapport de projet - Sécurité périmétrique</h4>
                        <p className="text-sm text-muted-foreground">Documentation complète du projet pfSense</p>
                      </div>
                      <Button variant="outline" size="sm" className="gap-1 transition-all duration-200 hover:scale-105">
                        <Download className="h-4 w-4" />
                        Télécharger
                      </Button>
                    </div>
                    <div className="flex items-center gap-4 p-4 border rounded-lg transition-all duration-200 hover:border-primary/30 hover:shadow-sm hover:translate-x-1">
                      <FileText className="h-8 w-8 text-primary" />
                      <div className="flex-1">
                        <h4 className="font-medium">Rapport de projet - Sécurisation Active Directory</h4>
                        <p className="text-sm text-muted-foreground">Documentation complète du projet AD</p>
                      </div>
                      <Button variant="outline" size="sm" className="gap-1 transition-all duration-200 hover:scale-105">
                        <Download className="h-4 w-4" />
                        Télécharger
                      </Button>
                    </div>
                    <div className="flex items-center gap-4 p-4 border rounded-lg transition-all duration-200 hover:border-primary/30 hover:shadow-sm hover:translate-x-1">
                      <FileText className="h-8 w-8 text-primary" />
                      <div className="flex-1">
                        <h4 className="font-medium">Présentation orale - Support de présentation</h4>
                        <p className="text-sm text-muted-foreground">Diapositives pour la présentation orale</p>
                      </div>
                      <Button variant="outline" size="sm" className="gap-1 transition-all duration-200 hover:scale-105">
                        <Download className="h-4 w-4" />
                        Télécharger
                      </Button>
                    </div>
                  </div>
                </ScrollAnimation>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </TabsContent>
      </Tabs>
    </div>
  )
}
