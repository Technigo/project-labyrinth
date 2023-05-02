/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { labyrinth, nextMove } from '../reducers/labyrinth';
import './Labyrinth.css'
import { StartBtn } from './StartScreenStyles';

import caveImg from '../images/cave.jpg'
import bridgeImg from '../images/bridge.jpg';
import stonesImg from '../images/stones2.jpg';
import gearsImg from '../images/gears.jpg';
import treasureImg from '../images/treasure.jpg';
import lightCaveImg from '../images/light-cave.jpg';
import forestImg from '../images/green-forest.jpg';
// For some reason, when dealing with thunks - they have to be imported.

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

  const LabyrinthWrapper = styled.div`
  background: url(${positionImages()});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  background-attachment: fixed;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  z-index: 1;
  position: relative; //This is needed for the Loading-component to be placed on top.

  @media (min-width: 767px) {
  gap: 2rem;
  }`

  return (
    <LabyrinthWrapper>
      <div className="labyrint-box">
        <div className="description-box">
          <p>{position.description}</p>
        </div>
        <div className="moveActionWrapper">

          {position.actions.map((action, index) => (
            <div className="moveAction">
              <div className="text-container">
                <p>{action.description}</p>
              </div>
              <StartBtn w80 key={index} type="button" onClick={() => handleMoveButtonClick(action.type, action.direction)}>{action.direction}</StartBtn>
            </div>
          ))}

        </div>
        {position.coordinates === '1,3' && (
          <StartBtn m2rem type="button" onClick={() => handleRestartButtonClick()}>
        Restart
          </StartBtn>
        )}
        {/* if the coordinates is 1,3, then the restart-button above will be rendered. */}
      </div>
    </LabyrinthWrapper>
  )
}
