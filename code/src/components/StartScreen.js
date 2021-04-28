import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import gameactions, { generateGame } from '../reducers/gameactions'

const StartScreen = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const onStartSet = () => {
    dispatch(gameactions.actions.setUsername(inputValue))
    dispatch(generateGame())

  }
  return (
    <div>
      <h1>Welcome to Labyrinth!</h1>
      <label htmlFor="textinput">Enter your name:</label>
      <input
        id="textinput"
        type="text"
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
      />
      <button onClick={onStartSet}>Start</button>
    </div>
  )


}

export default StartScreen