'use client'

import Header from "@/components/layout/Header"
import About from "@/components/sections/About"
import FAQ from "@/components/sections/FAQ"
import Features from "@/components/sections/Features"
import Hero from "@/components/sections/Hero"
import Pricing from "@/components/sections/Pricing"
import Services from "@/components/sections/Services"
import Testimonial from "@/components/sections/Testimonial"
import Footer from "@/components/layout/Footer"

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col pt-20">
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Pricing />
        <About />
        <Testimonial />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}