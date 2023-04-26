import React from 'react';
import { useSelector } from 'react-redux';
import { StartGame } from './StartGame';
import { Loading } from './Loading';
import { Game } from './Game';

export const StartScreen = () => {
  const gameStarted = useSelector((store) => store.game.isStarted);
  const loading = useSelector((store) => store.game.loading);

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div>
          {!gameStarted && <StartGame />}
          {gameStarted && <Game />}
        </div>
      )}
    </>
  )
}