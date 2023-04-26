import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Game } from 'reducers/Game';

export const EndGame = () => {
  const gameStep = useSelector((store) => store.game.response);
  const dispatch = useDispatch();
  const onRestartGame = () => {
    dispatch(Game.actions.restartGame())
  };

  return (
    <div>
      <p> {gameStep.description} </p>
      <button type="button" onClick={onRestartGame}>Restart Game!</button>
    </div>
  )
}