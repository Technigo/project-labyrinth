import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import questions, { generateGamedata } from '../reducers/questions';

export const StyledStartScreen = styled.div`

.start-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  margin: 20px 0 20px 0;
}

p {
  font-size: 16px;
  text-align: center;
}

input {
  padding: 12px 12px;
  text-align: center;
  font-size: 20px;
}
`

const StartScreen = () => {

  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const onUsernameSet = (event) => {
    event.preventDefault();
    dispatch(questions.actions.setUsername(inputValue))
    dispatch(generateGamedata())
  }
      
  return (
    <StyledStartScreen>
      <div className='start-screen'>
        <h1>The Cavern Quest</h1>
        <p>Enter your name<br/>and let the journey begin</p>
        <input
          type="text"
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
          placeholder="username"
        />
        <button 
        onClick={onUsernameSet}
        disabled={inputValue === ''}>  
        Start the game</button>
      </div>
    </StyledStartScreen>
  )
}

export default StartScreen
