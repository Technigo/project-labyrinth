import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'

import GamePage from './GamePage'

import { mazegame, generateGame } from '../reducers/mazegame'

const FormContainer = styled.form`
  background-color: #000;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  color: #59e686;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
`

const StartPage = () => {
  const [userName, setUserName] = useState('')
  const [showComponent, setShowComponent] = useState(false)
  const gameStatus = useSelector(store => store.mazegame.gameStatus)
  const dispatch = useDispatch()

  const handleStartGame = (event) => {
    event.preventDefault()
    dispatch(mazegame.actions.setUserName(userName))
    dispatch(generateGame(userName))
    setShowComponent(true)
  }

  // console.log('username', userName)
  console.log('gamestatus', gameStatus)
  return(
    <>
    { !showComponent ? 
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
    
    :
    <GamePage />
    }
  </>
  )
  
}

export default StartPage