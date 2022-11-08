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
          type="text"
          onChange={(event) => setUserNameInput(event.target.value)}
          id="username-input" />
        <button type="submit">Start</button>
      </form>
    </div>
  )
}