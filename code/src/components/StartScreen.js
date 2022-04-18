import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import game from 'reducers/game';

const StartScreen = () => {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  const startGame = () => {
    dispatch(game.actions.setPlayer(inputValue));

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: "player"
      })
    }
    fetch('https://labyrinth-technigo.herokuapp.com/start', options)
      .then (res => res.json())
      .then(data => console.log(data));
  }
  return (
    <div>
      <p>Welcome to the game. Type your name</p>
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