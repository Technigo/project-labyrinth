import React from 'react';
import { useSelector } from 'react-redux';
import GameScreen from './GameScreen';
import StartScreen from './StartScreen';

const Wrapper = () => {
  const gameStarted = useSelector((state) => state.game.gameStarted);

  if (gameStarted) {
    return <GameScreen />;
  } else return <StartScreen />;
};

export default Wrapper;
