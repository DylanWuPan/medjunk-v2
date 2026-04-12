import Image from 'next/image'
import Link from 'next/link'

export default function SideBySideIcons() {
  return (
    <div className="relative flex gap-[0] -mt-16 group">
      <div className="z-10 aspect-square w-32 h-32 flex justify-center items-center rounded-full border-brand border-2 bg-white transform translate-x-2 group-hover:scale-110 group-hover:-translate-x-5 transition-all duration-300">
        <Link href="/what-we-remove">
          <Image
            src="/images/icons/new-logo-white-square.jpeg"
            alt="Left icon"
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-full"
          />
        </Link>
      </div>
      <div className="text-brand opacity-0 text-4xl scale-50 font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out">
        +
      </div>
      <div className="aspect-square w-32 h-32 border-brand border-2 flex justify-center items-center rounded-full overflow-hidden bg-white transform -translate-x-2 group-hover:scale-110 group-hover:translate-x-5 transition-all duration-300">
        <Link href="/contact">
          <Image
            src="/images/poster.jpg"
            alt="Right icon"
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-[0%_0%] rounded-full scale-[0.8]"
          />
        </Link>
      </div>
    </div>
  )
}
