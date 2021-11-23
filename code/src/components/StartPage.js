import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { gamestate } from 'reducers/gamestate';

import { fetchGameInstructions } from 'reducers/gamestate';

import styled from 'styled-components';


export const StartPage = () => {
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();

  const setUsernameInStore = (event) => {
    event.preventDefault();

    dispatch(gamestate.actions.setUsername(username))

    dispatch(fetchGameInstructions(username));

  };

  return (
    <>
    <StartScreen>
      <form onSubmit={setUsernameInStore}>
        <label>
          Enter a Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <button type="submit">Let's go!</button>
      </form>
      </StartScreen>
    </>
  );
};

export const StartScreen = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
text-align: center;
`

