import React from 'react';
// import { useSelector } from 'react-redux';
import Quotes from './Quotes';
import PlayerInput from './PlayerInput';

const StartScreen = () => {
  // const quote = useSelector((store) => store.game.quote);

  return (
    <div>
      <PlayerInput />
      <Quotes />
    </div>
  )
}

export default StartScreen;