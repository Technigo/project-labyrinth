import React from 'react';
import { useSelector } from 'react-redux';
import { Player } from '@lottiefiles/react-lottie-player';
import { Loading } from './Loading';
import { Game } from './Game';
import { StartGame } from './StartGame';

export const StartScreen = () => {
  const gameStarted = useSelector((store) => store.game.isStarted);
  const loading = useSelector((store) => store.game.loading);

  return (
    <>
      <div className="top-lottie-container">
        <Player src="https://assets9.lottiefiles.com/packages/lf20_LHHbJ8.json" className="top-lottie" loop autoplay />
      </div>
      <h1>The <span className="large-span">a-<span className="maze-span">MAZE</span>-ing</span> Labyrinth</h1>
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