import React from 'react';
import { useSelector } from 'react-redux';
import StartScreen from './StartScreen';
import GameScreen from './GameScreen';

const FirstPage = () => {
  const starter = useSelector((store) => store.questions.username);
  return <div>{starter === '' ? <StartScreen /> : <GameScreen />}</div>;
};

export default FirstPage;
