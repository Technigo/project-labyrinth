/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { useSelector } from 'react-redux';

// import { nextMove } from './reducers/game'

export const Gameplay = () => {
  const progress = useSelector((state) => state.game.progress);

  return (
    <div>
      <p>Coordinates: {progress.coordinates}</p>
      <p>Description: {progress.description}</p>
      <p>ActionsArrayDescription: {progress.actions[0].description}</p>
      <p>ActionsArrayDirection: {progress.actions[0].direction}</p>
      <p>ActionsArrayType: {progress.actions[0].type}</p>
    </div>
  )
};