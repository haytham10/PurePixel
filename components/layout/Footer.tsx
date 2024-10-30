"use client";

import { Camera } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
	<footer className="border-t bg-background">
	<div className="container grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
	  <div>
		<Link href="/" className="flex items-center space-x-2">
		  <Camera className="h-6 w-6 text-primary" />
		  <span className="text-xl font-bold">PurePixel</span>
		</Link>
		<p className="mt-4 text-sm text-muted-foreground">
		  High-end web development for design-driven companies where attention to detail and passionate dedication
		  matters.
		</p>
	  </div>
	  <div>
		<h3 className="mb-4 text-sm font-semibold">QUICK LINKS</h3>
		<ul className="space-y-2 text-sm">
		  <li>
			<Link href="#" className="text-muted-foreground hover:text-primary">
			  Services
			</Link>
		  </li>
		  <li>
			<Link href="#" className="text-muted-foreground hover:text-primary">
			  Portfolio
			</Link>
		  </li>
		  <li>
			<Link href="#" className="text-muted-foreground hover:text-primary">
			  About
			</Link>
		  </li>
		  <li>
			<Link href="#" className="text-muted-foreground hover:text-primary">
			  Contact
			</Link>
		  </li>
		</ul>
	  </div>
	  <div>
		<h3 className="mb-4 text-sm font-semibold">OUR POLICY</h3>
		<ul className="space-y-2 text-sm">
		  <li>
			<Link href="#" className="text-muted-foreground hover:text-primary">
			  Privacy Policy
			</Link>
		  </li>
		  <li>
			<Link href="#" className="text-muted-foreground hover:text-primary">
			  Terms of Service
			</Link>
		  </li>
		  <li>
			<Link href="#" className="text-muted-foreground hover:text-primary">
			  Refund Policy
			</Link>
		  </li>
		</ul>
	  </div>
	  <div>
		<h3 className="mb-4 text-sm font-semibold">CONTACT</h3>
		<ul className="space-y-2 text-sm">
		  <li className="text-muted-foreground">contact@purepixel.com</li>
		  <li className="text-muted-foreground">+1 (555) 123-4567</li>
		</ul>
	  </div>
	</div>
	<div className="border-t py-6 text-center text-sm text-muted-foreground">
	  © 2024 PurePixel. All rights reserved.
	</div>
  </footer>
  )
}

export default Footer