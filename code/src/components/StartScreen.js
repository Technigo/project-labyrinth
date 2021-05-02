import React, { useState } from 'react'
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
    <div className='startscreen-container fade-in'>
      <h1>Welcome to Labyrinth!</h1>
      <label htmlFor='textinput'>Enter your name:</label>
      <input
        className='textinput'
        id='textinput'
        type='text'
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
      />
      <button
        onClick={onStartSet}
        disabled={!inputValue}
      >
        Start the story
      </button>
    </div>
  )
}

export default StartScreen
