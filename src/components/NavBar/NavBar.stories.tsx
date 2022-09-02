import React from 'react'
import Image from 'next/image'

import { NavBar } from './'

export default {
  component: NavBar,
}

const links = [
  {
    url: '/',
    render: 'Home',
  },
  {
    url: '/next',
    render: 'Next Page',
  },
  {
    url: '/another',
    render: 'Another Page',
  },
]

export const Basic = () => (
  <div className="border border-black">
    <NavBar image={Image} links={links} showRight />
  </div>
)
