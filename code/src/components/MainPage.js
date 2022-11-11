import React from 'react';
import { useSelector } from 'react-redux';
import Game from './Game';
import StartPage from './StartPage';
import LoadingPage from './LoadingPage';
import LastPage from './LastPage';

const MainPage = () => {
  const loading = useSelector((store) => store.ui.loading);

  const currentPosition = useSelector((store) => {
    return store.game.currentPosition;
  });

  return (
    <>
      {loading && <LoadingPage />}
      {!loading && (
        // eslint-disable-next-line no-nested-ternary
        <div>{currentPosition
          ? currentPosition.actions.length !== 0
            ? <Game />
            : <LastPage />
          : <StartPage />}
        </div>)}
    </>
  );
};

export default MainPage;