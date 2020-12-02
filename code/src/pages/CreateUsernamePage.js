import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { gamestate } from 'reducers/gamestate';
import { StartGamePage } from './StartGamePage';

const CreateUsernameBackground = styled.div`
  background-image: url("https://walterbaiamonte.files.wordpress.com/2015/11/cabinet1.gif?w=372");
  background-size: cover;
  background-position: center;
  height: 700px;
  max-width: 1350px;
  margin: auto;
  margin-top: 100px;
`;

const UsernameFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20%;
  text-align: center;
  color: white;
  max-width: 250px;
  margin: auto;

  // Mobile query
  @media (max-width: 768px) {
    padding-top: 250px;    
  }

  // Tablet query
  @media (min-width: 769px) and (max-width: 1024px) {
    padding-top: 270px;    
  }
`;

const UsernameButton = styled.button`
  background-color: rgb(32, 8, 191);
  color: white;
  font-family: 'Press Start 2P', cursive;
  margin-top: 20px;
  padding: 20px;
  cursor: pointer;
`;

// In this component there is a text input field for the user to enter a username
// this username is saved in a local state and sent as a prop to our setUsername
// action, when that action is dispatched in the reducer, it will save the username
// in the global state
export const CreateUsernamePage = () => {
  const globalUsername = useSelector((state) => state.gamestate.username);
  const [username, setUsername ] = useState('');

  const dispatch = useDispatch();

  const addUsername = (event) => {
    event.preventDefault();

    // Send the username that the user entered in the text field (this username is saved
    // in a local state), to the gamestate reducer global state, so we can pass it in our POST request
    dispatch(gamestate.actions.setUsername(username))
  };

  // Once the username is saved globally, we can move on to the StartGamePage
  if (globalUsername) {
    return <StartGamePage />
  };

  return (
    <CreateUsernameBackground>
      <UsernameFormContainer>
        <h1>MAZE GAME</h1>
          <form onSubmit={addUsername}>
            <label>
              Enter a Username:
              <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                />
            </label>
            <UsernameButton type="submit">Create Username</UsernameButton>
          </form>
      </UsernameFormContainer>
    </CreateUsernameBackground>
  )
};

// Flow: CreateUsernamePage > StartGamePage > InGamePage
