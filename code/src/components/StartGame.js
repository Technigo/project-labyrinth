import React from 'react'
import styled from "styled-components/macro"

import { useSelector, useDispatch } from 'react-redux'

import { Button } from '../lib/Button'
import { fetchGameData } from '../reducers/thunk'
import { LoadingIndicator } from './LoadingIndicator'
//import { GameContainer } from '../lib/GameContainer'
//import { imgUrl_start } from '../lib/ImageUrls'

const ButtonWrapper = styled.div`
  margin: 0 0 30px 0;
`

export const StartGame = () => {
  const username = useSelector(state => state.game.username)
  const isLoading = useSelector(state => state.ui.isLoading)
  //const gameData = useSelector(state => state.game.all.data)
  const dispatch = useDispatch()

  const startBtn = true

  const handleGameStarterClick = () => {
        dispatch(fetchGameData(username)) 
      }
      
      if (isLoading) {
        return (
          // <GameContainer backgroundImage={imgUrl_start}>
            <div>
              <LoadingIndicator />
            </div>
          // </GameContainer>
        )
      } else {
        return (
          // <GameContainer backgroundImage={imgUrl_start}>
            <ButtonWrapper>
              <Button startBtn={startBtn} onClick={handleGameStarterClick}>Start Game</Button>
            </ButtonWrapper>
          // </GameContainer>
        )
      }
}
