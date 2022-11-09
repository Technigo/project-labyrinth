/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import game, { generateGame } from 'reducers/game';

// Game starts when the user inputs their username
const UsernameInput = () => {
  const [UsernameInputValue, setUsernameInputValue] = useState('');

  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(game.actions.setUsername(UsernameInputValue));
    dispatch(generateGame());
    setUsernameInputValue('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="username-input">
        Enter username
        <input
          id="username-input"
          type="text"
          onChange={(event) => setUsernameInputValue(event.target.value)}
          value={UsernameInputValue}
        />
      </label>
      <button type="submit">START</button>
    </form>
  );
};

export default UsernameInput;
