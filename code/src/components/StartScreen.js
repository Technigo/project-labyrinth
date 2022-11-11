import React from 'react';
import { useSelector } from 'react-redux';
import GameBoard from './GameBoard';
import StartGame from './StartGame';
import Loading from './Loading';

const StartScreen = () => {
  const gameStarted = useSelector((store) => store.game.started);
  const loading = useSelector((store) => store.game.loading);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div>
          {!gameStarted && <StartGame />}
          {gameStarted && <GameBoard />}
        </div>
      )}
    </>
  )
}

export default StartScreen;
