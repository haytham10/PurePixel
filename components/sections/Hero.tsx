"use client";

import React from 'react'
import { motion } from "framer-motion"
import { Button } from '../ui/button'
import Image from "next/image"
import { ArrowRight, Sparkles, Star } from "lucide-react"

const Hero = () => {
  // Create an array of particle positions
  const particles = React.useMemo(() => 
    [...Array(20)].map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 2 + Math.random() * 4
    })), []
  )

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 pt-20 md:pt-0">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container relative px-4 md:px-6 pb-12 md:pb-24">
        <motion.div 
          className="flex justify-center mb-8 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="inline-flex items-center space-x-2 rounded-full bg-white/80 px-3 py-1.5 md:px-4 md:py-2 shadow-lg backdrop-blur-sm">
            <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-yellow-500" />
            <span className="text-xs md:text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Crafting Digital Magic
            </span>
          </div>
        </motion.div>

        <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
          <motion.div 
            className="space-y-6 md:space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              We Turn  
              <span className="block mt-1 md:mt-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Your Dreams 
              </span>
              Into Reality
            </motion.h1>

            <div className='space-y-2 text-lg md:text-xl text-muted-foreground whitespace-wrap'>
				<motion.p 
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.4 }}
				>
				Where innovation and elegance come together
				</motion.p>

				<motion.p 
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.4 }}
				>
				We craft unforgettable digital experiences
				</motion.p>
			</div>

            <motion.div 
              className="flex flex-col space-y-6 md:space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex justify-center lg:justify-start">
                <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:scale-105 transition-transform duration-300 px-6 md:px-8 w-fit text-sm md:text-base" onClick={() => window.location.href='/contact'}>
                  Start Your Journey
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </Button>
              </div>

              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <div className="flex space-x-0">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + (i * 0.1) }}
                      className="flex items-center justify-center"
                    >
                      <Star 
                        className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-yellow-400"
                        strokeWidth={1}
                      />
                    </motion.div>
                  ))}
                </div>
                <span className="text-xs md:text-sm font-medium">Trusted by 500+ clients</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="relative z-10"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image
                src="/hero.png"
                alt="Digital Dreams"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
                priority
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero