import React from 'react';
import { useSelector } from 'react-redux';

import { StartPage } from './StartPage';
import { Description } from './Description';
import { LoadingLottie } from './Lottie';
import Lottie from 'react-lottie';

export const LabyrinthGame = () => {
  const currentPosition = useSelector(
    (store) => store.labyrinth.currentPosition
  );

  return (
    <>
      {currentPosition ? <LabyrinthGame /> : <StartPage />}
      <LoadingLottie />
    </>
  );
};
