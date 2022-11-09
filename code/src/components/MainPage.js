import React from 'react';
import { useSelector } from 'react-redux';
import Game from './Game';
import StartPage from './StartPage';

const MainPage = () => {
  const currentPosition = useSelector((store) => store.game.currentPosition);
  return (
    <> {currentPosition
      ? <StartPage />
      : <Game />}
    </>
  )
};

export default MainPage;