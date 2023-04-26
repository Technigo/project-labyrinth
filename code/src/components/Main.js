import React from 'react';
import { GameBoard } from 'components/GameBoard'
import { useSelector } from 'react-redux';
import { WelcomeScreen } from 'components/WelcomeScreen';

export const Main = () => {
  const coordinates = useSelector((store) => store.labyrinth.coordinates);
  return (
    <div>
      {coordinates === '' && <WelcomeScreen />}
      {coordinates !== '' && <GameBoard />}
    </div>
  )
}
