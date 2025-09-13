"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, FileText, Phone, MessageCircle } from "lucide-react"

export default function CotizacionPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    servicio: "",
    material: "",
    espesor: "",
    ancho: "",
    alto: "",
    cantidad: "",
    descripcion: "",
    urgencia: "",
  })

  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null)

  const servicios = [
    "Marcos Decorativos",
    "Señalética Publicitaria",
    "Corte Industrial",
    "Grabado Láser",
    "Diseño Personalizado",
  ]

  const materiales = ["MDF Laminado", "MDF Natural", "Acrílico", "Madera", "Metal", "Cartón"]

  const espesores = ["3mm", "4mm", "6mm", "12mm", "18mm"]

  const calculateEstimate = () => {
    // Base price per square centimeter
    let basePricePerCm2 = 0.011

    // Adjust price based on thickness
    if (formData.espesor === "4mm") basePricePerCm2 *= 1.8
    if (formData.espesor === "6mm") basePricePerCm2 *= 3
    if (formData.espesor === "12mm") basePricePerCm2 *= 4.5
    if (formData.espesor === "18mm") basePricePerCm2 *= 6

    // Calculate area and total price
    const ancho = Number.parseFloat(formData.ancho) || 0
    const alto = Number.parseFloat(formData.alto) || 0
    const area = ancho * alto
    const quantity = Number.parseInt(formData.cantidad) || 1

    const total = basePricePerCm2 * area * quantity

    setEstimatedPrice(total)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Cotización enviada:", formData)
    alert("¡Cotización enviada! Nos contactaremos contigo pronto.")
  }

  const sendToWhatsApp = () => {
    const message = `🚀 *NUEVA COTIZACIÓN - SUPAY LASER* 🚀

👤 *Cliente:* ${formData.nombre}
📧 *Email:* ${formData.email}
📱 *Teléfono:* ${formData.telefono}
${formData.empresa ? `🏢 *Empresa:* ${formData.empresa}` : ''}

🔧 *DETALLES DEL PROYECTO*
📋 *Servicio:* ${formData.servicio || 'No especificado'}
🛠️ *Material:* ${formData.material || 'No especificado'}
📏 *Espesor:* ${formData.espesor || 'No especificado'}
📐 *Dimensiones:* ${formData.ancho && formData.alto ? `${formData.ancho}cm x ${formData.alto}cm` : 'No especificadas'}
🔢 *Cantidad:* ${formData.cantidad || 'No especificada'}
⏰ *Urgencia:* ${formData.urgencia === 'normal' ? 'Normal (5-7 días)' : formData.urgencia === 'urgente' ? 'Urgente (2-3 días)' : formData.urgencia === 'express' ? 'Express (24 horas)' : 'No especificada'}

📝 *Descripción:*
${formData.descripcion || 'Sin descripción adicional'}

💰 *Estimado calculado:* ${estimatedPrice ? `S/ ${estimatedPrice.toFixed(2)}` : 'No calculado'}

⚡ ¡Necesito cotización para este proyecto! ⚡
#SupayLaser #CorteLaser #Cotizacion`

    const phoneNumber = "51984323019" // WhatsApp number without + and spaces
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-4">Solicitar Cotización</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Obtén un presupuesto personalizado para tu proyecto de corte láser
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-900 border-yellow-600/20">
              <CardHeader className="mb-6">
                <CardTitle className="text-yellow-500 flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Información del Proyecto
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nombre" className="text-gray-300 mb-2">
                        Nombre Completo *
                      </Label>
                      <Input
                        id="nombre"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        className="bg-gray-800 border-gray-700 text-white"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-300 mb-2">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-gray-800 border-gray-700 text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="telefono" className="text-gray-300 mb-2">
                        Teléfono *
                      </Label>
                      <Input
                        id="telefono"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        className="bg-gray-800 border-gray-700 text-white"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="empresa" className="text-gray-300 mb-2">
                        Empresa (Opcional)
                      </Label>
                      <Input
                        id="empresa"
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="servicio" className="text-gray-300 mb-2">
                        Tipo de Servicio *
                      </Label>
                      <Select
                        value={formData.servicio}
                        onValueChange={(value) => setFormData({ ...formData, servicio: value })}
                      >
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                          <SelectValue placeholder="Seleccionar servicio" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          {servicios.map((servicio) => (
                            <SelectItem key={servicio} value={servicio} className="text-white">
                              {servicio}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="material" className="text-gray-300 mb-2">
                        Material *
                      </Label>
                      <Select
                        value={formData.material}
                        onValueChange={(value) => setFormData({ ...formData, material: value })}
                      >
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                          <SelectValue placeholder="Seleccionar material" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          {materiales.map((material) => (
                            <SelectItem key={material} value={material} className="text-white">
                              {material}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="espesor" className="text-gray-300 mb-2">
                        Espesor
                      </Label>
                      <Select
                        value={formData.espesor}
                        onValueChange={(value) => setFormData({ ...formData, espesor: value })}
                      >
                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                          <SelectValue placeholder="Espesor" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          {espesores.map((espesor) => (
                            <SelectItem key={espesor} value={espesor} className="text-white">
                              {espesor}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="ancho" className="text-gray-300 mb-2">
                        Ancho (cm)
                      </Label>
                      <Input
                        id="ancho"
                        type="number"
                        min="1"
                        placeholder="ej: 45"
                        value={formData.ancho}
                        onChange={(e) => setFormData({ ...formData, ancho: e.target.value })}
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="alto" className="text-gray-300 mb-2">
                        Alto (cm)
                      </Label>
                      <Input
                        id="alto"
                        type="number"
                        min="1"
                        placeholder="ej: 45"
                        value={formData.alto}
                        onChange={(e) => setFormData({ ...formData, alto: e.target.value })}
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cantidad" className="text-gray-300 mb-2">
                        Cantidad
                      </Label>
                      <Input
                        id="cantidad"
                        type="number"
                        min="1"
                        value={formData.cantidad}
                        onChange={(e) => setFormData({ ...formData, cantidad: e.target.value })}
                        className="bg-gray-800 border-gray-700 text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="descripcion" className="text-gray-300 mb-2">
                      Descripción del Proyecto
                    </Label>
                    <Textarea
                      id="descripcion"
                      placeholder="Describe tu proyecto en detalle..."
                      value={formData.descripcion}
                      onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                      className="bg-gray-800 border-gray-700 text-white min-h-[100px]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="urgencia" className="text-gray-300 mb-2">
                      Urgencia del Proyecto
                    </Label>
                    <Select
                      value={formData.urgencia}
                      onValueChange={(value) => setFormData({ ...formData, urgencia: value })}
                    >
                      <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                        <SelectValue placeholder="Seleccionar urgencia" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="normal" className="text-white">
                          Normal (5-7 días)
                        </SelectItem>
                        <SelectItem value="urgente" className="text-white">
                          Urgente (2-3 días)
                        </SelectItem>
                        <SelectItem value="express" className="text-white">
                          Express (24 horas)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="button"
                    onClick={sendToWhatsApp}
                    className="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-semibold py-3 flex items-center justify-center gap-2"
                    disabled={!formData.nombre || !formData.email || !formData.telefono}
                  >
                    <MessageCircle className="h-5 w-5" />
                    📱 Enviar Cotización por WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Calculator */}
            <Card className="bg-gray-900 border-yellow-600/20">
              <CardHeader className="mb-6">
                <CardTitle className="text-yellow-500 flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Calculadora Rápida
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm">Obtén una estimación rápida basada en tus datos</p>
                <Button
                  onClick={calculateEstimate}
                  className="w-full bg-yellow-600 hover:bg-yellow-500 text-black"
                  disabled={!formData.espesor || !formData.ancho || !formData.alto || !formData.cantidad}
                >
                  Calcular Estimado
                </Button>
                {estimatedPrice && (
                  <div className="text-center p-4 bg-yellow-600/10 rounded-lg">
                    <p className="text-gray-300 text-sm">Estimado aproximado:</p>
                    <p className="text-2xl font-bold text-yellow-500">S/ {estimatedPrice.toFixed(2)}</p>
                    <p className="text-xs text-gray-400 mt-2">*Precio referencial, puede variar según diseño</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-gray-900 border-yellow-600/20">
              <CardHeader className="mb-6">
                <CardTitle className="text-yellow-500 flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Contacto Directo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-gray-300 text-sm">WhatsApp:</p>
                  <p className="text-yellow-500 font-semibold">+51 984 323 019</p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Email:</p>
                  <p className="text-yellow-500 font-semibold">info@supaylaser.com</p>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Horario:</p>
                  <p className="text-white text-sm">Lun - Vie: 8:00 AM - 6:00 PM</p>
                  <p className="text-white text-sm">Sáb: 8:00 AM - 2:00 PM</p>
                </div>
              </CardContent>
            </Card>

            {/* Pricing Info */}
            <Card className="bg-gray-900 border-yellow-600/20">
              <CardHeader className="mb-6">
                <CardTitle className="text-yellow-500">Precios Base</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">45x45 cm (3mm)</span>
                  <span className="text-yellow-500">S/ 25</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">60x60 cm (3mm)</span>
                  <span className="text-yellow-500">S/ 30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">90x90 cm (3mm)</span>
                  <span className="text-yellow-500">S/ 90</span>
                </div>
                <p className="text-xs text-gray-400 mt-3">
                  *Precios para MDF laminado 3mm. Otros materiales y espesores tienen precios diferentes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
