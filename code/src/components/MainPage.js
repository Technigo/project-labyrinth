import React from 'react';
import { useSelector } from 'react-redux';
import Game from './Game';
import StartPage from './StartPage';

const MainPage = () => {
  const currentPosition = useSelector((store) => {
    return store.game.currentPosition;
  });
  return (
    <>
      {!currentPosition // If there's no currentPosition, the game hasn't started yet.
        ? <StartPage />
        : <Game />}
    </>
  )
};

export default MainPage;