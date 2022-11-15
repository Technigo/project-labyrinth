/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable import/no-cycle */
import React from 'react';
import { useSelector } from 'react-redux';
import TheLabyrinth from './TheLabyrinth'
import Player from './Player'

const StartScreen = () => {
  const name = useSelector((store) => store.game.username);
  const loading = useSelector((store) => store.ui.isLoading)

  return (
    loading
      ? (<lottie-player
          src="https://assets10.lottiefiles.com/packages/lf20_G59lFJ.json"
          alt="loading"
          speed="1"
          autoplay
          width="900"
          height="900" />)
      : (<div> {name === '' ? <Player /> : <TheLabyrinth />}</div>) /* after typing name => entering labyrinth */
  )
}

export default StartScreen