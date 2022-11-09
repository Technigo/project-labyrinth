import React from 'react';
import { useSelector } from 'react-redux';
import Game from './Game';
import StartGame from './StartGame';

const StartScreen = () => {
  const gameStarted = useSelector((store) => store.game.started);

  return (
    <>
      {!gameStarted && <StartGame />}
      {gameStarted && <Game />}
    </>
  )
}

export default StartScreen;
