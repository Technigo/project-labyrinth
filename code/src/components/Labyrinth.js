/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { labyrinth, nextMove } from '../reducers/labyrinth';
// For some reason, when dealing with thunks - they have to be imported.

const LabyrinthWrapper = styled.div`
position: relative; //This is needed for the Loading-component to be placed on top.
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

  return (
    <LabyrinthWrapper>
      <p> HEJ HEJ!!</p>
      <p>{position.username}</p>
      <p>{position.coordinates}</p>
      <p>{position.description}</p>
      {/* The only thing above that renders as it should is the username and the coordinates.' */}
      <div>
        {position.actions.map((action, index) => (
          <div>
            <p>{action.description}</p>
            {/* I added the description that is in the actions array. */}
            <button key={index} type="button" onClick={() => handleMoveButtonClick(action.type, action.direction)}>{action.direction}</button>
          </div>
        ))}
      </div>
      {position.coordinates === '1,3' && (
        <button type="button" onClick={() => handleRestartButtonClick()}>
        Restart
        </button>
      )}
      {/* if the coordinates is 1,3, then the restart-button above will be rendered. */}

    </LabyrinthWrapper>
  )
}
