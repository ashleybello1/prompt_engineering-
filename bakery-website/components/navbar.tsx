"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-2xl md:text-3xl text-cherry-mist font-script">
            Elfie's Bakery
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-gray-700 hover:text-cherry-mist transition-colors">
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-700 hover:text-cherry-mist hover:bg-ivory">
            Sign In
          </Button>
          <Link href="/signup">
            <Button className="!bg-white !text-cherry-mist !border-cherry-mist border-2 hover:!bg-ivory font-medium">
              <span className="text-cherry-mist font-medium">Sign Up</span>
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="mb-8 mt-4">
              <Link href="/" className="text-3xl text-cherry-mist font-script">
                Elfie's Bakery
              </Link>
            </div>
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-gray-700 hover:text-cherry-mist transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
                <Button variant="ghost" className="justify-start text-gray-700 hover:text-cherry-mist hover:bg-ivory">
                  Sign In
                </Button>
                <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full !bg-white !text-cherry-mist !border-cherry-mist border-2 hover:!bg-ivory font-medium">
                    <span className="text-cherry-mist font-medium">Sign Up</span>
                  </Button>
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
