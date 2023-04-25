import React, { useState } from 'react';
import { startGame, labyrinth } from 'reducers/labyrinth';
import { useDispatch } from 'react-redux';
import { StartContainer, SubmitBtn, TextP } from './GlobalStyles';
import Game from './Game';

const StartScreen = () => {
  const dispatch = useDispatch()

  const [usernameInput, setUsernameInput] = useState('')
  const [gameStart, setGameStart] = useState(false)
  const onSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(labyrinth.actions.setUsername(usernameInput))
    setGameStart(true)
    dispatch(startGame)
    // post username to the API
  }

  return (
    <StartContainer>
      <TextP>Welcome! Tell me your name:</TextP>
      <form
        type="submit"
        onSubmit={onSubmitHandler}>
        <input
          id=""
          type="text"
          placeholder="Enter username"
          onChange={(event) => setUsernameInput(event.target.value)} />
        <SubmitBtn type="submit">start</SubmitBtn>
      </form>

      {gameStart ? (
        <Game />
      ) : null}
    </StartContainer>
  )
}

export default StartScreen;