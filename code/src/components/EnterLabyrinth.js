import React from 'react'
import { useDispatch } from 'react-redux'

import { game } from '../reducers/game'
import { generateGame } from '../reducers/game'

export const EnterLabyrinth = () => {
  const dispatch = useDispatch()

  const handleInputChange = (event) =>  {
  dispatch(game.actions.setUsername(event.target.value))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(generateGame())
  }


  return (
    <>
    <h1>The Labyrinth</h1>
    <form onSubmit={handleSubmit}>
      <label> 
        Add your name
        <input type="text" required onChange={handleInputChange} />
      </label>
      <button type="submit">Enter</button>
      </form>
      </>
  )
}