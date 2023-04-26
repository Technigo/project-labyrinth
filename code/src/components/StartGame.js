import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { game, startGame } from 'reducers/game';

export const StartGame = () => {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();

  const InputUserName = (event) => {
    event.preventDefault();
    dispatch(game.actions.InputUserName(userName));
    dispatch(startGame());
  }

  return (
    <form onSubmit={InputUserName}>
      <label htmlFor="user-input">
        <input id="user-input" type="text" placeholder="Input name here" onChange={(event) => setUserName(event.target.value)} value={userName} />
      </label>
      <button type="submit">Enter Labyrinth</button>
    </form>
  )
}