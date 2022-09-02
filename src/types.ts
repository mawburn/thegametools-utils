import { ImageProps } from 'next/image'
import { ReactElement } from 'react'

export type NextImage = (props: ImageProps) => ReactElement<ImageProps>
