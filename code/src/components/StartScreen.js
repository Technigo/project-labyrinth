import React from 'react';
import { useSelector } from 'react-redux';
import Quotes from './Quotes';
import AuthorInputSearch from './AuthorInputSearch';

const StartScreen = () => {
  const quote = useSelector((store) => store.game.quote);

  return <div>{quote === '' ? <AuthorInputSearch /> : <Quotes />}</div>
}

export default StartScreen;