/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import game, { startGame } from 'reducers/game';
import { v4 as uuidv4 } from 'uuid';
// import GameScreen from './GameScreen';

const StartScreen = () => {
  const [usernameInputValue, setUsernameInputValue] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(game.actions.setUsername(uuidv4() + '/' + usernameInputValue));
    dispatch(startGame('start'));
    dispatch(game.actions.showGame());
  };

  return (
    <form onSubmit={(event) => onFormSubmit(event)}>
      <label>Type in username:</label>
      <input
        type="text"
        placeholder="Enter name..."
        value={usernameInputValue}
        onChange={(event) => setUsernameInputValue(event.target.value)}
        required
      />
      <button type="submit"> submit</button>
    </form>
  );
};

export default StartScreen;
