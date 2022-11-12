import React from 'react';
import { useSelector } from 'react-redux';
import { Start } from './Start';
import { Gameboard } from './Gameboard';
import { LoadingIndicator } from './LoadingIndicator';

export const Game = () => {
  const loading = useSelector((store) => store.ui.loading)
  const currentPosition = useSelector((store) => store.game.currentPosition)

  return (
    <>
      {loading && <LoadingIndicator />}
      {currentPosition ? <Gameboard /> : <Start />}
    </>
  )
}