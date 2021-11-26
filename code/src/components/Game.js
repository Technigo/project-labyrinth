import React from 'react';
import { useSelector } from 'react-redux';

import { Labyrinth } from './Labyrinth';
import { Start } from './Start';
import { LoadingScreen } from './LoadingScreen';

export const Game = () => {
  const currentPosition = useSelector((store) => store.game.currentPosition);

  return (
    <>
      <LoadingScreen />
      {currentPosition ? <Labyrinth /> : <Start />}
    </>
  );
};
