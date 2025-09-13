"use client"

import { useEffect, useState, useRef } from "react"
import { Frame, Building2, Cog, Zap } from "lucide-react"
import Image from "next/image"

const services = [
  {
    id: 1,
    icon: Frame,
    title: "Cuadros Decorativos Personalizados",
    subtitle: "Arte Láser de Precisión",
    description: "Transformamos tus ideas en obras de arte únicas. Cada cuadro es grabado con tecnología láser de última generación, garantizando detalles perfectos y acabados premium que destacan en cualquier espacio.",
    features: [
      "Grabado láser de alta precisión",
      "Múltiples materiales disponibles",
      "Diseños 100% personalizados",
      "Acabados profesionales"
    ],
    image: "/elegant-laser-engraved-decorative-frame-with-intri.webp",
    bgColor: "from-blue-500/20 to-purple-500/20"
  },
  {
    id: 2,
    icon: Building2,
    title: "Letreros Publicitarios",
    subtitle: "Identidad Visual Impactante",
    description: "Creamos señalización corporativa que comunica tu mensaje de manera efectiva. Desde letreros de acrílico hasta piezas de Ingeniería o Arquitectura, cada proyecto está diseñado para maximizar el impacto visual de tu marca.",
    features: [
      "Diseño corporativo personalizado",
      "Materiales resistentes y duraderos",
      "Opciones de iluminación LED",
      "Instalación profesional incluida"
    ],
    image: "/modern-laser-cut-acrylic-business-sign-with-led-ba.webp",
    bgColor: "from-green-500/20 to-teal-500/20"
  },
  {
    id: 3,
    icon: Cog,
    title: "Corte y Grabado Industrial",
    subtitle: "Precisión para la Industria",
    description: "Servicios especializados de corte láser para aplicaciones industriales. Prototipos técnicos, piezas de precisión y producción en serie con tolerancias mínimas y control de calidad excepcional.",
    features: [
      "Tolerancias de precisión ±0.1mm",
      "Producción en serie eficiente",
      "Múltiples espesores disponibles",
      "Control de calidad ISO 9001"
    ],
    image: "/servicios laser producion.webp",
    bgColor: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 4,
    icon: Frame,
    title: "Cuadros Doble Capa",
    subtitle: "Efectos 3D Espectaculares",
    description: "Descubre el arte de la profundidad dimensional. Nuestros cuadros de doble capa crean efectos visuales únicos que juegan con la luz y la perspectiva, transformando espacios ordinarios en experiencias extraordinarias.",
    features: [
      "Efectos 3D sorprendentes",
      "Acrílico transparente premium",
      "Iluminación opcional integrada",
      "Instalación especializada"
    ],
    image: "/geometric-laser-cut-art-piece-with-layered-design.webp",
    bgColor: "from-pink-500/20 to-rose-500/20"
  },
  {
    id: 5,
    icon: Frame,
    title: "Cuadros Retroiluminados",
    subtitle: "Iluminación Inteligente",
    description: "Combina arte y tecnología con nuestros cuadros retroiluminados. Cada pieza cuenta con sistema LED integrado que resalta los detalles del grabado láser, creando ambientes únicos y modernos.",
    features: [
      "Sistema LED integrado",
      "Control remoto opcional",
      "Múltiples opciones de color",
      "Bajo consumo energético"
    ],
    image: "/retroiluminado.webp",
    bgColor: "from-yellow-500/20 to-amber-500/20"
  },
  {
    id: 6,
    icon: Zap,
    title: "Letreros Neon Flex",
    subtitle: "Tecnología Luminosa Avanzada",
    description: "La última innovación en señalización. Los letreros Neon Flex ofrecen un efecto luminoso único que combina la calidez del neón tradicional con la versatilidad del LED moderno, perfectos para destacar tu marca.",
    features: [
      "Tecnología Neon Flex avanzada",
      "Efecto luminoso único y moderno",
      "Instalación profesional especializada",
      "Durabilidad extrema y bajo mantenimiento"
    ],
    image: "/modern-corporate-led-sign-laser-cut-from-acrylic-w.webp",
    bgColor: "from-cyan-500/20 to-blue-500/20"
  }
]

