import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startGame, labyrinth } from 'reducers/labyrinth';
import { StartContainer, SubmitBtn, TextP } from '../styles/GlobalStyles';

const StartScreen = () => {
  const dispatch = useDispatch()

  const [usernameInput, setUsernameInput] = useState('')
  const onSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(labyrinth.actions.setUsername(usernameInput))
    dispatch(startGame())
  }

  return (
    <StartContainer>
      <form
        onSubmit={onSubmitHandler}>
        <TextP>Welcome! Tell me your name:</TextP>
        <input
          required
          type="text"
          placeholder="Enter username"
          value={usernameInput}
          onChange={(event) => setUsernameInput(event.target.value)} />
        <SubmitBtn type="submit">Start</SubmitBtn>
      </form>

    </StartContainer>
  )
}

export default StartScreen;