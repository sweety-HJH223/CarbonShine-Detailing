'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import ValueGrid from '@/components/value-grid'
import BeforeAfter from '@/components/before-after'
import PricingCards from '@/components/pricing-cards'
import BookingForm from '@/components/booking-form'
import Footer from '@/components/footer'
import SuccessModal from '@/components/success-modal'

export default function Home() {
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState('')

  const handleBookingSuccess = () => {
    setShowSuccessModal(true)
  }
  
  const handleCloseModal = () => {
    setShowSuccessModal(false)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ValueGrid />
      <BeforeAfter />
      <PricingCards onSelectPackage={(pkg) => {
  setSelectedPackage(pkg)
  setTimeout(() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }), 100)
}} />
<BookingForm onSuccess={handleBookingSuccess} selectedPackage={selectedPackage} />
      <Footer />
      {showSuccessModal && <SuccessModal onClose={handleCloseModal} />}
    </main>
  )
}