export function ImmersiveServicesShowcase() {
  const [currentSection, setCurrentSection] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const containerTop = containerRef.current.offsetTop
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      // Calculate which section is currently in view
      const relativeScroll = scrollY - containerTop
      const sectionIndex = Math.max(0, Math.min(
        services.length - 1,
        Math.floor(relativeScroll / windowHeight)
      ))

      setCurrentSection(sectionIndex)

      // Calculate scroll progress within current section
      const sectionScroll = relativeScroll - (sectionIndex * windowHeight)
      const sectionProgress = Math.max(0, Math.min(1, sectionScroll / windowHeight))
      setScrollProgress(sectionProgress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{
        height: `${services.length * 100}vh`,
        scrollSnapType: 'y mandatory'
      }}
    >
      {services.map((service, index) => (
        <section
          key={service.id}
          ref={(el) => {
            if (el) sectionRefs.current[index] = el as HTMLDivElement
          }}
          className="relative h-screen overflow-hidden"
          style={{
            scrollSnapAlign: 'start',
            scrollSnapStop: 'always'
          }}
        >
          {/* Background Image with Parallax */}
          <div className="absolute inset-0">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority={index === 0}
              style={{
                transform: `translateY(${scrollProgress * -50}px) scale(${1 + scrollProgress * 0.1})`
              }}
            />
            {/* Dynamic overlay based on scroll progress */}
            <div
              className="absolute inset-0 bg-black transition-all duration-300"
              style={{
                opacity: 0.3 + (scrollProgress * 0.3)
              }}
            />
          </div>

          {/* Content Overlay with Scroll-Driven Animations */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-4xl">
                {/* Service Counter - Animated entrance */}
                <div
                  className="flex items-center space-x-4 mb-6 transition-all duration-700 ease-out"
                  style={{
                    opacity: currentSection === index ? 1 : 0.3,
                    transform: currentSection === index
                      ? `translateY(${scrollProgress * -20}px)`
                      : 'translateY(30px)'
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <service.icon className="h-6 w-6 text-white transition-transform duration-500"
                      style={{
                        transform: currentSection === index ? `scale(${1 + scrollProgress * 0.2})` : 'scale(1)'
                      }}
                    />
                    <span className="text-white/80 text-sm font-medium uppercase tracking-wider">
                      Servicio {index + 1} de {services.length}
                    </span>
                  </div>
                  <div className="w-16 h-px bg-white/30" />
                </div>

                {/* Main Title - Staggered animation */}
                <h1
                  className="text-5xl md:text-7xl lg:text-8xl font-space-grotesk font-bold text-white mb-6 leading-tight transition-all duration-700 ease-out"
                  style={{
                    opacity: currentSection === index ? 1 : 0.3,
                    transform: currentSection === index
                      ? `translateY(${scrollProgress * -30}px) translateX(${scrollProgress * -10}px)`
                      : 'translateY(50px) translateX(20px)'
                  }}
                >
                  {service.title}
                </h1>

                {/* Subtitle - Delayed animation */}
                <h2
                  className="text-2xl md:text-3xl lg:text-4xl font-space-grotesk font-semibold text-white/90 mb-8 transition-all duration-700 ease-out"
                  style={{
                    opacity: currentSection === index ? 1 : 0.3,
                    transform: currentSection === index
                      ? `translateY(${scrollProgress * -20}px)`
                      : 'translateY(30px)',
                    transitionDelay: '0.2s'
                  }}
                >
                  {service.subtitle}
                </h2>

                {/* Description - Fade in animation */}
                <p
                  className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12 max-w-3xl transition-all duration-700 ease-out"
                  style={{
                    opacity: currentSection === index ? (0.6 + scrollProgress * 0.4) : 0.3,
                    transform: currentSection === index
                      ? `translateY(${scrollProgress * -10}px)`
                      : 'translateY(20px)',
                    transitionDelay: '0.4s'
                  }}
                >
                  {service.description}
                </p>

                {/* Features - Staggered grid animation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3 transition-all duration-500 ease-out"
                      style={{
                        opacity: currentSection === index ? (0.7 + scrollProgress * 0.3) : 0.3,
                        transform: currentSection === index
                          ? `translateY(${scrollProgress * -5}px) translateX(${scrollProgress * -5}px)`
                          : 'translateY(15px) translateX(10px)',
                        transitionDelay: `${0.6 + (featureIndex * 0.1)}s`
                      }}
                    >
                      <div className="w-3 h-3 bg-white rounded-full flex-shrink-0" />
                      <span className="text-white/90 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button - Final animation */}
                <div
                  className="transition-all duration-700 ease-out"
                  style={{
                    opacity: currentSection === index ? (0.8 + scrollProgress * 0.2) : 0.3,
                    transform: currentSection === index
                      ? `translateY(${scrollProgress * -5}px) scale(${1 + scrollProgress * 0.05})`
                      : 'translateY(10px) scale(0.95)',
                    transitionDelay: '1s'
                  }}
                >
                  <a
                    href="https://wa.me/51984323019?text=Quiero%20una%20cotizacion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    Solicitar Cotización
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/20">
            <div
              className="h-full bg-white transition-all duration-300 ease-out"
              style={{
                width: currentSection === index ? `${scrollProgress * 100}%` : '0%'
              }}
            />
          </div>




        </section>
      ))}

      <style jsx>{`
        /* Custom scroll-snap behavior */
        .scroll-snap-container {
          scroll-snap-type: y mandatory;
        }

        .scroll-snap-section {
          scroll-snap-align: start;
          scroll-snap-stop: always;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Hide scrollbar but keep functionality */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: transparent;
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  )
}
