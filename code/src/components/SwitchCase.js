import React from 'react'
import { game } from 'reducers/game'

export const SwitchCase = (coordinates) => {
  switch (coordinates) {
    case '0,0':
      text = 'Gå någonstans'

    case '1,0':
      return 'Gå mer'

    case '0,0':
      return 'Gå någonstans'

    default:
      return 'Bajsröven'
  }
}
