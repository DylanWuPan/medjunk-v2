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

const towns = [
  'Medfield',
  'Milton',
  'Newton',
  'Framingham',
  'Dedham',
  'Walpole',
  'Norwood',
  'Westwood',
  'Dover',
  'Sherborn',
  'Needham',
  'Natick',
  'Wellesley',
  'Foxborough',
  'Sharon',
  'Canton',
  'Brookline',
  'Boston',
  'Quincy',
  'Braintree',
  'Randolph',
  'Weston',
  'Millis',
  'Holliston',
  'Hopkinton',
]

// helper
function slugify(town) {
  return `${town.toLowerCase().replace(/\s+/g, '-')}-junk-removal`
}

async function createTownPage(town) {
  const slug = slugify(town)

  const doc = {
    _id: `page-${slug}`,
    _type: 'page',
    name: `${town} Junk Removal`,
    heading: `${town} Junk Removal`,
    slug: {
      _type: 'slug',
      current: slug,
    },
  }

  await client.createIfNotExists(doc)
  console.log(`✅ Created: ${slug}`)
}

async function main() {
  for (const town of towns) {
    await createTownPage(town)
  }
}

main().catch(console.error)
