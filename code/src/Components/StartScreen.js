import React from 'react';
import { useSelector } from 'react-redux';
import Game from './Game';
import UserNameInput from './UserNameInput';
import Loader from './Loader';

const StartScreen = () => {
  const description = useSelector((store) => store.game.description);
  const loading = useSelector((store) => store.game.loading);

  if (loading) {
    return <Loader />
  }

  if (description !== '') {
    return <Game />
  }

  return <UserNameInput />
}

export default StartScreen;