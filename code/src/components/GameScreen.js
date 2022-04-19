import React from 'react';
import { useSelector } from 'react-redux';
import { labyrinth } from '../reducers/labyrinth';

const GameScreen = () => {
  const game = useSelector((store) => store.labyrinth.game);
  return <div>{game.description}</div>;
};

export default GameScreen;
