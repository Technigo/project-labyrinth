import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import games, { createPlayer } from 'reducers/games';
import Header from './Header';

const PlayerInput = () => {
  const [PlayerInputValue, setPlayerInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(games.actions.setUserName(PlayerInputValue));
    dispatch(createPlayer());
  }

  return (
    <>
      <Header />
      <h2>Do you want to play a game?</h2>
      <form onSubmit={(event) => onFormSubmit(event)}>
        <label htmlFor="player-input">
      Enter player name:
          <input id="player-input" required type="text" onChange={(event) => setPlayerInputValue(event.target.value)} />
        </label>
        <button type="submit">Start Game</button>
      </form>
    </>
  )
}

export default PlayerInput;