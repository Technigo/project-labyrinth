/* eslint-disable import/order */
// src/components/Game.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startGame, nextStep } from 'reducers/game';
import LandingPage from './LandingPage';
import backgroundImages from './backgroundImages';
import styled from 'styled-components';

const StyledButton = styled.button`
 background-color: rgba(255, 255, 255, 0.2);
  justify-content:center;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 16px;
  color:#ffffff;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  margin-bottom:20px;

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vh;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
`;

const Game = ({ showLandingPage, setShowLandingPage }) => {
  const dispatch = useDispatch();
  const gameState = useSelector((state) => state.game.game);
  const loading = useSelector((state) => state.game.loading);

  useEffect(() => {
    if (!showLandingPage) {
      dispatch(startGame());
    }
  }, [dispatch, showLandingPage]);

  const handleActionClick = (direction) => {
    dispatch(nextStep(direction));
  };

  const handleStartGame = () => {
    setShowLandingPage(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (showLandingPage) {
    return <LandingPage onStartGame={handleStartGame} />;
  }

  if (!gameState) {
    return null;
  }

  const currentBackground = gameState && backgroundImages[gameState.coordinates];

  return (
    <div
      style={{
        backgroundImage: `url(${currentBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}>
      <Container>
        <StyledText>{gameState.description}</StyledText>
        {gameState.actions.map((action) => (
          <StyledButton
            type="button"
            key={action.direction}
            onClick={() => handleActionClick(action.direction)}>
            {action.description}
          </StyledButton>
        ))}
      </Container>
    </div>
  );
};

export default Game;
