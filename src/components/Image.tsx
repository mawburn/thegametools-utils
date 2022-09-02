import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { ImageProps } from 'next/image'

const DynamicImage = dynamic(() => import('next/image'), { suspense: true })

const TRANSPARENT_PIXEL =
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII='

const Image = ({ ...props }: ImageProps) => (
  <Suspense fallback={TRANSPARENT_PIXEL}>
    <DynamicImage {...props} />
  </Suspense>
)

export default Image
