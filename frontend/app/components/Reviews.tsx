'use client'

import Link from 'next/link'
import {useState, useEffect, useCallback} from 'react'
import {reviews} from './reviews'

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400 fill-yellow-400"
          viewBox="0 0 20 20"
        >
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
    left: 'translate-x-[-55%] scale-75 opacity-30 z-0 pointer-events-none',
    center:
      'translate-x-0 scale-100 opacity-100 z-10 shadow-[0_0_30px_0px] shadow-brand/50 ring-1 ring-brand',
    right: 'translate-x-[55%] scale-75 opacity-30 z-0 pointer-events-none',
    hidden: 'translate-x-0 scale-75 opacity-0 z-0 pointer-events-none',
  }

  return (
    <div
      className={`rounded-3xl absolute w-[80vw] sm:w-full sm:max-w-xl transition-all duration-500 ease-in-out ${styles[position]}`}
    >
      <div className="bg-white rounded-3xl p-5 sm:p-8 border border-gray-100 flex flex-col gap-3">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand/10 text-brand font-bold text-base sm:text-lg flex items-center justify-center shrink-0">
            {initials}
          </div>
          <div>
            <p className="font-semibold text-base sm:text-lg text-gray-900">{name}</p>
            <p className="text-xs sm:text-sm text-gray-400">{date}</p>
          </div>
        </div>
        <div className="flex justify-center">
          <StarRating />
        </div>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base text-center line-clamp-6">
          {text}
        </p>
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
    const prevIdx = (index - 1 + total) % total
    const nextIdx = (index + 1) % total
    if (i === index) return 'center'
    if (i === prevIdx) return 'left'
    if (i === nextIdx) return 'right'
    return 'hidden'
  }

  return (
    <section className="py-16 px-4">
      {/* Header */}
      <div className="text-center space-y-3">
        <p className="text-sm uppercase tracking-widest text-gray-400">What our customers say</p>
        <h2 className="text-3xl font-bold tracking-tight">100% Five-Star Reviews</h2>

        <div className="flex items-center justify-center gap-3 pt-1 flex-wrap">
          <Link
            href="https://www.google.com/search?sca_esv=a7ab1f079d2ce5f0&sxsrf=ANbL-n5MlEBEMo15xu09Xkci70BhGlUwJw:1776037767906&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZ7rfXm343NJgN88tNJZOg67IoTgEb6ATeeUcLB8N8OV0YbrEaGjINZiwU9piQvOwKn-2DH1BIbtlMj45sdl2ItECWqR&q=Medfield+Junk+Reviews&sa=X&ved=2ahUKEwjk342iwOmTAxUxG4YAHc6XHnwQ0bkNegQIOhAF&biw=1512&bih=828&dpr=2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md text-gray-800 transition"
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

          <Link
            href="https://www.google.com/search?sca_esv=a7ab1f079d2ce5f0&sxsrf=ANbL-n5MlEBEMo15xu09Xkci70BhGlUwJw:1776037767906&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOZ7rfXm343NJgN88tNJZOg67IoTgEb6ATeeUcLB8N8OV0YbrEaGjINZiwU9piQvOwKn-2DH1BIbtlMj45sdl2ItECWqR&q=Medfield+Junk+Reviews&sa=X&ved=2ahUKEwjk342iwOmTAxUxG4YAHc6XHnwQ0bkNegQIOhAF&biw=1512&bih=828&dpr=2#lrd=0x6cf165bb75082545:0x10449d63e2f1c953,3,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full bg-brand hover:bg-black text-white shadow-sm hover:shadow-md transition"
          >
            Leave us a review
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
      </div>

      {/* Carousel */}
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{height: 'clamp(380px, 60vw, 480px)'}}
      >
        {reviews.map((r, i) => (
          <ReviewCard key={i} {...r} position={getPosition(i)} />
        ))}

        {/* Left arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center hover:bg-gray-50 transition cursor-pointer"
          aria-label="Previous review"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
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
          className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center hover:bg-gray-50 transition cursor-pointer"
          aria-label="Next review"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      {/* <div className="flex justify-center gap-1.5 mt-4 flex-wrap">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setAutoplay(false)
              setIndex(i)
            }}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              i === index ? 'bg-brand w-4' : 'bg-gray-300 w-1.5'
            }`}
          />
        ))}
      </div> */}

      {!autoplay && (
        <div className="text-center mt-3">
          <button
            onClick={() => setAutoplay(true)}
            className="text-xs text-gray-400 hover:text-brand transition cursor-pointer"
          >
            ↺ Resume autoplay
          </button>
        </div>
      )}
    </section>
  )
}
