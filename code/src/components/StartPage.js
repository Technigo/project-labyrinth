import React from 'react'
import { useSelector } from 'react-redux'
import game from 'reducers/game'
import { Loader } from './Loader'

export const StartPage = () => {
  const loading = useSelector((store) => store.game.loading)
  if (loading) {
    return <Loader />
  }
}