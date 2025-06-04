import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#FDF6F0] border-t border-[#E8B4B8]/20">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl md:text-3xl text-[#E8B4B8] font-script">
              Elfie's Bakery
            </Link>
            <p className="mt-2 text-gray-600 text-sm">Handcrafted pastries and cakes made with love since 2010</p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-gray-600 hover:text-[#E8B4B8]">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#E8B4B8]">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-[#E8B4B8]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3 font-script">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-gray-600 hover:text-[#E8B4B8] text-sm">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#E8B4B8] text-sm">
                  Cakes
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#E8B4B8] text-sm">
                  Cupcakes
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#E8B4B8] text-sm">
                  Pastries
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#E8B4B8] text-sm">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#E8B4B8] text-sm">
                  Gift Boxes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3 font-script">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#E8B4B8] text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-600 hover:text-[#E8B4B8] text-sm">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#E8B4B8] text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#E8B4B8] text-sm">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#E8B4B8] text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3 font-script">Contact</h3>
            <address className="not-italic text-sm text-gray-600 space-y-2">
              <p>123 Bakery Street</p>
              <p>New York, NY 10001</p>
              <p>Phone: (123) 456-7890</p>
              <p>
                <Link href="mailto:info@elfiesbakery.com" className="hover:text-[#E8B4B8]">
                  info@elfiesbakery.com
                </Link>
              </p>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#E8B4B8] text-sm">
                  Contact
                </Link>
              </li>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Elfie's Bakery. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-gray-600 hover:text-[#E8B4B8]">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-[#E8B4B8]">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:text-[#E8B4B8]">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
