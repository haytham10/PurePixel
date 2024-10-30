"use client";

import React from 'react'
import { motion } from "framer-motion"
import { fadeIn, stagger } from '@/lib/animations';
import Image from "next/image"


const Services = () => {
  return (
	<section className="container py-24">
	<div className="text-center">
	  <h2 className="text-3xl font-bold">Our Services</h2>
	  <p className="mt-2 text-xl">
		Explore our core <span className="text-purple-500">Expertise</span>
	  </p>
	</div>
	<motion.div
	  className="mt-12 grid gap-8 md:grid-cols-3"
	  variants={stagger}
	  initial="initial"
	  whileInView="animate"
	  viewport={{ once: true }}
	>
	  <motion.div variants={fadeIn} className="group rounded-lg border p-8 transition-colors hover:border-primary">
		<Image
		  src="/placeholder.svg?height=300&width=400"
		  alt="UI/UX Design"
		  width={400}
		  height={300}
		  className="mb-6 rounded-lg"
		/>
		<h3 className="text-xl font-bold">UI/UX Design</h3>
		<p className="mt-2 text-muted-foreground">
		  Creating visually stunning UI/UX designs that engage users and drive conversions.
		</p>
	  </motion.div>
	  <motion.div variants={fadeIn} className="group rounded-lg border p-8 transition-colors hover:border-primary">
		<Image
		  src="/placeholder.svg?height=300&width=400"
		  alt="Web Development"
		  width={400}
		  height={300}
		  className="mb-6 rounded-lg"
		/>
		<h3 className="text-xl font-bold">Web Design & Development</h3>
		<p className="mt-2 text-muted-foreground">
		  Building responsive and performant websites that deliver results.
		</p>
	  </motion.div>
	  <motion.div variants={fadeIn} className="group rounded-lg border p-8 transition-colors hover:border-primary">
		<Image
		  src="/placeholder.svg?height=300&width=400"
		  alt="SEO"
		  width={400}
		  height={300}
		  className="mb-6 rounded-lg"
		/>
		<h3 className="text-xl  font-bold">SEO</h3>
		<p className="mt-2 text-muted-foreground">
		  Optimizing your website for search engines to increase visibility.
		</p>
	  </motion.div>
	</motion.div>
  </section>
  )
}

export default Services