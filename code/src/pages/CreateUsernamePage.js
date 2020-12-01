import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { gamestate } from 'reducers/gamestate';
import { StartGamePage } from './StartGamePage';

// In this component there is a text input field for the user to enter a username
// this username is saved in a local state and sent as a prop to our setUsername
// action, when that action is dispatched in the reducer, it will save the username
// in the global state
export const CreateUsernamePage = () => {
  const globalUsername = useSelector((state) => state.gamestate.username);
  const [username, setUsername ] = useState('');

  const dispatch = useDispatch();

  const addUsername = (event) => {
    event.preventDefault();

    // Send the username that the user entered in the text field (this username is saved
    // in a local state), to the gamestate reducer global state, so we can pass it in our POST request
    dispatch(gamestate.actions.setUsername(username))
  };

  // Once the username is saved globally, we can move on to the StartGamePage
  if (globalUsername) {
    return <StartGamePage />
  };

  return (
    <>
    <h1>MAZE GAME</h1>
      <form onSubmit={addUsername}>
        <label>
          Enter a Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            />
        </label>
        <button type="submit">Create Username</button>
      </form>
    </>
  )
};

// Flow: CreateUsernamePage > StartGamePage > InGamePage
