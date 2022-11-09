/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { game, fetchStart } from 'reducers/game';

import { GameCard } from './StyledComponents'

const StartPage = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(game.actions.setUsername(username))
    dispatch(fetchStart());
  };

  return (
    <GameCard
      title="Welcome Adventurer!"
      secondaryTitle="Pleace enter your name to enter the doungeon">
      <form onSubmit={onFormSubmit}>
        <label>
          <input
            id="user-input"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Name, here goes young padawan"
            required=" "
            autoComplete="off" />
        </label>
        <button type="submit">Begin</button>
      </form>
    </GameCard>
  )
}

export default StartPage;

// might be best to style the button and input here, and form -
// it seems complicated to style them the other way