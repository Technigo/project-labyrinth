/* eslint-disable max-len */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGameStart, maingame } from 'reducers/maingame';
import { GamePage } from './GamePage';

export const StartPage = () => {
  const [usernameInput, setUserNameInput] = useState('')
  const dispatch = useDispatch();
  const globalGameProps = useSelector((store) => store.maingame.gameProps.coordinates);

  const onFormSubmit = (event) => {
    event.preventDefault()
    dispatch(maingame.actions.setUsername(usernameInput))
    dispatch(fetchGameStart())
  }

  // Renders the GamePage in the browser if the gameProps is populated with an object with properties.
  if (globalGameProps) {
    return <GamePage />
  }

  return (
    <div>
      <p> Welcome to the Labyrinth</p>
      <form onSubmit={onFormSubmit}>
          Username:
        <input
        // This button will do our initial fetch to fetch the first game instructions from
        // the backend
          type="text"
          onChange={(event) => setUserNameInput(event.target.value)}
          id="username-input"
          value={usernameInput} />
        <button onClick={onFormSubmit} type="submit">Start</button>
      </form>
    </div>
  )
}

/* The start game button triggers the first fetch thunk to fetch the first set of instructions
received from the response when doing the first POST request. The current username is sent as a prop
so we can send that data on our POST request */