import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { gameReducer } from '../reducers/gameReducer';
import { moveForwardInGame } from 'reducers/reusable';
import { Loader } from  '../components/Loader';
import { PreviousPositions } from './PreviousPositions';
import { GameOver } from './GameOver';
import { MazeMap } from './MazeMap';

export const GameBoard = () => {
  const dispatch = useDispatch();
  const currentGameState = useSelector(store => store.gameReducer.gameDetails);
  const coordinates = currentGameState.coordinates;
  const locationDescription = currentGameState.description;
  const actions = currentGameState.actions;
  const gameIsLoading = useSelector(store => store.gameReducer.gameLoading);
  const noMoreActions = actions.length;

  const handleButtonClick = (direction,event) =>{ 
    event.preventDefault();
    dispatch(moveForwardInGame(direction));
  }

  const handleEndGameClick = (event) => {
    event.preventDefault();
    dispatch(gameReducer.actions.endGame(true));
  }

  return (
    <section className="gameboard-main">
        <section className={gameIsLoading ? "gameboard-loading" : "gameboard"}>
        {noMoreActions === 0 && coordinates && locationDescription ? 
              <GameOver text={locationDescription}/>
            :
            <>
            <div className="gameboard-current-details">
              <h2 className="location-current-details-description">{locationDescription}</h2> 
            </div>

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

            <MazeMap coordinates = {coordinates} />
            <div className="gameboard-history">
              <PreviousPositions />
            </div>
            <section className="gameboard-footer">
              <button 
                onClick={(event) => handleEndGameClick(event)}
                className="gameboard-end-button">
                End Game
              </button>
            </section>
</>}
          </section>
      </section> 
  )
}
