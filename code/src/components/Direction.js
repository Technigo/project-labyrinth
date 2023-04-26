import React from 'react';
import { useDispatch } from 'react-redux';
import { nextMove } from 'reducers/game';

export const Direction = ({ actions = [] }) => {
  const dispatch = useDispatch();
  const moveOnClick = (direction) => {
    dispatch(nextMove(direction))
  }
  return (
    <>
      {actions.map((action) => (
        <div key={action.direction}>
          {action.description}
          <button type="button" onClick={() => moveOnClick(action.direction)}>Go {action.direction}</button>
        </div>
      ))}
    </>
  )
}