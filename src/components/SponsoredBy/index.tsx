import React from 'react'

import { baseConfig } from '../../baseConfig'

export interface SponsoredByProps {
  className?: string
}

export const SponsoredBy = ({ className = '' }: SponsoredByProps) => (
  <div className="sm:mx-auto mx-2 sm:mb-4 my-1 w-fit text-center">
    <div
      className={`flex rounded-md self-center p-2 mb-4 bg-gray-100	border border-gray-300	shadow-md ${className}`}
    >
      <a
        className="flex flex-wrap justify-center gap-4 items-center h-full no-underline"
        href="https://tabletop.land"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex flex-col items-center justify-center bg-ttl p-2 rounded-lg">
          <img
            src={`${baseConfig.imgBucket}/tabletopland.png`}
            width={75}
            height={28}
            alt="tabletop.land"
            loading="eager"
          />
          <h2 className="font-ttl tracking-widest text-ttlFont sm:text-normal text-sm font-bold font-normal">
            Tabletop.Land
          </h2>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="text-xs">Built &amp; Sponsored by Tabletop.Land</div>
          <div className="font-ttl tracking-widest sm:text-sm text-xs font-normal">
            Buy 3D Printed minis &amp; handcrafted Terrain!
          </div>
        </div>
      </a>
    </div>
  </div>
)
