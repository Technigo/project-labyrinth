import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { game, playerAction } from 'reducers/quotes';

const Actions = ({ action }) => {
  const dispatch = useDispatch()
  const coordinates = useSelector((store) => store.game.coordinates)

  const chooseDirection = () => {
    dispatch(game.actions.setType(action.type))
    dispatch(game.actions.setDirection(action.direction))
    dispatch(playerAction())
  }
  return (
    <button type="button" key={coordinates} onClick={chooseDirection}>
      {action.type} {action.direction}
    </button>
  )
}

export default Actions;