'use client'

import { Button } from "@/components/ui/button"
import { Camera } from "lucide-react"
import Link from "next/link"

const Header = () => {
  return (
    <header className="container flex h-20 items-center">
      <Link href="/" className="flex items-center space-x-2">
        <Camera className="h-6 w-6 text-primary" />
        <span className="text-xl font-bold">PurePixel</span>
      </Link>
      <nav className="mx-auto flex space-x-8">
        <Link className="text-sm font-medium hover:text-primary" href="#">Services</Link>
        <Link className="text-sm font-medium hover:text-primary" href="#">Portfolio</Link>
        <Link className="text-sm font-medium hover:text-primary" href="#">Pricing</Link>
        <Link className="text-sm font-medium hover:text-primary" href="#">About</Link>
      </nav>
      <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90">
        Contact Us
      </Button>
    </header>
  )
}

export default Header;