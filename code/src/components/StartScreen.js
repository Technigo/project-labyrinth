import React, { useState } from 'react';
import labyrinth, { getLabyrinth } from 'reducers/labyrinth'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

const StartScreen = () => {
  const [usernameInput, setUsernameInput] = useState('')
  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault()
    dispatch(labyrinth.actions.setUsername(usernameInput))
    dispatch(getLabyrinth(usernameInput))
  }
  return (
    <StyledStartPage>
      <h1>Welcome to the labyrinth!</h1>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="username-input">
          Username:
          <input
            type="text"
            onChange={(event) => setUsernameInput(event.target.value)}
            value={usernameInput}
            id="username-input" />
        </label>
        <button disabled={usernameInput.length < 1} type="submit">Start</button>
      </form>
    </StyledStartPage>
  )
}
export default StartScreen

const StyledStartPage = styled.div`
color: red;
`