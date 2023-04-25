import React from 'react';
import { useSelector } from 'react-redux';
import { LabyrinthScreen } from './LabyrinthScreen';
import { Start } from './Start';

export const LabyrinthWrapper = () => {
  const gameStarted = useSelector((state) => state.labyrinth.gameStarted);

  if (gameStarted) {
    return <LabyrinthScreen />;
  } else return <Start />;
};