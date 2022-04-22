import React from 'react';
import { useSelector } from 'react-redux';
import { StartScreen } from './StartScreen';
import { GameScreen } from './GameScreen';
import { Loading } from './Loading';

export const Questions = () => {
  const gameQuestion = useSelector((store) => store.questions.gameQuestion);

  const isLoading = useSelector((state) => state.ui.isLoading);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="wrapper">
          {gameQuestion ? <GameScreen /> : <StartScreen />}
        </div>
      )}
    </>
  );
};
