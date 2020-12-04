import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Button } from '../lib/Button'
import { fetchGameData } from '../reducers/thunk'

export const StartGame = () => {
  const username = useSelector(state => state.game.username)
  const dispatch = useDispatch()

  const startBtn = true

  const handleGameStarterClick = () => {
    dispatch(fetchGameData(username))
  }
  return (
    <div>
      <Button
        startBtn={startBtn}
        onClick={handleGameStarterClick}
      >
        Start Game
      </Button>
    </div>
  )
}

