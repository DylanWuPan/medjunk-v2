'use client'

import Link from 'next/link'
import {useState} from 'react'
import Image from 'next/image'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed z-50 h-25 md:h-25 inset-0 bg-brand/20 flex items-center backdrop-blur-xl">
      <div className="container py-6 px-2 sm:px-6">
        <div className="flex items-center justify-between gap-5">
          <Link className="flex items-center gap-2" href="/">
            <Image
              src="/images/icons/new-logo-white-square.jpeg"
              alt="Company Logo"
              width={1000}
              height={1000}
              className="h-14 w-14 sm:h-20 sm:w-20 object-contain backdrop-blur-lg rounded-xl transition-transform duration-300 hover:scale-105"
              priority
            />
          </Link>

          <nav>
            {/* Desktop Nav */}
            <ul
              role="list"
              className="hidden md:flex items-center gap-4 md:gap-6 leading-5 text-xs sm:text-base tracking-tight"
            >
              <li>
                <Link
                  href="/"
                  className="relative inline-block text-gray-900 transition-colors duration-200 hover:text-brand after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-brand after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="relative inline-block text-gray-900 transition-colors duration-200 hover:text-brand after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-brand after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/what-we-remove"
                  className="relative inline-block text-gray-900 transition-colors duration-200 hover:text-brand after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-brand after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  What We Remove
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="relative inline-block text-gray-900 transition-colors duration-200 hover:text-brand after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-brand after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="relative inline-block text-gray-900 transition-colors duration-200 hover:text-brand after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-brand after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="relative inline-block text-gray-900 transition-colors duration-200 hover:text-brand after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-brand after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="relative inline-block text-gray-900 transition-colors duration-200 hover:text-brand after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-brand after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  Blog
                </Link>
              </li>

              <li className="flex items-center sm:gap-4 md:gap-6">
                <div className="hidden sm:block w-px h-6 bg-gray-900" />{' '}
                <Link
                  className="rounded-full flex gap-4 items-center bg-brand hover:bg-black focus:bg-black hover:scale-[1.03] active:scale-[0.98] py-2 px-4 justify-center sm:py-3 sm:px-6 text-white transition-all duration-300"
                  href="/free-quote"
                >
                  <span className="whitespace-nowrap">Free Quote!</span>
                </Link>
              </li>
            </ul>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center gap-3">
              <Link
                className="rounded-full bg-brand text-white px-3 py-2 text-md transition-all duration-300 hover:scale-[1.05] active:scale-[0.97]"
                href="/free-quote"
              >
                Free Quote!
              </Link>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2"
                aria-label="Toggle Menu"
              >
                <div
                  className={`w-5 h-[2px] bg-black mb-1 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}
                ></div>
                <div
                  className={`w-5 h-[2px] bg-black mb-1 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
                ></div>
                <div
                  className={`w-5 h-[2px] bg-black transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}
                ></div>
              </button>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
              <div className="absolute top-25 left-0 w-full flex flex-col items-end text-right bg-gradient-to-l shadow from-white/100 to-white/40 p-4 gap-4 md:hidden z-50 animate-in slide-in-from-top duration-200 backdrop-blur-lg">
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-right relative inline-block text-gray-900 transition-colors duration-200 hover:text-brand pr-2 after:content-[''] after:absolute after:right-0 after:-bottom-1 after:h-[2px] after:bg-brand after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-right relative inline-block text-gray-900 transition-colors duration-200 hover:text-brand pr-2 after:content-[''] after:absolute after:right-0 after:-bottom-1 after:h-[2px] after:bg-brand after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  About
                </Link>
                <Link
                  href="/what-we-remove"
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-right relative inline-block text-gray-900 transition-colors duration-200 hover:text-brand pr-2 after:content-[''] after:absolute after:right-0 after:-bottom-1 after:h-[2px] after:bg-brand after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  What We Remove
                </Link>
                <Link
                  href="/pricing"
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-right relative inline-block text-gray-900 transition-colors duration-200 hover:text-brand pr-2 after:content-[''] after:absolute after:right-0 after:-bottom-1 after:h-[2px] after:bg-brand after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  Pricing
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-right relative inline-block text-gray-900 transition-colors duration-200 hover:text-brand pr-2 after:content-[''] after:absolute after:right-0 after:-bottom-1 after:h-[2px] after:bg-brand after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  Contact
                </Link>
                <Link
                  href="/faqs"
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-right relative inline-block text-gray-900 transition-colors duration-200 hover:text-brand pr-2 after:content-[''] after:absolute after:right-0 after:-bottom-1 after:h-[2px] after:bg-brand after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  FAQs
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-right relative inline-block text-gray-900 transition-colors duration-200 hover:text-brand pr-2 after:content-[''] after:absolute after:right-0 after:-bottom-1 after:h-[2px] after:bg-brand after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  Blog
                </Link>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}
