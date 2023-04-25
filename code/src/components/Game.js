/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';

import { Loading } from './Loading'
import StartScreen from './StartScreen';
import { Labyrinth } from './Labyrinth'
// Above we import the Loading, Startscreen and Labyrinth components

export const Game = () => {
  const loading = useSelector((store) => store.labyrinth.loading)
  // Above we use the useSelector hook to get the state of the store, specifically the loading-status
  const coordinates = useSelector((store) => store.labyrinth.coordinates)
  // We use the useSelector hook to get the coordinates from the store.

  return (
    <>
      {loading && <Loading />}
      {/* If the loading status is true, then we render the Loading component */}
      {coordinates ? <Labyrinth /> : <StartScreen />}
      {/* if there are coordinates, then we render the Labyrinth component, if not we render the Startscreen component. This is what makes us see two StartScreen-components somehow */}
    </>
  )
}
