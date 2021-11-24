import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { start, fetchStart } from '../reducers/start';

import { StartContainer, InputFlex } from './StyledComponents';

export const StartPage = () => {
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  const onNameSet = event => {
    dispatch(start.actions.setUsername(username));
    dispatch(fetchStart(username));
  };

  const onSubmitName = event => {
    event.prevent.default();
  };

  return (
    <StartContainer>
      <label htmlFor='name'>Can you get through the labyrinth?</label>
      <p>Enter your name here</p>
      <InputFlex>
        {/* form? onSubmit i form, required på input */}
        <form onSubmit={onSubmitName}>
          <input
            required
            id='name'
            type='text'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </form>
        <button onClick={onNameSet}>Start game</button>
      </InputFlex>
    </StartContainer>
  );
};
