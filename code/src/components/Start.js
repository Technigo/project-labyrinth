import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { labyrinth, startGame } from 'reducers/labyrinth';
import styled from 'styled-components/macro';

export const Start = () => {
  // const User = useSelector((store) => store.labyrinth.username)
  const [usernameInputValue, setUsernameInputValue] = useState('')
  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault()

    dispatch(labyrinth.actions.setUsername(usernameInputValue))
    console.log(usernameInputValue)
    dispatch(startGame())
  }

  return (
    <StartContainer>
      <form onSubmit={(event) => onFormSubmit(event)}>
        Welcome, insert name to start game:
        <input
          type="text"
          placeholder="type username"
          value={usernameInputValue}
          onChange={(event) => setUsernameInputValue(event.target.value)} />
        <button
          type="submit"> Start game
        </button>
      </form>
    </StartContainer>

  )
}

const StartContainer = styled.div`
font-size: 20px;
`