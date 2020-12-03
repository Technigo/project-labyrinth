import React from 'react';

export const GameOver = ({text}) => {
  return (
    <div className="gameboard-game-over">
     <h1 className="gameboard-game-over-description">{text}</h1>
     <h3 className="gameboard-game-over-sub-description">Congratulations, you managed to navigate the maze! </h3> 
    </div>
  )
}