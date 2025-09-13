import { Card } from "@/components/ui/card"
import { Palette, Ruler } from "lucide-react"
import { ServicesSection } from "@/components/services-section"
import { ImmersiveServicesShowcase } from "@/components/immersive-services-showcase"

const materials = [
  { name: "MDF Laminado", thickness: "3mm", description: "Base económica para cuadros decorativos" },
  { name: "MDF Pintado", thickness: "4-18mm", description: "Acabado premium pintado a mano" },
  { name: "Acrílico", thickness: "2-10mm", description: "Transparente o coloreado para letreros" },
  { name: "Madera", thickness: "Cualquier Grosor", description: "Maderas nobles para proyectos especiales" },
  { name: "LED retroiluminado", thickness: "30mm", description: "Cuadros retroiluminados con luces led" },
  { name: "Neon Flex", thickness: "4mm", description: "Iluminacion con Neon flex sobre acrilico transparente" },
]

export default function ServiciosPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Services Section */}
      <ServicesSection />

      {/* Immersive Services Showcase */}
      <ImmersiveServicesShowcase />

      {/* Materials Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-space-grotesk font-bold text-3xl text-foreground mb-4">Materiales Disponibles</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trabajamos con una amplia variedad de materiales para adaptarnos a cualquier proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((material, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <Palette className="h-6 w-6 text-secondary mr-3" />
                  <h3 className="font-space-grotesk font-bold text-lg text-foreground">{material.name}</h3>
                </div>
                <div className="flex items-center mb-2">
                  <Ruler className="h-4 w-4 text-muted-foreground mr-2" />
                  <span className="text-sm font-medium text-secondary">{material.thickness}</span>
                </div>
                <p className="text-muted-foreground text-sm">{material.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-space-grotesk font-bold text-3xl text-foreground mb-4">Nuestro Proceso</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un proceso simple y eficiente para garantizar resultados excepcionales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary-foreground font-bold text-xl">1</span>
              </div>
              <h3 className="font-space-grotesk font-bold text-lg text-foreground mb-2">Consulta</h3>
              <p className="text-muted-foreground text-sm">Conversamos sobre tu proyecto y necesidades específicas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary-foreground font-bold text-xl">2</span>
              </div>
              <h3 className="font-space-grotesk font-bold text-lg text-foreground mb-2">Diseño</h3>
              <p className="text-muted-foreground text-sm">
                Creamos el diseño personalizado y te enviamos una vista previa
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary-foreground font-bold text-xl">3</span>
              </div>
              <h3 className="font-space-grotesk font-bold text-lg text-foreground mb-2">Producción</h3>
              <p className="text-muted-foreground text-sm">Realizamos el corte y grabado láser con máxima precisión</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary-foreground font-bold text-xl">4</span>
              </div>
              <h3 className="font-space-grotesk font-bold text-lg text-foreground mb-2">Entrega</h3>
              <p className="text-muted-foreground text-sm">Entregamos tu proyecto terminado con acabado perfecto</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
