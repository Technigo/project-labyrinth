import React from 'react'
import { useDispatch } from 'react-redux';
import { gameFetch } from 'reducers/gameFetch';
import { SpaceButton } from 'lib/Level';
import startgame from 'images/arrow-button.png';

export const RestartButton = () => {
  const dispatch = useDispatch();

  const onRestartButton = () => {
    dispatch(gameFetch.actions.restartGame());
  };

  return (
    <SpaceButton type="button" onClick={onRestartButton}>
      <img src={startgame} alt="restartbutton" />
    </SpaceButton>
  )
}