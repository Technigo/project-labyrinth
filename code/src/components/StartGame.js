/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import MazePage from './MazePage';
import StartInput from './StartInput';

const StartGame = () => {
  const gameState = useSelector((store) => store.labyrinth.gameState)
  // if statement /if the quote is equal to an empty screen then show AutherInput otherswise return Quotes
  return <div>{gameState === '' ? <MazePage /> : <StartInput />}</div>
}

export default StartGame;