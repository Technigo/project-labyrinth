import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import games, { generateGame } from '../reducers/games'

const StartScreen = () => {
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch()

  const onUsernameSet = () => {
    dispatch(games.actions.setUsername(inputValue))
    dispatch(generateGame())
} 

  return (
    <div>
      <p>Welcome to the game!</p>
      <input
        type='text'
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
      />
      <button onClick={onUsernameSet}>Start the game!</button>
    </div>
  )
}

export default StartScreen