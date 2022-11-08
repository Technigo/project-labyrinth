import React from 'react';
import { useSelector } from 'react-redux';
import GameBoard from './GameBoard';
import UserNameInput from './UserNameInput';

const StartScreen = () => {
  const gameStart = useSelector((store) => store.labyrinth.username);

  return (
    // fetch quote from store, check if the quote is empty then
    // mount Authorinput otherwise display Quotes
    <div>{gameStart === '' ? <UserNameInput /> : <GameBoard />}</div>
  )
}

export default StartScreen;