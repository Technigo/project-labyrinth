import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { game } from '../reducers/game';

export const Start = () => {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch();

  const onUsernameChange = (event) => {
    dispatch(game.actions.enterUsername(username));
    event.preventDefault();
  }

  return (
    <form onSubmit={onUsernameChange}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}></input>
      </label>
      <input type="submit" value="Submit"></input>
    </form>
  )
}