'use client'

import Link from 'next/link'
import {useState, useEffect, useCallback} from 'react'
import {reviews} from './reviews'

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-7 h-7 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({
  name,
  date,
  text,
  position,
}: {
  name: string
  date: string
  text: string
  position: 'left' | 'center' | 'right' | 'hidden'
}) {
  const initials = name
    .split(' ')
    .map((n: string) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  const styles: Record<string, string> = {
    left: 'translate-x-[-50%] scale-75 opacity-30 z-0',
    center:
      'translate-x-0 scale-100 opacity-100 z-10 shadow-[0_0_30px_0px] shadow-brand/50 ring-1 ring-brand',
    right: 'translate-x-[50%] scale-75 opacity-30 z-0',
    hidden: 'translate-x-[0%] scale-75 opacity-0 z-0',
  }

  return (
    <div
      className={`rounded-3xl absolute w-full max-w-2xl transition-all duration-500 ease-in-out ${styles[position]}`}
    >
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 flex flex-col gap-3">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="w-14 h-14 rounded-full bg-brand/10 text-brand font-bold text-lg flex items-center justify-center shrink-0">
            {initials}
          </div>
          <div>
            <p className="font-semibold text-lg text-gray-900">{name}</p>
            <p className="text-sm text-gray-400">{date}</p>
          </div>
        </div>
        <div className="flex justify-center">
          <StarRating />
        </div>
        <p className="text-gray-700 leading-relaxed text-base text-center">{text}</p>
      </div>
    </div>
  )
}

export default function Reviews() {
  const [index, setIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = useCallback(() => {
    setIndex((i) => (i === reviews.length - 1 ? 0 : i + 1))
  }, [])

  const prev = useCallback(() => {
    setIndex((i) => (i === 0 ? reviews.length - 1 : i - 1))
  }, [])

  const handleNext = () => {
    setAutoplay(false)
    next()
  }

  const handlePrev = () => {
    setAutoplay(false)
    prev()
  }

  useEffect(() => {
    if (!autoplay) return
    const timer = setInterval(next, 3000)
    return () => clearInterval(timer)
  }, [autoplay, next])

  const getPosition = (i: number) => {
    const total = reviews.length
    const prev = (index - 1 + total) % total
    const next = (index + 1) % total
    if (i === index) return 'center'
    if (i === prev) return 'left'
    if (i === next) return 'right'
    return 'hidden'
  }

  return (
    <section className="py-16 px-4">
      {/* Header */}
      <div className="text-center mb-10 space-y-1">
        <p className="text-sm uppercase tracking-widest text-gray-400">What our customers say</p>
        <h2 className="text-3xl font-bold tracking-tight">100% Five-Star Reviews</h2>
        <Link
          href="https://www.google.com/search?q=Medfield+Junk+Reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-brand font-medium hover:opacity-70 transition pt-1"
        >
          See all reviews on Google
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </Link>
      </div>

      {/* Carousel */}
      <div className="relative flex items-center justify-center" style={{height: '320px'}}>
        {reviews.map((r, i) => (
          <ReviewCard key={i} {...r} position={getPosition(i)} />
        ))}

        {/* Left arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-20 z-20 w-11 h-11 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center hover:bg-gray-50 transition cursor-pointer"
          aria-label="Previous review"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right arrow */}
        <button
          onClick={handleNext}
          className="absolute right-20 z-20 w-11 h-11 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center hover:bg-gray-50 transition cursor-pointer"
          aria-label="Next review"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  )
}
