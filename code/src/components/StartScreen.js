import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

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
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={onNameSelect}>Start the game!</button>
    </div>
  )
}

export default StartScreen
