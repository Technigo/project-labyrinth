import React from 'react'
import { useSelector } from 'react-redux';

import { PreviousPositions } from './PreviousPositions';
import { GameOver } from './GameOver';
import { MazeMap } from './MazeMap';
import { GameBoardFooter } from './GameBoardFooter';
import { GameBoardHeader } from './GameBoardHeader'
import { GameBoardChoices } from './GameBoardChoices';


export const GameBoard = () => {
//Include the coordinates here and set the classname of gameboard-main using them.
  const currentGameState = useSelector(store => store.gameReducer.gameDetails);
  const coordinates = currentGameState.coordinates;
  const locationDescription = currentGameState.description;
  const actions = currentGameState.actions;
  const gameIsLoading = useSelector(store => store.gameReducer.gameLoading);
  const noMoreActions = actions.length > 0 ? false : true;
  const coordinatesSplitted = coordinates.split(',');
  const x = coordinatesSplitted[0];
  const y = coordinatesSplitted[1]

  return (
    <section className={`gameboard-main bg-${x}-${y}`}>
        <section className={gameIsLoading ? "gameboard-loading" : "gameboard"}>
          {noMoreActions && coordinates && locationDescription ? 
              <GameOver text={locationDescription}/>
              :
              <>
                <GameBoardHeader />
                <GameBoardChoices />
                <MazeMap coordinates = {coordinates} />
                <PreviousPositions />
                <GameBoardFooter />  

            </>
            }
          </section>
      </section> 
  )
}
