/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import game, { generateGame } from 'reducers/game';

const UsernameInput = () => {
  const [UsernameInputValue, setUsernameInputValue] = useState('');

  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(game.actions.setUsername(UsernameInputValue));
    dispatch(generateGame());
  };

  return (
    <form
      onSubmit={(e) => {
        onFormSubmit(e);
        setUsernameInputValue('');
      }}
    >
      <label htmlFor="username-input">
        Enter username
        <input
          id="username-input"
          type="text"
          onChange={(event) => setUsernameInputValue(event.target.value)}
          value={UsernameInputValue}
        />
      </label>
      <button type="submit"/* onClick={() => dispatch(generateGame())} */>START</button>
    </form>
  );
};

export default UsernameInput;
