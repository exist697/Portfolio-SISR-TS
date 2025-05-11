import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Languages, Award, Heart, Briefcase, GraduationCap, Code, Shield } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"
import AnimatedListItem from "@/components/animated-list-item"

export default function CvPage() {
  return (
    <div className="container py-12">
      <ScrollAnimation>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Curriculum Vitae</h1>
          <a
            href="/cv-mohamad-dit-salamoun.pdf"
            download="CV_Mohamad_Dit_Salamoun.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="gap-2 transition-all duration-200 hover:scale-105">
              <Download className="h-4 w-4" />
              Télécharger en PDF
            </Button>
          </a>
        </div>
      </ScrollAnimation>

      <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
        <div className="space-y-6">
          {/* Photo et coordonnées */}
          <ScrollAnimation direction="left">
            <Card className="transition-all duration-200 hover:border-primary/20 hover:shadow-sm">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 transition-all duration-300 hover:shadow-md">
                  <img
                    alt="Mohamad Dit Salamoun"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    src="/images/profile.png"
                  />
                </div>
                <h2 className="text-xl font-bold">Mohamad Dit Salamoun</h2>
                <p className="text-muted-foreground">Étudiant en BTS SIO SISR</p>
                <div className="w-full border-t my-4"></div>
                <div className="space-y-2 w-full text-sm">
                  <div className="flex justify-between transition-all duration-200 hover:translate-x-1">
                    <span className="font-medium">Email:</span>
                    <span className="text-muted-foreground">m.ditsalamoun@proton.me</span>
                  </div>
                  <div className="flex justify-between transition-all duration-200 hover:translate-x-1">
                    <span className="font-medium">Localisation:</span>
                    <span className="text-muted-foreground">Région parisienne</span>
                  </div>
                  <div className="flex justify-between transition-all duration-200 hover:translate-x-1">
                    <span className="font-medium">GitHub:</span>
                    <Link
                      href="https://github.com/exist697"
                      className="text-primary transition-all duration-200 hover:underline"
                    >
                      Profil
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Compétences */}
          <ScrollAnimation direction="left" delay={100}>
            <Card className="transition-all duration-200 hover:border-primary/20 hover:shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Compétences techniques
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Systèmes & Réseaux</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Windows Server",
                        "Linux",
                        "Active Directory",
                        "Virtualisation",
                        "TCP/IP",
                        "VLANs",
                        "Firewalls",
                        "VPN",
                      ].map((skill, i) => (
                        <Badge key={i} variant="secondary" className="transition-all duration-200 hover:scale-105">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Cloud & Sécurité</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Azure", "AWS", "Google Cloud", "Cybersécurité", "IDS/IPS"].map((skill, i) => (
                        <Badge key={i} variant="secondary" className="transition-all duration-200 hover:scale-105">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Développement</h3>
                    <div className="flex flex-wrap gap-2">
                      {["HTML/CSS", "JavaScript", "SQL", "Python"].map((skill, i) => (
                        <Badge key={i} variant="secondary" className="transition-all duration-200 hover:scale-105">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Certifications */}
          <ScrollAnimation direction="left" delay={200}>
            <Card className="transition-all duration-200 hover:border-primary/20 hover:shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-3">
                  {[
                    { title: "Cisco Cybersecurity Essentials", year: "2024" },
                    { title: "AWS Essentials", year: "2024" },
                    { title: "Azure Essentials", year: "2023" },
                    { title: "Google Cloud Platform", year: "2023" },
                  ].map((cert, index) => (
                    <div key={index} className="flex items-start gap-2 transition-all duration-200 hover:translate-x-1">
                      <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110" />
                      <div>
                        <p className="font-medium">{cert.title}</p>
                        <p className="text-sm text-muted-foreground">{cert.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Langues */}
          <ScrollAnimation direction="left" delay={300}>
            <Card className="transition-all duration-200 hover:border-primary/20 hover:shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Languages className="h-5 w-5" />
                  Langues
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-3">
                  {[
                    { lang: "Français", level: "Langue maternelle" },
                    { lang: "Anglais", level: "Courant" },
                    { lang: "Espagnol", level: "Niveau B1" },
                  ].map((item, index) => (
                    <div key={index} className="transition-all duration-200 hover:translate-x-1">
                      <div className="flex justify-between">
                        <span className="font-medium">{item.lang}</span>
                        <span className="text-muted-foreground">{item.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Centres d'intérêt */}
          <ScrollAnimation direction="left" delay={400}>
            <Card className="transition-all duration-200 hover:border-primary/20 hover:shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Centres d'intérêt
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="space-y-3">
                  {[
                    { title: "Technologies", desc: "IA, cybersécurité, Big Data, Blockchain" },
                    { title: "Sports", desc: "Natation, badminton, tennis" },
                    { title: "Voyages", desc: "Liban, Égypte, Turquie, Espagne" },
                  ].map((item, index) => (
                    <div key={index} className="transition-all duration-200 hover:translate-x-1">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>

        <div className="space-y-6">
          {/* Profil */}
          <ScrollAnimation direction="right">
            <Card className="transition-all duration-200 hover:border-primary/20 hover:shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Profil professionnel
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Étudiant en BTS SIO option SISR, passionné par les infrastructures réseau, la cybersécurité et le
                  cloud computing. Je recherche une opportunité de poursuivre mes études en Bachelor Administrateur
                  cybersécurité et réseaux en alternance pour mettre en pratique mes compétences techniques et
                  développer mon expertise dans ces domaines.
                </p>
                <p className="mt-2">
                  Rigoureux, curieux et doté d'une bonne capacité d'analyse, je m'adapte rapidement aux nouvelles
                  technologies et environnements de travail. Mon expérience en tant qu'Assistant Chef de projet IT m'a
                  permis de développer des compétences en gestion de projet et en communication technique.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Formation */}
          <ScrollAnimation direction="right" delay={100}>
            <Card className="transition-all duration-200 hover:border-primary/20 hover:shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Formation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      period: "2025 - 2026",
                      status: "Admissible",
                      title: "Bachelor 3 : Administrateur cybersécurité et réseaux",
                      school: "ECE École d'ingénieurs Paris",
                      details: [
                        "Rythme : 2 semaines formation / 3 semaines entreprise",
                        "Spécialisation en sécurité des infrastructures et gestion des incidents",
                        "Projet de fin d'études en environnement professionnel",
                      ],
                    },
                    {
                      period: "2023 - 2025",
                      status: "En cours",
                      title: "BTS SIO - Option SISR",
                      school: "Efrei Paris Panthéon-Assas, Villejuif",
                      details: [
                        "Administration des systèmes et réseaux",
                        "Cybersécurité des infrastructures",
                        "Virtualisation et cloud computing",
                        "Projets professionnels en entreprise",
                      ],
                    },
                    {
                      period: "2020 - 2023",
                      status: "Obtenu",
                      title: "Bac AGOrA (Assistance à la gestion des organisations)",
                      school: "Lycée Paul Painlevé, Courbevoie",
                      details: [
                        "Mention Assez Bien",
                        "Spécialisation en gestion administrative",
                        "Projet professionnel en entreprise",
                      ],
                    },
                  ].map((edu, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row gap-4 transition-all duration-200 hover:translate-x-1"
                    >
                      <div className="md:w-1/4 flex flex-col">
                        <span className="font-semibold">{edu.period}</span>
                        <span className="text-muted-foreground">{edu.status}</span>
                      </div>
                      <div className="md:w-3/4">
                        <h3 className="font-semibold text-lg">{edu.title}</h3>
                        <p className="text-muted-foreground">{edu.school}</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
                          {edu.details.map((detail, i) => (
                            <AnimatedListItem key={i} index={i}>
                              {detail}
                            </AnimatedListItem>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          {/* Expérience professionnelle */}
          <ScrollAnimation direction="right" delay={200}>
            <Card className="transition-all duration-200 hover:border-primary/20 hover:shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Expérience professionnelle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      period: "Nov. 2024 - Jan. 2025",
                      duration: "3 mois",
                      title: "Assistant Chef de projet IT / DevOps",
                      company: "Infotel, Nanterre",
                      details: [
                        "Développement d'un script pour le transfert sécurisé des données de vol vers Skytanking",
                        "Détection de vulnérabilités et amélioration des échanges de données",
                        "Participation aux réunions d'équipe et suivi de projet",
                        "Collaboration avec les équipes de développement et d'infrastructure",
                      ],
                    },
                    {
                      period: "Juil. 2024 - Oct. 2024",
                      duration: "4 mois",
                      title: "Conseiller de vente",
                      company: "Extime Duty Free, Roissy CDG",
                      details: [
                        "Accueil et conseil auprès d'une clientèle internationale",
                        "Gestion des stocks et inventaires",
                        "Utilisation de logiciels de caisse et d'inventaire",
                        "Travail en équipe dans un environnement multiculturel",
                      ],
                    },
                    {
                      period: "Mai 2024 - Juin. 2024",
                      duration: "2 mois",
                      title: "Assistant Chef de projet IT",
                      company: "Infotel, Nanterre",
                      details: [
                        "Optimisation des bases de données des applications Air France",
                        "Sensibilisation cybersécurité et bonnes pratiques",
                        "Support technique aux équipes de développement",
                        "Documentation des procédures et des solutions mises en place",
                      ],
                    },
                  ].map((exp, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row gap-4 transition-all duration-200 hover:translate-x-1"
                    >
                      <div className="md:w-1/4 flex flex-col">
                        <span className="font-semibold">{exp.period}</span>
                        <span className="text-muted-foreground">{exp.duration}</span>
                      </div>
                      <div className="md:w-3/4">
                        <h3 className="font-semibold text-lg">{exp.title}</h3>
                        <p className="text-muted-foreground">{exp.company}</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
                          {exp.details.map((detail, i) => (
                            <AnimatedListItem key={i} index={i}>
                              {detail}
                            </AnimatedListItem>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}
