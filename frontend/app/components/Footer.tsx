import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-50 relative border-t">
      {/* subtle texture */}
      <div className="absolute inset-0 bg-[url(/images/tile-grid-black.png)] bg-size-[17px] opacity-10" />

      <div className="container relative">
        <div className="py-16 flex flex-col gap-10 lg:flex-row lg:justify-between">
          {/* Left: Branding + CTA */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <h3 className="text-4xl font-mono tracking-tight text-brand">Medfield Junk</h3>
            <p className="text-gray-600 text-lg text-center lg:text-left max-w-sm">
              Fast, reliable junk removal in Medfield and surrounding towns.
            </p>

            <Link
              href="/free-quote"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-black hover:bg-brand text-white px-6 py-3 text-lg transition"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Right: Contact + Social */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-lg text-gray-700">
            {/* Contact */}
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-black text-lg">Contact</h4>

              <Link
                href="tel:7746880012"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-black"
              >
                <Image src="/images/icons/phone-icon.png" width={20} height={20} alt="Phone" />
                (617) 922-9752
              </Link>

              <Link
                href="mailto:medfieldjunk@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-black"
              >
                <Image src="/images/icons/email-icon.png" width={20} height={20} alt="Email" />
                medfieldjunk@gmail.com
              </Link>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-black text-lg">Social</h4>

              <Link
                href="https://www.instagram.com/medfieldjunk/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-black"
              >
                <Image
                  src="/images/icons/instagram-icon.png"
                  width={20}
                  height={20}
                  alt="Instagram"
                />
                @medfieldjunk
              </Link>

              <Link
                href="https://www.tiktok.com/@medfieldjunk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-black"
              >
                <Image src="/images/icons/tiktok-icon.png" width={20} height={20} alt="TikTok" />
                @medfieldjunk
              </Link>

              <Link
                href="https://www.youtube.com/@medfieldjunk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-black"
              >
                <Image src="/images/icons/youtube-icon.png" width={20} height={20} alt="YouTube" />
                @MedfieldJunk
              </Link>

              <Link
                href="https://www.facebook.com/groups/1600551710187257/posts/3987795331462871/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-black"
              >
                <Image
                  src="/images/icons/facebook-icon.png"
                  width={20}
                  height={20}
                  alt="Facebook"
                />
                @medfieldjunk
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-2 pb-8 text-center text-base text-gray-500">
          © {new Date().getFullYear()} Medfield Junk. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
