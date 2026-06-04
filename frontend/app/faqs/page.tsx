import Script from 'next/script'

import FAQsClient from './FAQsClient'
import {faqs} from './faqs'
import {absoluteUrl, pageMetadata} from '@/app/lib/seo'

export const metadata = pageMetadata({
  title: 'Junk Removal FAQs',
  description:
    'Answers to common junk removal questions about pricing, scheduling, service areas, accepted items, insurance, donations, recycling, and cleanout preparation.',
  path: '/faqs',
})

export default function FAQsPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': absoluteUrl('/faqs#faq'),
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <>
      <Script id="faq-json-ld" type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </Script>
      <FAQsClient />
    </>
  )
}
