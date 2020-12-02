import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { description } from 'reducers/gameInfo';
import { Button } from "./Button.js";

export const GameBegin = () => {
  const dispatch = useDispatch();
  const gameData = useSelector(store => store.gameDetails.gameDetails)

  return (
    <>
      <div> Hello </div>
      <div>{gameData.description}</div>
      <button onClick={() => dispatch(description())}>Play</button>
      {gameData.description && <Button />}
    </>
  )
}
