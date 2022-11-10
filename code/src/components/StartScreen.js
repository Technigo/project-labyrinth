import React from 'react';
import { useSelector } from 'react-redux';
import GameBoard from './GameBoard';
import StartGame from './StartGame';

const StartScreen = () => {
  const gameStarted = useSelector((store) => store.game.started);

  return (
    <>
      {!gameStarted && <StartGame />}
      {gameStarted && <GameBoard />}
    </>
  )
}

export default StartScreen;
