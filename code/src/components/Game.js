/* eslint-disable linebreak-style */
import React from 'react'
import { useSelector } from 'react-redux'
import { GamePlay } from './GamePlay'
import { StartingPage } from './StartingPage'

export const Game = () => {
  const currentPosition = useSelector((store) => store.game.position)
  return currentPosition ? <GamePlay /> : <StartingPage />
}