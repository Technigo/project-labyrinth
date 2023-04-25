import React from 'react'
import { useDispatch } from 'react-redux'
import { labyrinth, startGame } from 'reducers/labyrinth'

const StartScreen = () => {
  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(startGame())
  }
  const handleInputChange = (event) => {
    dispatch(labyrinth.actions.setUserName(event.target.value))
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>Enter name:
        <input type="text" required onChange={handleInputChange} />
        <button type="submit">Click here</button>
      </div>
    </form>
  )
}

export default StartScreen

