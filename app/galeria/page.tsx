"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    title: "Cuadro Mandala",
    image: "/mandala.webp?height=400&width=400",
    size: "90x90",
    price: 100,
    material: "MDF laminado 3mm",
  },
  {
    id: 2,
    title: "Cuadro Gato Geométrico",
    image: "/gatog.webp?height=400&width=400",
    size: "30x60",
    price: 25,
    material: "MDF laminado 3mm",
  },
  {
    id: 3,
    title: "Cuadro Paris Torre Eiffel",
    image: "/paris.webp?height=400&width=400",
    size: "80x120",
    price: 90,
    material: "MDF laminado 3mm",
  },
  {
    id: 4,
    title: "Cuadro Arbol",
    image: "/arbolvida.webp?height=400&width=400",
    size: "45x45",
    price: 25,
    material: "MDF laminado 3mm",
  },
  {
    id: 5,
    title: "Cuadro Naturaleza",
    image: "/naturaleza.webp?height=400&width=400",
    size: "60x60",
    price: 50,
    material: "MDF laminado 3mm",
  },
  {
    id: 6,
    title: "Cuadro Ramas",
    image: "/ramas.webp?height=400&width=400",
    size: "250x90cm",
    price: 200,
    material: "MDF laminado 3mm",
  },
  {
    id: 7,
    title: "Cuadro Arbol Familiar",
    image: "/arbolfamiliar.webp?height=400&width=400",
    size: "350x200cm",
    price: 250,
    material: "MDF laminado 3mm",
  },
  {
    id: 8,
    title: "Cuadro Arbol con pajaritos 4 partes",
    image: "/arbolpajaros.webp?height=400&width=400",
    size: "150x90cm",
    price: 130,
    material: "MDF laminado 3mm",
  },
  {
    id: 9,
    title: "Cuadro Lobo aullando con arboles dentro",
    image: "/loboarboles.webp?height=400&width=400",
    size: "45x60cm",
    price: 45,
    material: "MDF laminado 3mm",
  },
  {
    id: 10,
    title: "Cuadro Lobo circular en Luna",
    image: "/loboluna.webp?height=400&width=400",
    size: "60x60cm",
    price: 50,
    material: "MDF laminado 3mm",
  },
  {
    id: 11,
    title: "Cuadro Oso en paisaje de rombo",
    image: "/osoarbolesrombo.webp?height=400&width=400",
    size: "30x60cm",
    price: 40,
    material: "MDF laminado 3mm",
  },
  {
    id: 12,
    title: "Cuadro Rinoceronte con lineas suaves",
    image: "/rino.webp?height=400&width=400",
    size: "60x60cm",
    price: 50,
    material: "MDF laminado 3mm",
  },
  {
    id: 13,
    title: "Cuadro de Oso, Aguila y Venado",
    image: "/trilogia.webp?height=400&width=400",
    size: "60x60cm",
    price: 50,
    material: "MDF laminado 3mm",
  },
  {
    id: 14,
    title: "Cuadro Arbol de la Vida en Trio",
    image: "/trioarbolvida.webp?height=400&width=400",
    size: "120x90cm",
    price: 100,
    material: "MDF laminado 3mm",
  },
  {
    id: 15,
    title: "Cuadro Hojas Geometricas",
    image: "/triohojas.webp?height=400&width=400",
    size: "140x45cm",
    price: 90,
    material: "MDF laminado 3mm",
  },
  {
    id: 16,
    title: "Cuadro Aguila ",
    image: "/aguila.webp?height=400&width=400",
    size: "45x60cm",
    price: 45,
    material: "MDF laminado 3mm",
  },
  {
    id: 17,
    title: "Cuadro Bicicleta Vintage",
    image: "/bicicleta.webp?height=400&width=400",
    size: "45x60cm",
    price: 50,
    material: "MDF laminado 3mm",
  },
  {
    id: 18,
    title: "Cuadro Colibri Ornamental",
    image: "/colibri.webp?height=400&width=400",
    size: "60x60cm",
    price: 40,
    material: "MDF laminado 3mm",
  },
  {
    id: 19,
    title: "Cuadro Flores",
    image: "/flor.webp?height=400&width=400",
    size: "90x40cm",
    price: 60,
    material: "MDF laminado 3mm",
  },
  {
    id: 20,
    title: "Cuadro Flor de Loto Ornamental",
    image: "/flor de loto.webp?height=400&width=400",
    size: "60x45cm",
    price: 50,
    material: "MDF laminado 3mm",
  },
  {
    id: 21,
    title: "Cuadro Florero",
    image: "/florero.webp?height=400&width=400",
    size: "45x60cm",
    price: 45,
    material: "MDF laminado 3mm",
  },
  {
    id: 22,
    title: "Cuadro Flores 4 partes",
    image: "/flores 4partes.webp?height=400&width=400",
    size: "180x60cm",
    price: 180,
    material: "MDF laminado 3mm",
  },
  {
    id: 23,
    title: "Cuadro Flor tipo Loto ornamental",
    image: "/flor tipo loto.webp?height=400&width=400",
    size: "60x60cm",
    price: 60,
    material: "MDF laminado 3mm",
  },
  {
    id: 24,
    title: "Cuadro Goku",
    image: "/goku.webp?height=400&width=400",
    size: "45x60cm",
    price: 40,
    material: "MDF laminado 3mm",
  },
  {
    id: 25,
    title: "Cuadro Huella Familiar Oso",
    image: "/huellaoso.webp?height=400&width=400",
    size: "45x60cm",
    price: 50,
    material: "MDF laminado 3mm",
  },
  {
    id: 26,
    title: "Cuadro Leon",
    image: "/leon.webp?height=400&width=400",
    size: "45x60cm",
    price: 40,
    material: "MDF laminado 3mm",
  },
  {
    id: 27,
    title: "Cuadro Leon Floral",
    image: "/leonflor.webp?height=400&width=400",
    size: "45x60cm",
    price: 40,
    material: "MDF laminado 3mm",
  },
  {
    id: 28,
    title: "Cuadro Flor de Lirio Rectangulo",
    image: "/lirio.webp?height=400&width=400",
    size: "45x60cm",
    price: 40,
    material: "MDF laminado 3mm",
  },
  {
    id: 29,
    title: "Cuadro Flor de Lirio Doble Rectangulo",
    image: "/lirios.webp?height=400&width=400",
    size: "60x60cm",
    price: 50,
    material: "MDF laminado 3mm",
  },
  {
    id: 30,
    title: "Cuadro Loto estilo 3d",
    image: "/loto3d.webp?height=400&width=400",
    size: "60x45cm",
    price: 40,
    material: "MDF laminado 3mm",
  },
  {
    id: 31,
    title: "Cuadro Loto Minimalista",
    image: "/lotosimple.webp?height=400&width=400",
    size: "60x45cm",
    price: 25,
    material: "MDF laminado 3mm",
  },
  {
    id: 32,
    title: "Cuadro Mandala Trio",
    image: "/mandalatrio.webp?height=400&width=400",
    size: "120x60cm",
    price: 120,
    material: "MDF laminado 3mm",
  },
  {
    id: 33,
    title: "Cuadro Mariposa Minialista",
    image: "/mariposa.webp?height=400&width=400",
    size: "60x45cm",
    price: 30,
    material: "MDF laminado 3mm",
  },
  {
    id: 34,
    title: "Cuadro Mariposa Floral",
    image: "/mariposaflor.webp?height=400&width=400",
    size: "60x45cm",
    price: 45,
    material: "MDF laminado 3mm",
  },
  {
    id: 35,
    title: "Cuadro Mariposa en Luna",
    image: "/mariposalunaflores.webp?height=400&width=400",
    size: "60x60cm",
    price: 50,
    material: "MDF laminado 3mm",
  },
  {
    id: 36,
    title: "Cuadro Panda Minimalista",
    image: "/panda.webp?height=400&width=400",
    size: "60x45cm",
    price: 30,
    material: "MDF laminado 3mm",
  },
  {
    id: 37,
    title: "Cuadro Panda vista atras",
    image: "/pandaatras.webp?height=400&width=400",
    size: "60x60cm",
    price: 45,
    material: "MDF laminado 3mm",
  },
  {
    id: 38,
    title: "Cuadro Stitch",
    image: "/stitch.webp?height=400&width=400",
    size: "45x45cm",
    price: 25,
    material: "MDF laminado 3mm",
  },
  {
    id: 39,
    title: "Cuadro Zebra Mama con su cría",
    image: "/zebramama.webp?height=400&width=400",
    size: "60x60cm",
    price: 45,
    material: "MDF laminado 3mm",
  },
]

