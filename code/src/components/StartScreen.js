/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import game, { startGame } from '../reducers/game'
import { Button } from './Button'

const StartScreen = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const onUsernameInputValue = () => {
    dispatch(game.actions.setUserName(inputValue))
    dispatch(startGame())
  }

  const StartWrapper = styled.div`
  display: flex; 
  flex-direction: column;
  padding: 80px; 
  margin: 5% 20%;; 
  gap: 20px;
  background: white; 
  box-shadow:0 0.125rem 0.5rem rgba(0, 0, 0, .3), 0 0.0625rem 0.125rem rgba(0, 0, 0, .2);
  
  h1 {
    text-align:center;
  }

  input {
    width: 50%;
    align-self:center;
  }
  `

  const ButtonContainer = styled.div`
  display: flex; 
  justify-content: center; 
`

  return (
    <>
      <StartWrapper>
        <h1> Come play with us! </h1>
        <input
          type="text"
          value={inputValue}
          placeholder="Type your name here"
          onChange={(event) => setInputValue(event.target.value)}
          autoFocus />
      </StartWrapper>
      <ButtonContainer>
        <Button
          type="submit"
          onClick={onUsernameInputValue}>
        Let&apos;s play!
        </Button>
      </ButtonContainer>
    </>
  )
}

export default StartScreen