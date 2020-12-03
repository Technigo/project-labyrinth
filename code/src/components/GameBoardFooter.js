import React from 'react'

import { useDispatch } from 'react-redux';
import { gameReducer } from '../reducers/gameReducer';

export const GameBoardFooter = () => {

  const dispatch = useDispatch();
  
  const handleEndGameClick = (event) => {
    event.preventDefault();
    dispatch(gameReducer.actions.endGame(true));
  }

  return(
    <section className="gameboard-footer">
      <button 
        onClick={(event) => handleEndGameClick(event)}
        className="gameboard-end-button">
        End Game
      </button>
    </section>
  )
}