import React from 'react'
import Image from 'next/image'

import { SponsoredBy } from './'

export default {
  component: SponsoredBy,
}

export const Basic = () => <SponsoredBy image={Image} />
