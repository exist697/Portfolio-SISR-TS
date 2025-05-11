import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Bot } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import AnimatedListItem from "@/components/animated-list-item"

export default function VeillePage() {
  return (
    <div className="container py-12">
      <ScrollAnimation>
        <h1 className="text-3xl font-bold tracking-tight mb-6">Veille technologique</h1>
      </ScrollAnimation>

      <Tabs defaultValue="sujet1" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sujet1" className="transition-all duration-200">
            Cybersécurité Cloud
          </TabsTrigger>
          <TabsTrigger value="sujet2" className="transition-all duration-200">
            Intelligence Artificielle
          </TabsTrigger>
        </TabsList>

        <TabsContent value="sujet1" className="mt-6">
          <ScrollAnimation>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  La cybersécurité dans les infrastructures cloud
                </CardTitle>
                <CardDescription>
                  Étude des enjeux, menaces et solutions de sécurité pour les environnements cloud
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ScrollAnimation delay={100}>
                  <p>
                    Dans le cadre de ma veille technologique, j'ai choisi de me concentrer sur la cybersécurité dans les
                    infrastructures cloud, un domaine en constante évolution et particulièrement critique pour les
                    entreprises qui migrent leurs services vers le cloud.
                  </p>
                </ScrollAnimation>

                <ScrollAnimation delay={150}>
                  <h3 className="text-xl font-semibold mt-6">Pourquoi ce sujet ?</h3>
                  <p>
                    Le cloud computing est devenu incontournable pour les entreprises de toutes tailles, mais il
                    introduit de nouveaux défis en matière de sécurité. Les modèles de responsabilité partagée, les
                    menaces spécifiques au cloud et les réglementations en constante évolution nécessitent une veille
                    active pour les professionnels IT.
                  </p>
                </ScrollAnimation>

                <ScrollAnimation delay={200}>
                  <h3 className="text-xl font-semibold mt-6">Axes de recherche</h3>
                  <div className="grid gap-4 md:grid-cols-2 mt-2">
                    <div className="p-4 border rounded-lg transition-all duration-200 hover:border-primary/30 hover:shadow-sm hover:translate-y-[-2px]">
                      <h4 className="font-medium">Menaces et vulnérabilités</h4>
                      <ul className="mt-2 space-y-1 text-sm">
                        {[
                          "• Attaques spécifiques aux environnements cloud",
                          "• Erreurs de configuration et mauvaises pratiques",
                          "• Vulnérabilités des conteneurs et microservices",
                        ].map((item, index) => (
                          <li key={index} className="transition-all duration-200 hover:translate-x-1">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg transition-all duration-200 hover:border-primary/30 hover:shadow-sm hover:translate-y-[-2px]">
                      <h4 className="font-medium">Solutions et bonnes pratiques</h4>
                      <ul className="mt-2 space-y-1 text-sm">
                        {[
                          "• Sécurité Zero Trust dans le cloud",
                          "• Chiffrement et gestion des clés",
                          "• Outils de détection et réponse aux incidents",
                        ].map((item, index) => (
                          <li key={index} className="transition-all duration-200 hover:translate-x-1">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg transition-all duration-200 hover:border-primary/30 hover:shadow-sm hover:translate-y-[-2px]">
                      <h4 className="font-medium">Conformité et réglementation</h4>
                      <ul className="mt-2 space-y-1 text-sm">
                        {[
                          "• RGPD et cloud computing",
                          "• Normes ISO 27001, 27017, 27018",
                          "• Certifications spécifiques au cloud",
                        ].map((item, index) => (
                          <li key={index} className="transition-all duration-200 hover:translate-x-1">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg transition-all duration-200 hover:border-primary/30 hover:shadow-sm hover:translate-y-[-2px]">
                      <h4 className="font-medium">Évolutions technologiques</h4>
                      <ul className="mt-2 space-y-1 text-sm">
                        {[
                          "• IA et automatisation pour la sécurité cloud",
                          "• CSPM (Cloud Security Posture Management)",
                          "• CNAPP (Cloud-Native Application Protection Platform)",
                        ].map((item, index) => (
                          <li key={index} className="transition-all duration-200 hover:translate-x-1">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation delay={250}>
                  <h3 className="text-xl font-semibold mt-6">Principales tendances identifiées</h3>
                  <div className="space-y-4 mt-2">
                    <div className="p-4 border rounded-lg transition-all duration-200 hover:border-primary/30 hover:shadow-sm hover:translate-y-[-2px]">
                      <h4 className="font-medium">Adoption croissante du modèle Zero Trust</h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        Le principe "Never trust, always verify" s'impose comme la nouvelle norme de sécurité dans les
                        environnements cloud. Les solutions qui implémentent ce modèle connaissent une forte croissance,
                        avec des technologies comme ZTNA (Zero Trust Network Access) qui remplacent progressivement les
                        VPN traditionnels.
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg transition-all duration-200 hover:border-primary/30 hover:shadow-sm hover:translate-y-[-2px]">
                      <h4 className="font-medium">Automatisation de la sécurité cloud</h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        L'automatisation devient essentielle pour gérer la sécurité à l'échelle du cloud. Les outils de
                        CSPM (Cloud Security Posture Management) et d'IaC (Infrastructure as Code) security scanning
                        permettent d'identifier et de corriger automatiquement les erreurs de configuration et les
                        vulnérabilités.
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg transition-all duration-200 hover:border-primary/30 hover:shadow-sm hover:translate-y-[-2px]">
                      <h4 className="font-medium">Convergence des outils de sécurité cloud</h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        On observe une tendance à la consolidation des outils de sécurité cloud en plateformes intégrées
                        (CNAPP - Cloud-Native Application Protection Platform) qui combinent CSPM, CWPP (Cloud Workload
                        Protection Platform), CIEM (Cloud Infrastructure Entitlement Management) et sécurité des
                        conteneurs.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation delay={300}>
                  <h3 className="text-xl font-semibold mt-6">Applications pratiques</h3>
                  <p className="mt-2">
                    Ma veille sur la cybersécurité cloud m'a permis d'appliquer plusieurs concepts dans mes projets :
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    {[
                      "Mise en place de politiques de sécurité basées sur le principe du moindre privilège",
                      "Utilisation d'outils de scanning automatisés pour détecter les mauvaises configurations",
                      "Implémentation de solutions de chiffrement pour les données sensibles",
                      "Adoption de pratiques DevSecOps pour intégrer la sécurité dès la conception",
                    ].map((item, index) => (
                      <AnimatedListItem key={index} index={index}>
                        {item}
                      </AnimatedListItem>
                    ))}
                  </ul>
                </ScrollAnimation>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </TabsContent>

        <TabsContent value="sujet2" className="mt-6">
          <ScrollAnimation>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5" />
                  L'intelligence artificielle dans l'IT
                </CardTitle>
                <CardDescription>
                  Impact et applications de l'IA dans les infrastructures et services informatiques
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ScrollAnimation delay={100}>
                  <p>
                    Mon second sujet de veille technologique porte sur l'intelligence artificielle et son impact sur les
                    métiers de l'IT. Ce domaine connaît une évolution fulgurante et transforme profondément la façon
                    dont nous concevons, déployons et gérons les infrastructures et services informatiques.
                  </p>
                </ScrollAnimation>

                <ScrollAnimation delay={150}>
                  <h3 className="text-xl font-semibold mt-6">Pourquoi ce sujet ?</h3>
                  <p>
                    L'intelligence artificielle révolutionne tous les secteurs, et l'IT ne fait pas exception. En tant
                    que futur professionnel SISR, il est essentiel de comprendre comment l'IA peut être utilisée pour
                    optimiser les infrastructures, automatiser les tâches répétitives, améliorer la sécurité et créer de
                    nouveaux services innovants.
                  </p>
                </ScrollAnimation>

                <ScrollAnimation delay={200}>
                  <h3 className="text-xl font-semibold mt-6">Axes de recherche</h3>
                  <div className="grid gap-4 md:grid-cols-2 mt-2">
                    <div className="p-4 border rounded-lg transition-all duration-200 hover:border-primary/30 hover:shadow-sm hover:translate-y-[-2px]">
                      <h4 className="font-medium">IA pour l'infrastructure</h4>
                      <ul className="mt-2 space-y-1 text-sm">
                        {[
                          "• AIOps (IA pour les opérations IT)",
                          "• Optimisation des ressources cloud",
                          "• Prédiction des pannes et maintenance préventive",
                        ].map((item, index) => (
                          <li key={index} className="transition-all duration-200 hover:translate-x-1">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg transition-all duration-200 hover:border-primary/30 hover:shadow-sm hover:translate-y-[-2px]">
                      <h4 className="font-medium">IA et cybersécurité</h4>
                      <ul className="mt-2 space-y-1 text-sm">
                        {[
                          "• Détection d'anomalies et de menaces",
                          "• Analyse comportementale",
                          "• Réponse automatisée aux incidents",
                        ].map((item, index) => (
                          <li key={index} className="transition-all duration-200 hover:translate-x-1">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg transition-all duration-200 hover:border-primary/30 hover:shadow-sm hover:translate-y-[-2px]">
                      <h4 className="font-medium">Automatisation intelligente</h4>
                      <ul className="mt-2 space-y-1 text-sm">
                        {[
                          "• RPA (Robotic Process Automation) avec IA",
                          "• Chatbots et assistants virtuels pour le support IT",
                          "• Automatisation du code et du déploiement",
                        ].map((item, index) => (
                          <li key={index} className="transition-all duration-200 hover:translate-x-1">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg transition-all duration-200 hover:border-primary/30 hover:shadow-sm hover:translate-y-[-2px]">
                      <h4 className="font-medium">Enjeux et défis</h4>
                      <ul className="mt-2 space-y-1 text-sm">
                        {[
                          "• Éthique et biais des algorithmes",
                          "• Confidentialité des données",
                          "• Compétences nécessaires pour les équipes IT",
                        ].map((item, index) => (
                          <li key={index} className="transition-all duration-200 hover:translate-x-1">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation delay={250}>
                  <h3 className="text-xl font-semibold mt-6">Principales tendances identifiées</h3>
                  <div className="space-y-4 mt-2">
                    <div className="p-4 border rounded-lg transition-all duration-200 hover:border-primary/30 hover:shadow-sm hover:translate-y-[-2px]">
                      <h4 className="font-medium">Démocratisation des outils d'IA</h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        Les plateformes cloud proposent désormais des services d'IA accessibles sans expertise
                        approfondie en data science. Cette démocratisation permet aux équipes IT de toutes tailles
                        d'intégrer l'IA dans leurs opérations quotidiennes via des API et des services managés.
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg transition-all duration-200 hover:border-primary/30 hover:shadow-sm hover:translate-y-[-2px]">
                      <h4 className="font-medium">AIOps : l'IA au service des opérations IT</h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        L'AIOps (Intelligence Artificielle pour les Opérations IT) gagne en maturité. Ces solutions
                        analysent d'énormes volumes de données de télémétrie pour détecter les anomalies, prédire les
                        incidents et recommander des actions correctives, réduisant ainsi le MTTR (Mean Time To Resolve)
                        et améliorant la disponibilité des services.
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg transition-all duration-200 hover:border-primary/30 hover:shadow-sm hover:translate-y-[-2px]">
                      <h4 className="font-medium">IA générative pour le code et la documentation</h4>
                      <p className="text-sm text-muted-foreground mt-2">
                        Les outils d'IA générative comme GitHub Copilot transforment le développement et la maintenance
                        des infrastructures as code. Ces assistants peuvent générer des scripts, détecter des erreurs,
                        suggérer des optimisations et même produire de la documentation technique, accélérant
                        considérablement le travail des équipes IT.
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation delay={300}>
                  <h3 className="text-xl font-semibold mt-6">Applications pratiques</h3>
                  <p className="mt-2">
                    Ma veille sur l'IA dans l'IT m'a permis d'explorer plusieurs applications concrètes :
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    {[
                      "Utilisation d'outils de monitoring basés sur l'IA pour détecter des anomalies dans les performances système",
                      "Mise en place d'un chatbot pour le support de niveau 1, réduisant le temps de résolution des problèmes courants",
                      "Expérimentation avec des outils d'IA générative pour automatiser la création de scripts PowerShell et Bash",
                      "Analyse des logs de sécurité avec des algorithmes de machine learning pour identifier des comportements suspects",
                    ].map((item, index) => (
                      <AnimatedListItem key={index} index={index}>
                        {item}
                      </AnimatedListItem>
                    ))}
                  </ul>
                </ScrollAnimation>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </TabsContent>
      </Tabs>
    </div>
  )
}
