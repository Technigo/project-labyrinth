import React from 'react';
import { useSelector } from 'react-redux';

import StartScreen from './StartScreen';
import GameScreen from './GameScreen';

const Game = () => {
  const step = useSelector (store => store.game.currentStep);

  return (
    <main>
      {step
        ? <GameScreen />
        : <StartScreen />
      }
    </main>
  )
};

export default Game;