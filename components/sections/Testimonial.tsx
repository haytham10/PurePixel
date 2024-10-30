"use client";

import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    content: "PurePixel transformed our digital presence completely. Their attention to detail and innovative approach helped us achieve remarkable results. The team's dedication to excellence is truly outstanding.",
    author: "Sarah Johnson",
    role: "CEO, SkyGrow Inc.",
    image: "/testimonials/1.png",
    rating: 5,
    company: {
      logo: "/companies/skygrow.png",
      metrics: {
        growth: "+127%",
        metric: "Revenue Growth"
      }
    }
  },
  {
    content: "Working with this team has been an absolute pleasure. They brought our vision to life in ways we couldn't have imagined. Their technical expertise and creative solutions exceeded our expectations.",
    author: "Michael Chen",
    role: "Founder, Sam Host",
    image: "/testimonials/2.png",
    rating: 4,
    company: {
      logo: "/companies/sam-host.jpeg",
      metrics: {
        growth: "+89%",
        metric: "User Engagement"
      }
    }
  },
  {
    content: "The level of creativity and technical expertise they bring to the table is unmatched. Our project was delivered on time and the results have been phenomenal. Highly recommended!",
    author: "Emma Williams",
    role: "Marketing Director, E-Guichet",
    image: "/testimonials/3.png",
    rating: 5,
    company: {
      logo: "/companies/e-guichet.png",
      metrics: {
        growth: "+205%",
        metric: "Conversion Rate"
      }
    }
  }
]

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-3xl group-hover:opacity-75 transition-opacity duration-500" />
      
      <div className="relative rounded-2xl bg-white/80 backdrop-blur-sm border border-purple-100 p-8 shadow-xl">
        {/* Top Section - Quote and Rating */}
        <div className="flex justify-between items-start mb-6">
          <Quote className="h-8 w-8 text-purple-500 opacity-50" />
          <div className="flex gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground italic leading-relaxed">
            "{testimonial.content}"
          </p>

          {/* Author Info and Company Metrics */}
          <div className="flex justify-between items-center gap-6 pt-6 border-t border-purple-100">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  fill
                  className="object-cover rounded-full ring-2 ring-purple-100"
                />
              </div>
              <div>
                <h4 className="font-semibold">{testimonial.author}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>

            {/* Company Logo and Metrics */}
            <div className="flex items-center gap-4">
              <div className="relative w-8 h-8">
                <Image
                  src={testimonial.company.logo}
                  alt="Company Logo"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <div className="flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 rounded-full">
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {testimonial.company.metrics.growth}
                </span>
                <span className="text-xs text-muted-foreground">
                  {testimonial.company.metrics.metric}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [direction, setDirection] = React.useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection
      if (nextIndex >= testimonials.length) nextIndex = 0
      if (nextIndex < 0) nextIndex = testimonials.length - 1
      return nextIndex
    })
  }

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50" />
      <div className="absolute inset-0 bg-grid-black/[0.02]" />
      
      {/* Animated blobs */}
      <motion.div
        className="absolute -top-24 -right-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{
          y: [-20, 20, -20],
          scale: [1, 1.1, 1],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: [-20, 20, -20],
          scale: [1.1, 1, 1.1],
          rotate: [0, -45, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container relative">
        {/* Header */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center justify-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-100 shadow-sm mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Quote className="h-4 w-4 text-purple-500" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Client Success Stories
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Industry
            <span className="block mt-1 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Leaders Worldwide
            </span>
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative h-[300px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
              className="absolute w-full"
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-8">
            <Button
              variant="ghost"
              size="icon"
              className="bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full"
              onClick={() => paginate(-1)}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            {/* Enhanced Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`relative h-3 transition-all duration-300 ${
                    currentIndex === index ? 'w-12 bg-purple-500' : 'w-3 bg-purple-200'
                  } rounded-full overflow-hidden`}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                >
                  {currentIndex === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                      layoutId="activeDot"
                    />
                  )}
                </button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full"
              onClick={() => paginate(1)}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial