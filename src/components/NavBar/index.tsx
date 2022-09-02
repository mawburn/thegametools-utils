import cn from 'clsx'
import Link from 'next/link'
import React, { ReactNode } from 'react'

import { config } from '../../config'
import { NextImage } from '../../types'
import { hashKey } from '../../utils/hashKey'

interface Links {
  url: string
  render: ReactNode
  className?: string
}

export interface NavBarProps {
  image: NextImage
  links?: Links[]
  showRight?: boolean
  subText?: string
  className?: string
  logo?: string
  logoSize?: [number, number]
}

export const NavBar = ({
  image,
  links = [],
  showRight = false,
  subText,
  className = 'h-20 py-1 px-4',
  logo = `${config.cdn}/logoIcon.svg`,
  logoSize = [50, 35],
}: NavBarProps) => (
  <div className={`flex justify-between items-center ${className}`}>
    <div className="flex justify-start items-center">
      <Link href="/">
        <a className="flex">
          {image({
            src: logo,
            height: logoSize[0],
            width: logoSize[1],
            alt: 'TheGame.tools',
            priority: true,
            loading: 'eager',
          })}
          <div className="flex flex-col	text-primary sm:ml-2 uppercase px-3 justify-center items-center sm:not-sr-only sr-only">
            <div className="font-bold text-center text-sm">TheGame.tools</div>
            {subText && <div className="text-xs ">{subText}</div>}
          </div>
        </a>
      </Link>
      <nav className="flex justify-center items-center pl-4 h-full">
        <ul className="md:flex md:h-full list-none md:p-0 md:m-0">
          {links.map((link, i) => (
            <li
              key={hashKey(link.url, typeof link.render === 'string' ? link.render : i)}
              className={`h-full md:block ${cn(link.className)}`}
            >
              <Link href={link.url}>
                <a className="flex justify-center items-center h-full px-3 mx-1 hover:underline whitespace-nowrap">
                  {link.render}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    <div className="mr-12">
      {showRight && (
        <a href="https://thegame.tools" rel="noopener" className="text-xs">
          Other Tools
        </a>
      )}
    </div>
  </div>
)
