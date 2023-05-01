/* eslint-disable no-trailing-spaces */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-closing-bracket-location */
// src/components/Game.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startGame, nextStep } from 'reducers/game';
import styled from 'styled-components';
import LandingPage from './LandingPage';
import backgroundImages from './backgroundImages';
import Loading from './Loading';
import GameBoard from './GameBoard';

const StyledButton = styled.button`
  background-color: rgba(255, 255, 255, 0.2);
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  margin-bottom: 20px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    transform: scale(1.05);
  }
`;

const StyledText = styled.h2`
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 40px;
  text-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
`;

const Game = () => {
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.game.game);
  const username = useSelector((state) => state.game.username);
  const loading = useSelector((state) => state.game.loading);
  console.log(gameState);
  console.log(loading);
  return (
    <div
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}
    >
      <Container>
        {loading ? (
          <Loading />
        ) : username === '' ? (
          <LandingPage />
        ) : (
          <GameBoard />
        )}
        {/* <StyledText>{gameState.description}</StyledText>
        {gameState.actions.map((action) => (
          <StyledButton type="button" key={action.direction}> 
            {action.description}
          </StyledButton>
        ))} */}
      </Container>
    </div>
  );
};

export default Game;
