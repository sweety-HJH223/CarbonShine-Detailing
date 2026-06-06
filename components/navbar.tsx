'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">CS</span>
            </div>
            <span className="text-white font-bold text-xl">CarbonShine</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('services')} className="text-gray-300 hover:text-white transition">Services</button>
            <button onClick={() => scrollTo('pricing')} className="text-gray-300 hover:text-white transition">Pricing</button>
            <button onClick={() => scrollTo('gallery')} className="text-gray-300 hover:text-white transition">Gallery</button>
            <button onClick={() => scrollTo('booking')} className="text-gray-300 hover:text-white transition">Contact</button>
          </div>

          {/* Desktop CTA + Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <Button
              onClick={() => scrollTo('booking')}
              className="hidden md:flex bg-primary hover:bg-primary/90 text-white font-semibold"
            >
              Book Appointment
            </Button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 border-b border-border px-4 py-4 flex flex-col gap-4">
          <button onClick={() => scrollTo('services')} className="text-gray-300 hover:text-white transition text-left">Services</button>
          <button onClick={() => scrollTo('pricing')} className="text-gray-300 hover:text-white transition text-left">Pricing</button>
          <button onClick={() => scrollTo('gallery')} className="text-gray-300 hover:text-white transition text-left">Gallery</button>
          <button onClick={() => scrollTo('booking')} className="text-gray-300 hover:text-white transition text-left">Contact</button>
          <Button
            onClick={() => scrollTo('booking')}
            className="bg-primary hover:bg-primary/90 text-white font-semibold w-full"
          >
            Book Appointment
          </Button>
        </div>
      )}
    </nav>
  )
}