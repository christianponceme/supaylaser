import { Card } from "@/components/ui/card"
import { Zap, Users, Award, Clock } from "lucide-react"

export default function NosotrosPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="pt-8 pb-16 bg-gradient-to-b from-black/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-space-grotesk font-bold text-4xl sm:text-5xl lg:text-6xl text-black mb-6">
              Sobre Supay Laser
            </h1>
            <p className="text-xl text-black/80 max-w-3xl mx-auto">
              Somos especialistas en corte y grabado láser con más de 5 años de experiencia, transformando ideas en
              realidad con tecnología de vanguardia y precisión milimétrica.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-0 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-space-grotesk font-bold text-3xl text-foreground mb-6">Nuestra Historia</h2>
              <p className="text-muted-foreground mb-4">
                Supay Laser nació de la pasión por la precisión y el arte. Comenzamos como un pequeño taller
                especializado en grabado láser, y hoy somos reconocidos por la calidad excepcional de nuestros cuadros
                decorativos y letreros publicitarios.
              </p>
              <p className="text-muted-foreground mb-4">
                Nuestro nombre "Supay" proviene de la mitología andina, representando la transformación y la
                creatividad. Cada proyecto que realizamos lleva consigo esta filosofía de transformar materiales simples
                en obras de arte únicas.
              </p>
              <p className="text-muted-foreground">
                Utilizamos tecnología láser de última generación que nos permite trabajar con precisión milimétrica en
                diversos materiales como MDF, acrílico, metal y madera, siempre manteniendo los más altos estándares de
                calidad.
              </p>
            </div>
            <div className="relative mt-[-2rem]">
              <img
                src="/taller.webp?height=500&width=600"
                alt="Taller Supay Laser"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="p-6 text-center">
              <Clock className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="font-space-grotesk font-bold text-2xl text-foreground mb-2">5+</h3>
              <p className="text-muted-foreground">Años de Experiencia</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="font-space-grotesk font-bold text-2xl text-foreground mb-2">500+</h3>
              <p className="text-muted-foreground">Clientes Satisfechos</p>
            </Card>
            <Card className="p-6 text-center">
              <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="font-space-grotesk font-bold text-2xl text-foreground mb-2">1000+</h3>
              <p className="text-muted-foreground">Proyectos Completados</p>
            </Card>
            <Card className="p-6 text-center">
              <Zap className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="font-space-grotesk font-bold text-2xl text-foreground mb-2">99%</h3>
              <p className="text-muted-foreground">Precisión Garantizada</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-space-grotesk font-bold text-3xl text-foreground mb-4">Tecnología de Vanguardia</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Utilizamos equipos láser de última generación para garantizar la máxima precisión y calidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="font-space-grotesk font-bold text-xl text-foreground mb-4">Láser CO2 de Alta Potencia</h3>
              <p className="text-muted-foreground">
                Equipos láser CO2 de 130W que nos permiten cortar y grabar con precisión milimétrica en materiales de
                hasta 18mm de espesor.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-space-grotesk font-bold text-xl text-foreground mb-4">Software de Diseño Avanzado</h3>
              <p className="text-muted-foreground">
                Utilizamos software especializado para optimizar cada corte y grabado, asegurando resultados perfectos
                en cada proyecto.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-space-grotesk font-bold text-xl text-foreground mb-4">Control de Calidad</h3>
              <p className="text-muted-foreground">
                Cada pieza pasa por rigurosos controles de calidad para garantizar que cumple con nuestros altos
                estándares de precisión.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
