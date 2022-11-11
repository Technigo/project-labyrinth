import React from 'react';
import { useSelector } from 'react-redux';
import Game from './Game';
import UserNameInput from './UserNameInput';
// import Loader from './Loader';

const StartScreen = () => {
  const description = useSelector((store) => store.game.description);

  // if (loading) return <Loader />

  return (
    <div>
      {description === '' ? <UserNameInput /> : <Game />}
    </div>
  );
}

export default StartScreen;