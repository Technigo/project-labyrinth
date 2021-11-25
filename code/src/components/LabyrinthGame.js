import React from 'react';
import { useSelector } from 'react-redux';
import { StartPage } from './StartPage';
import { Description } from './Description';
import { LoadingLottie } from './Lottie';

export const LabyrinthGame = () => {
  const currentPosition = useSelector(
    (store) => store.labyrinth.currentPosition
  );

  return (
    <>
      {currentPosition ? <Description /> : <StartPage />}
      <LoadingLottie />
    </>
  );
};
