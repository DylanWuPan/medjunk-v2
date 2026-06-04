import PricingClient from './PricingClient'
import {pageMetadata} from '@/app/lib/seo'

export const metadata = pageMetadata({
  title: 'Junk Removal Pricing',
  description:
    'Learn how Medfield Junk prices junk removal jobs with clear per-item quotes, no hidden fees, and free estimates for larger cleanouts.',
  path: '/pricing',
  image: '/images/pricing.jpg',
})

export default function PricingPage() {
  return <PricingClient />
}
