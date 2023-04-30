import React from 'react';
import { useSelector } from 'react-redux';
import Loading from 'components/Loading';
import { Game } from './Game';
import { StartGame } from './StartGame';

export const StartPage = () => {
  const gameStarted = useSelector((store) => store.game.isStarted);
  const loading = useSelector((store) => store.game.loading);

  return (
    <div className={gameStarted ? 'game-page' : 'start-page'}>
      {!gameStarted && <h1>Welcome to the Labyrinth</h1>}
      {loading && <Loading />}
      {!loading && (
        <div>
          {!gameStarted && <StartGame />}
          {gameStarted && <Game />}
        </div>
      )}
    </div>
  )
}