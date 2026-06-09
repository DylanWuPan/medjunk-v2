import './globals.css'

import {SpeedInsights} from '@vercel/speed-insights/next'
import Script from 'next/script'
import type {Metadata} from 'next'
import {Inter, IBM_Plex_Mono} from 'next/font/google'
import {draftMode} from 'next/headers'
import {toPlainText} from 'next-sanity'
import {VisualEditing} from 'next-sanity/visual-editing'
import {Toaster} from 'sonner'
import {Analytics} from '@vercel/analytics/next'

import DraftModeToast from '@/app/components/DraftModeToast'
import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import {sanityFetch, SanityLive} from '@/sanity/lib/live'
import {settingsQuery} from '@/sanity/lib/queries'
import {resolveOpenGraphImage} from '@/sanity/lib/utils'
import {handleError} from '@/app/client-utils'
import {
  absoluteUrl,
  defaultDescription,
  localBusinessJsonLd,
  siteName,
  siteUrl,
  websiteJsonLd,
} from '@/app/lib/seo'

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(): Promise<Metadata> {
  const {data: settings} = await sanityFetch({
    query: settingsQuery,
    // Metadata should never contain stega
    stega: false,
  })
  const title = settings?.title || siteName
  const description = settings?.description ? toPlainText(settings.description) : defaultDescription

  const ogImage = resolveOpenGraphImage(settings?.ogImage)

  return {
    metadataBase: new URL(siteUrl),
    applicationName: siteName,
    category: 'Junk removal',
    keywords: [
      'junk removal Medfield MA',
      'junk removal Eastern Massachusetts',
      'furniture removal',
      'mattress removal',
      'appliance removal',
      'cleanout services',
      'yard waste removal',
    ],
    icons: {
      icon: '/images/favicon.ico',
      shortcut: '/images/favicon.ico',
      apple: '/images/favicon.ico',
    },
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description,
    alternates: {
      canonical: absoluteUrl('/'),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        'index': true,
        'follow': true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      title,
      description,
      url: siteUrl,
      siteName,
      type: 'website',
      images: ogImage ? [ogImage] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage.url] : [absoluteUrl('/images/cover-photo.jpg')],
    },
    other: {
      'geo.region': 'US-MA',
      'geo.placename': 'Medfield',
    },
  }
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const {isEnabled: isDraftMode} = await draftMode()

  return (
    <html lang="en" className={`${inter.variable} ${ibmPlexMono.variable} bg-white text-black`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:shadow"
        >
          Skip to main content
        </a>
        {/*RECAPTCHA*/}
        <Script
          src={
            'https://www.google.com/recaptcha/api.js?render=6LcYCQAsAAAAACEg8IF8fvPQQhMqyixGelhCUzL1'
          }
          strategy="afterInteractive"
        />

        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '2246116826221964');
  fbq('track', 'PageView');
`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=2246116826221964&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WFX7DTQY0Q"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-WFX7DTQY0Q');
          `}
        </Script>
        <section className="min-h-screen pt-24">
          {/* The <Toaster> component is responsible for rendering toast notifications used in /app/client-utils.ts and /app/components/DraftModeToast.tsx */}
          <Toaster />
          <Script id="local-business-json-ld" type="application/ld+json">
            {JSON.stringify(localBusinessJsonLd())}
          </Script>
          <Script id="website-json-ld" type="application/ld+json">
            {JSON.stringify(websiteJsonLd())}
          </Script>
          {isDraftMode && (
            <>
              <DraftModeToast />
              {/*  Enable Visual Editing, only to be rendered when Draft Mode is enabled */}
              <VisualEditing />
            </>
          )}
          {/* The <SanityLive> component is responsible for making all sanityFetch calls in your application live, so should always be rendered. */}
          <SanityLive onError={handleError} />
          <Header />
          <main id="main-content" className="">
            {children}
          </main>
          <Footer />
        </section>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
