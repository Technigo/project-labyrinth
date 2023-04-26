import React from 'react';
import UserNameInput from './UserNameInput';
import Joke from './Joke';

const StartScreen = () => {
 
  return (
    <div>
        Start your adventure here
        <UserNameInput />
        <Joke />
    </div>);
}

export default StartScreen;

