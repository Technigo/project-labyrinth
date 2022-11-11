/* eslint-disable linebreak-style */
import React from 'react';
import { useSelector } from 'react-redux';
import { LoadingIndicator } from 'components/LoadingIndicator';
import { Start } from 'components/Start';
import { Game } from 'components/Game';
import { Welcome } from 'components/Welcome';

export const Home = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)
  const coordinates = useSelector((state) => state.choices.coordinates)
  const userName = useSelector((state) => state.choices.currentUser)

  console.log('coordinates', coordinates)
  return (
    <>
      {currentUser && <Welcome />}
      {!coordinates && <Start />}
      {isLoading && <LoadingIndicator />}
      {coordinates && <Game />}
    </>
  )
}

