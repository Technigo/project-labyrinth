import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { start } from '../reducers/start';

import { fetchStart } from '../reducers/start';

export const StartGame = () => {
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  const onGameStart = () => {
    dispatch(start.actions.setUsername(username));
    dispatch(fetchStart());
  };
  const coordinates = useSelector(state => state.fetchStart);

  return (
    <main>
      <h1>Can you get through the labyrinth?</h1>
      <p>Enter your name here</p>
      <div>
        <input
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <p>{fetchStart.coordinates}</p>
        <button onClick={onGameStart}>Start game</button>
      </div>
    </main>
  );
};
