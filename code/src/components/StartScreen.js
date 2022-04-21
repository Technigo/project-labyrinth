import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import questions, { generateGamedata } from '../reducers/questions';

const StartScreen = () => {
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch()

  const onUsernameSet = () => {
    dispatch(questions.actions.setUsername(inputValue))
    dispatch(generateGamedata())
  }
      
  return (
    <div>
      <p>Welcome to the labyrinth! Print your name, please</p>
      <input
        type="text"
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
      />
      <button 
      onClick={onUsernameSet}
      //DISABLED FÖR ATT KNAPPEN INTE SKA GÅ ATT KLICKA OM MAN INTE SKRIVIT IN NAMNET
      disabled={inputValue === ''}>  
        Start the game!</button>
      </div>
    )
}

export default StartScreen