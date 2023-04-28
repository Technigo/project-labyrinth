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
color: white;
margin: 0 0 20px 0;
padding: 10px;
width: auto;

h1 {
  text-align: center;
}

input {
  height: 30px;
  border-radius: 5px;
  border: 1px solid white;
  margin: 10px;
  color: #79c99e;
  font-weight: bold;
}

button {
  cursor: pointer;
  transition: 0.3s ease-in-out;
  height: 34px;
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  font-size: 1.2rem; 
  
  &:hover {
      transform: scale(1.07);
      border: 2px solid #79c99e;
}
}

@media (max-width:900px) {
  width: 30%;
  font-size: 0.8rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  }
`