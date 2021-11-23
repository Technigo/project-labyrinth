import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { start, fetchStart } from '../reducers/start';

export const StartPage = () => {
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  const onNameSet = () => {
    dispatch(start.actions.setUsername(username));
    dispatch(fetchStart(username));
  };

  return (
    <main>
      <label htmlFor='name'>Can you get through the labyrinth?</label>
      <p>Enter your name here</p>
      <div>
        <input
          id='name'
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button onClick={onNameSet}>Start game</button>
      </div>
    </main>
  );
};
