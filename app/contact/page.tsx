"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import ScrollAnimation from "@/components/scroll-animation"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simuler l'envoi du formulaire
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <div className="container py-12">
      <ScrollAnimation>
        <h1 className="text-3xl font-bold tracking-tight mb-6">Contact</h1>
      </ScrollAnimation>

      <div className="grid gap-8 md:grid-cols-2">
        <ScrollAnimation direction="left">
          <Card className="transition-all duration-200 hover:border-primary/20 hover:shadow-sm">
            <CardHeader>
              <CardTitle>Formulaire de contact</CardTitle>
              <CardDescription>Vous pouvez me contacter en remplissant le formulaire ci-dessous.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2 form-element">
                  <Label htmlFor="name">Nom</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="transition-all duration-200 focus:border-primary/50 focus:ring-1 focus:ring-primary/50"
                  />
                </div>
                <div className="space-y-2 form-element">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Votre email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="transition-all duration-200 focus:border-primary/50 focus:ring-1 focus:ring-primary/50"
                  />
                </div>
                <div className="space-y-2 form-element">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Sujet de votre message"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="transition-all duration-200 focus:border-primary/50 focus:ring-1 focus:ring-primary/50"
                  />
                </div>
                <div className="space-y-2 form-element">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Votre message"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[150px] transition-all duration-200 focus:border-primary/50 focus:ring-1 focus:ring-primary/50"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </ScrollAnimation>

        <div className="space-y-6">
          <ScrollAnimation direction="right" delay={100}>
            <Card className="transition-all duration-200 hover:border-primary/20 hover:shadow-sm">
              <CardHeader>
                <CardTitle>Coordonnées</CardTitle>
                <CardDescription>
                  Vous pouvez également me contacter directement via les coordonnées ci-dessous.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 transition-all duration-200 hover:translate-x-1">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-muted-foreground">m.ditsalamoun@proton.me</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 transition-all duration-200 hover:translate-x-1">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Localisation</h3>
                    <p className="text-sm text-muted-foreground">Région parisienne, France</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>

          <ScrollAnimation direction="right" delay={200}>
            <Card className="transition-all duration-200 hover:border-primary/20 hover:shadow-sm">
              <CardHeader>
                <CardTitle>Réseaux sociaux</CardTitle>
                <CardDescription>
                  Retrouvez-moi sur les réseaux sociaux et plateformes professionnelles.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 transition-all duration-200 hover:translate-x-1">
                  <Linkedin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <a href="#" className="text-sm text-primary hover:underline transition-all duration-200">
                      linkedin.com/in/mohamad-dit-salamoun
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3 transition-all duration-200 hover:translate-x-1">
                  <Github className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">GitHub</h3>
                    <a href="#" className="text-sm text-primary hover:underline transition-all duration-200">
                      github.com/exist697
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}
