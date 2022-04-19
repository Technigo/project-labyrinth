import React from 'react';
import { useSelector } from 'react-redux';
import GameScreen from './GameScreen';
import StartScreen from './StartScreen';

const Game = () => {
  const username = useSelector((store) => store.labyrinth.username);
  return (
    <div>{username ? <GameScreen username={username} /> : <StartScreen />}</div>
  );
};
export default Game;
