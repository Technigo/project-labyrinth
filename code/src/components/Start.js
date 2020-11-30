import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { game } from '../reducers/game';
import { onStartGame } from '../reducers/reusable';

export const Start = () => {
  const [username, setUsername] = useState('');
  const stateUsername = useSelector((state) => state.game.username);
  const dispatch = useDispatch();

  const onUsernameChange = (event) => {
    dispatch(game.actions.enterUsername(username));
    dispatch(onStartGame(username))
    event.preventDefault();
  }

  return (
    <>
      {!stateUsername && (
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
        )}
    </>
  )
}