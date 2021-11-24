import React from 'react'
import { useDispatch } from 'react-redux'

import { game, generateGame } from '../reducers/game'

export const EnterLabyrinth = () => {
  const dispatch = useDispatch()

  const handleInputChange = (event) => {
    dispatch(game.actions.setUsername(event.target.value))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(generateGame())
  }

  return (
    <>
      <h2>What shall we call you, oh lost one?</h2>
      <form onSubmit={handleSubmit} className='input-form'>
        <label>
          Player name:
          <input
            type="text"
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Enter the Labyrinth</button>
      </form>
    </>
  )
}