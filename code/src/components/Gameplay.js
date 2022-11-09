/* eslint-disable react/jsx-no-useless-fragment */

import React from 'react';
import { useSelector } from 'react-redux';
import { LoadingScreen } from './LoadingScreen';

export const Gameplay = () => {
  const progress = useSelector((state) => state.game.progress);
  const isLoading = useSelector((state) => state.game.isLoading)

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div>
          <p>Coordinates: {progress.coordinates}</p>
          <p>Description: {progress.description}</p>
          <p>ActionsArrayDescription: {progress.actions[0].description}</p>
          <p>ActionsArrayDirection: {progress.actions[0].direction}</p>
          <p>ActionsArrayType: {progress.actions[0].type}</p>
        </div>
      )}
    </>
  )
};