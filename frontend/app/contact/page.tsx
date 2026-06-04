import ContactClient from './ContactClient'
import {pageMetadata} from '@/app/lib/seo'

export const metadata = pageMetadata({
  title: 'Contact Medfield Junk',
  description:
    'Contact Medfield Junk for fast junk removal quotes in Medfield and Eastern Massachusetts. Call, text, email, or request a free quote online.',
  path: '/contact',
})

export default function ContactPage() {
  return <ContactClient />
}
