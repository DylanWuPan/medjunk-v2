'use client'

import QuoteForm from '../components/QuoteForm'
import Link from 'next/link'
import Image from 'next/image'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16 gap-10">
      {/* Contact Info */}
      <div className="w-full max-w-xl text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-brand">Contact Us!</h1>
        <p className="text-gray-500">
          We&apos;re fast, friendly, and local. Reach out any way you like.
        </p>

        {/* Phone + Email bubbles */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="tel:6179229752"
            className="flex items-center gap-2 bg-white border border-gray-200 rounded-2xl px-5 py-3 shadow-sm hover:shadow-md transition text-sm font-medium text-gray-800 w-full sm:w-auto justify-center"
          >
            <Image src="/images/icons/phone-icon.png" width={20} height={20} alt="Phone" />
            (617) 922-9752
          </Link>
          <Link
            href="mailto:medfieldjunk@gmail.com"
            className="flex items-center gap-2 bg-white border border-gray-200 rounded-2xl px-5 py-3 shadow-sm hover:shadow-md transition text-sm font-medium text-gray-800 w-full sm:w-auto justify-center"
          >
            <Image src="/images/icons/email-icon.png" width={20} height={20} alt="Email" />
            medfieldjunk@gmail.com
          </Link>
        </div>

        {/* Social bubbles */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="https://www.instagram.com/medfieldjunk/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white border border-gray-200 rounded-2xl px-5 py-3 shadow-sm hover:shadow-md transition text-sm font-medium text-gray-800"
          >
            <Image src="/images/icons/instagram-icon.png" width={20} height={20} alt="Instagram" />
            Instagram
          </Link>
          <Link
            href="https://www.tiktok.com/@medfieldjunk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white border border-gray-200 rounded-2xl px-5 py-3 shadow-sm hover:shadow-md transition text-sm font-medium text-gray-800"
          >
            <Image src="/images/icons/tiktok-icon.png" width={20} height={20} alt="TikTok" />
            TikTok
          </Link>
          <Link
            href="https://www.youtube.com/@medfieldjunk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white border border-gray-200 rounded-2xl px-5 py-3 shadow-sm hover:shadow-md transition text-sm font-medium text-gray-800"
          >
            <Image src="/images/icons/youtube-icon.png" width={20} height={20} alt="YouTube" />
            YouTube
          </Link>
          <Link
            href="https://www.facebook.com/groups/1600551710187257/posts/3987795331462871/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white border border-gray-200 rounded-2xl px-5 py-3 shadow-sm hover:shadow-md transition text-sm font-medium text-gray-800"
          >
            <Image src="/images/icons/facebook-icon.png" width={20} height={20} alt="Facebook" />
            Facebook
          </Link>
        </div>
      </div>

      {/* Quote Form */}
      <QuoteForm />
    </div>
  )
}
