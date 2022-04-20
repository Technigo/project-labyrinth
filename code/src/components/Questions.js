import React from 'react';
import { useSelector } from 'react-redux';
import { StartScreen } from './StartScreen';
import { GameScreen } from './GameScreen';

export const Questions = () => {
  const gameQuestion = useSelector((store) => store.questions.gameQuestion);

  return <div>{gameQuestion ? <GameScreen /> : <StartScreen />}</div>;
};
