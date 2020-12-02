import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { game } from '../reducers/game';


import StartControls from './StartControls';
import GameControls from './GameControls';

const GameContainer = () => {
  const gameStarted = useSelector((store) => store.game.isGameStarted);

  return (
    <div>
      {!gameStarted && <StartControls />}
      <GameControls />   
      
    </div>
  )
}

export default GameContainer;