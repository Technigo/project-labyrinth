import React from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { Button } from '../lib/Button'
import { fetchGameData } from '../reducers/thunk'
import { LoadingIndicator } from './LoadingIndicator'

export const StartGame = () => {
  const username = useSelector(state => state.game.username)
  const isLoading = useSelector(state => state.ui.isLoading)
  const dispatch = useDispatch()

  const startBtn = true

  const handleGameStarterClick = () => {
        dispatch(fetchGameData(username)) 
      }
      
      if (isLoading) {
        return (
          <div>
            <LoadingIndicator />
          </div>
        )
      } else {
        return (
          <div>
            <Button startBtn={startBtn} onClick={handleGameStarterClick}>Start Game</Button>
          </div>
        )
      }
}
