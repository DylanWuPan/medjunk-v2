import dotenv from 'dotenv'
dotenv.config({path: './frontend/.env.local'})
import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

// helper
function formatTown(slug) {
  return slug
    .replace('-junk-removal', '')
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

async function main() {
  // fetch all your pages
  const pages = await client.fetch(`
  *[_type == "page" && slug.current match "*-junk-removal"]{
      _id,
      "slug": slug.current
    }
  `)

  for (const page of pages) {
    const town = formatTown(page.slug)

    await client.patch(page._id).unset(['title']).commit()

    console.log(`✅ Removed title from: ${page.slug}`)
  }
}

main().catch(console.error)
