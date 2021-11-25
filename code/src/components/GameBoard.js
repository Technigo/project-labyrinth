import React from 'react';
import { MainGame } from './MainGame';
import { StartPage } from './StartPage';
import { useSelector } from 'react-redux';

const GameBoard = ({ startBgMusic }) => {
  const game = useSelector((state) => state.game);
  return (
    <>
      {game.username !== '' ? (
        <MainGame />
      ) : (
        <StartPage startBgMusic={startBgMusic} />
      )}
    </>
  );
};

export default GameBoard;
