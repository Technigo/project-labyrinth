import React from 'react'
import { useSelector } from 'react-redux';

export const GameBoardHeader = () => {
  const currentGameState = useSelector(store => store.gameReducer.gameDetails);
  const locationDescription = currentGameState.description;
  const playerName = useSelector(store => store.gameReducer.userName);

  return(
    <div className="gameboard-current-details">
      <p className="gameboard-player-name">Player: {playerName}</p>
      <h2 className="location-current-details-description">{locationDescription}</h2> 
    </div>
  )
}