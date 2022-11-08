/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import game from 'reducers/game';

const StartPage = () => {
  const [usernameInputValue, setUsernameInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(game.actions.setUsername(usernameInputValue));
  };

  return (
    <>
      <form onSubmit={(event) => onFormSubmit(event)}>
        <label>Type in username:</label>
        <input
          type="text"
          placeholder="Enter name..."
          value={usernameInputValue}
          onChange={(event) => setUsernameInputValue(event.target.value)}
        />
        <button type="submit"> submit</button>
      </form>
    </>
  );
};

export default StartPage;
