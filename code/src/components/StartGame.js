import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { Button } from '../lib/Button'
import { fetchGameData } from '../reducers/thunk'

export const StartGame = () => {
  const username = useSelector(state => state.game.username)
  const dispatch = useDispatch()

  // this is the username-info found previously in button
  // updated thunk so it has the param of username
  // and so username is not hardcorded into 'xxxx'
  const handleGameStarterClick = () => {
        dispatch(fetchGameData(username)) 
      }
  return (
    <div>
      <p>Here is the startGame component</p>
      <Button onClick={handleGameStarterClick}>Start Game</Button>

    </div>
  )
}
