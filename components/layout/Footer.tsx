"use client";

import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center space-x-2">
			<Image
				src="/purepixel.png"
				alt="Logo"
				width={100}
				height={60}
				/>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            High-end web development for design-driven companies where attention to detail and passionate dedication matters.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm">
            {["Services", "Portfolio", "About", "Contact"].map((link) => (
              <li key={link}>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold">OUR POLICY</h3>
          <ul className="space-y-2 text-sm">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((policy) => (
              <li key={policy}>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  {policy}
                </Link>
              </li>
            ))}
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
      <motion.div
        className="border-t py-6 text-center text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        © 2024 PurePixel. All rights reserved.
      </motion.div>
    </footer>
  );
}

export default Footer;