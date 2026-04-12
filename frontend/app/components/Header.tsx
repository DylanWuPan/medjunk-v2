'use client'

import Link from 'next/link'
import {useState} from 'react'
import Image from 'next/image'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed z-50 h-25 md:h-25 inset-0 bg-brand/5 flex items-center backdrop-blur-lg">
      <div className="container py-6 px-2 sm:px-6">
        <div className="flex items-center justify-between gap-5">
          <Link className="flex items-center gap-2" href="/">
            <Image
              src="/images/icons/new-logo-white-square.jpeg"
              alt="Company Logo"
              width={72}
              height={72}
              className="h-14 w-14 sm:h-20 sm:w-20 object-contain backdrop-blur-lg rounded-xl"
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
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/what-we-remove" className="hover:underline">
                  What We Remove
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:underline">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:underline">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>

              <li className="sm:before:w-[1px] sm:before:bg-gray-200 before:block flex sm:gap-4 md:gap-6">
                <Link
                  className="rounded-full flex gap-4 items-center bg-brand hover:bg-black focus:bg-black py-2 px-4 justify-center sm:py-3 sm:px-6 text-white transition-colors duration-200"
                  href="/free-quote"
                >
                  <span className="whitespace-nowrap">Free Quote!</span>
                </Link>
              </li>
            </ul>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center gap-3">
              <Link
                className="rounded-full bg-black text-white px-3 py-2 text-xs"
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
                {' '}
                <Link href="/about" className="w-full text-right">
                  About
                </Link>
                <Link href="/what-we-remove" className="w-full text-right">
                  What We Remove
                </Link>
                <Link href="/pricing" className="w-full text-right">
                  Pricing
                </Link>
                <Link href="/contact" className="w-full text-right">
                  Contact
                </Link>
                <Link href="/faqs" className="w-full text-right">
                  FAQs
                </Link>
                <Link href="/blog" className="w-full text-right">
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
