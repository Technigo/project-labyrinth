import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startGame, labyrinth } from 'reducers/labyrinth';
import { StartContainer, SubmitBtn, TextP } from '../styles/GlobalStyles';
// import GameScreen from './GameScreen';

const StartScreen = () => {
  const dispatch = useDispatch()

  const [usernameInput, setUsernameInput] = useState('')
  // const [gameStart, setGameStart] = useState(false)
  const onSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(labyrinth.actions.setUsername(usernameInput))
    // setGameStart(true)
    dispatch(startGame())
    // post username to the API
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

      {/* {gameStart ? (
        <GameScreen />
      ) : null} */}
    </StartContainer>
  )
}

export default StartScreen;