import {Suspense} from 'react'

import {AllPosts} from '@/app/components/Posts'
import {pageMetadata} from '@/app/lib/seo'

export const metadata = pageMetadata({
  title: 'Junk Removal Blog',
  description:
    'Helpful junk removal tips from Medfield Junk, including cleanout planning, furniture removal, appliance removal, recycling, and donation advice.',
  path: '/blog',
})

export default async function Page() {
  return (
    <>
      <div className="border-t border-gray-100 bg-gray-50 w-full">
        <div className="w-full px-6">
          <aside className="py-12 sm:py-20">
            <Suspense>{await AllPosts()}</Suspense>
          </aside>
        </div>
      </div>
    </>
  )
}
