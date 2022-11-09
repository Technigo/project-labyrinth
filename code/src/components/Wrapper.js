import React from 'react';
import { useSelector } from 'react-redux';
import EndScreen from './EndScreen';
import GameScreen from './GameScreen';
import StartScreen from './StartScreen';

const Wrapper = () => {
  const gameStart = useSelector((state) => state.game.gameStarted);
  const gameOver = useSelector((state) => state.game.gameOver);

  return <div>{!gameStart ? <StartScreen /> : <GameScreen />}</div>;
  /*   if (gameStarted) {
    return <GameScreen />;
  }

  if (gameOver) {
    return <EndScreen />;
  }
  return <StartScreen />; */
};

export default Wrapper;
