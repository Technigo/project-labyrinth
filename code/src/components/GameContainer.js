import React from 'react';
import { useSelector } from 'react-redux';

import StartControls from './StartControls';

const GameContainer = () => {
  const gameState = useSelector((state) => state.game.game)
  return (
    <div>
      <p>{gameState.description}</p>

      <StartControls />
    </div>
  )
}

export default GameContainer;