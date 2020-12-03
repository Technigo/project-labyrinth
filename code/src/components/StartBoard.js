import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { requestStartGame } from 'reducers/reusable';
import { gameReducer } from '../reducers/gameReducer';
import { GameBoard } from '../components/GameBoard';

export const StartBoard = () => {

  const gameStarted = useSelector(store => store.gameReducer.gameStarted);
  const dispatch = useDispatch();

  const handleStartClick = () => {
    console.log("in handlestart")
    dispatch(requestStartGame());
  }

  return (
    <section className="board-wrapper">
      {!gameStarted && 
      <section className="start-board">
        <h1 className="start-board-game-title">
          Maze adventure
        </h1>
        <button className="startboard-start-button"
        onClick={() => handleStartClick()}
        type="button">Start the game</button>
      </section>
      }
      <section className="game-board-wrapper">
       {gameStarted && <GameBoard />}
      </section>
    </section>
  )
}
