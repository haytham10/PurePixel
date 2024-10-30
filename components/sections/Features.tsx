"use client";

import React from 'react'
import { motion } from "framer-motion"
import { fadeIn, stagger } from '@/lib/animations';
import Image from 'next/image';

const features = [
	{
	  title: "Magic in Every Pixel",
	  description: "We craft pixel-perfect designs that captivate and convert. Your vision, our expertise.",
	  gradient: "from-violet-100 to-purple-50",
	},
	{
	  title: "Brand Brilliance",
	  description: "Transform your identity into a visual masterpiece that speaks volumes.",
	  gradient: "from-pink-100 to-rose-50",
	},
	{
	  title: "Growth Catalyst",
	  description: "Skyrocket your online presence with our data-driven SEO strategies.",
	  gradient: "from-purple-100 to-pink-50",
	}
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
            className={`rounded-xl bg-gradient-to-br ${feature.gradient} p-8 hover:scale-105 transition-transform duration-300 overflow-hidden`}
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { 
                opacity: 1, 
                y: 0,
                transition: { delay: index * 0.2 }
              }
            }}
          >
            <div className="relative mb-6 aspect-video rounded-lg overflow-hidden">
              <Image
                src={`/features/${index + 1}.png`} // You'll need to generate and save the images
                alt={feature.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {feature.title}
            </h3>
            <p className="text-muted-foreground">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Features