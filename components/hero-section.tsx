"use client"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const images = [
  "/laser-cutting-machine-in-action-with-sparks-and-pr.webp",
  "/h.webp",
  "/h2.webp",
  "/h3.webp",
  "/h4.webp",
];

export function HeroSection() {
  const [api, setApi] = React.useState<any>()
  const [isHovered, setIsHovered] = React.useState(false)

  React.useEffect(() => {
    if (!api) return

    const interval = setInterval(() => {
      if (!isHovered) {
        api.scrollNext()
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [api, isHovered])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
          }}
          className="w-full h-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index}>
                <div className="w-full h-screen">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-space-grotesk font-bold text-4xl sm:text-5xl lg:text-7xl text-white mb-6 animate-fade-in-up">
          Diseñamos con <span className="text-secondary">precisión</span>, <br />
          creamos con láser
        </h1>

        <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          Especialistas en corte y grabado láser de alta precisión. Transformamos tus ideas en realidad con tecnología
          de vanguardia.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
          <a
            href="https://wa.me/51984323019?text=Quiero%20una%20cotizacion"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg group"
            >
              Solicitar Cotización
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in-up animation-delay-600">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-space-grotesk font-bold text-secondary mb-2">500+</div>
            <div className="text-gray-300">Proyectos Completados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-space-grotesk font-bold text-secondary mb-2">5+</div>
            <div className="text-gray-300">Años de Experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-space-grotesk font-bold text-secondary mb-2">24h</div>
            <div className="text-gray-300">Tiempo de Respuesta</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
