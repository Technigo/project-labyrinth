import React from 'react';
import { useSelector } from 'react-redux';

export const GameOver = () => {
  const statusGame = useSelector((state) => state.game.status);

  return (
    <>
      <h1>{statusGame.description}</h1>
      <button onClick={() => window.location.reload()}>Play again</button>
    </>
  );
};