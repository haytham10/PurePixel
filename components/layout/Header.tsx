'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg transition-all duration-300 ${
        scrolled ? 'bg-white/80 shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex h-20 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/purepixel.png"
              alt="Logo"
              width={120}
              height={90}
            />

          </Link>
        </motion.div>

        <nav className="hidden md:block">
          <motion.ul 
            className="flex space-x-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all group-hover:w-full" />
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 transition-transform duration-300"
          >
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Header