import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const GameBoard = () => {
  const { position, actions } = useSelector((store) => store.game.position)
  const dispatch = useDispatch
  const username = useSelector((store) => store.game.username)

  return (
    <>
      <h2>Hi {username}</h2>
      <p>{position}</p>
    </>
  )
}