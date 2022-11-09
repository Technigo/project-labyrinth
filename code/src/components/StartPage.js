/* eslint-disable max-len */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGameStart, maingame } from 'reducers/maingame';

/* const onNameSubmit = (name) => {
  dispatchEvent(maingame.actions.setUsername(name))
} */

export const StartPage = () => {
  const [usernameInput, setUserNameInput] = useState('')
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault()
    dispatch(maingame.actions.setUsername(usernameInput))
    dispatch(fetchGameStart())
  }
  return (
    <div>
      <p> Welcome</p>
      <form onSubmit={onFormSubmit}>
          Username:
        <input
        // This button will do our initial fetch to fetch the first game instructions from
        // the backend
          type="text"
          onChange={(event) => setUserNameInput(event.target.value)}
          id="username-input" />
        <button type="submit">Start</button>
      </form>
    </div>
  )
}

/* The start game button triggers the first fetch thunk to fetch the first set of instructions
received from the response when doing the first POST request. The current username is sent as a prop
so we can send that data on our POST request */