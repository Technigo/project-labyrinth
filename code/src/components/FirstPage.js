import React from 'react';
import { useSelector } from 'react-redux';
import NextStep from './NextStep';
import StartScreen from './StartScreen';

const FirstPage = () => {
  const starter = useSelector((store) => store.questions.username);

  return <div>{starter === '' ? <StartScreen /> : <NextStep />}</div>;
};

export default FirstPage;
