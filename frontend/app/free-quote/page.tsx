import QuoteForm from '../components/QuoteForm'
import {pageMetadata} from '@/app/lib/seo'

export const metadata = pageMetadata({
  title: 'Free Junk Removal Quote',
  description:
    'Request a free junk removal quote from Medfield Junk. Share photos and details for furniture, appliances, mattresses, yard waste, cleanouts, and more.',
  path: '/free-quote',
})

export default function FreeQuotePage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex items-start justify-center px-4 py-8">
        <QuoteForm />
      </div>
    </>
  )
}
