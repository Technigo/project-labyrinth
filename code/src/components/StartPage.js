import React from 'react'
import { useDispatch } from 'react-redux'

import { game, startGame } from '../reducers/game'

const StartPage = () => {
  const dispatch = useDispatch()

  const handleInputChange = (event) => {
    dispatch(game.actions.setUsername(event.target.value))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(startGame())
  }

  return (
    <div className='start-page'>
      <p>StartPage!!!</p>
      <h1>Welcome to the Labyrinth</h1>
      <h2>please enter your username</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type='text'
            required
            placeholder='enter your username...'
            onChange={handleInputChange}
          />
        </label>
        <button type='submit'>Start the Labyrinth</button>
      </form>
    </div>
  )
}

export default StartPage
