import React from 'react';
import { useSelector } from 'react-redux';
import QuotesCA from './QuotesCA';
import AuthorInputSearchAC from './AuthorInputSearchCA';

const StartScreen = () => {
  const quote = useSelector((store) => store.quotes.quote);

  return (
    <div>{quote === '' ? <AuthorInputSearchAC /> : <QuotesCA />}</div>
  );
}

export default StartScreen;

// -------Syled Components --------