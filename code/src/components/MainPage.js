import React from 'react';
import { useSelector } from 'react-redux';
import Game from './Game';
import StartPage from './StartPage';
import LoadingPage from './LoadingPage'

const MainPage = () => {
  const loading = useSelector((store) => store.ui.loading)
  const currentPosition = useSelector((store) => {
    return store.game.currentPosition;
  });
  return (
    <>
      {loading ? <LoadingPage /> : (<div>{!currentPosition ? <StartPage /> : <Game />} </div>)}
     {/*  {!currentPosition // If there's no currentPosition, the game hasn't started yet.
        ? <StartPage />
        : <Game />} */}
    </>
  )
};

export default MainPage;