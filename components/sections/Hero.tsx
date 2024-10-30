"use client";

import React from 'react'
import { motion } from "framer-motion"
import { Button } from '../ui/button'
import Image from "next/image"


const Hero = () => {
  return (
	<section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
	<div className="container relative py-24">
	  <div className="grid gap-12 lg:grid-cols-2">
		<motion.div 
		  className="space-y-6"
		  initial={{ opacity: 0, x: -20 }}
		  animate={{ opacity: 1, x: 0 }}
		  transition={{ duration: 0.5 }}
		>
		  <div className="flex items-center space-x-3 mb-8">
			<div className="flex items-center space-x-2 rounded-full bg-black/10 px-3 py-1 backdrop-blur-sm">
			  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
			  <span className="text-sm font-medium">356 Clients</span>
			</div>
		  </div>
		  <h1 className="text-5xl font-bold tracking-tight text-purple-500">
			Transform Your Digital Presence with Pixel-Perfect Design
		  </h1>
		  <p className="text-xl text-muted-foreground">
			From concept to code, we craft stunning websites that captivate your audience and drive results. Experience design excellence that sets you apart.
		  </p>
		  <div className="space-y-8">
			<Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 px-8">
			  Get Started
			</Button>
			<div className="flex items-center space-x-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 backdrop-blur-sm">
			  <div className="flex -space-x-2">
				<Image
				  src="/placeholder.svg?height=40&width=40"
				  alt="Review Avatar"
				  width={40}
				  height={40}
				  className="rounded-full border-2 border-white"
				/>
				<Image
				  src="/placeholder.svg?height=40&width=40"
				  alt="Review Avatar"
				  width={40}
				  height={40}
				  className="rounded-full border-2 border-white"
				/>
				<Image
				  src="/placeholder.svg?height=40&width=40"
				  alt="Review Avatar"
				  width={40}
				  height={40}
				  className="rounded-full border-2 border-white"
				/>
			  </div>
			  <div>
				<div className="flex text-yellow-400">
				  <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
				  </svg>
				  <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
				  </svg>
				  <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
				  </svg>
				  <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
				  </svg>
				  <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20">
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
				  </svg>
				</div>
				<p className="text-sm font-medium">50k+ Satisfied Customers</p>
			  </div>
			</div>
		  </div>
		</motion.div>
		<motion.div
		  initial={{ opacity: 0, x: 20 }}
		  animate={{ opacity: 1, x: 0 }}
		  transition={{ duration: 0.5 }}
		>
		  <Image
			src="/placeholder.svg?height=600&width=800"
			alt="Dashboard Preview"
			width={800}
			height={600}
			className="rounded-lg shadow-2xl"
		  />
		</motion.div>
	  </div>
	</div>
  </section>
  )
}

export default Hero