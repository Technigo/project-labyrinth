import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { game } from '../reducers/game'
import { generateStartMove } from '../reducers/fetch'
import { StyledButton } from '../lib/Button'
import styled from 'styled-components'

const StartButton = styled(StyledButton)`
  margin-top: 20px;
  width: 100px;
`
export const GameStart = () => {
  const dispatch = useDispatch()
  const [inputValue,  setInputValue] = useState("")

  const username = useSelector((store) => store.game.username);

  const onGameGenerate = () => {
    dispatch(generateStartMove())
  }


  useEffect(() => {
    onGameGenerate()
  }, [username]) 
  
  
  const uppDateUsername = () => {
    dispatch(game.actions.uppDateUsername(inputValue)) 
  }

  // setInputValue("") clean text are after input not working yet;
  
  return (
    <section className="start-container">
      <form className="form-wrapper">
        <h2 className="username-text">Username:</h2>  
        <textarea className="input-box"
         size="70"
         maxLength="20"
         minLength="1"
        value={inputValue} 
        onChange={e => setInputValue(e.target.value)}
        >
        </textarea>
      </form>
      <StartButton onClick={uppDateUsername} disabled={inputValue.length < 1}>Start</StartButton>
    </section>
  )
  
}