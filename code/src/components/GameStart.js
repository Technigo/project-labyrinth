import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { gameState, fetchGame } from 'reducers/gameState';

const GameStart = () => {
  const dispatch = useDispatch()
  const [userName, setUserName] = useState('');

  const onNameSubmit = (event) => {
    event.preventDefault();
    dispatch(gameState.actions.setUser(userName));
    dispatch(fetchGame());
  }

  return (
    <form onSubmit={(event) => onNameSubmit(event)}>
      <h1>Welcome to this labyrinth</h1>
      <label htmlFor="user-name"><h2>Please enter your name</h2>
        <input
          id="user-name"
          type="text"
          placeholder="A name never used before"
          onChange={(event) => setUserName(event.target.value)}
          required />
      </label>
      <button
        type="submit"
        className="start-button">
        Start playing
      </button>
    </form>
  )
};

export default GameStart;
