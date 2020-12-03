import React from 'react';
import { useSelector } from 'react-redux';

import { Button } from "../lib/Buttons"

export const GameOver = () => {
  const statusGame = useSelector((state) => state.game.status);

  return (
    <>
      {/* <h1>{statusGame.description}</h1> */}
      <Button 
        onClick={() => window.location.reload()}
        title="play again"
      />
    </>
  );
};