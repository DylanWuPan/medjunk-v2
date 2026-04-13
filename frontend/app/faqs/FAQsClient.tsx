'use client'

import {useState} from 'react'
import Link from 'next/link'

export default function FAQsClient() {
  const faqs = [
    {
      q: 'How much does junk removal cost in Massachusetts?',
      a: 'Every job is different, which is why we provide free quotes with no obligation. We price each item individually based on size, weight, and disposal requirements. There are no hidden fees — what we quote is what you pay.',
    },
    {
      q: 'How do you price junk removal jobs?',
      a: 'We price per item, not by volume. For larger jobs, we walk through each room with you, break it into sections — furniture, appliances, boxes, miscellaneous — and calculate a clear total before any work begins. No surprises, no pressure.',
    },
    {
      q: 'How do I schedule a junk removal appointment?',
      a: "The easiest way is to call us at (617) 922 - 9752 or fill out our online quote form. We'll get back to you within 2 hours with a quote and can lock in a time that works for you. We offer flexible scheduling including weekends.",
    },
    {
      q: 'What items do you remove?',
      a: "We remove just about everything: furniture, mattresses, appliances, electronics, yard waste, construction debris, exercise equipment, hot tubs, and more. If you're not sure whether we take something, just call us.",
    },
    {
      q: 'Do you offer same-day or next-day junk removal?',
      a: 'We do our best to accommodate quick turnarounds. Availability varies by season, but we typically offer same-week scheduling across Eastern Massachusetts.',
    },
    {
      q: 'What happens to my junk after you pick it up?',
      a: 'We sort everything after pickup. Usable items are donated, recyclables are processed properly, and the rest is disposed of responsibly. We prioritize keeping items out of landfills.',
    },
    {
      q: 'Do I need to be home for the junk removal appointment?',
      a: "You don't have to be home as long as we can access the items and have clear instructions beforehand. We can handle everything without you on-site.",
    },
    {
      q: 'Are you insured?',
      a: 'Yes. We are fully insured, so you can feel confident having us in your home or on your property.',
    },
    {
      q: 'What areas do you serve?',
      a: "We're based in Medfield and serve communities across Eastern Massachusetts including Westwood, Norwood, Dover, Sherborn, Needham, Dedham, Millis, Franklin, Wrentham, Wayland, Waltham, Watertown, Newton, Wellesley, Natick, Framingham, and more.",
    },
    {
      q: 'How do I prepare for a junk removal appointment?',
      a: "Not much is needed on your end. If possible, identify items ahead of time for an accurate quote. You don't need to move anything — we handle all lifting, loading, and cleanup.",
    },
  ]

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
