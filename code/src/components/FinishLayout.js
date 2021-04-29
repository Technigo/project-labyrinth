import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { mazegame } from 'reducers/mazegame'

import styled from 'styled-components/macro'

import GamePage from './GamePage'

const Blinking = styled.div `
  margin-left: 50px;
  animation: blinker 1s linear infinite;
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`
const Container = styled.div `
  display: flex; 
  flex-direction: row; 
  align-items: center; 
  justify-content: center; 
  padding: 20px 0;
`

const EndGameText = styled.h1`
  color: #59e686;
  width: 100%;
  text-align: center;
  font-size: 25px;
`
const ButtonContainer = styled.div `
  display: flex; 
  flex-direction: row; 
  align-items: center; 
  justify-content: center; 
  padding: 20px 0;
`

const FinishLayout = () => {
  const restart = useSelector(store => store.mazegame.restart)
  const dispatch = useDispatch()

  const onGameReset = () => {
    dispatch(mazegame.actions.setRestartGame(true))
  }


  return(
    <>
      <EndGameText>YAY! You made it to the other side!!</EndGameText>
      <Container>
        <i class="nes-octocat animate"></i>
        <Blinking>
          <i class="nes-icon trophy is-large"></i>
        </Blinking>
      </Container>
      <ButtonContainer>
        <button
          onClick={onGameReset}
          type="button"
          class="nes-btn is-warning"
        >Play again</button>
      </ButtonContainer>

    </>
  )
  }

export default FinishLayout