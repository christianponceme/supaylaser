"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    servicio: "",
    descripcion: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Hola, quisiera una cotización con los siguientes datos:
👤 Nombre: ${formData.nombre}
📧 Correo: ${formData.correo}
📱 Teléfono: ${formData.telefono}
💼 Servicio: ${formData.servicio}
📝 Descripción: ${formData.descripcion}`;

    const whatsappUrl = `https://wa.me/51984323019?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Solicita tu Cotización
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto y te proporcionaremos una cotización personalizada
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="font-space-grotesk text-2xl text-foreground">Formulario de Cotización</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Nombre Completo *</label>
                    <Input
                      type="text"
                      value={formData.nombre}
                      onChange={(e) => handleInputChange("nombre", e.target.value)}
                      placeholder="Tu nombre completo"
                      required
                      className="border-border focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Correo Electrónico *</label>
                    <Input
                      type="email"
                      value={formData.correo}
                      onChange={(e) => handleInputChange("correo", e.target.value)}
                      placeholder="tu@email.com"
                      required
                      className="border-border focus:ring-secondary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Teléfono *</label>
                    <Input
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => handleInputChange("telefono", e.target.value)}
                      placeholder="+51 999 999 999"
                      required
                      className="border-border focus:ring-secondary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Tipo de Servicio *</label>
                    <Select onValueChange={(value) => handleInputChange("servicio", value)}>
                      <SelectTrigger className="border-border focus:ring-secondary">
                        <SelectValue placeholder="Selecciona un servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="decorativo">Cuadros Decorativos</SelectItem>
                        <SelectItem value="letreros">Letreros Publicitarios</SelectItem>
                        <SelectItem value="industrial">Corte Industrial</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Descripción del Proyecto *</label>
                  <Textarea
                    value={formData.descripcion}
                    onChange={(e) => handleInputChange("descripcion", e.target.value)}
                    placeholder="Describe tu proyecto en detalle: materiales, dimensiones, cantidad, etc."
                    rows={4}
                    required
                    className="border-border focus:ring-secondary"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground group"
                >
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Enviar Solicitud
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-space-grotesk text-2xl text-foreground">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Dirección</h3>
                    <p className="text-muted-foreground">
                      Calle 28 de julio, k-7, Cusco
                      <br />
                      Cusco, Perú
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-secondary p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Teléfono</h3>
                    <p className="text-muted-foreground">+51 984 323 019</p>
                    <p className="text-muted-foreground">WhatsApp: +51 984 323 019</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-secondary p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">info@supaylaser.com</p>
                    <p className="text-muted-foreground">ventas@supaylaser.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-secondary p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Horarios</h3>
                    <p className="text-muted-foreground">
                      Lunes - Viernes: 8:00 AM - 6:00 PM
                      <br />
                      Sábados: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="border-border">
              <CardContent className="p-0">
                <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <Button
                      className="w-full mt-4 bg-yellow-600 hover:bg-yellow-500 text-black"
                      onClick={() => window.open("https://maps.app.goo.gl/miGV44LSJGyheVqc6", "_blank")}
                     >
                      Ver en Google Maps
                    </Button>                    
                    <p className="text-sm">Calle 28 de julio, k-7, Cusco</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
