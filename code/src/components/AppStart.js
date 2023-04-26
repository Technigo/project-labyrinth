import React from 'react';
import { useSelector } from 'react-redux';
import { StartGame } from 'components/StartGame';
import { GameScreen } from 'components/GameScreen';

export const AppStart = () => {
  const username = useSelector((store) => store.game.username);

  return (
    <div>
      {username === '' ? <StartGame /> : <GameScreen />}
    </div>
  );
};