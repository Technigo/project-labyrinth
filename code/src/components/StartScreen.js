import React from 'react';
import { useSelector } from 'react-redux';
import NextStep from './NextStep';
import GameStart from './GameStart';

const StartScreen = () => {
  const starter = useSelector((store) => store.gamestate.username);

  return <div>{starter === '' ? <GameStart /> : <NextStep />}</div>;
}

export default StartScreen;
