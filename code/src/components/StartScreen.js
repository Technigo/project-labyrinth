import React from 'react';
import { useSelector } from 'react-redux';
import Quotes from './Quotes';
import GameStart from './GameStart';

const StartScreen = () => {
  const status = useSelector((store) => store.gamestate.status);

  return <div>{status === '' ? <GameStart /> : <Quotes />}</div>;
}

export default StartScreen;
