'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface BookingFormProps {
  onSuccess: () => void
  selectedPackage?: string
}

export default function BookingForm({ onSuccess, selectedPackage }: BookingFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    vehicleType: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const vehicleTypes = ['Sedan', 'SUV', 'Truck', 'Sports Car', 'Luxury']

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required'
    }
    if (!formData.vehicleType) {
      newErrors.vehicleType = 'Please select a vehicle type'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    try {
      const response = await fetch('https://formspree.io/f/xrevegqy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setFormData({ fullName: '', email: '', phone: '', vehicleType: '' })
        onSuccess()
      } else {
        setErrors({ submit: 'Something went wrong. Please try again.' })
      }
    } catch {
      setErrors({ submit: 'Network error. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Get Your Free Estimate
          </h2>
          <p className="text-xl text-gray-400 text-pretty">
            Fill out the form below and our team will contact you within 24 hours
          </p>
        </div>

        <div className="bg-card border border-primary/30 rounded-lg p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-white font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full px-4 py-3 bg-background border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                  errors.fullName ? 'border-destructive' : 'border-border'
                }`}
              />
              {errors.fullName && (
                <p className="text-destructive text-sm mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={`w-full px-4 py-3 bg-background border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                  errors.email ? 'border-destructive' : 'border-border'
                }`}
              />
              {errors.email && (
                <p className="text-destructive text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-white font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
                className={`w-full px-4 py-3 bg-background border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all ${
                  errors.phone ? 'border-destructive' : 'border-border'
                }`}
              />
              {errors.phone && (
                <p className="text-destructive text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Vehicle Type */}
            <div>
              <label htmlFor="vehicleType" className="block text-white font-semibold mb-2">
                Vehicle Type
              </label>
              <select
                id="vehicleType"
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-background border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all appearance-none ${
                  errors.vehicleType ? 'border-destructive' : 'border-border'
                }`}
              >
                <option value="">Select your vehicle type</option>
                {vehicleTypes.map(type => (
                  <option key={type} value={type} className="bg-background text-white">
                    {type}
                  </option>
                ))}
              </select>
              {errors.vehicleType && (
                <p className="text-destructive text-sm mt-1">{errors.vehicleType}</p>
              )}
            </div>
{/* Selected Package */}
{selectedPackage && (
  <div className="bg-primary/10 border border-primary/30 rounded-lg px-4 py-3">
    <p className="text-primary font-semibold text-sm">Selected Package: {selectedPackage}</p>
  </div>
)}
            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 text-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Get My Free Estimate'}
            </Button>
            {errors.submit && (
  <p className="text-destructive text-sm text-center">{errors.submit}</p>
)}
          </form>
        </div>
      </div>
    </section>
  )
}
