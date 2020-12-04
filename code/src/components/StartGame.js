import React from 'react'
import styled from "styled-components/macro"

import { useSelector, useDispatch } from 'react-redux'

import { Button } from '../lib/Button'
import { fetchGameData } from '../reducers/thunk'
import { LoadingIndicator } from './LoadingIndicator'

const ButtonWrapper = styled.div`
  margin: 0 0 30px 0;
`

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
              <LoadingIndicator />
        )
      } else {
        return (
            <ButtonWrapper>
              <Button startBtn={startBtn} onClick={handleGameStarterClick}>Start Game</Button>
            </ButtonWrapper>
        )
      }
}
