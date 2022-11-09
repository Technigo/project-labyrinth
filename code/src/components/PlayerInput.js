import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import games, { createPlayer } from 'reducers/games';

const PlayerInput = () => {
  const [playerInputValue, setPlayerInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(games.actions.setUserName(playerInputValue));
    dispatch(createPlayer());
  }

  return (
    <form onSubmit={(event) => onFormSubmit(event)}>
      <label htmlFor="player-input">
      Enter your name:
        <input id="player-input" type="text" onChange={(event) => setPlayerInputValue(event.target.value)} />
      </label>
      <button type="submit">Start the game!!!</button>
    </form>)
}

export default PlayerInput;