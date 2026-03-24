'use client'

import {useState} from 'react'
import Link from 'next/link'

export default function FreeQuotePage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    zip: '',
    details: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error('Failed')

      alert('Request submitted! We will contact you shortly.')
      setForm({name: '', phone: '', email: '', zip: '', details: ''})
    } catch (err) {
      alert('Something went wrong. Please try again.')
      console.error(err)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center">Free Quote</h1>
        <p className="text-center text-gray-600">
          Tell us what you need removed and we’ll get you a fast estimate.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand"
          />

          <input
            type="text"
            name="zip"
            placeholder="Zip Code"
            value={form.zip}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand"
          />

          <textarea
            name="details"
            placeholder="What do you need removed?"
            value={form.details}
            onChange={handleChange}
            required
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand"
          />

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-brand transition cursor-pointer"
          >
            Get My Free Quote
          </button>
        </form>

        <div className="text-center text-sm text-gray-600 pt-4 border-t flex flex-col items-center gap-2">
          <p>⚡ Quotes within 2 hours | 📍 Serving Medfield & surrounding towns</p>
          <Link href="/pricing" className="text-brand font-medium hover:opacity-60 transition">
            See pricing page
          </Link>
        </div>
      </div>
    </div>
  )
}
