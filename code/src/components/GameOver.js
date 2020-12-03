import React from 'react';
import { useSelector } from 'react-redux';

export const GameOver = ({text}) => {

  const playerName = useSelector(store => store.gameReducer.userName);

  return (
    <div className="gameboard-game-over">
     <h1 className="gameboard-game-over-description">{text}</h1>
     <h3 className="gameboard-game-over-sub-description">Congratulations {playerName}, you managed to navigate the maze! </h3> 
    </div>
  )
}