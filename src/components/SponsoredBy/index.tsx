import React from 'react'
import cn from 'clsx'

import { baseConfig } from '../../baseConfig'
import styles from './styles.module.css'

export interface SponsoredByProps {
  className?: string
}

export const SponsoredBy = ({ className = '' }: SponsoredByProps) => (
  <div className={styles.wrapper}>
    <div className={cn(styles.innerWrapper, className)}>
      <a
        className={styles.link}
        href="https://tabletop.land"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.imgContainer}>
          <img
            src={`${baseConfig.imgBucket}/tabletopland.png`}
            width={75}
            height={28}
            alt="tabletop.land"
            loading="eager"
          />
          <h2 className={styles.title}>Tabletop.Land</h2>
        </div>
        <div className={styles.infoWrapper}>
          <div className="text-xs">Built &amp; Sponsored by Tabletop.Land</div>
          <div className={styles.infoDetails}>Buy 3D Printed minis &amp; handcrafted Terrain!</div>
        </div>
      </a>
    </div>
  </div>
)
