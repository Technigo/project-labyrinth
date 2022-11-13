import React from 'react';
import { useSelector } from 'react-redux';
// import AuthorInputSearch from './AuthorInputSearch';
// import game, { gameBoard } from 'reducers/game';
import TheLabyrinth from './TheLabyrinth'
import Player from './Player'

const StartScreen = () => {
  const name = useSelector((store) => store.game.username);

  return (
    <div> {name === '' ? <Player /> : <TheLabyrinth />}</div> // after typing name => entering labyrinth
  )
}

export default StartScreen