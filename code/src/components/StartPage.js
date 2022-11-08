import React, { useState } from 'react'
import labyrinth, { generateLabyrinthData } from 'reducers/labyrinth'
import { useDispatch } from 'react-redux'

const StartPage = () => {
  const [usernameInput, setUsernameInput] = useState('')
  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault()
    dispatch(labyrinth.actions.setUsername(usernameInput))
    dispatch(generateLabyrinthData())
  }
  return (
    <div>
      <h1>Welcome to the labyrinth!</h1>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="username-input">
          Username:
          <input
            type="text"
            onChange={(event) => setUsernameInput(event.target.value)}
            id="username-input" />
        </label>
        <button type="submit">Start</button>
      </form>
    </div>
  )
}
export default StartPage