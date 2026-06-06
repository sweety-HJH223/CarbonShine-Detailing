'use client'

export default function BeforeAfter() {
  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            See The Transformation
          </h2>
          <p className="text-xl text-gray-400 text-pretty max-w-2xl mx-auto">
            Professional detailing results that speak for themselves
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before Image */}
          <div className="relative overflow-hidden rounded-lg">
            <div className="aspect-square relative overflow-hidden border border-border rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1508974239320-0a029497e820?w=800&auto=format&fit=crop"
                alt="Car before detailing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
<div className="absolute bottom-4 left-0 right-0 text-center">
  <p className="text-white font-bold text-xl drop-shadow-lg">Before</p>
  <p className="text-gray-200 text-sm drop-shadow-lg">Dull, oxidized finish</p>
</div>
            </div>
          </div>

          {/* After Image */}
          <div className="relative overflow-hidden rounded-lg">
            <div className="aspect-square relative overflow-hidden border border-primary/50 rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop"
                alt="Car after ceramic coating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
<div className="absolute bottom-4 left-0 right-0 text-center">
  <p className="text-white font-bold text-xl drop-shadow-lg">After</p>
  <p className="text-blue-300 text-sm drop-shadow-lg">Mirror-like ceramic coating</p>
</div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-card border border-primary/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-4">What We Did:</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Paint correction and swirl mark removal
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Professional deep cleaning and decontamination
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              9H hardness ceramic coating application
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Protective film on high-impact areas
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}