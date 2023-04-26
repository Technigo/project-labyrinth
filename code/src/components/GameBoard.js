import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextMove } from 'reducers/game';

export const GameBoard = () => {
  const { description, actions } = useSelector((store) => store.game.position)
  const dispatch = useDispatch()
  const username = useSelector((store) => store.game.username)

  const onDirectionBtnClick = (direction) => {
    dispatch(nextMove(direction))
  }

  return (
    <>
      <h2>Hi {username}</h2>
      <p>{description}</p>
      {actions.map((singleAction) => (
        <div>
          <p>{singleAction.description}</p>
          <button type="button" onClick={() => onDirectionBtnClick(singleAction.direction)}>{singleAction.direction}</button>
        </div>
      ))}
    </>
  )
}