import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Network, Server } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export default function CompetencesPage() {
  return (
    <div className="container py-12">
      <ScrollAnimation>
        <h1 className="text-3xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Compétences informatiques
        </h1>
      </ScrollAnimation>

      <Tabs defaultValue="systemes-reseaux" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-muted/50">
          <TabsTrigger
            value="systemes-reseaux"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-200"
          >
            Systèmes & Réseaux
          </TabsTrigger>
          <TabsTrigger
            value="developpement"
            className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground transition-all duration-200"
          >
            Développement
          </TabsTrigger>
        </TabsList>

        <TabsContent value="systemes-reseaux" className="mt-6">
          <ScrollAnimation>
            <Card className="border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Server className="h-5 w-5" />
                  Systèmes & Réseaux
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-8 md:grid-cols-2">
                  <ScrollAnimation delay={100} direction="left">
                    <div>
                      <h3 className="text-lg font-medium mb-4 flex items-center gap-2 text-primary">
                        <Network className="h-5 w-5" />
                        Protocoles
                      </h3>
                      <div className="space-y-4">
                        {[
                          { name: "TCP/IP", value: 90 },
                          { name: "DNS / DHCP", value: 85 },
                          { name: "HTTP/S", value: 80 },
                          { name: "SSH / FTP", value: 85 },
                          { name: "VLAN / VPN", value: 80 },
                        ].map((skill, index) => (
                          <div
                            key={skill.name}
                            className="space-y-1.5"
                            style={{
                              animationDelay: `${index * 100}ms`,
                              animation: "fadeIn 0.5s ease-out forwards",
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">{skill.name}</span>
                              <span className="text-xs text-muted-foreground">{skill.value}%</span>
                            </div>
                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                              <div
                                className="skill-bar h-full"
                                style={{
                                  width: `${skill.value}%`,
                                  animation: `skill-bar-fill 1s ease-out forwards ${index * 0.2}s`,
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation delay={200} direction="right">
                    <div>
                      <h3 className="text-lg font-medium mb-4 flex items-center gap-2 text-primary">
                        <Server className="h-5 w-5" />
                        Infrastructure
                      </h3>
                      <div className="space-y-4">
                        {[
                          { name: "Switches / Routeurs", value: 85 },
                          { name: "Firewalls", value: 80 },
                          { name: "ACL", value: 80 },
                          { name: "Virtualisation (Proxmox, ESXi)", value: 85 },
                        ].map((skill, index) => (
                          <div
                            key={skill.name}
                            className="space-y-1.5"
                            style={{
                              animationDelay: `${index * 100}ms`,
                              animation: "fadeIn 0.5s ease-out forwards",
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">{skill.name}</span>
                              <span className="text-xs text-muted-foreground">{skill.value}%</span>
                            </div>
                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                              <div
                                className="skill-bar h-full"
                                style={{
                                  width: `${skill.value}%`,
                                  animation: `skill-bar-fill 1s ease-out forwards ${index * 0.2}s`,
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation delay={300} direction="left">
                    <div>
                      <h3 className="text-lg font-medium mb-4 flex items-center gap-2 text-primary">
                        <Server className="h-5 w-5" />
                        Systèmes d'exploitation
                      </h3>
                      <div className="space-y-4">
                        {[
                          { name: "Windows Server", value: 85 },
                          { name: "Linux (Ubuntu, Debian)", value: 80 },
                          { name: "Active Directory", value: 85 },
                        ].map((skill, index) => (
                          <div
                            key={skill.name}
                            className="space-y-1.5"
                            style={{
                              animationDelay: `${index * 100}ms`,
                              animation: "fadeIn 0.5s ease-out forwards",
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">{skill.name}</span>
                              <span className="text-xs text-muted-foreground">{skill.value}%</span>
                            </div>
                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                              <div
                                className="skill-bar h-full"
                                style={{
                                  width: `${skill.value}%`,
                                  animation: `skill-bar-fill 1s ease-out forwards ${index * 0.2}s`,
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation delay={400} direction="right">
                    <div>
                      <h3 className="text-lg font-medium mb-4 flex items-center gap-2 text-primary">
                        <Database className="h-5 w-5" />
                        Cloud
                      </h3>
                      <div className="space-y-4">
                        {[
                          { name: "Azure", value: 75 },
                          { name: "AWS", value: 70 },
                          { name: "Google Cloud", value: 65 },
                        ].map((skill, index) => (
                          <div
                            key={skill.name}
                            className="space-y-1.5"
                            style={{
                              animationDelay: `${index * 100}ms`,
                              animation: "fadeIn 0.5s ease-out forwards",
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">{skill.name}</span>
                              <span className="text-xs text-muted-foreground">{skill.value}%</span>
                            </div>
                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                              <div
                                className="skill-bar h-full"
                                style={{
                                  width: `${skill.value}%`,
                                  animation: `skill-bar-fill 1s ease-out forwards ${index * 0.2}s`,
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </TabsContent>

        <TabsContent value="developpement" className="mt-6">
          <ScrollAnimation>
            <Card className="border-secondary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary">
                  <Code className="h-5 w-5" />
                  Développement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-8 md:grid-cols-2">
                  <ScrollAnimation delay={100} direction="left">
                    <div>
                      <h3 className="text-lg font-medium mb-4 flex items-center gap-2 text-secondary">
                        <Code className="h-5 w-5" />
                        Front-End
                      </h3>
                      <div className="space-y-4">
                        {[
                          { name: "HTML", value: 85 },
                          { name: "CSS", value: 80 },
                          { name: "JavaScript", value: 75 },
                          { name: "ReactJS", value: 70 },
                        ].map((skill, index) => (
                          <div
                            key={skill.name}
                            className="space-y-1.5"
                            style={{
                              animationDelay: `${index * 100}ms`,
                              animation: "fadeIn 0.5s ease-out forwards",
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">{skill.name}</span>
                              <span className="text-xs text-muted-foreground">{skill.value}%</span>
                            </div>
                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                              <div
                                className="skill-bar h-full"
                                style={{
                                  width: `${skill.value}%`,
                                  animation: `skill-bar-fill 1s ease-out forwards ${index * 0.2}s`,
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation delay={200} direction="right">
                    <div>
                      <h3 className="text-lg font-medium mb-4 flex items-center gap-2 text-secondary">
                        <Server className="h-5 w-5" />
                        Back-End
                      </h3>
                      <div className="space-y-4">
                        {[
                          { name: "Python", value: 75 },
                          { name: "Java", value: 65 },
                          { name: "SQL", value: 80 },
                          { name: "Node.js", value: 70 },
                        ].map((skill, index) => (
                          <div
                            key={skill.name}
                            className="space-y-1.5"
                            style={{
                              animationDelay: `${index * 100}ms`,
                              animation: "fadeIn 0.5s ease-out forwards",
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">{skill.name}</span>
                              <span className="text-xs text-muted-foreground">{skill.value}%</span>
                            </div>
                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                              <div
                                className="skill-bar h-full"
                                style={{
                                  width: `${skill.value}%`,
                                  animation: `skill-bar-fill 1s ease-out forwards ${index * 0.2}s`,
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollAnimation>

                  <ScrollAnimation delay={300} direction="left">
                    <div>
                      <h3 className="text-lg font-medium mb-4 flex items-center gap-2 text-secondary">
                        <Database className="h-5 w-5" />
                        Bases de données
                      </h3>
                      <div className="space-y-4">
                        {[
                          { name: "MySQL", value: 85 },
                          { name: "phpMyAdmin", value: 80 },
                        ].map((skill, index) => (
                          <div
                            key={skill.name}
                            className="space-y-1.5"
                            style={{
                              animationDelay: `${index * 100}ms`,
                              animation: "fadeIn 0.5s ease-out forwards",
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">{skill.name}</span>
                              <span className="text-xs text-muted-foreground">{skill.value}%</span>
                            </div>
                            <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                              <div
                                className="skill-bar h-full"
                                style={{
                                  width: `${skill.value}%`,
                                  animation: `skill-bar-fill 1s ease-out forwards ${index * 0.2}s`,
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
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
