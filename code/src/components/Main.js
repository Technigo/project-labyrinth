import React from 'react';
import { useSelector } from 'react-redux';
import { Loader } from './Loader';
import StartScreen from './StartScreen';
import GameScreen from './GameScreen';

export const Main = () => {
  const username = useSelector((store) => store.labyrinth.username)
  const isLoading = useSelector((store) => store.loading.isLoading)
  const currentStep = useSelector((store) => store.labyrinth.currentStep);

  if (!currentStep || isLoading) {
    return <Loader />
  } else {
    return (
      <div>
        {username ? <GameScreen /> : <StartScreen />}
      </div>
    )
  }
}

