import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { fetchInitialInstructions } from 'reducers/gamestate';

import { InGamePage } from 'pages/InGamePage';

import { StartGameButton } from 'styled-components/StartGameButton';

const StartGameBackground = styled.div`
  height: 700px;
`;

const StartGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10%;
  text-align: center;
  max-width: 400px;
  margin: auto;
  margin-top: 100px;
`;

const StartImage = styled.img`
  max-width: 400px;
  margin: auto;

  // Mobile query
  @media (max-width: 768px) {
    width: 200px;    
  }
`;

// This component has a welcome message to greet the new user and also includes a button to
// start the game. This button will do our initial fetch to fetch the first game instructions from
// the backend
export const StartGamePage = () => {
  const globalUsername = useSelector((state) => state.gamestate.username);
  const globalGameStatus = useSelector((state) => state.gamestate.gameStatus.coordinates);

  const dispatch = useDispatch();

  // Once our gameStatus is populated with an object with properties, we can then render the InGamePage
  // which will now show on the browser the first instruction for the user to choose from
  if (globalGameStatus) {
    return <InGamePage />
  };

  return (
    <StartGameBackground>
      <StartGameContainer>
        <h1>{`Welcome, ${globalUsername} to this Maze Game!`}</h1>
        {/* This start game button should trigger the first fetch thunk to fetch the first set of instructions
        received from the response when doing the first POST request, we send in the current username as prop
        so we can send that data on our POST request*/}
        <StartGameButton type="button" onClick={() => dispatch(fetchInitialInstructions(globalUsername))}>START</StartGameButton>
        <StartImage src="https://pa1.narvii.com/6916/5b65ac2c60cecd850a0cbfc3e4b7088e2c46c090r1-1069-399_hq.gif" alt="start animation" />
      </StartGameContainer>
    </StartGameBackground>
  );
};

// Flow: StartGamePage > InGamePage
