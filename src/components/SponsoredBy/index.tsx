import cn from 'clsx'
import React from 'react'

import { config } from '../../config'
import { NextImage } from '../../types'
import styles from './styles.module.css'

export interface SponsoredByProps {
  image: NextImage
  className?: string
}

export const SponsoredBy = ({ image, className = '' }: SponsoredByProps) => (
  <div className="sm:mx-auto mx-2 sm:mb-4 my-1 w-fit text-center">
    <div
      className={cn(
        'flex rounded-md self-center p-2 mb-4 bg-gray-100	border border-gray-300 shadow-md;',
        className
      )}
    >
      <a
        className="flex flex-wrap justify-center gap-4 items-center h-full no-underline"
        href="https://tabletop.land"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          className={cn(styles.colorBg, 'flex flex-col items-center justify-center p-2 rounded-lg')}
        >
          {image({
            src: `${config.cdn}/tabletopland.png`,
            width: 75,
            height: 28,
            alt: 'tabletop.land',
            priority: true,
            loading: 'eager',
          })}
          <h2
            className={cn(
              styles.fontFamily,
              styles.fontColor,
              'tracking-widest text-sm font-bold normal-case sm:text-base'
            )}
          >
            Tabletop.Land
          </h2>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="text-xs">Built &amp; Sponsored by Tabletop.Land</div>
          <div className={cn(styles.fontFamily, 'tracking-widest sm:text-sm text-xs font-normal')}>
            Buy 3D Printed minis &amp; handcrafted Terrain!
          </div>
        </div>
      </a>
    </div>
  </div>
)
