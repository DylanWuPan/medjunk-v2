import {MetadataRoute} from 'next'
import {sanityFetch} from '@/sanity/lib/live'
import {sitemapData, townPagesQuery} from '@/sanity/lib/queries'
import {headers} from 'next/headers'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const allPostsAndPages = await sanityFetch({query: sitemapData})
  const allTowns = await sanityFetch({query: townPagesQuery})

  const headersList = await headers()
  const host = headersList.get('host')
  const domain = `https://${host}`

  const sitemap: MetadataRoute.Sitemap = []

  // Homepage
  sitemap.push({
    url: domain,
    lastModified: new Date(),
    priority: 1,
    changeFrequency: 'monthly',
  })

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
          url = `${domain}/${p.slug}`
          break
        case 'post':
          priority = 0.5
          changeFrequency = 'weekly'
          url = `${domain}/blog/${p.slug}`
          break
        default:
          continue
      }

      sitemap.push({
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
      sitemap.push({
        url: `${domain}/${town.slug}`,
        lastModified: town._updatedAt || new Date(),
        priority: 0.8,
        changeFrequency: 'monthly',
      })
    }
  }

  return sitemap
}
