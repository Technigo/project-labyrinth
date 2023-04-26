/* eslint-disable linebreak-style */
import React from 'react'
import { useSelector } from 'react-redux'
import { GamePlay } from './GamePlay'
import { StartingPage } from './StartingPage'
import { Loader } from './Loader'

export const Game = () => {
  const currentPosition = useSelector((store) => store.game.position)
  const loading = useSelector((store) => store.ui.loading)
  return (
    <>
      {loading && <Loader />}
      {!loading && currentPosition && <GamePlay />}
      {!loading && !currentPosition && <StartingPage />}
    </>
  )
}