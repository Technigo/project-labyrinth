/* eslint-disable import/order */
// src/components/Game.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startGame, nextStep } from 'reducers/game';
import LandingPage from './LandingPage';
import backgroundImages from './backgroundImages';

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
      style={{ backgroundImage: `url(${currentBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh' }}>
      <h2>{gameState.description}</h2>
      {gameState.actions.map((action) => (
        <button type="button" key={action.direction} onClick={() => handleActionClick(action.direction)}>
          {action.description}
        </button>
      ))}
    </div>
  );
};

export default Game;
