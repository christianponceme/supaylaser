import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { SiTiktok } from "react-icons/si"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center mr-3">{/* Space for logo PNG */}</div>
              <img
              src="/logo-supay-laser.png"
              alt="Supay Laser Logo"
              className="w-12 h-12 object-contain"
            />
              <span className="text-2xl font-bold text-yellow-500">Supay Laser</span>
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              Especialistas en corte y grabado láser de alta precisión. Transformamos tus ideas en realidad con
              tecnología de vanguardia y más de 5 años de experiencia en cuadros decorativos y letreros publicitarios.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/Supaylaser" target="_blank" className="text-white/60 hover:text-yellow-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/supaylaser/" target="_blank" className="text-white/60 hover:text-yellow-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@franciscacruzcuro3" target="_blank" className="text-white/60 hover:text-yellow-500 transition-colors">
                <SiTiktok className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-space-grotesk font-semibold text-lg mb-4 text-yellow-500">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/nosotros" className="text-white/80 hover:text-yellow-500 transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-white/80 hover:text-yellow-500 transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-white/80 hover:text-yellow-500 transition-colors">
                  Galería
                </Link>
              </li>
              <li>
                <Link href="/cotizacion" className="text-white/80 hover:text-yellow-500 transition-colors">
                  Cotización
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-white/80 hover:text-yellow-500 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-space-grotesk font-semibold text-lg mb-4 text-yellow-500">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-500" />
                <span className="text-white/80">+51 984 323 019</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-500" />
                <span className="text-white/80">info@supaylaser.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-yellow-500" />
                <span className="text-white/80">Cusco, Perú</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">© 2025 Supay Laser. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacidad" className="text-white/60 hover:text-yellow-500 text-sm transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="text-white/60 hover:text-yellow-500 text-sm transition-colors">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
