import React from 'react';
import { useSelector } from 'react-redux';
// import { Player } from '@lottiefiles/react-lottie-player';
import { Loading } from './Loading.js';
import { GameScreen } from './GameScreen.js';
import { GameContent } from './GameContent.js';

export const StartScreen = () => {
  const isUserNameProvided = useSelector((store) => store.game.username)
  const isLoading = useSelector((store) => store.game.loading)

  return (
    <div className="start-screen-container">
      {isLoading ? <Loading /> : (<> {isUserNameProvided === '' ? <GameScreen /> : <GameContent />} </>)}
    </div>
  )
}