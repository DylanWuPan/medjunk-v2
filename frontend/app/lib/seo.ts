import type {Metadata} from 'next'

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL || 'https://medjunk.com')

export const siteName = 'Medfield Junk'
export const businessPhone = '+16179229752'
export const businessEmail = 'medfieldjunk@gmail.com'

export const serviceAreas = [
  'Medfield',
  'Westwood',
  'Norwood',
  'Dover',
  'Sherborn',
  'Needham',
  'Dedham',
  'Millis',
  'Franklin',
  'Wrentham',
  'Wayland',
  'Waltham',
  'Watertown',
  'Newton',
  'Wellesley',
  'Natick',
  'Framingham',
  'Eastern Massachusetts',
]

export const sameAs = [
  'https://www.instagram.com/medfieldjunk/',
  'https://www.tiktok.com/@medfieldjunk',
  'https://www.youtube.com/@medfieldjunk',
  'https://www.facebook.com/groups/1600551710187257/posts/3987795331462871/',
]

export const defaultDescription =
  'Fast, local junk removal in Medfield and Eastern Massachusetts. Medfield Junk removes furniture, mattresses, appliances, cleanout debris, yard waste, and more.'

export function absoluteUrl(path = '/') {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path
  }

  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`
}

export function pageMetadata({
  title,
  description,
  path,
  image = '/images/cover-photo.jpg',
}: {
  title: string
  description: string
  path: string
  image?: string
}): Metadata {
  const url = absoluteUrl(path)

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: 'website',
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: `${siteName} junk removal team`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [absoluteUrl(image)],
    },
  }
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': absoluteUrl('/#local-business'),
    'name': siteName,
    'url': siteUrl,
    'logo': absoluteUrl('/images/icons/new-logo-square.jpeg'),
    'image': absoluteUrl('/images/cover-photo.jpg'),
    'email': businessEmail,
    'telephone': businessPhone,
    'priceRange': '$$',
    'description': defaultDescription,
    'areaServed': serviceAreas.map((name) => ({
      '@type': 'Place',
      name,
    })),
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Medfield',
      'addressRegion': 'MA',
      'addressCountry': 'US',
    },
    sameAs,
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': absoluteUrl('/#website'),
    'name': siteName,
    'url': siteUrl,
    'publisher': {
      '@id': absoluteUrl('/#local-business'),
    },
  }
}

function normalizeSiteUrl(value: string) {
  return value.replace(/\/+$/, '')
}
