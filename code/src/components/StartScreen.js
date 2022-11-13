/* eslint-disable import/no-cycle */
import React from 'react';
import { useSelector } from 'react-redux';
import TheLabyrinth from './TheLabyrinth'
import Player from './Player'
import Loading from './Loading'

const StartScreen = () => {
  const name = useSelector((store) => store.game.username);
  const loading = useSelector((store) => store.ui.isLoading)

  return (
    loading
      ? (<Loading />)
      : (<div> {name === '' ? <Player /> : <TheLabyrinth />}</div>) /* after typing name => entering labyrinth */
  )
}

export default StartScreen