import type {Metadata} from 'next'
import Image from 'next/image'

import PageBuilderPage from '@/app/components/PageBuilder'
import {sanityFetch} from '@/sanity/lib/live'
import {getPageQuery, pagesSlugs} from '@/sanity/lib/queries'
import {GetPageQueryResult} from '@/sanity.types'
import {notFound} from 'next/navigation'
import {absoluteUrl, defaultDescription, siteName} from '@/app/lib/seo'

type Props = {
  params: Promise<{slug: string}>
}

/**
 * Generate the static params for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export async function generateStaticParams() {
  const {data} = await sanityFetch({
    query: pagesSlugs,
    // // Use the published perspective in generateStaticParams
    perspective: 'published',
    stega: false,
  })
  return data
}

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params
  const {data: page} = await sanityFetch({
    query: getPageQuery,
    params,
    // Metadata should never contain stega
    stega: false,
  })

  return {
    title: page?.name || page?.heading,
    description: page?.subheading || page?.heading || defaultDescription,
    alternates: {
      canonical: absoluteUrl(`/${params.slug}`),
    },
    openGraph: {
      title: page?.name || page?.heading || siteName,
      description: page?.subheading || page?.heading || defaultDescription,
      url: absoluteUrl(`/${params.slug}`),
      siteName,
      type: 'website',
      images: [
        {
          url: absoluteUrl('/images/cover-photo-2.jpg'),
          width: 1200,
          height: 630,
          alt: page?.heading || `${siteName} junk removal service`,
        },
      ],
    },
  } satisfies Metadata
}

export default async function Page(props: Props) {
  const params = await props.params
  const [{data: page}] = await Promise.all([sanityFetch({query: getPageQuery, params})])

  if (!page?._id) {
    return notFound()
  }

  return (
    <div className="my-12 lg:my-24">
      <div className="container">
        <div className="pb-6 border-b border-gray-100 flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text */}
          <div className="flex-1">
            <h1 className="text-4xl text-gray-900 sm:text-5xl lg:text-7xl">{page.heading}</h1>
            <p className="mt-4 text-base lg:text-lg leading-relaxed text-gray-600 uppercase font-light">
              {page.subheading}
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-end">
            <Image
              src="/images/cover-photo-2.jpg"
              alt={page.heading || `${page.name} service page`}
              className="w-full max-w-md rounded-2xl object-cover"
              width={2000}
              height={2000}
            />
          </div>
        </div>
      </div>
      <PageBuilderPage page={page as GetPageQueryResult} />
    </div>
  )
}
