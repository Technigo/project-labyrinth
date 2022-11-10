/* eslint-disable linebreak-style */
import React from 'react';
import { useSelector } from 'react-redux';
import { LoadingIndicator } from 'components/LoadingIndicator';
import { Start } from 'components/Start';
import { Game } from 'components/Game';

export const Home = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)
  const coordinates = useSelector((state) => state.choices.coordinates)
  console.log('coordinates', coordinates)
  return (
    <>
      {!coordinates && <Start />}
      {isLoading && <LoadingIndicator />}
      {coordinates && <Game />}
    </>
  )
}

