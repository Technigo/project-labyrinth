import React, { useState } from 'react';
import { startGame, labyrinth } from 'reducers/labyrinth';
import { useDispatch } from 'react-redux';
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
    <div>
      <p>Welcome! Tell me your name:</p>
      <form
        type="submit"
        onSubmit={onSubmitHandler}>
        <input
          id=""
          type="text"
          placeholder="Enter username"
          onChange={(event) => setUsernameInput(event.target.value)} />
        <button type="submit">start</button>
      </form>

      {gameStart ? (
        <Game />
      ) : null}
    </div>

  )
}

export default StartScreen;