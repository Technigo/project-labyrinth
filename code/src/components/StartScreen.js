import React, { useState } from 'react';
import { labyrinth, gameProgress } from 'reducers/labyrinth';
import { useDispatch } from 'react-redux';
// import AuthorInputSearch from './AuthorInputSearch';
import Game from './Game';

const StartScreen = () => {
  const dispatch = useDispatch()

  const [usernameInput, setUsernameInput] = useState('')
  const onFormSubmit = (e) => {
    e.preventDefault()
    dispatch(labyrinth.actions.setUsername(usernameInput))
    dispatch(gameProgress('start'));
    dispatch(labyrinth.actions.showGame(true));

    // post username to the API
  }

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
        <button type="button">start</button>
      </form>
      {labyrinth.gameStarted ? (
        <Game />
      ) : null}
    </div>

  )
}

export default StartScreen;
