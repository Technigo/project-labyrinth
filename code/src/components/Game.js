/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { game, startGame } from 'reducers/game';

const Game = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(startGame());
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        click me
      </button>
    </div>
  );
};

export default Game;
