import {Suspense} from 'react'
import Link from 'next/link'
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
        <div className="relative bg-[url(/images/tile-1-black.png)] bg-size-[5px]">
          <div className="bg-gradient-to-b from-white w-full h-full absolute top-0"></div>
          <div className="container">
            <div className="relative min-h-[40vh] mx-auto max-w-2xl pt-10 xl:pt-20 pb-30 space-y-6 lg:max-w-4xl lg:px-12 flex flex-col items-center justify-center">
              <div className="flex flex-col gap-4 items-center">
                <div className="text-md leading-6 prose uppercase py-1 px-3 bg-white font-mono italic">
                  The #1 Junk Removal Company in MA
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-black">
                  <Link
                    className="underline decoration-brand hover:text-brand underline-offset-8 hover:underline-offset-4 transition-all ease-out"
                    href="/about"
                  >
                    Medfield Junk
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center">
          <SideBySideIcons />
          <div className="container relative mx-auto max-w-2xl pb-20 pt-10 space-y-6 lg:max-w-4xl lg:px-12 flex flex-col items-center">
            <div className="prose sm:prose-lg md:prose-xl xl:prose-2xl text-gray-700 prose-a:text-gray-700 font-light text-center">
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
              <div className="flex items-center flex-col gap-4"></div>
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
              We proudly serve these towns across Massachusetts
            </p>
            <span className="inline-flex items-center gap-1.5 mt-3 text-sm text-gray-400 bg-gray-50 border border-gray-100 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-brand inline-block" />
              {towns.length} towns covered
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