export default function GaleriaPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Auto-advance carousel every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryItems.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-500 mb-4">Galería de Trabajos</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre nuestros marcos decorativos cortados con precisión láser
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {galleryItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <Card className="bg-gray-900 border-yellow-600/20">
                    <CardContent className="p-8">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="cursor-pointer" onClick={() => setSelectedImage(item.id)}>
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="w-full h-80 md:h-auto md:aspect-square object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="space-y-4">
                          <h3 className="text-2xl font-bold text-yellow-500">{item.title}</h3>
                          <div className="space-y-2">
                            <p className="text-gray-300">
                              <span className="font-semibold">Tamaño:</span> {item.size}
                            </p>
                            <p className="text-gray-300">
                              <span className="font-semibold">Material:</span> {item.material}
                            </p>
                            <p className="text-3xl font-bold text-yellow-500">S/ {item.price}</p>
                          </div>
                          <div className="text-sm text-gray-400">
                            <p>* Precio base para MDF laminado 3mm</p>
                            <p>* Disponible en otros espesores: 4mm, 6mm, 12mm, 18mm</p>
                            <p>* Opción de pintado a mano disponible</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 border-yellow-600 text-yellow-500 hover:bg-yellow-600 hover:text-black"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 border-yellow-600 text-yellow-500 hover:bg-yellow-600 hover:text-black"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-yellow-500" : "bg-gray-600"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Grid Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <Card
              key={item.id}
              className="bg-gray-900 border-yellow-600/20 hover:border-yellow-500/50 transition-colors"
            >
              <CardContent className="p-4">
                <div className="cursor-pointer" onClick={() => setSelectedImage(item.id)}>
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg mb-4 hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-yellow-500 mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm mb-2">
                  {item.size} - {item.material}
                </p>
                <p className="text-xl font-bold text-yellow-500">S/ {item.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-black/50 border-yellow-600 text-yellow-500 hover:bg-yellow-600 hover:text-black"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-4 w-4" />
              </Button>
              {galleryItems.find((item) => item.id === selectedImage) && (
                <img
                  src={galleryItems.find((item) => item.id === selectedImage)!.image || "/placeholder.svg"}
                  alt={galleryItems.find((item) => item.id === selectedImage)!.title}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
