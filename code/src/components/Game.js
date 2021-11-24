import React from 'react';
import { useSelector } from 'react-redux';

import { Starting } from './Starting';
import { Labyrinth } from './Labyrinth';

export const Game = () => {
  const currentPosition = useSelector((state) => state.labyrinthSlice.currentPosition);
  
  return <main className="main">{currentPosition ? <Labyrinth /> : <Starting />}</main>;
};
