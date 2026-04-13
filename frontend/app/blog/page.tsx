import {Suspense} from 'react'

import {AllPosts} from '@/app/components/Posts'

export const metadata = {
  title: 'Blog',
}

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
