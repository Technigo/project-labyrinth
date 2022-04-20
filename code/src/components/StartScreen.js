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
    <section className='start-container'>
      <i class="snes-logo" />
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
          required
        />
        <button type='submit' className='nes-btn is-success'>Start the game</button>
      </form>
    </section>
  )
};

export default StartScreen;