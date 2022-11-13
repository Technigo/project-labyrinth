/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import game, { generateGame } from 'reducers/game';
import styled from 'styled-components';
import { Button } from 'utils/GlobalStyle';

// Game starts when the user inputs their username
const UsernameInput = () => {
  const [UsernameInputValue, setUsernameInputValue] = useState('');

  /* function that starts the game, prevents page from reloading and empties input field */
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
        <InputStyle
          id="username-input"
          type="text"
          onChange={(event) => setUsernameInputValue(event.target.value)}
          value={UsernameInputValue}
        />
      </label>
      <Button start type="submit">
        START
      </Button>
    </form>
  );
};

export default UsernameInput;

const InputStyle = styled.input`
  margin-left: 10px;
  font-family: inherit;
  padding: 0 5px;
  font-size: 16px;
  outline: none;
  background-color: transparent;
`;
