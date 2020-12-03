import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { moveForwardInGame } from 'reducers/reusable';
import { Loader } from  '../components/Loader';

export const GameBoardChoices = () =>{
  const dispatch = useDispatch();
  const gameIsLoading = useSelector(store => store.gameReducer.gameLoading);
  const currentGameState = useSelector(store => store.gameReducer.gameDetails);
  const actions = currentGameState.actions;
  const userName = useSelector(state => state.gameReducer.userName);

  const handleButtonClick = (direction,event) =>{ 
    event.preventDefault();
    console.log("In handlebuttonclick. Direction chosen:",direction);
    dispatch(moveForwardInGame(direction,userName));
  }

  return(
    <div className="gameboard-choices">
    {!gameIsLoading && <h4 className="location-current-details-sub">Choose your next step:</h4>}
    {gameIsLoading && <Loader />}
      {
        actions.map(item => (
          <div className="action-wrapper" key = {item.direction}>
            <h3 className="action-description">{item.description}</h3>
            <button
              className="gameboard-action-button" 
              type="button"
              onClick={(event) => handleButtonClick(item.direction,event)}
              >
              Go {item.direction} 
            </button>
          </div>
        ))
      }
  </div>
  )
}