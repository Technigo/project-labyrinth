import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import { game, generateLabyrinth } from 'reducer/game';
import { DuckContainer } from 'styled-components/GlobalStyles';
import { DucklingHeader } from './DucklingHeader';

export const StartingPage = () => {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch();

  const onUsernameInput = () => {
    dispatch(game.actions.setUserName(username));
    dispatch(generateLabyrinth());
  }

  return (
    <section>
      <div>
        <DuckContainer>
          <DucklingHeader />
        </DuckContainer>

        <h1>Hi</h1>
        <h2>welcome</h2>
        <p>who are you?</p>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)} />
        <button
          type="submit"
          onClick={onUsernameInput}>
            Start
        </button>
      </div>
    </section>
  )
};