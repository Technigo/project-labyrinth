import React from 'react'
import { useDispatch } from 'react-redux'

import styled from 'styled-components/macro'

import { questions } from 'reducers/questions'

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

const Finish = () => {
  const dispatch = useDispatch()

  const onGameReset = () => {
    dispatch(questions.actions.setRestartGame())
  }

  return(
    <>
      <EndGameText>You made it safe to the end!!</EndGameText>
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

export default Finish