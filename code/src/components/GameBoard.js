/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/button-has-type */
// Import necessary libraries (React, Redux, and styled-components)
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { game, generateMoves } from 'reducers/game';
import styled from 'styled-components/macro';

// Define styled components for game board wrapper, master container,
// description, "Go" button, action description, and restart button.
const GameBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 5%;
  background: rgba(255,255,255, 0.4);
  overflow-y: hidden;
`;

const MasterContainer = styled.div`
width: 100vw;
height: 100vh;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;

const Description = styled.h1`
font-size: 18px;
color: var(--h1-color);
font-weight: 500;
text-align: center;
margin: 10px 0 0;
padding: 0 8px 0 8px; 
text-shadow: 2px 2px 3px #bfff00;
@media (min-width: 767px) {
  font-size: 28px;
  margin: 15px 30px 15px 30px;
  max-width: 80vw;
  }
@media (min-width: 767px) {
  font-size: 30px;
}
`;

const GoBtn = styled.button`
background: var(--btn-color);
border-radius: 20px;
padding: 10px 20px;
margin-top: 10px;
border: none;
font-family: 'Kanit', sans-serif;
font-weight: 900;
letter-spacing: 7px;
text-transform: uppercase;
color: var(--text2-color);
&:hover {
  background: var(--hover-color);
  color: var(--text-color);
  cursor: pointer;
} 
`;

const ActionDescription = styled.div`
color: var(--text-color);
font-size: 13px;
font-weight: 300;
text-align: center;
background: rgba(255,255,255, 0.4);
margin: 10px;
padding: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 70vw;
box-shadow: 3px 5px 44px -7px rgba(0,0,0,0.75);
-webkit-box-shadow: 3px 5px 44px -7px rgba(0,0,0,0.75);
-moz-box-shadow: 3px 5px 44px -7px rgba(0,0,0,0.75);
`;

const RestartBtn = styled.button`
position: absolute;
  top: 0;
  left: 0;
background: var(--Rebtn-color);
border-radius: 0 0 20px;
padding: 8px 12px;
margin-top: 0;
border: none;
font-family: 'Kanit', sans-serif;
font-size: 10px;
font-weight: 900;
letter-spacing: 2px;
text-transform: uppercase;
color: var(--Rehover-color);
&:hover {
  background: var(--Rehover-color);
  color: var(--text-color);
  cursor: pointer;
} 
`;

export const GameBoard = () => {
  // Access the description and actions from the Redux store using the "useSelector" hook.
  const description = useSelector((store) => store.game.description);
  const actions = useSelector((store) => store.game.actions);
  // Get the dispatch function using the "useDispatch" hook.
  const dispatch = useDispatch();

  // Define a function called "onRestartButton" to dispatch the "restartGame" action
  // when the restart button is clicked.
  const onRestartButton = () => {
    dispatch(game.actions.restartGame());
  };

  // Render the "GameBoard" component with styled components wrapped inside the "MasterContainer"
  // component.
  // Show the "Restart Game" button and the action descriptions with "Go" buttons
  // based on the actions from the Redux store.
  return (
    <MasterContainer>
      <RestartBtn restart type="button" onClick={onRestartButton}>
        Restart Game
      </RestartBtn>
      <GameBoardWrapper>
        <Description>{description}</Description>
        {actions.length > 0 && actions.map((action) => (
          <ActionDescription key={`action-${action.id}`}>
            {action.description}
            <GoBtn
              className={action.direction}
              direction={action.direction}
              onClick={() => dispatch(generateMoves(action.direction))}>
              {action.direction}
            </GoBtn>
          </ActionDescription>
        ))}
      </GameBoardWrapper>
    </MasterContainer>
  );
};
