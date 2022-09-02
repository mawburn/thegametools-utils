import Script from 'next/script'
import React, { PropsWithChildren } from 'react'

import { config } from '../config'

interface MetaDataProps {
  descr: string
  title: string
  ogImg?: string
  twitter?: string
  author?: string
}

const OGIMG_STATIC = `${config.cdn}/thegame.tools/ogimg.png` as const

export const MetaData = ({
  descr,
  title = 'TheGame.Tools',
  ogImg = OGIMG_STATIC,
  twitter = '@_mawburn',
  author = 'hypnoCode',
}: PropsWithChildren<MetaDataProps>) => (
  <>
    <link rel="icon" href="/favicon.ico" />
    <meta name="author" content={author} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charSet="utf-8" />
    <meta name="description" content={descr} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={descr} />
    <meta property="og:image" content={ogImg} />
    <meta property="og:image:url" content={ogImg} />
    <meta property="og:image:secure_url" content={ogImg} />
    <meta property="og:site_name" content={descr} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={descr} />
    <meta name="twitter:image" content={ogImg} />
    <meta name="twitter:card" content="summary" />
    <meta name="description" content={descr} />
    <meta name="og:description" content={descr} />
    <meta name="twitter:creator" content={`${twitter ?? config.twitter}`} />
    <link rel="preconnect" href="https://cdn.tabletop.media" crossOrigin="true" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-SE0N2YF08V"></Script>
    <Script id="google-analytics" strategy="afterInteractive">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-SE0N2YF08V');
        `}
    </Script>
  </>
)
