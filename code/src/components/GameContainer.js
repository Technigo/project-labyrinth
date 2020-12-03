import React from 'react';
import { useSelector } from 'react-redux';

import StartControls from './StartControls';
import GameControls from './GameControls';
import Loader from './Loader';

const GameContainer = () => {
  const gameStarted = useSelector((store) => store.game.isGameStarted);
  const loader = useSelector((state) => state.game.isLoading);

  return (
    <div>
      {loader && <Loader />}
      {!gameStarted && <StartControls />}
      {!loader && <GameControls />}   
    </div>
  )
}

export default GameContainer;