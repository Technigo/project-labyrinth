import React from 'react';
import { useSelector } from 'react-redux';
import Quotes from './Quotes';
import StartGame from './StartGame';

const StartScreen = () => {
  const quote = useSelector((store) => store.quotes.quote);
  return <div>{quote === '' ? <StartGame /> : <Quotes />}</div>
}

export default StartScreen;