"use client";

import React from 'react'
import { motion } from "framer-motion"
import { Camera } from 'lucide-react'
import { fadeIn, stagger } from '@/lib/animations';


const Features = () => {
  return (
	<motion.section
          className="container py-24"
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeIn} className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 p-8">
              <div className="mb-4 inline-block rounded-lg bg-purple-500 p-3 text-white">
                <Camera className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Tailored Web Design</h3>
              <p className="text-muted-foreground">
                Custom web design solutions that align with your brand identity and business goals.
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-pink-100 to-pink-50 p-8">
              <div className="mb-4 inline-block rounded-lg bg-pink-500 p-3 text-white">
                <Camera className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Personalized Branding</h3>
              <p className="text-muted-foreground">
                Strategic brand development that helps you stand out in your market.
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-purple-100 to-pink-50 p-8">
              <div className="mb-4 inline-block rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-3 text-white">
                <Camera className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold">SEO Optimized</h3>
              <p className="text-muted-foreground">
                Boost your online visibility with our expert SEO strategies.
              </p>
            </div>
          </motion.div>
    </motion.section>
  )
}

export default Features