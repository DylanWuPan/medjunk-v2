import {Suspense} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {PortableText} from '@portabletext/react'

import {AllPosts} from '@/app/components/Posts'
import SideBySideIcons from '@/app/components/SideBySideIcons'
import {settingsQuery, townPagesQuery} from '@/sanity/lib/queries'
import {sanityFetch} from '@/sanity/lib/live'
import {dataAttr} from '@/sanity/lib/utils'

interface Town {
  name: string
  slug: string
}

export default async function Page() {
  const {data: settings} = await sanityFetch({
    query: settingsQuery,
  })

  const {data: towns} = await sanityFetch({
    query: townPagesQuery,
  })

  return (
    <>
      <div className="relative">
        <section className="relative min-h-[100vh] w-full bg-[url('/images/cover-photo.jpg')] bg-cover bg-[center_left_60%] md:bg-center">
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />
          {/* Content */}
          <div className="relative z-10 flex min-h-[100vh] flex-col items-center justify-center px-4 text-center">
            <div className="flex flex-col items-center gap-4 bg-white/30 p-12 rounded-2xl backdrop-blur-xs">
              <p className="uppercase italic tracking-widest text-white/70 text-md">
                Eastern MA&apos;s Premier Junk Removal Service
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white">
                <Link
                  className="underline decoration-brand underline-offset-8 hover:text-brand hover:underline-offset-4 transition-all ease-out"
                  href="/about"
                >
                  Medfield Junk
                </Link>
              </h1>
            </div>
          </div>
        </section>
        <div className=" flex flex-col items-center">
          <SideBySideIcons />
          <div className="container relative mx-auto max-w-2xl pb-20 pt-10 space-y-6 lg:max-w-4xl lg:px-12 flex flex-col items-center">
            <div className="prose sm:prose-lg md:prose-xl xl:prose-2xl text-black prose-a:text-black font-light text-center text-bold">
              {settings?.description && (
                <div
                  data-sanity={dataAttr({
                    id: settings._id,
                    type: 'settings',
                    path: 'description',
                  }).toString()}
                >
                  <PortableText value={settings.description} />
                </div>
              )}
            </div>

            {/* Cofounder Bios */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
              {/* Cofounder 1 */}
              <div className="flex items-start gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-gray-100">
                <Image
                  src="/images/profiles/rowan.png"
                  alt="Cofounder 1"
                  width={2000}
                  height={2000}
                  className="rounded-full w-20 h-20 object-cover shrink-0"
                />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-base text-black">Rowan Tracey</p>
                  <p className="text-xs text-brand font-medium uppercase tracking-wide">
                    Co-Founder
                  </p>
                  <p className="text-sm text-gray-600 leading-snug">
                    Wesleyan University &apos;29 student-athlete.
                  </p>
                </div>
              </div>

              {/* Cofounder 2 */}
              <div className="flex items-start gap-4 bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-gray-100">
                <Image
                  src="/images/profiles/declan.png"
                  alt="Cofounder 2"
                  width={2000}
                  height={2000}
                  className="rounded-full w-20 h-20 object-cover shrink-0"
                />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-base text-black">Declan Bligh</p>
                  <p className="text-xs text-brand font-medium uppercase tracking-wide">
                    Co-Founder
                  </p>
                  <p className="text-sm text-gray-600 leading-snug">
                    Harvard University &apos;30 student-athlete.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 py-16">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-10 animate-fade-up">
            <h2 className="text-4xl font-medium tracking-tight">Service Areas</h2>
            <p className="text-gray-500 mt-2 text-md">
              We proudly serve these towns across Massachusetts (and more!)
            </p>
            <span className="inline-flex items-center gap-1.5 mt-3 text-sm text-gray-400 bg-gray-50 border border-gray-100 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand inline-block" />
              {towns.length}+ towns covered
            </span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 max-w-4xl mx-auto">
            {towns.map((town) => (
              <Link
                key={town.slug}
                href={`/${town.slug}`}
                className="
    group flex items-center justify-center gap-1.5 px-3 py-2.5
    border border-gray-100 rounded-lg bg-white text-md
    hover:border-gray-300 hover:bg-gray-50 hover:-translate-y-0.5
    active:scale-[0.97] transition-all duration-150
  "
              >
                <span className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-brand transition-colors shrink-0" />
                {town.name.replace(' Junk Removal', '')}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 bg-gray-50">
        <div className="container">
          <aside className="py-12 sm:py-20">
            <Suspense>{await AllPosts()}</Suspense>
          </aside>
        </div>
      </div>
    </>
  )
}
