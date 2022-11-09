import React from 'react';
import { useSelector } from 'react-redux';
import EndScreen from './EndScreen';
import GameScreen from './GameScreen';
import StartScreen from './StartScreen';

const Wrapper = () => {
  const gameStarted = useSelector((state) => state.game.gameStarted);
  const gameOver = useSelector((state) => state.game.gameOver);

  if (gameStarted) {
    return <GameScreen />;
  } else if (gameOver) {
    return <EndScreen />;
  } else return <StartScreen />;
};

export default Wrapper;
