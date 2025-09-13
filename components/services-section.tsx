"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Frame, Building2, Cog, ArrowRight, Zap } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { useEffect, useState } from "react"

const services = [
  {
    icon: Frame,
    title: "Cuadros Decorativos Personalizados",
    description:
      "Creamos cuadros únicos con grabado láser en madera y acrílico. Diseños personalizados que transforman cualquier espacio.",
    image: "/elegant-laser-engraved-decorative-frame-with-intri.webp",
    features: ["Diseños personalizados", "Múltiples materiales", "Alta precisión", "Acabados premium"],
  },
  {
    icon: Building2,
    title: "Letreros Publicitarios",
    description:
      "Letreros corporativos y publicitarios en acrílico y madera. Perfectos para empresas que buscan destacar con estilo.",
    image: "/modern-laser-cut-acrylic-business-sign-with-led-ba.webp",
    features: ["Materiales resistentes", "Diseño corporativo", "Instalación incluida", "Garantía extendida"],
  },
  {
    icon: Cog,
    title: "Corte y Grabado Industrial",
    description:
      "Servicios industriales de corte y grabado láser para prototipos, piezas de precisión y producción en serie.",
    image: "/servicios laser producion.webp",
    features: ["Tolerancias mínimas", "Producción en serie", "Múltiples espesores", "Control de calidad"],
  },
  {
    icon: Frame,
    title: "Cuadros Doble Capa",
    description:
      "Cuadros con doble capa de acrílico o MDF para efectos visuales únicos y profundidad dimensional. Efectos 3D sorprendentes.",
    image: "/geometric-laser-cut-art-piece-with-layered-design.webp",
    features: ["Efectos 3D", "Acrílico transparente", "Iluminación opcional", "Diseños personalizados"],
  },
  {
    icon: Frame,
    title: "Cuadros Retroiluminados",
    description:
      "Cuadros decorativos con iluminación LED integrada para un efecto visual impactante y moderno.",
    image: "/retroiluminado.webp",
    features: ["Iluminación LED", "Múltiples colores", "Control remoto", "Bajo consumo energético"],
  },
  {
    icon: Zap,
    title: "Letreros Neon Flex",
    description:
      "Letreros publicitarios con tecnología Neon Flex para un efecto luminoso único y moderno. Perfectos para destacar tu marca.",
    image: "/modern-corporate-led-sign-laser-cut-from-acrylic-w.webp",
    features: ["Tecnología Neon Flex", "Efecto luminoso único", "Instalación profesional", "Durabilidad extrema"],
  },
]

export function ServicesSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext()
      } else {
        api.scrollTo(0)
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [api])

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos soluciones completas de corte y grabado láser con la más alta calidad y precisión
          </p>
        </div>

        <div className="relative">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/3">
                  <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 border-border overflow-hidden h-full">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 left-4 bg-secondary/90 backdrop-blur-sm p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="h-6 w-6 text-secondary-foreground" />
                      </div>
                      <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <CardHeader className="pb-3">
                      <CardTitle className="font-space-grotesk text-lg text-foreground group-hover:text-secondary transition-colors duration-300 line-clamp-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground text-sm line-clamp-3 group-hover:text-foreground/80 transition-colors duration-300">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-xs text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 group-hover:scale-125 transition-transform duration-300" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <a
                        href="https://wa.me/51984323019?text=Quiero%20una%20cotizacion"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full block"
                      >
                        <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground group/btn transition-all duration-300 hover:shadow-lg">
                          <span className="group-hover/btn:translate-x-1 transition-transform duration-300">Solicitar Cotización</span>
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-secondary/90 hover:bg-secondary text-secondary-foreground border-secondary/20" />
            <CarouselNext className="hidden md:flex -right-12 bg-secondary/90 hover:bg-secondary text-secondary-foreground border-secondary/20" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
