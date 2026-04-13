'use client'

import Link from 'next/link'
import Image from 'next/image'
import {useState} from 'react'

export default function PricingPage() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('medfieldjunk@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="px-6 py-16 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Pricing</h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed sm:leading-loose">
          We keep it simple. We look at what you need gone, price each item individually, and give
          you a quote before any work begins. No surprises on the bill. No vague truck-load
          estimates. Just a clear number you agree to upfront.
        </p>
      </div>

      {/* Image placeholder */}
      <div className="w-full h-80 bg-gray-200 rounded-2xl mb-16 flex items-center justify-center">
        <Image
          src="/images/pricing.jpg"
          alt="Pricing Image"
          width={2000}
          height={2000}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Get a Quote Section */}
      <div className="space-y-10">
        <h2 className="text-4xl font-semibold text-center">Get a Quote</h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {/* Call/Text */}
          <div className="p-6 rounded-2xl border border-gray-200 text-center bg-gradient-to-b from-white to-gray-50 hover:shadow-md hover:-translate-y-0.5 transition">
            <h3 className="font-semibold mb-2 text-lg">Call or Text</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Tell us what you’ve got and we’ll get back to you fast.
            </p>
            <a
              href="tel:16179229752"
              className="inline-block font-semibold rounded-full px-5 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition bg-white border border-gray-200"
            >
              (617) 922 - 9752
            </a>
          </div>

          {/* Free Quote */}
          <div className="p-6 rounded-2xl border border-gray-200 text-center bg-gradient-to-b from-white to-gray-50 hover:shadow-md hover:-translate-y-0.5 transition">
            <h3 className="font-semibold mb-2 text-lg">Free Quote Online</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Fill out the form and we’ll reach out ASAP.
            </p>
            <Link
              href="/free-quote"
              className="inline-block font-semibold rounded-full px-5 py-3 bg-brand text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-black transition"
            >
              Get Free Quote
            </Link>
          </div>

          {/* In-person */}
          <div className="p-6 rounded-2xl border border-gray-200 text-center bg-gradient-to-b from-white to-gray-50 hover:shadow-md hover:-translate-y-0.5 transition">
            <h3 className="font-semibold mb-2 text-lg">In-Person Estimate</h3>

            <p className="text-gray-600 mb-4 leading-relaxed">
              For larger jobs, we’ll come take a look in person and give you an accurate quote on
              the spot.
            </p>

            <div className="flex flex-col items-center gap-3">
              <button
                onClick={copyEmail}
                className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition text-sm font-medium text-gray-800 w-full justify-center cursor-pointer"
              >
                <Image src="/images/icons/email-icon.png" width={18} height={18} alt="Email" />
                {copied ? '✓ Copied!' : 'medfieldjunk@gmail.com'}
              </button>

              {/* <span className="text-xs text-gray-500">Tap to copy email</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
