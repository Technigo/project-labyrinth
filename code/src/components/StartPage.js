import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import GamePage from './GamePage'
import { mazegame, generateGame } from '../reducers/mazegame'
import LoadingPage from './LoadingPage'

const FormContainer = styled.form`
  background-color: #000;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding-bottom: 100px;
  color: #59e686;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
`

const Title = styled.h1`
  font-size: 31px;
  padding: 40px 20px;
  animation: blinking 1.2s infinite;
  @keyframes blinking {
    0%{color: #59e686;}
    49%{color: #59e686;}
    60%{color: transparent;}
    99%{color:transparent;}
    100%{color: #59e686;}  
  }
  @media (min-width: 668px) {
   font-size: 45px; 
  }
`

const StartPage = () => {
  const [userName, setUserName] = useState('')
  const gameStatus = useSelector(store => store.mazegame.gameStatus)
  const loading = useSelector(store => store.mazegame.loading)
  const restart = useSelector(store => store.mazegame.restart)
  const dispatch = useDispatch()

  const handleStartGame = (event) => {
    event.preventDefault()
    dispatch(mazegame.actions.setUserName(userName))
    dispatch(generateGame(userName))
    setUserName('')
  }
  if (gameStatus) {
    return (
      <GamePage />
    ) 
  }
  
  if (loading) {
    return (
      <LoadingPage />
    ) 
  }
  
  if (restart) {
    return (
      <GamePage />
    ) 
  } 

  return(
    <>
     <FormContainer onSubmit={handleStartGame}>
      <Title>MAZE GAME</Title>
      <div className="nes-field is-inline">
        <label htmlFor="inline_field"></label>
        <input 
          required
          type="text" 
          id="inline_field" 
          className="nes-input is-success" 
          placeholder="Enter user name.."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
      </div>
      <button 
        type="submit" 
        className="nes-btn is-normal"
      >
        START GAME
      </button>
    </FormContainer>
  </>
  )
  
}

export default StartPage