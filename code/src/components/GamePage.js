import React from 'react';
// import { maingame } from 'reducers/maingame';
import { useSelector } from 'react-redux';

export const GamePage = () => {
  const game = useSelector((store) => store.maingame.gameProps)

  return (
    <p>{game}</p>
  )
}