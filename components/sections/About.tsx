"use client";

import React from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, CheckCircle2, Star, Sparkles } from "lucide-react"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"

const achievements = [
  { 
    number: "5+", 
    label: "Years Experience",
    gradient: "from-blue-600 to-cyan-600"
  },
  { 
    number: "500+", 
    label: "Projects Completed",
    gradient: "from-purple-600 to-pink-600"
  },
  { 
    number: "98%", 
    label: "Client Satisfaction",
    gradient: "from-amber-600 to-orange-600"
  },
  { 
    number: "24/7", 
    label: "Customer Support",
    gradient: "from-green-600 to-emerald-600"
  },
]

const values = [
  {
    title: "Innovation-driven development",
    description: "Pushing boundaries with cutting-edge solutions",
    icon: Sparkles,
    gradient: "from-purple-600 to-pink-600"
  },
  {
    title: "Client-centric approach",
    description: "Your success is our priority",
    icon: Star,
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    title: "Quality craftsmanship",
    description: "Attention to every detail",
    icon: CheckCircle2,
    gradient: "from-amber-600 to-orange-600"
  },
]

const About = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 -z-10" />
      <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
      
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
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
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
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
          className="text-center max-w-2xl mx-auto mb-20"
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
            <Sparkles className="h-4 w-4 text-purple-500" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Our Journey
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Crafting Digital Excellence with 
            <span className="block mt-1 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Passion & Precision
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            At PurePixel, we blend creativity with technical expertise to deliver 
            exceptional digital experiences that transform businesses.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative pt-8 pb-24"
          >
            {/* Image container with fixed height */}
            <div className="relative">
              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-[500px]">
                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative h-full"
                >
                  <Image
                    src="/about.png"
                    alt="Our Creative Workspace"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </div>

              {/* Achievement stats */}
              <motion.div 
                className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-purple-100 z-20 p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.label}
                      className="text-center group relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + (index * 0.1) }}
                    >
                      {/* Gradient background on hover */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl -z-10"
                        style={{
                          backgroundImage: `linear-gradient(to right, ${achievement.gradient})`
                        }}
                      />

                      {/* Number with counter animation */}
                      <motion.div 
                        className={cn(
                          "text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent relative",
                          achievement.gradient
                        )}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 10,
                          delay: 0.8 + (index * 0.1)
                        }}
                      >
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 1 + (index * 0.1) }}
                        >
                          {achievement.number}
                        </motion.span>
                        
                        {/* Floating particles effect */}
                        <motion.div
                          className="absolute -inset-2 pointer-events-none"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className={cn(
                                "absolute w-1 h-1 rounded-full",
                                achievement.gradient.split(' ')[1]
                              )}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{
                                opacity: [0, 1, 0],
                                scale: [0, 1.5, 0],
                                x: [0, (i - 1) * 20, 0],
                                y: [0, -20, 0],
                              }}
                              transition={{
                                duration: 2,
                                delay: 1.2 + (index * 0.1) + (i * 0.2),
                                repeat: Infinity,
                                repeatDelay: 3
                              }}
                            />
                          ))}
                        </motion.div>
                      </motion.div>

                      {/* Label with fade up animation */}
                      <motion.div
                        className="text-sm font-medium text-muted-foreground mt-2 group-hover:text-foreground transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 + (index * 0.1) }}
                      >
                        {achievement.label}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12 lg:pl-16 my-28 lg:mt-0"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Our Core Values</h3>
              <div className="grid gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="group relative overflow-hidden"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                      style={{
                        backgroundImage: `linear-gradient(to right, ${value.gradient})`
                      }}
                    />
                    <div className="relative flex gap-4 p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-purple-100/20 group-hover:border-purple-200 transition-colors">
                      <motion.div 
                        className={cn(
                          "p-3 rounded-xl bg-gradient-to-r",
                          value.gradient
                        )}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <value.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-lg">{value.title}</h4>
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About