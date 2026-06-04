'use client'

import {useState} from 'react'
import Link from 'next/link'

import {faqs} from './faqs'

export default function FAQsClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="px-6 py-16 max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-600">What we hear from our clients...</p>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index

          return (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl bg-white shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`w-full text-left p-5 flex justify-between items-center hover:bg-gray-50 transition cursor-pointer ${isOpen ? `bg-gray-50` : ''}`}
              >
                <span className="font-semibold text-gray-800">{item.q}</span>
                <span className="text-gray-400 text-xl">{isOpen ? '−' : '+'}</span>
              </button>

              {isOpen && (
                <div className="px-5 py-5 text-gray-600 leading-relaxed">
                  {item.a}
                  {item.a.includes('(617) 922 - 9752') && (
                    <div className="mt-3 space-x-2 space-y-2">
                      <Link
                        href="tel:16179229752"
                        className="inline-block font-semibold rounded-full px-4 py-2 bg-gray-100 hover:bg-gray-200 transition"
                      >
                        Call (617) 922 - 9752
                      </Link>
                      <Link
                        href="/free-quote"
                        className="inline-block font-semibold rounded-full px-4 py-2 text-white bg-brand hover:bg-black transition"
                      >
                        Get a Free Quote!
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
