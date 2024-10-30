"use client";

import React from 'react'
import { motion } from "framer-motion"
import Image from "next/image"

const About = () => {
  return (
	<section className="bg-gradient-to-br from-purple-50 to-pink-50 py-24">
          <div className="container">
            <div className="grid gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="About Us"
                  width={400}
                  height={400}
                  className="rounded-full"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-bold">About Us</h2>
                <h3 className="text-2xl font-bold text-purple-500">The PurePixel vision.</h3>
                <p className="text-muted-foreground">
                  We are passionate about delivering exceptional digital experiences. Our team combines creativity with
                  technical expertise to bring your vision to life. Whether you need a stunning website, powerful branding,
                  or effective digital marketing, we're here to help you succeed in the digital landscape.
                </p>
              </motion.div>
            </div>
          </div>
    </section>
  )
}

export default About