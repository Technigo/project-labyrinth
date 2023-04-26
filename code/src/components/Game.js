import React from 'react';
import { useSelector } from 'react-redux';
import { Direction } from './Direction';

export const Game = () => {
  const description = useSelector((store) => store.game.description);
  const onRestartButtonClick = () => {
    window.location.reload()
  }

  return (
    <>
      <h1>{description.description}</h1>
      <Direction actions={description.actions} />
      {description.coordinates === '1,3' && (
        <button type="button" onClick={onRestartButtonClick}>Play again</button>
      )}
    </>
  )
}