import React from 'react';
import { useSelector } from 'react-redux';

import StartScreen from './StartScreen';
import GameScreen from './GameScreen';
import LoadingIndicator from 'components/LoadingIndicator';

const Game = () => {
  const step = useSelector (store => store.game.currentStep);
  const isLoading = useSelector((store) => store.ui.isLoading);

  return (
    <>
      {isLoading ? <LoadingIndicator /> : <main className='main-container'>
        {step 
          ? <GameScreen />
          : <StartScreen />
        }
      </main>
      }
    </>
  )
};

export default Game;