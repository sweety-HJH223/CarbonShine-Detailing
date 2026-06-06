'use client'

import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

interface PricingCardsProps {
  onSelectPackage: (pkg: string) => void
}

export default function PricingCards({ onSelectPackage }: PricingCardsProps) {
  const packages = [
    {
      name: 'Express Detail',
      price: 149,
      popular: false,
      features: [
        'Exterior wash & dry',
        'Tire cleaning',
        'Basic interior vacuum',
        '2-year water spot protection',
      ],
    },
    {
      name: 'Paint Correction',
      price: 399,
      popular: true,
      features: [
        'Express Detail included',
        'Paint correction & polishing',
        'Swirl mark removal',
        'UV protective sealant',
        '5-year warranty',
      ],
    },
    {
      name: 'Ultimate Ceramic',
      price: 899,
      popular: false,
      features: [
        'Paint Correction included',
        '9H ceramic coating',
        'Interior protection',
        'Glass coating',
        'Lifetime warranty',
        'Annual maintenance',
      ],
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Premium Pricing Plans
          </h2>
          <p className="text-xl text-gray-400 text-pretty max-w-2xl mx-auto">
            Choose the perfect package for your vehicle
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden transition-all duration-300 cursor-pointer ${
                pkg.popular
                  ? 'md:scale-105 border-2 border-primary shadow-2xl shadow-primary/50 hover:shadow-primary/70 hover:scale-110'
                  : 'border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-2 font-bold text-sm">
                  MOST POPULAR
                </div>
              )}

              <div className={`p-8 ${pkg.popular ? 'bg-card pt-16' : 'bg-card'}`}>
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>

                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">${pkg.price}</span>
                  <span className="text-gray-400 ml-2">one-time</span>
                </div>

                <Button
                  onClick={() => onSelectPackage(`${pkg.name} — $${pkg.price}`)}
                  className={`w-full font-bold py-2 mb-8 transition-all ${
                    pkg.popular
                      ? 'bg-primary hover:bg-primary/90 text-white'
                      : 'bg-transparent hover:bg-primary/10 text-white border border-primary/50 hover:border-primary'
                  }`}
                >
                  Select Package
                </Button>

                <div className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}