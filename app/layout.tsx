import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Supay Laser - Corte y Grabado Láser de Precisión",
  description:
    "Especialistas en corte y grabado láser. Cuadros decorativos, letreros publicitarios y servicios industriales con la más alta precisión.",
  generator: "supay-laser.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${spaceGrotesk.variable}`}>
        <Navbar />
        <main>
          <Suspense fallback={null}>{children}</Suspense>
        </main>
        <Footer />
        <Chatbot />
        <Analytics />
      </body>
    </html>
  )
}
