import React from 'react';
import UserNameInput from './UserNameInput';
import GameScreen from './GameScreen';

const StartScreen = () => {
  return (
    <div>
      Start your adventure here
      <UserNameInput />
      <GameScreen />
    </div>);
}

export default StartScreen;

