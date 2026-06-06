'use client'

import { Zap, Shield, Award } from 'lucide-react'

export default function ValueGrid() {
  const values = [
    {
      icon: Zap,
      title: '9H Hardness Ceramic Coating',
      description: 'Diamond-level protection with extreme durability. Resists scratches, UV rays, and environmental contaminants for years of brilliant shine.',
    },
    {
      icon: Shield,
      title: 'Flawless Scratch Correction',
      description: 'Professional paint correction eliminates swirl marks and minor scratches. Restores your vehicle&apos;s original luster and depth.',
    },
    {
      icon: Award,
      title: 'Warranty Guarantees',
      description: 'Full coverage warranty on all services. We stand behind our work with comprehensive protection and peace of mind.',
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Why Choose CarbonShine?
          </h2>
          <p className="text-xl text-gray-400 text-pretty max-w-2xl mx-auto">
            Premium services designed to protect and perfect your vehicle
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="bg-card border border-primary/30 rounded-lg p-8 hover:border-primary/60 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-primary/20 rounded-lg mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
