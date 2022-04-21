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
      <i className="snes-logo" />
      <div className='nes-container is-rounded'>
        <h1>Welcome to the Maze</h1>
      </div>
      <label> Enter your name:
        <form className='nes-field is-inline' onSubmit={startGame}>
          <input
            type='text'
            id='inline_field'
            value={inputValue}
            className='nes-input is-success'
            onChange={event => setInputValue(event.target.value)}
            placeholder="Type here"
            required
          />
          <button type='submit' className='nes-btn is-success'>Start</button>
        </form>
      </label>
    </section>
  )
};

export default StartScreen;