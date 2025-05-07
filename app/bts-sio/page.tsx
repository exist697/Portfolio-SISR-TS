import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Code, Database, Network, Server, Shield, Workflow, Globe } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import AnimatedListItem from "@/components/animated-list-item"

export default function BtsSioPage() {
  return (
    <div className="container py-12">
      <ScrollAnimation>
        <h1 className="text-3xl font-bold tracking-tight mb-6">BTS SIO & Options</h1>
      </ScrollAnimation>

      <Tabs defaultValue="bts-sio" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="bts-sio">BTS SIO</TabsTrigger>
          <TabsTrigger value="option-sisr">Option SISR</TabsTrigger>
          <TabsTrigger value="option-slam">Option SLAM</TabsTrigger>
        </TabsList>

        <TabsContent value="bts-sio" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Qu'est-ce que le BTS SIO ?
              </CardTitle>
              <CardDescription>Brevet de Technicien Supérieur Services Informatiques aux Organisations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ScrollAnimation>
                <p>
                  Le BTS SIO (Services Informatiques aux Organisations) est une formation de niveau bac+2 qui prépare
                  aux métiers de l'informatique. Cette formation se déroule sur deux ans et est accessible après
                  l'obtention d'un baccalauréat.
                </p>
              </ScrollAnimation>

              <ScrollAnimation delay={100}>
                <h3 className="text-xl font-semibold mt-6">Objectifs de la formation</h3>
                <p>
                  Le BTS SIO forme des professionnels capables de répondre aux besoins informatiques des organisations
                  en assurant la disponibilité des services informatiques existants et en accompagnant la transformation
                  numérique des entreprises.
                </p>
              </ScrollAnimation>

              <ScrollAnimation delay={200}>
                <h3 className="text-xl font-semibold mt-6">Les deux options</h3>
                <div className="grid gap-4 md:grid-cols-2 mt-2">
                  <div className="p-4 border rounded-lg transition-all duration-200 hover:border-primary/30">
                    <h4 className="font-medium flex items-center gap-2">
                      <Server className="h-4 w-4" />
                      SISR (Solutions d'Infrastructure, Systèmes et Réseaux)
                    </h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Forme des professionnels des réseaux et équipements informatiques (installation, maintenance,
                      sécurité).
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg transition-all duration-200 hover:border-secondary/30">
                    <h4 className="font-medium flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      SLAM (Solutions Logicielles et Applications Métiers)
                    </h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Forme des développeurs qui réalisent des logiciels, sites web et applications mobiles.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={400}>
                <h3 className="text-xl font-semibold mt-6">Les épreuves du BTS SIO</h3>
                <div className="overflow-x-auto mt-2">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border p-2 text-left">Épreuve</th>
                        <th className="border p-2 text-left">Coefficient</th>
                        <th className="border p-2 text-left">Forme</th>
                        <th className="border p-2 text-left">Durée</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="transition-all duration-200">
                        <td className="border p-2">E1 - Culture et communication</td>
                        <td className="border p-2">4</td>
                        <td className="border p-2">Écrite</td>
                        <td className="border p-2">4h</td>
                      </tr>
                      <tr className="transition-all duration-200">
                        <td className="border p-2">E2 - Expression et communication en langue anglaise</td>
                        <td className="border p-2">3</td>
                        <td className="border p-2">Écrite + Orale</td>
                        <td className="border p-2">2h + 20min</td>
                      </tr>
                      <tr className="transition-all duration-200">
                        <td className="border p-2">E3 - Mathématiques</td>
                        <td className="border p-2">3</td>
                        <td className="border p-2">CCF</td>
                        <td className="border p-2">-</td>
                      </tr>
                      <tr className="transition-all duration-200">
                        <td className="border p-2">E4 - Support et mise à disposition de services informatiques</td>
                        <td className="border p-2">4</td>
                        <td className="border p-2">Écrite</td>
                        <td className="border p-2">4h</td>
                      </tr>
                      <tr className="transition-all duration-200">
                        <td className="border p-2">
                          E5 - Conception et développement d'applications (SLAM) ou Administration des systèmes et des
                          réseaux (SISR)
                        </td>
                        <td className="border p-2">4</td>
                        <td className="border p-2">CCF</td>
                        <td className="border p-2">-</td>
                      </tr>
                      <tr className="transition-all duration-200">
                        <td className="border p-2">E6 - Cybersécurité des services informatiques</td>
                        <td className="border p-2">4</td>
                        <td className="border p-2">Écrite + Pratique</td>
                        <td className="border p-2">4h + 40min</td>
                      </tr>
                      <tr className="transition-all duration-200">
                        <td className="border p-2">Épreuve facultative - Langue vivante étrangère 2</td>
                        <td className="border p-2">-</td>
                        <td className="border p-2">Orale</td>
                        <td className="border p-2">20min</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={500}>
                <h3 className="text-xl font-semibold mt-6">Poursuites d'études</h3>
                <p>Après un BTS SIO, plusieurs possibilités s'offrent aux diplômés :</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  {[
                    "Licence professionnelle en informatique",
                    "Bachelor spécialisé (cybersécurité, développement, etc.)",
                    "École d'ingénieurs (sur concours ou admission parallèle)",
                    "Master en informatique",
                  ].map((item, index) => (
                    <AnimatedListItem key={index} index={index}>
                      {item}
                    </AnimatedListItem>
                  ))}
                </ul>
              </ScrollAnimation>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="option-sisr" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5" />
                L'option SISR
              </CardTitle>
              <CardDescription>Solutions d'Infrastructure, Systèmes et Réseaux</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ScrollAnimation>
                <p>
                  L'option SISR du BTS SIO forme des professionnels capables d'installer, de superviser et d'assurer la
                  sécurité des équipements et des réseaux informatiques. Les techniciens SISR sont des experts des
                  réseaux et de leur sécurisation.
                </p>
              </ScrollAnimation>

              <ScrollAnimation delay={100}>
                <h3 className="text-xl font-semibold mt-6">Compétences développées</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-2">
                  <div className="p-4 border rounded-lg flex flex-col items-center text-center transition-all duration-200 hover:border-primary/30">
                    <Network className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-medium">Administration réseau</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Configuration et maintenance des infrastructures réseau
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg flex flex-col items-center text-center transition-all duration-200 hover:border-primary/30">
                    <Server className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-medium">Systèmes</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Installation et configuration des systèmes d'exploitation
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg flex flex-col items-center text-center transition-all duration-200 hover:border-primary/30">
                    <Shield className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-medium">Sécurité</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Mise en place de solutions de sécurité informatique
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg flex flex-col items-center text-center transition-all duration-200 hover:border-primary/30">
                    <Database className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-medium">Bases de données</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Administration et sécurisation des bases de données
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg flex flex-col items-center text-center transition-all duration-200 hover:border-primary/30">
                    <Code className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-medium">Scripting</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Automatisation des tâches via scripts PowerShell, Bash, etc.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={200}>
                <h3 className="text-xl font-semibold mt-6">Technologies abordées</h3>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  {[
                    "Protocoles réseau : TCP/IP, DNS, DHCP, HTTP/S, FTP, SSH, etc.",
                    "Systèmes d'exploitation : Windows Server, Linux",
                    "Virtualisation : VMware, Hyper-V, Proxmox",
                    "Services d'annuaire : Active Directory, LDAP",
                    "Solutions de sécurité : Firewalls, VPN, IDS/IPS",
                  ].map((item, index) => (
                    <AnimatedListItem key={index} index={index}>
                      {item}
                    </AnimatedListItem>
                  ))}
                </ul>
              </ScrollAnimation>

              <ScrollAnimation delay={300}>
                <h3 className="text-xl font-semibold mt-6">Débouchés professionnels</h3>
                <div className="grid gap-4 md:grid-cols-2 mt-2">
                  <div className="p-4 border rounded-lg transition-all duration-200 hover:border-primary/30">
                    <h4 className="font-medium">Métiers accessibles</h4>
                    <ul className="mt-2 space-y-1 text-sm">
                      {[
                        "• Administrateur systèmes et réseaux",
                        "• Technicien d'infrastructure",
                        "• Technicien support et déploiement",
                        "• Technicien réseau - télécoms",
                        "• Responsable parc informatique",
                      ].map((item, index) => (
                        <li key={index} className="transition-all duration-200 hover:translate-x-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg transition-all duration-200 hover:border-primary/30">
                    <h4 className="font-medium">Évolutions de carrière</h4>
                    <ul className="mt-2 space-y-1 text-sm">
                      {[
                        "• Architecte infrastructure",
                        "• Ingénieur systèmes et réseaux",
                        "• Consultant en cybersécurité",
                        "• Responsable informatique",
                        "• Expert en solutions cloud",
                      ].map((item, index) => (
                        <li key={index} className="transition-all duration-200 hover:translate-x-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="option-slam" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                L'option SLAM
              </CardTitle>
              <CardDescription>Solutions Logicielles et Applications Métiers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ScrollAnimation>
                <p>
                  L'option SLAM du BTS SIO forme des professionnels capables de concevoir, développer et maintenir des
                  solutions logicielles répondant aux besoins des organisations. Les techniciens SLAM sont des experts
                  du développement d'applications et de la gestion de projets informatiques.
                </p>
              </ScrollAnimation>

              <ScrollAnimation delay={100}>
                <h3 className="text-xl font-semibold mt-6">Compétences développées</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-2">
                  <div className="p-4 border rounded-lg flex flex-col items-center text-center transition-all duration-200 hover:border-secondary/30">
                    <Code className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-medium">Développement</h4>
                    <p className="text-sm text-muted-foreground mt-1">Conception et développement d'applications</p>
                  </div>
                  <div className="p-4 border rounded-lg flex flex-col items-center text-center transition-all duration-200 hover:border-secondary/30">
                    <Database className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-medium">Bases de données</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Conception et administration de bases de données
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg flex flex-col items-center text-center transition-all duration-200 hover:border-secondary/30">
                    <Globe className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-medium">Web</h4>
                    <p className="text-sm text-muted-foreground mt-1">Développement de sites et applications web</p>
                  </div>
                  <div className="p-4 border rounded-lg flex flex-col items-center text-center transition-all duration-200 hover:border-secondary/30">
                    <Shield className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-medium">Sécurité</h4>
                    <p className="text-sm text-muted-foreground mt-1">Sécurisation des applications et des données</p>
                  </div>
                  <div className="p-4 border rounded-lg flex flex-col items-center text-center transition-all duration-200 hover:border-secondary/30">
                    <Workflow className="h-8 w-8 text-primary mb-2" />
                    <h4 className="font-medium">Gestion de projet</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Méthodes agiles et suivi de projets informatiques
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={200}>
                <h3 className="text-xl font-semibold mt-6">Technologies abordées</h3>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  {[
                    "Langages de programmation : Java, C#, PHP, JavaScript, Python",
                    "Développement web : HTML, CSS, JavaScript, frameworks (React, Angular, Vue.js)",
                    "Bases de données : SQL, MySQL, PostgreSQL, MongoDB, Oracle",
                    "Outils de gestion de version : Git, GitHub, GitLab",
                  ].map((item, index) => (
                    <AnimatedListItem key={index} index={index}>
                      {item}
                    </AnimatedListItem>
                  ))}
                </ul>
              </ScrollAnimation>

              <ScrollAnimation delay={300}>
                <h3 className="text-xl font-semibold mt-6">Débouchés professionnels</h3>
                <div className="grid gap-4 md:grid-cols-2 mt-2">
                  <div className="p-4 border rounded-lg transition-all duration-200 hover:border-secondary/30">
                    <h4 className="font-medium">Métiers accessibles</h4>
                    <ul className="mt-2 space-y-1 text-sm">
                      {[
                        "• Développeur d'applications",
                        "• Développeur web",
                        "• Développeur mobile",
                        "• Analyste programmeur",
                        "• Technicien d'études informatiques",
                      ].map((item, index) => (
                        <li key={index} className="transition-all duration-200 hover:translate-x-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg transition-all duration-200 hover:border-secondary/30">
                    <h4 className="font-medium">Évolutions de carrière</h4>
                    <ul className="mt-2 space-y-1 text-sm">
                      {[
                        "• Chef de projet informatique",
                        "• Architecte logiciel",
                        "• Lead developer",
                        "• Consultant en développement",
                        "• Expert en sécurité applicative",
                      ].map((item, index) => (
                        <li key={index} className="transition-all duration-200 hover:translate-x-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollAnimation>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
