"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/nosotros", label: "Nosotros" },
    { href: "/servicios", label: "Servicios" },
    { href: "/galeria", label: "Galería" },
    { href: "/cotizacion", label: "Cotización" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/90 z-50 border-b border-yellow-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/logo-supay-laser.png"
              alt="Supay Laser Logo"
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-bold text-yellow-500">Supay Laser</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-yellow-500 hover:text-yellow-400 transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <div className="ml-4">
              <a
                href="https://wa.me/51984323019?text=Quiero%20una%20cotizacion"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold">Solicitar Cotización</Button>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-yellow-500 hover:text-yellow-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-yellow-600/20">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-yellow-500 hover:text-yellow-400 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <a
                  href="https://wa.me/51984323019?text=Quiero%20una%20cotizacion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-500 text-black">Solicitar Cotización</Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export { Navbar }
