import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import games, { createPlayer } from 'reducers/games';
// import styled from 'styled-components';

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
      <h1>Welcome to the labyrinth!</h1>
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