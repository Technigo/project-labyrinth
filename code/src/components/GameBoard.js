import React from 'react';
import { MainGame } from './MainGame';
import { StartPage } from './StartPage';
import { useSelector } from 'react-redux';

const GameBoard = () => {
  const isUserName = useSelector((state) => state.game.username);
  return <div>{isUserName !== '' ? <MainGame /> : <StartPage />}</div>;
};

export default GameBoard;
