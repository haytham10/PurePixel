"use client";

import React from 'react'
import { motion } from "framer-motion"
import { fadeIn, stagger } from '@/lib/animations';
import Image from 'next/image';

const features = [
  {
    title: "Custom Web Development",
    description: "We build scalable and robust web applications tailored to your business needs, leveraging the latest technologies.",
    gradient: "from-indigo-100 to-blue-50",
    image: "/stock/web-development.jpg",
  },
  {
    title: "Brand Identity & Strategy",
    description: "Create a compelling brand identity that resonates with your audience and sets you apart from the competition.",
    gradient: "from-green-100 to-teal-50",
    image: "/stock/brand-identity.jpg",
  },
  {
    title: "Digital Marketing Solutions",
    description: "Boost your online presence with our data-driven SEO and marketing strategies that deliver measurable results.",
    gradient: "from-yellow-100 to-orange-50",
    image: "/stock/digital-marketing.jpg",
  },
]

const Features = () => {
  return (
    <motion.section
      className="container py-24"
      variants={stagger}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.div 
        className="text-center mb-12"
        variants={fadeIn}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Unleash Your Digital <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Potential</span>
        </h2>
        <p className="text-muted-foreground text-lg">Transforming ideas into digital excellence</p>
      </motion.div>

      <motion.div variants={fadeIn} className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className={`rounded-xl bg-gradient-to-br ${feature.gradient} p-8 hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg`}
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { 
                opacity: 1, 
                y: 0,
                transition: { delay: index * 0.2 }
              }
            }}
          >
            <div className="relative mb-6 h-48 w-full rounded-lg overflow-hidden">
              <Image
                src={feature.image}
                alt={feature.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Features