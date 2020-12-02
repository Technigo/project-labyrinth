import React from 'react'
import { Provider, useSelector } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

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
