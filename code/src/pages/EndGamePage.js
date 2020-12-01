import React from 'react';
import { useSelector } from 'react-redux';

export const EndGamePage = () => {
  const globalGameStatus = useSelector((state) => state.gamestate.gameStatus);

  return (
    <>
      <h1>{globalGameStatus.description}</h1>
      <button onClick={() => window.location.reload()}>Start New Game</button>
    </>
  );
};
