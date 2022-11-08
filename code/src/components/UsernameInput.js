/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { game, startGame } from 'reducers/game';

export const UsernameInput = () => {
  const [UsernameInputValue, setUsernameInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    console.log('Form submitted')
    event.preventDefault();
    dispatch(game.actions.setUsername(UsernameInputValue));
    dispatch(startGame())
  }

  return (
    <form onSubmit={(event) => onFormSubmit(event)}>
      <label>
          Enter your name:
        <input type="text" onChange={(event) => setUsernameInputValue(event.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}