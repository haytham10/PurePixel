"use client";

import React from 'react'
import { motion } from "framer-motion"
import { fadeIn, stagger } from '@/lib/animations';
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"

const services = [
  {
    title: "UI/UX Design",
    description: "Creating intuitive, engaging interfaces that delight users and drive conversions through research-backed design.",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Interactive Design",
      "Usability Testing"
    ],
    image: "/services/1.png",
    gradient: "from-violet-500/20 to-purple-500/20",
    buttonColor: "bg-violet-500 hover:bg-violet-600",
    delay: 0.2
  },
  {
    title: "Web Development",
    description: "Building fast, responsive, and scalable websites using cutting-edge technologies and best practices.",
    features: [
      "Full-Stack Development",
      "Responsive Design",
      "Performance Optimization",
      "API Integration"
    ],
    image: "/services/2.png",
    gradient: "from-blue-500/20 to-violet-500/20",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
    delay: 0.4
  },
  {
    title: "SEO Optimization",
    description: "Boosting your visibility with data-driven strategies that help you rank higher and reach more customers.",
    features: [
      "Keyword Research",
      "Technical SEO",
      "Content Strategy",
      "Performance Tracking"
    ],
    image: "/services/3.png",
    gradient: "from-purple-500/20 to-pink-500/20",
    buttonColor: "bg-purple-500 hover:bg-purple-600",
    delay: 0.6
  }
]

const Services = () => {
  return (
    <section className="container py-24" id="services">
      <motion.div 
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          Our <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Services</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Expert solutions to elevate your digital presence and drive real business growth
        </p>
      </motion.div>

      <motion.div
        className="mt-16 grid gap-8 md:grid-cols-3"
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={fadeIn}
            transition={{ delay: service.delay }}
            className="group relative rounded-2xl border bg-background p-2 hover:shadow-lg transition-all duration-300"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
            
            <div className="relative z-10 p-6">
              <div className="overflow-hidden rounded-xl bg-white/50 backdrop-blur-sm">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={1200}
                  height={900}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" // Ensure consistent height
                />
              </div>
              
              <div className="mt-6 space-y-4">
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <motion.li 
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <ArrowRight className="mr-2 h-4 w-4 text-purple-500" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${service.buttonColor} text-white transition-all duration-300 group-hover:scale-105`}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Services