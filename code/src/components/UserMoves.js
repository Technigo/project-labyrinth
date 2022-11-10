import React from 'react';
import { useDispatch } from 'react-redux';
import { game, generateMoves } from 'reducer/game';

export const UserMoves = ({ action }) => {
  const dispatch = useDispatch();
  console.log(`Action: ${action}`)

  const onUserMoveBtn = (event) => {
    dispatch(game.actions.setDirection(event))
    dispatch(generateMoves());
    console.log(`Dire ${event}`)
  }

  return (
    <>
      <p>{action.description}</p>
      <button type="button" key={action.type} onClick={(event) => onUserMoveBtn(event.target.value)}>{action.type} {action.direction}</button>
    </>
  )
}
