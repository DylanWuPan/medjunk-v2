import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Photo Timeline */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <p className="text-sm uppercase tracking-widest text-gray-400">Our Journey</p>
            <h2 className="text-4xl font-bold tracking-tight">From Backyard to Business</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Photo 1 */}
            <div className="flex flex-col gap-3">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/summer-2024.jpg"
                  alt="Summer 2024 — the beginning"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900">Summer 2024</p>
                <p className="text-sm text-gray-500">Borrowed trucks & big dreams</p>
              </div>
            </div>

            {/* Photo 2 */}
            <div className="flex flex-col gap-3">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/trailer.jpeg"
                  alt="Summer 2025 — the trailer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900">Summer 2025</p>
                <p className="text-sm text-gray-500">Built a trailer from scratch</p>
              </div>
            </div>

            {/* Photo 3 */}
            <div className="flex flex-col gap-3">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/truck.jpg"
                  alt="Today — the F-550"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900">Today</p>
                <p className="text-sm text-gray-500">Ford F-550 & scaling up</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="container max-w-3xl mx-auto py-20 px-4 space-y-8">
        <div className="space-y-2 text-center">
          <p className="text-sm uppercase tracking-widest text-gray-400">Who we are</p>
          <h2 className="text-4xl font-bold tracking-tight">Our Story</h2>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            It started in the backyard. Rowan and Declan were tossing a football around the summer
            of 2024 when they decided they&apos;d had enough of farming. &ldquo;We&apos;ve done
            enough work in the dirt and grime,&rdquo; they figured, &ldquo;so let&apos;s go deal
            with trash.&rdquo; The first summer ran on borrowed trucks and a lot of hustle. It
            wasn&apos;t huge, but they built a real customer base, proved the idea worked, and got
            people excited about what they were doing.
          </p>
          <p>
            Going into summer 2025, the team knew it was time to level up. They bought a utility
            trailer — just the frame — and Jack, James, and Shaun built it from the ground up into
            an incredibly solid mobile dumpster. Everything by hand, everything from scratch. That
            trailer changed the trajectory of the company, and summer 2025 was the biggest yet. The
            willingness to do whatever it takes to grow is what Medfield Junk is built on.
          </p>
          <p>
            This past winter, the team bought a Ford F-550 dump truck, and operations are scaling to
            the max. What started in the hallways of Medfield High School and Roxbury Latin has
            grown into a real company serving communities across Eastern Massachusetts. The people
            showing up to your home are the same kind of people who built this thing bootstrapped,
            learning at every step. The team is hardworking, local, and proud of what Medfield Junk
            has become.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-5 px-4 border-t border-gray-100">
        <div className="container max-w-5xl mx-auto py-20 px-4 bg-gray-50">
          <div className="text-center space-y-2 mb-12">
            <p className="text-sm uppercase tracking-widest text-gray-400">What drives us</p>
            <h2 className="text-4xl font-bold tracking-tight">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl">🤝</div>
              <h3 className="font-semibold text-lg">Local & Proud</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Built in Medfield, serving Eastern MA. We&apos;re your neighbors, not a franchise.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">💪</div>
              <h3 className="font-semibold text-lg">Whatever It Takes</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                From borrowed trucks to a custom trailer to a dump truck — we figure it out.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl">♻️</div>
              <h3 className="font-semibold text-lg">Responsible Removal</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We donate and recycle what we can, keeping as much as possible out of landfills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-16 px-4 text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Ready to clear the clutter?</h2>
        <p className="text-white/70">Fast, affordable junk removal across Eastern Massachusetts.</p>
        <Link
          href="/free-quote"
          className="inline-flex items-center gap-2 bg-brand text-white hover:bg-white hover:text-black font-semibold px-6 py-3 rounded-full transition-colors duration-200"
        >
          Get a Free Quote!
        </Link>
      </section>
    </div>
  )
}
