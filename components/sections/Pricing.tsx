"use client";

import React from 'react'
import { motion } from "framer-motion"
import { fadeIn, stagger } from '@/lib/animations';
import { Button } from '../ui/button';
import { Camera } from 'lucide-react';


const Pricing = () => {
  return (
	<section className="container py-24">
	<h2 className="mb-12 text-center text-3xl font-bold">Our Pricing Plan</h2>
	<motion.div
	  className="grid gap-8 md:grid-cols-3"
	  variants={stagger}
	  initial="initial"
	  whileInView="animate"
	  viewport={{ once: true }}
	>
	  <motion.div variants={fadeIn} className="rounded-lg border p-8">
		<h3 className="text-xl font-bold">Startup Package</h3>
		<p className="mt-2 text-sm text-muted-foreground">Perfect for small businesses</p>
		<p className="mt-4">
		  From <span className="text-2xl font-bold">€749</span>
		</p>
		<Button className="mt-6 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90">
		  Get Started
		</Button>
		<ul className="mt-6 space-y-2 text-sm">
		  <li className="flex items-center">
			<Camera className="mr-2 h-4 w-4 text-primary" />
			24/7 Support
		  </li>
		  <li className="flex items-center">
			<Camera className="mr-2 h-4 w-4 text-primary" />
			3-5 pages
		  </li>
		  <li className="flex items-center">
			<Camera className="mr-2 h-4 w-4 text-primary" />
			Social Media Integration
		  </li>
		</ul>
	  </motion.div>
	  <motion.div variants={fadeIn} className="rounded-lg border p-8">
		<h3 className="text-xl font-bold">Professional Package</h3>
		<p className="mt-2 text-sm text-muted-foreground">Perfect for growing businesses</p>
		<p className="mt-4">
		  From <span className="text-2xl font-bold">€1499</span>
		</p>
		<Button className="mt-6 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90">
		  Get Started
		</Button>
		<ul className="mt-6 space-y-2 text-sm">
		  <li className="flex items-center">
			<Camera className="mr-2 h-4 w-4 text-primary" />
			24/7 Support
		  </li>
		  <li className="flex items-center">
			<Camera className="mr-2 h-4 w-4 text-primary" />
			5-8 pages
		  </li>
		  <li className="flex items-center">
			<Camera className="mr-2 h-4 w-4 text-primary" />
			Advanced SEO
		  </li>
		</ul>
	  </motion.div>
	  <motion.div variants={fadeIn} className="rounded-lg border p-8">
		<h3 className="text-xl font-bold">Elite Package</h3>
		<p className="mt-2 text-sm text-muted-foreground">Perfect for large enterprises</p>
		<p className="mt-4">
		  From <span className="text-2xl font-bold">€2999</span>
		</p>
		<Button className="mt-6 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90">
		  Get Started
		</Button>
		<ul className="mt-6 space-y-2 text-sm">
		  <li className="flex items-center">
			<Camera className="mr-2 h-4 w-4 text-primary" />
			24/7 Priority Support
		  </li>
		  <li className="flex items-center">
			<Camera className="mr-2 h-4 w-4 text-primary" />
			10+ pages
		  </li>
		  <li className="flex items-center">
			<Camera className="mr-2 h-4 w-4 text-primary" />
			Custom Features
		  </li>
		</ul>
	  </motion.div>
	</motion.div>
  </section>
  )
}

export default Pricing