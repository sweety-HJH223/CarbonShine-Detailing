'use client'

import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight text-balance">
              Next-Level Reflection.
              <span className="text-primary block">Ultimate Protection.</span>
            </h1>

            <p className="text-xl text-gray-300 text-pretty leading-relaxed max-w-lg">
              Experience premium car detailing with our advanced ceramic coating technology and expert scratch correction services. Your vehicle deserves the best.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 text-lg rounded-lg transition-all transform hover:scale-105"
              >
                View Packages
              </Button>
              <Button
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 font-bold py-3 px-8 text-lg rounded-lg transition-all"
              >
                Get an Estimate
              </Button>
            </div>
          </div>

          {/* Right side - Real car image */}
          <div className="relative h-96 lg:h-full min-h-96 hidden lg:flex items-center justify-center">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border border-primary/30">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop"
                alt="Premium ceramic coated sports car"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <p className="absolute bottom-4 text-gray-300 text-sm z-10">Luxury ceramic coating applied</p>
          </div>
        </div>
      </div>
    </section>
  )
}