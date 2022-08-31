import React, { PropsWithChildren, Fragment, ReactNode } from 'react'

import { useKey } from '../../utils/useKey'

interface TableGeneratorProps {
  list: ReactNode[]
  sectionClasses?: string | string[]
}

const Wrapper = ({ classes, children }: PropsWithChildren<{ classes?: string }>) =>
  classes ? <section className={classes}>{children}</section> : <>{children}</>

export const TableGenerator = ({ list = [], sectionClasses }: TableGeneratorProps) => {
  const getKey = useKey(list)
  const classes =
    sectionClasses && Array.isArray(sectionClasses) ? sectionClasses.join(' ') : sectionClasses

  return list.length > 0 ? (
    <Wrapper classes={classes}>
      {list.map((val, i) => (
        <Fragment key={getKey(i)}>{val}</Fragment>
      ))}
    </Wrapper>
  ) : null
}
