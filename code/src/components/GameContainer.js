import React from 'react'
import { useSelector } from 'react-redux'

import { StartButton } from './StartButton'
import { RoomDescription } from './RoomDescription'
import { ActionList } from './ActionList'

export const GameContainer = () => {

  const started = useSelector(store => store.game.gameStarted)

  return (
    <>
      {!started && <StartButton />}
      {started &&
        <>
          <RoomDescription />
          <ActionList />
        </>
      }
    </>
  )
}
