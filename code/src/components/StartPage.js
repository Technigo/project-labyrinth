import React, { useState } from 'react'
import labyrinth, { generateLabyrinthData } from 'reducers/labyrinth'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

const StartPage = () => {
  const [usernameInput, setUsernameInput] = useState('')
  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault()
    dispatch(labyrinth.actions.setUsername(usernameInput))
    dispatch(generateLabyrinthData(usernameInput))
  }
  return (
    <div>
      <h1>Welcome to the labyrinth!</h1>
      <FormStyled onSubmit={onFormSubmit}>
        <label htmlFor="username-input">
          Username:
          <input
            type="text"
            onChange={(event) => setUsernameInput(event.target.value)}
            id="username-input" />
        </label>
        <button type="submit">Start</button>
      </FormStyled>
    </div>
  )
}
export default StartPage

const FormStyled = styled.form`
    display: flex;
    align-items: flex-end;`