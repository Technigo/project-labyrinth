import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { game, startGame } from '../reducers/game'

const StartPage = () => {
  const dispatch = useDispatch()
  const username = useSelector((state) => state.game.username)

  const handleInputChange = (event) => {
    dispatch(game.actions.setUsername(event.target.value))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(startGame())
  }

  return (
    <div className='start-page'>
      <h1>Welcome to the Labyrinth</h1>
      <h2>please provide a username to enter the maze</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type='text'
            value={username}
            required
            placeholder='your username...'
            onChange={handleInputChange}
          />
        </label>
        <p>(minimum 3 characters)</p>
        <button type='submit' disabled={username.length < 3}>
          Start the Labyrinth
        </button>
      </form>
    </div>
  )
}

export default StartPage
