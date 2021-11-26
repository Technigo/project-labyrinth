import React from 'react';
import { useSelector } from 'react-redux';

import { Labyrinth } from './Labyrinth';
import { Start } from './Start';
import { LoadingScreen } from './LoadingScreen';

export const Game = () => {
  const loading = useSelector((store) => store.game.loading);
  const currentPosition = useSelector((store) => store.game.currentPosition);

  return (
    <>
      {loading && <LoadingScreen />}
      {currentPosition ? <Labyrinth /> : <Start />}
    </>
  );
};
