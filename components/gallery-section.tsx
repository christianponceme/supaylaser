"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    title: "Cuadro Mandala 90x90cm",
    category: "decorativo",
    image: "/mandala.webp?height=400&width=400",
    description: "Cuadro decorativo con diseño mandala corte láser",
    size: "90x90",
    basePrice: 100,
    material: "MDF laminado 3mm",
  },
  {
    id: 2,
    title: "Cuadro Gato Geométrico 30x60cm",
    category: "decorativo",
    image: "/gatog.webp?height=400&width=400",
    description: "Diseño geométrico moderno corte láser",
    size: "30x60",
    basePrice: 25,
    material: "MDF laminado 3mm",
  },
  {
    id: 3,
    title: "Cuadro Paris Torre Eiffel 80x120cm",
    category: "decorativo",
    image: "/paris.webp?height=400&width=400",
    description: "Arbol de la vida elegante, corte láser",
    size: "80x120",
    basePrice: 90,
    material: "MDF laminado 3mm",
  },
  {
    id: 4,
    title: "Cuadro Arbol 45x45cm",
    category: "decorativo",
    image: "/arbolvida.webp?height=400&width=400",
    description: "Diseño de naturaleza Mandala corte láser",
    size: "45x45",
    basePrice: 25,
    material: "MDF laminado 3mm",
  },
  {
    id: 5,
    title: "Cuadro Naturaleza 60x60cm",
    category: "decorativo",
    image: "/naturaleza.webp?height=400&width=400",
    description: "Arte abstracto de gran formato corte láser",
    size: "60x60",
    basePrice: 50,
    material: "MDF laminado 3mm",
  },
  {
    id: 6,
    title: "Cuadro Ramas 250x90cm",
    category: "decorativo",
    image: "/ramas.webp?height=400&width=400",
    description: "Diseño minimalista de gran impacto",
    size: "250x90cm",
    basePrice: 200,
    material: "MDF laminado 3mm",
  },
]

const materialOptions = [
  { thickness: "3mm", label: "MDF 3mm", finish: "Laminado natural", multiplier: 1 },
  { thickness: "4mm", label: "MDF 4mm o Acrilico", finish: "Pintado a mano", multiplier: 1.8 },
  { thickness: "6mm", label: "MDF 6mm", finish: "Pintado a mano", multiplier: 3 },
  { thickness: "12mm", label: "MDF 12mm", finish: "Acabado tipo resina (GLOSS)", multiplier: 4.5 },
  { thickness: "18mm", label: "MDF 18mm", finish: "Acabado tipo resina (GLOSS)", multiplier: 6 },
]

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<(typeof galleryItems)[0] | null>(null)
  const [selectedMaterial, setSelectedMaterial] = useState(materialOptions[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryItems.length) % galleryItems.length)
  }

  const calculatePrice = (basePrice: number, material: (typeof materialOptions)[0]) => {
    return Math.round(basePrice * material.multiplier)
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Galería de Cuadros Decorativos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Cuadros decorativos hechos con máquina láser de alta precisión. Precios base en MDF laminado 3mm.
          </p>
        </div>

        <div className="relative mb-12">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {galleryItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <Card className="mx-4 overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 p-0">
                    <div className="relative">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-96 lg:aspect-square lg:h-auto object-cover"
                        onClick={() => setSelectedImage(item)}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                        <h3 className="font-space-grotesk font-bold text-xl mb-2">{item.title}</h3>
                        <p className="text-sm mb-2">{item.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-secondary font-bold text-lg">
                            S/ {item.basePrice} - {item.material}
                          </span>
                          <span className="text-xs bg-secondary/20 px-2 py-1 rounded">{item.size} cm</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-secondary" : "bg-muted-foreground/30"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="bg-card rounded-xl p-8 mb-12">
          <h3 className="font-space-grotesk font-bold text-2xl text-center mb-6">Opciones de Material y Precios</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Size Options */}
            <div className="text-center">
              <h4 className="font-semibold text-lg mb-4 text-secondary">Tamaños Disponibles</h4>
              <div className="space-y-2">
                <div className="p-3 bg-muted rounded-lg">
                  <span className="font-bold">30x30 cm</span>
                  <p className="text-sm text-muted-foreground">Precio base: S/ 20</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <span className="font-bold">45x45 o 30x60 cm</span>
                  <p className="text-sm text-muted-foreground">Precio base: S/ 25</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <span className="font-bold">45x60 cm</span>
                  <p className="text-sm text-muted-foreground">Precio base: S/ 45</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <span className="font-bold">60x60 cm</span>
                  <p className="text-sm text-muted-foreground">Precio base: S/ 50</p>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <span className="font-bold">90x90 cm</span>
                  <p className="text-sm text-muted-foreground">Precio base: S/ 90</p>
                </div>
              </div>
            </div>

            {/* Material Options */}
            <div className="text-center">
              <h4 className="font-semibold text-lg mb-4 text-secondary">Materiales Disponibles</h4>
              <div className="space-y-2">
                {materialOptions.map((material) => (
                  <div key={material.thickness} className="p-3 bg-muted rounded-lg">
                    <span className="font-bold">{material.label}</span>
                    <p className="text-sm text-muted-foreground">
                      {material.finish}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Calculator */}
            <div className="text-center">
              <h4 className="font-semibold text-lg mb-4 text-secondary">Calculadora de Precios</h4>
              <div className="space-y-4">
                <select
                  className="w-full p-3 border rounded-lg bg-background"
                  value={selectedMaterial.thickness}
                  onChange={(e) =>
                    setSelectedMaterial(
                      materialOptions.find((m) => m.thickness === e.target.value) || materialOptions[0],
                    )
                  }
                >
                  {materialOptions.map((material) => (
                    <option key={material.thickness} value={material.thickness}>
                      {material.label}
                    </option>
                  ))}
                </select>
                <div className="space-y-2">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <span className="text-sm">30x30 cm: </span>
                    <span className="font-bold text-secondary">S/ {calculatePrice(20, selectedMaterial)}</span>
                  </div>
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <span className="text-sm">45x45 cm: </span>
                    <span className="font-bold text-secondary">S/ {calculatePrice(25, selectedMaterial)}</span>
                  </div>
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <span className="text-sm">30x60 cm: </span>
                    <span className="font-bold text-secondary">S/ {calculatePrice(25, selectedMaterial)}</span>
                  </div>
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <span className="text-sm">45x60 cm: </span>
                    <span className="font-bold text-secondary">S/ {calculatePrice(45, selectedMaterial)}</span>
                  </div>
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <span className="text-sm">60x60 cm: </span>
                    <span className="font-bold text-secondary">S/ {calculatePrice(60, selectedMaterial)}</span>
                  </div>
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <span className="text-sm">90x90 cm: </span>
                    <span className="font-bold text-secondary">S/ {calculatePrice(90, selectedMaterial)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <img
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-6 rounded-b-lg">
                <h3 className="font-space-grotesk font-bold text-xl mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300 mb-2">{selectedImage.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-secondary font-bold">
                    Precio base: S/ {selectedImage.basePrice} - {selectedImage.material}
                  </span>
                  <span className="bg-secondary/20 px-3 py-1 rounded text-sm">{selectedImage.size} cm</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
