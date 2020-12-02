import React from 'react'
import {  useSelector } from 'react-redux'

import { StartGame } from './components/StartGame'
import { GameState } from './components/GameState'
import { Loading } from './components/Loading'


export const App = () => {
  const isLoading = useSelector((store) => store.ui.isLoading)

  return (
    <>
      <Loading />
      {!isLoading && <StartGame />}
      {!isLoading && <GameState />}
    </>
  )
}
