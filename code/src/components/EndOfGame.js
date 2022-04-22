import React from 'react';
import { useSelector } from 'react-redux';

import { BtnNavigate } from './GameScreen';

const TheEnd = () => {
  const moves = useSelector((store) => store.labyrinth.moves);

  const restart = () => {
    window.location.reload();
  };
  return (
    <>
      <h3>You escaped the maze in {moves.length} moves.</h3>
      <BtnNavigate onClick={restart}>Restart Game!</BtnNavigate>
    </>
  );
};

export default TheEnd;
