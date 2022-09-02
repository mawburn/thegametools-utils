import React, { PropsWithChildren } from 'react'

import { config } from '../../config'

export interface FooterProps {
  footerClasses?: string
  sectionClasses?: string
  borderTop?: boolean
}

const CUR_YEAR = new Date().getFullYear()

export const Footer = ({
  children = null,
  footerClasses = '',
  sectionClasses = '',
}: PropsWithChildren<FooterProps>) => (
  <footer className={`text-sm max-w-2xl my-4 mx-auto ${footerClasses}`}>
    {children}
    <section className={`flex justify-center items-center mt-3 ${sectionClasses}`}>
      &copy; 2021-{CUR_YEAR}{' '}
      <a href="https://thegame.tools" className="ml-2 font-semibold">
        TheGame.tools
      </a>
      <span className="mx-2">|</span>
      <a href="https://mawburn.com" rel="noopener me" className="flex justify-center items-center">
        <img
          src={`${config.cdn}/builtby.svg`}
          width={20}
          height={20}
          alt="Built by mawburn"
          loading="lazy"
        />
        <span className="ml-1">by mawburn.com</span>
      </a>
    </section>
  </footer>
)
