import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import game, { generateGame } from 'reducers/game';

const StartScreen = () => {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  const startGame = (event) => {
    event.preventDefault();
    dispatch(game.actions.setPlayer(inputValue));
    dispatch(generateGame());
  };

  return (
    <div>
      <div className='nes-container is-rounded'>
        <p>Welcome. Type your name:</p>
      </div>
      <form className='nes-field is-inline' onSubmit={startGame}>
        <input
          type='text'
          id='inline_field'
          value={inputValue}
          className='nes-input is-success'
          onChange={event => setInputValue(event.target.value)}
        />
        <button type='submit' className='nes-btn is-success'>Start the game</button>
      </form>
    </div>
  )
};

export default StartScreen;