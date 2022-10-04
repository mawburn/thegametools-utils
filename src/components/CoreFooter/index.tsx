import React, { PropsWithChildren, ReactNode } from 'react'

import { config } from '../../config'

import styles from './styles.module.css'

export interface CoreFooterProps {
  footerClasses?: string
  sectionClasses?: string
  borderTop?: boolean
  builtBy?: ReactNode
}

const CUR_YEAR = new Date().getFullYear()

export const CoreFooter = ({
  children = null,
  footerClasses = '',
  sectionClasses = '',
  builtBy = null,
}: PropsWithChildren<CoreFooterProps>) => (
  <footer className={`${styles.footer} ${footerClasses}`}>
    {children !== null && <section className={styles.footerTextSection}>{children}</section>}
    <section className={`flex justify-center items-center mt-3 ${sectionClasses}`}>
      &copy; 2021-{CUR_YEAR}{' '}
      <a href="https://thegame.tools" className="ml-2">
        TheGame.tools
      </a>
      <span className="mx-2">|</span>
      {builtBy ?? (
        <a href="https://mawburn.com" rel="noopener me" className={styles.me}>
          <img
            src={`${config.cdn}/builtby.svg`}
            width={20}
            height={20}
            alt="Built by mawburn"
            loading="lazy"
          />
          <span className="ml-1">by mawburn.com</span>
        </a>
      )}
    </section>
  </footer>
)
