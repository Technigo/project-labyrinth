import React from 'react';
import { useSelector } from 'react-redux';
import GameBoard from './GameBoard';
import UserNameInput from './UserNameInput';
import Loading from './Loading';

const StartScreen = () => {
  const gameStart = useSelector((store) => store.labyrinth.username);
  const isLoading = useSelector((store) => store.ui.isLoading)

  return (
    <div>
      {isLoading ? <Loading /> : (<div>{gameStart === '' ? <UserNameInput /> : <GameBoard />} </div>)}
    </div>
  )
}

export default StartScreen;