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
    <section className='start-game'>
      <h1 className='heading'>Welcome to the maze!</h1>
      <p className='start-text'>Enter your name</p>
      <input className='input'
        type='text'
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
      />
      <button className='btn' onClick={onUsernameSet}>Start!</button>
    </section>
  )
}

export default StartScreen