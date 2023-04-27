import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { labyrinth, gameProgress } from '../reducers/labyrinth';
// import AuthorInputSearch from './AuthorInputSearch';
import Game from './Game';

const StartScreen = () => {
  const dispatch = useDispatch()

  const [usernameInput, setUsernameInput] = useState('')
  const onFormSubmit = (e) => {
    e.preventDefault()
    dispatch(labyrinth.actions.setUsername(usernameInput))
    dispatch(gameProgress('start'));
    dispatch(labyrinth.actions.showGame());

    // post username to the API
  }
  // Added useSelector to get the gameStarted value from the Redux store.
  const gameStarted = useSelector((state) => state.labyrinth.gameStarted)

  return (
    <div>
      <p>Welcome! Tell me your name:</p>
      <form
        type="submit"
        onSubmit={(event) => onFormSubmit(event)}>
        <input
          id=""
          type="text"
          placeholder="Enter name"
          value={usernameInput}
          onChange={(event) => setUsernameInput(event.target.value)}
          required />
        <button type="submit">start</button>
      </form>
      {gameStarted ? (<Game />) : null}
    </div>

  )
}

export default StartScreen;
