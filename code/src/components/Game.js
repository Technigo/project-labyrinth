import React from 'react';
import { useSelector } from 'react-redux';

import { Starting } from './Starting';
import { Labyrinth } from './Labyrinth';
import { Loading } from './Loading';

export const Game = () => {
  const currentPosition = useSelector((state) => state.labyrinthSlice.currentPosition);
  
  return <main className="main">{currentPosition ? <Labyrinth /> : <Starting />}
  <Loading /></main>;
};
