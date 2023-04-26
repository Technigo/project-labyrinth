import React from 'react';
import JokeInputSearch from './JokeInputSearch';
import Joke from './Joke';

const StartScreen = () => {
 
  return (
    <div>
        Start your adventure here
        <JokeInputSearch />
        <Joke />
    </div>);
}

export default StartScreen;

