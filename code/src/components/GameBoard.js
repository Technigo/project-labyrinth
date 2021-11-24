import React from 'react';
import { MainGame } from './MainGame';
import { StartPage } from './StartPage';
import { useSelector } from 'react-redux';
import { game } from 'reducers/game';
import EndPage from './EndPage';

const GameBoard = () => {
  const game = useSelector((state) => state.game);
  return <div>{game.username !== '' ? <MainGame /> : <StartPage />}</div>;
  //   if (game.username === '' && game.gameList.actions === []) {
  //     return <StartPage />;
  //   } else if (game.username !== '' && game.gameList.actions === []) {
  //     return <EndPage />;
  //   } else if (game.username === '' && game.gameList.actions !== []) {
  //     return <MainGame />;
  //   }
};

export default GameBoard;

// if (game.username === '' && game.gameList.coordinates === '') {
// 	return <StartPage/>
// } else if (game.username !== '' && game.gameList.actions === '' ) {
// return <EndPage />
// } else return <MainPage/>

// return <div>{game.username !== '' ? <MainGame /> : <StartPage />}</div>;
