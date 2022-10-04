import React from 'react'

import { CoreFooter } from '.'

export default {
  component: CoreFooter,
}

export const Basic = () => <CoreFooter />

export const WithContent = () => (
  <CoreFooter>
    <p>
      Fluxfall.TheGame.Tools is an independent production by{' '}
      <a href="https://thegame.tools" rel="noopener">
        TheGame.Tools
      </a>{' '}
      and is not affiliated with Dave Thaumavore. It is published under the Fluxfall Horizon Third
      Party License. Fluxfall Horizon is copyright Dave Thaumavore.
    </p>
  </CoreFooter>
)
