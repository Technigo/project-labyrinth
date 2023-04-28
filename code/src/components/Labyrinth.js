/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { labyrinth, nextMove } from '../reducers/labyrinth';
import './Labyrinth.css'

import caveImg from '../images/cave.jpg'
import bridgeImg from '../images/bridge.jpg';
import stonesImg from '../images/stones.jpg';
import gearsImg from '../images/gears.jpg';
import treasureImg from '../images/treasure.jpg';
import lightCaveImg from '../images/light-cave.jpg';
import forestImg from '../images/forest.jpg';
// For some reason, when dealing with thunks - they have to be imported.

const LabyrinthWrapper = styled.div`
position: relative; //This is needed for the Loading-component to be placed on top.
z-index: 1;
`

export const Labyrinth = () => {
  const position = useSelector((store) => store.labyrinth.currentPosition);

  const dispatch = useDispatch();

  const handleMoveButtonClick = (type, direction) => {
    dispatch(nextMove(type, direction))
    // This function is called when the button with the directions are clicked. It starts the function nextMove, which is a thunk taking care of the second fetch-request. See the store for more info!
  }

  const handleRestartButtonClick = () => {
    dispatch(labyrinth.actions.restartGame())
  }

  const positionImages = () => {
    switch (position.coordinates) {
      case '0,0':
        return caveImg;
      case '1,0':
        return bridgeImg;
      case '1,1':
        return stonesImg;
      case '0,1':
        return gearsImg;
      case '0,2':
        return treasureImg;
      case '0,3':
        return lightCaveImg;
      case '1,3':
        return forestImg;
      default:
        return caveImg;
    }
  };

  return (
    <section
      className="backgroundImages"
      style={{
        backgroundImage: `url(${positionImages()})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh'
      }}>
      <LabyrinthWrapper className="labyrinthWrapper">
        <p>{position.username}</p>
        {/* <p>{position.coordinates}</p> not sure if we want to keep this in or not */}
        <p className="currentPosition">{position.description}</p>
        {/* The only thing above that renders as it should is the username and the coordinates.' */}
        <div className="moveActionWrapper">
          <div className="moveAction">
            {position.actions.map((action, index) => (
              <div>
                <p>{action.description}</p>
                {/* I added the description that is in the actions array. */}
                <button className="moveBtn" key={index} type="button" onClick={() => handleMoveButtonClick(action.type, action.direction)}>{action.direction}</button>
              </div>
            ))}
          </div>
        </div>
        {position.coordinates === '1,3' && (
          <button type="button" onClick={() => handleRestartButtonClick()}>
        Restart
          </button>
        )}
        {/* if the coordinates is 1,3, then the restart-button above will be rendered. */}
      </LabyrinthWrapper>
    </section>
  )
}
