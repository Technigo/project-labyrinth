import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Game, startGame } from 'reducers/Game';

export const StartGame = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const onAddUsername = (event) => {
    event.preventDefault();
    dispatch(Game.actions.setUsername(inputValue));
    dispatch(startGame());
  };

  return (
    <section>
      <form className="UsernameForm" onSubmit={onAddUsername}>
        <label htmlFor="usernameForm">
          <input
            id="usernameForm"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            type="text" />
        </label>
        <button
          type="submit">
          Start Game
        </button>
      </form>
    </section>
  )
}