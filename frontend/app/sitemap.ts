import {MetadataRoute} from 'next'
import {sanityFetch} from '@/sanity/lib/live'
import {sitemapData, townPagesQuery} from '@/sanity/lib/queries'
import {absoluteUrl} from '@/app/lib/seo'

const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: absoluteUrl('/'),
    lastModified: new Date(),
    priority: 1,
    changeFrequency: 'weekly',
  },
  {
    url: absoluteUrl('/about'),
    lastModified: new Date(),
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  {
    url: absoluteUrl('/what-we-remove'),
    lastModified: new Date(),
    priority: 0.9,
    changeFrequency: 'monthly',
  },
  {
    url: absoluteUrl('/pricing'),
    lastModified: new Date(),
    priority: 0.9,
    changeFrequency: 'monthly',
  },
  {
    url: absoluteUrl('/free-quote'),
    lastModified: new Date(),
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    url: absoluteUrl('/contact'),
    lastModified: new Date(),
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  {
    url: absoluteUrl('/faqs'),
    lastModified: new Date(),
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  {
    url: absoluteUrl('/blog'),
    lastModified: new Date(),
    priority: 0.6,
    changeFrequency: 'weekly',
  },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPostsAndPages = await sanityFetch({query: sitemapData})
  const allTowns = await sanityFetch({query: townPagesQuery})

  const sitemapByUrl = new Map(staticRoutes.map((route) => [route.url, route]))

  // Regular pages and posts
  if (allPostsAndPages?.data?.length) {
    for (const p of allPostsAndPages.data) {
      let priority: number
      let changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
      let url: string

      switch (p._type) {
        case 'page':
          priority = 0.8
          changeFrequency = 'weekly'
          url = absoluteUrl(`/${p.slug}`)
          break
        case 'post':
          priority = 0.5
          changeFrequency = 'weekly'
          url = absoluteUrl(`/blog/${p.slug}`)
          break
        default:
          continue
      }

      sitemapByUrl.set(url, {
        url,
        lastModified: p._updatedAt || new Date(),
        priority,
        changeFrequency,
      })
    }
  }

  // Town pages
  if (allTowns?.data?.length) {
    for (const town of allTowns.data) {
      const url = absoluteUrl(`/${town.slug}`)
      sitemapByUrl.set(url, {
        url,
        lastModified: town._updatedAt || new Date(),
        priority: 0.8,
        changeFrequency: 'monthly',
      })
    }
  }

  return [...sitemapByUrl.values()]
}
