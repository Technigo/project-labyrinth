import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import game, { generateGame } from 'reducers/game';

const StartScreen = () => {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  const startGame = () => {
    dispatch(game.actions.setPlayer(inputValue));
    dispatch(generateGame());
  }
  
  return (
    <div>
      <p>Welcome. Type your name:</p>
      <input 
        type="text"
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
      />
      <button onClick={startGame}>Start the game</button>
    </div>
  )
};

export default StartScreen;