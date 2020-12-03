import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { fetchSecondaryInstructions, gamestate } from 'reducers/gamestate';

import { EndGamePage } from 'pages/EndGamePage';
import { StartGameButton } from 'styled-components/StartGameButton';

import cave from '../assets/00.png';
import workshop from '../assets/01.png';
import colorroom from '../assets/02.png';
import books from '../assets/03.png';
import light from '../assets/10.png';
import colorful from '../assets/11.png';

const InGameMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5% 10% 15% 10%;
  text-align: center;
  background-size: cover;
  background-position: center;
  height: 450px;
  max-width: 1000px;
  margin: auto;
  margin-top: 100px;

  // Mobile query
  @media (max-width: 768px) {
    height: 1200px;
    margin-top: 0;
  }
`;

const ActionsContainer = styled.section`
  @media (min-width: 769px) {
    display: flex;
    flex-direction: row;
  }
`;

const SingleActionContainer = styled.div`
  border: 2px solid black;
  box-shadow: 5px 10px black;
  border-radius: 10px;
  background-color: rgb(177, 158, 116);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 2%;
  max-width: 350px;
  margin: 0 auto;

  // Mobile query
  @media (max-width: 768px) {
    width: 85%;
    margin: 0 auto;
    max-width: 350px;
  }
`;

const DescriptionText = styled.h2`
  background-color: rgba(0, 0, 0, 0.5);
`;

const ActionsText = styled.h3`
  background-color: rgba(0, 0, 0, 0.5);
  width: 450px;
  margin: auto;
  margin-bottom: 30px;
  margin-top: 0;

  // Mobile query
  @media (max-width: 768px) {
    width: 85%;
  }
`;

const ActionButton = styled.button`
  background-color: #79452F;
  color: white;
  font-family: 'Press Start 2P', cursive;
  margin-top: 20px;
  padding: 20px;
  cursor: pointer;
`;

// Page showing instructions we got as reponse from the Backend
// Accessing the object with the instructions and showing them to the user
export const InGamePage = () => {
  const globalGameStatus = useSelector((state) => state.gamestate.gameStatus);
  const actions = useSelector((state) => state.gamestate.gameStatus.actions);
  const globalUsername = useSelector((state) => state.gamestate.username);
  const historyArrray = useSelector((state) => state.gamestate.history);

  const dispatch = useDispatch();

  const onHistoryBack = () => {
    dispatch(gamestate.actions.historyGoBack());
  };

  // Function to show a different background image based on the coordinates
  // from each description
  const imagePicker = () => {
    if (globalGameStatus.coordinates === "0,0") {
      return cave;
    } else if (globalGameStatus.coordinates === "0,1") {
      return workshop;
    } else if (globalGameStatus.coordinates === "0,2") {
      return colorroom;
    } else if (globalGameStatus.coordinates === "0,3") {
      return books;
    } else if (globalGameStatus.coordinates === "1,0") {
      return light;
    } else if (globalGameStatus.coordinates === "1,1") {
      return colorful;
    }
  };

  // When the user has reached the end of the game, the actions array becomes empty,
  // so we can show the end game page conditionally based on that
  if (actions.length === 0) {
    return (
      <EndGamePage />
    );
  };

  return (
    <InGameMainDiv style={{backgroundImage: `url(${imagePicker()})`}}>
      <DescriptionText>{globalGameStatus.description}</DescriptionText>

      <ActionsText>Actions you can take:</ActionsText>

      <ActionsContainer>
        {actions.map((action) => (
          <SingleActionContainer key={action.description}>
            <h4>{action.description}</h4>
            <h5>MOVE</h5>
            {/* This button will dispatch the second fetch thunk which will do the coming fetches with the next set of instructions
            to show the user: for this fetch we need to send an object including the username, type="move" and the direction the user chose
            so we send that data as a prop to the reducer*/}
            <ActionButton type="button" onClick={() => dispatch(fetchSecondaryInstructions(globalUsername, action.direction))}>{action.direction}</ActionButton>
          </SingleActionContainer>
        ))}
      </ActionsContainer>

      {/*This button will allow the user to go back to their previous move, it calls the onHistoryBack function which dispatches
      the historyGoBack action from our reducer. This button will only be enabled after the user has clicked past the first set
      of instructions, so when the history array is longer than 1*/}
      <StartGameButton 
        buttonwidth 
        gobackbutton 
        type="button" onClick={onHistoryBack} 
        disabled={historyArrray.length === 1} 
        background={historyArrray.length === 1 ? "grey" : "rgb(32, 8, 191)"}>
          GO BACK
      </StartGameButton>
    </InGameMainDiv>
  );
};

// Flow: InGamePage > EndGamePage
