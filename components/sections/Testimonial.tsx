"use client";

import React from 'react'
import { motion } from "framer-motion"
import Image from "next/image"

const Testimonial = () => {
  return (
<section className="container py-24">
          <motion.div
            className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
              <div>
                <h3 className="text-xl font-semibold">Testimonial</h3>
                <p className="mt-4 text-lg">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat."
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Avatar"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">John Smith</p>
                  <p className="text-sm opacity-80">CEO, Company Inc.</p>
                </div>
              </div>
            </div>
          </motion.div>
    </section>
  )
}

export default Testimonial