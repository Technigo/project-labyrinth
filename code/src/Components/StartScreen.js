import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Player } from '@lottiefiles/react-lottie-player';
import UserNameInput from './UserNameInput';
import GameScreen from './GameScreen';
import Loading from './Loading';
import GameScreenLotties from './GameScreenLotties';

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
    <div className="allWrapper">
      {showGameScreen ? (
        <>
          <GameScreenLotties />
          <GameScreen />
        </>
      ) : (
        <div>
          <h1>Welcome to the Space Labyrinth </h1>
          <UserNameInput onStartGame={handleStartGame} />
          <Player
            autoplay
            loop
            src="https://assets1.lottiefiles.com/packages/lf20_D8Mw4zIZPL.json"
            style={{ height: '400px', width: '400px' }} />
        </div>
      )}
    </div>
  );
};

export default StartScreen;
