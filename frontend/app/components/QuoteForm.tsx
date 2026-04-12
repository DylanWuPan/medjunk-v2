'use client'

import Link from 'next/link'
import {useState} from 'react'

type ToastType = 'success' | 'error'

function Toast({type, onClose}: {type: ToastType; onClose: () => void}) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center pb-8 px-4 pointer-events-none">
      <div
        className={`pointer-events-auto flex items-start gap-4 w-full max-w-sm
          bg-white rounded-2xl shadow-2xl p-5 border animate-slide-up
          ${type === 'success' ? 'border-green-100' : 'border-red-100'}`}
      >
        <div
          className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
          style={
            type === 'success'
              ? {background: '#f0fdf8', color: '#20a86c'}
              : {background: '#fef2f2', color: '#ef4444'}
          }
        >
          {type === 'success' ? '✓' : '✕'}
        </div>

        <div className="flex-1 pt-0.5">
          <p className="font-semibold text-sm text-gray-900">
            {type === 'success' ? 'Quote request submitted!' : 'Something went wrong.'}
          </p>
          <p className="text-sm text-gray-500 mt-0.5">
            {type === 'success'
              ? "We'll reach out within 2 hours with your quote."
              : 'Please try again or call us directly.'}
          </p>
        </div>

        <button
          onClick={onClose}
          className="shrink-0 text-gray-300 hover:text-gray-500 transition text-lg leading-none cursor-pointer"
        >
          ×
        </button>
      </div>
    </div>
  )
}

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    zip: '',
    details: '',
  })
  const [toast, setToast] = useState<ToastType | null>(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const showToast = (type: ToastType) => {
    setToast(type)
    setTimeout(() => setToast(null), 4000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      showToast('success')
      setForm({name: '', phone: '', email: '', zip: '', details: ''})
    } catch (err) {
      showToast('error')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const inputClass =
    'w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand'

  return (
    <>
      {toast && <Toast type={toast} onClose={() => setToast(null)} />}

      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-brand">Free Quote</h1>
          <p className="text-gray-600">
            Tell us what you need removed and we&apos;ll get you a fast estimate.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className={inputClass}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            required
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className={inputClass}
          />
          <input
            type="text"
            name="zip"
            placeholder="Zip Code"
            value={form.zip}
            onChange={handleChange}
            required
            className={inputClass}
          />
          <textarea
            name="details"
            placeholder="What do you need removed?"
            value={form.details}
            onChange={handleChange}
            required
            rows={4}
            className={inputClass}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand text-white font-semibold py-3 rounded-lg hover:bg-black transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : 'Get My Free Quote!'}
          </button>
        </form>

        <div className="text-center text-sm text-gray-600 pt-4 border-t flex flex-col items-center gap-2">
          <p>⚡ Quotes within 2 hours | 📍 Serving Medfield & surrounding towns</p>
          <Link href="/pricing" className="text-brand font-medium hover:opacity-60 transition">
            See pricing page
          </Link>
        </div>
      </div>
    </>
  )
}
