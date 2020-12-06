import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { requestStartGame } from 'reducers/reusable';
import { GameBoard } from '../components/GameBoard';

export const StartBoard = () => {

  const gameStarted = useSelector(store => store.gameReducer.gameStarted);
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(requestStartGame(userInput))
  }

  return (
    <section className="board-wrapper">
      {!gameStarted && 
      <section className="start-board">
        <h1 className="start-board-game-title">
          Maze adventure
        </h1>

        <form onSubmit={e => submitForm(e)}>
            <input 
              className="start-board-user-input"
              required
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              type="text"
              placeholder="Player name"
              pattern="[a-zA-Z0-9-]+"
              title="Make sure your username contains only letters and numbers."
              >
            </input>
            <button 
              className="startboard-start-button"
              type="submit">
              Start the game
            </button>
        </form>
      </section>
      }
      
       {gameStarted && <GameBoard />}

    </section>
  )
}
