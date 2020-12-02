import React from 'react'
import { useSelector } from 'react-redux'

import { Start } from './Start'
import { Description } from './Description'
import { ActionList } from './ActionList'

export const GameContainer = () => {

  const started = useSelector(store => store.game.gameStarted)

  return (
    <>
      {!started && <Start />}
      {started &&
        <>
          <Description />
          <ActionList />
        </>
      }
    </>
  )
}
