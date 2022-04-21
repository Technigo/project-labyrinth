import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import styled from 'styled-components';

import labyrinth, { generateLabyrinth } from 'reducers/labyrinth'

const StartScreen = () => {
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch()

  const onNameSelect = () => {
    dispatch(labyrinth.actions.setUserName(inputValue))
    dispatch(generateLabyrinth())
  }

  return (
    <div>
      <p>Welcome to the labyrinth!</p>
      <input
        type="text"
        value={inputValue}
        required
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Player name..."
      />
      <button onClick={onNameSelect}>Start the game!</button>
    </div>
  )
}

export default StartScreen
