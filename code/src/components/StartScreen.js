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
color: black;
margin: 5px;
padding: 10px;

input {
  height: 30px;
  border-radius: 5px;
  border: 1px solid white;
  margin: 10px;
}

button {
  cursor: pointer;
  transition: 0.3s ease-in-out;
  height: 34px;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  margin: 10px;

  }
  &:hover {
      transform: scale(1.07);
    }
}
`