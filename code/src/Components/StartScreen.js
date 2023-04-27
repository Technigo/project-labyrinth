import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import UserNameInput from './UserNameInput';
import GameScreen from './GameScreen';
import Loading from './Loading';

const StartScreen = () => {
  const [showGameScreen, setShowGameScreen] = useState(false);
  const loadingState = useSelector((store) => store.loading.load)

  if (loadingState) {
    return (
      <Loading />
    )
  }

  const handleStartGame = () => {
    setShowGameScreen(true);
  }

  return (
    <div>
      {showGameScreen ? (
        <GameScreen />
      ) : (
        <div>
          <h1>Welcome to the Space Labyrinth </h1>
          <UserNameInput onStartGame={handleStartGame} />
        </div>
      )}
    </div>
  );
};

export default StartScreen;
