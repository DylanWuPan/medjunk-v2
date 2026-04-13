import QuoteForm from '../components/QuoteForm'

export const metadata = {
  title: 'Free Quote',
}

export default function FreeQuotePage() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex items-start justify-center px-4 py-8">
        <QuoteForm />
      </div>
    </>
  )
}
