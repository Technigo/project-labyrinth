import React from 'react';
import { useDispatch } from 'react-redux';
import { game } from 'reducers/game';
import { startGame } from 'reducers/game';

import './start.css';

export const Start = () => {
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    dispatch(game.actions.setUserName(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(startGame());
  };

  return (
    <div className='start-background'>
      <div className='start-wrapper'>
        <h1>Enter the labyrinth</h1>
        <form onSubmit={handleSubmit}>
          {/* <label> */}
          <>
            <input
              type='text'
              placeholder="What's your name?"
              required
              onChange={handleInputChange}
            />
          </>
          {/* </label> */}
          <button type='submit'>Let's get lost</button>
        </form>
      </div>
    </div>
  );
};
