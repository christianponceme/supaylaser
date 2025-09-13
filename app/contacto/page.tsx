"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin, Phone, Mail, Clock, MessageCircle, HelpCircle, Zap, Users, Truck, CreditCard } from "lucide-react"

export default function ContactoPage() {
  const faqs = [
    {
      question: "¿Qué tipos de materiales pueden cortarse con láser?",
      answer: "Trabajamos con MDF laminado, MDF natural, acrílico, madera y cartón. Cada material tiene características específicas que se adaptan a diferentes proyectos."
    },
    {
      question: "¿Cuál es el tiempo de entrega promedio?",
      answer: "El tiempo de entrega depende de la complejidad del proyecto: trabajos simples (2-3 días), proyectos medianos (5-7 días) y proyectos complejos (1-2 semanas). Ofrecemos servicio express para casos urgentes."
    },
    {
      question: "¿Hacen envíos a otras ciudades?",
      answer: "Sí, realizamos envíos a nivel nacional. Coordinamos con empresas de transporte confiables y ofrecemos seguimiento en tiempo real de tus pedidos."
    },
    {
      question: "¿Ofrecen descuentos por volumen?",
      answer: "Sí, tenemos descuentos especiales para proyectos grandes o pedidos recurrentes. Contáctanos para una cotización personalizada con mejores precios."
    },
    {
      question: "¿Pueden trabajar con diseños personalizados?",
      answer: "¡Por supuesto! Aceptamos diseños en cualquier formato digital. Si no tienes un diseño listo, nuestro equipo puede ayudarte a crear uno desde cero."
    },
    {
      question: "¿Cuál es el tamaño máximo que pueden cortar?",
      answer: "Nuestra máquina puede cortar piezas de hasta 120cm x 80cm. Para proyectos más grandes, podemos dividir el diseño en secciones que se ensamblan perfectamente."
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-4">Contáctanos</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Resolvemos tus dudas y estamos aquí para ayudarte con tu proyecto
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <div>
            <Card className="bg-gray-900 border-yellow-600/20">
              <CardHeader>
                <CardTitle className="text-yellow-500 flex items-center gap-2">
                  <HelpCircle className="h-5 w-5" />
                  Preguntas Frecuentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border-gray-700">
                      <AccordionTrigger className="text-left text-gray-300 hover:text-yellow-500">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-400">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="bg-gray-900 border-yellow-600/20">
              <CardHeader>
                <CardTitle className="text-yellow-500">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Dirección</h3>
                    <p className="text-gray-300">
                      Calle 28 de julio, k-7, Cusco
                      <br />
                      Cusco, Perú
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Teléfono</h3>
                    <p className="text-gray-300">+51 984 323 019</p>
                    <p className="text-gray-300">+51 984 323 019</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">WhatsApp</h3>
                    <p className="text-gray-300">+51 984 323 019</p>
                    <Button
                      className="mt-2 bg-green-600 hover:bg-green-500 text-white"
                      onClick={() => window.open("https://wa.me/51984323019", "_blank")}
                    >
                      Chatear por WhatsApp
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-300">info@supaylaser.com</p>
                    <p className="text-gray-300">ventas@supaylaser.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Horarios de Atención</h3>
                    <div className="text-gray-300 space-y-1">
                      <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                      <p>Sábados: 8:00 AM - 2:00 PM</p>
                      <p>Domingos: Cerrado</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Services */}
            <Card className="bg-gray-900 border-yellow-600/20">
              <CardHeader>
                <CardTitle className="text-yellow-500 flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Servicios Rápidos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <Users className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Atención Personalizada</p>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <Truck className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Envío Nacional</p>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <CreditCard className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Pagos Flexibles</p>
                  </div>
                  <div className="text-center p-4 bg-gray-800 rounded-lg">
                    <Zap className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Servicio Express</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gray-900 border-yellow-600/20">
              <CardHeader>
                <CardTitle className="text-yellow-500">Acciones Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="https://wa.me/51984323019?text=Quiero%20una%20cotizacion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-500 text-black">
                    Solicitar Cotización
                  </Button>
                </a>
                <Button
                  variant="outline"
                  className="w-full border-yellow-600 text-yellow-500 hover:bg-yellow-600 hover:text-black bg-transparent"
                  onClick={() => (window.location.href = "/galeria")}
                >
                  Ver Galería
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-yellow-600 text-yellow-500 hover:bg-yellow-600 hover:text-black bg-transparent"
                  onClick={() => (window.location.href = "/servicios")}
                >
                  Nuestros Servicios
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
