import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg text-gray-400 mb-8 text-center max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>

      <Link href="/">
        <button className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition-transform duration-200 shadow-lg cursor-pointer">
          Go Home
        </button>
      </Link>
    </div>
  )
}
