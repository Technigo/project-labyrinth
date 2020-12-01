import React from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { rooms } from 'reducers/rooms'

const reducer = combineReducers({ rooms: rooms.reducer })


export const StartGame = () => {
  const dispatch = useDispatch();

  // This function starts the game by dispatching the "startGame" action from the reducer.
  const startGame = () => {
    dispatch(
      rooms.actions.startGame()
    )
  }

  return (
    <>
      <h1>Welcome, yo!</h1>
      <button onClick={() => startGame()}>Start game</button>
    </>
  )
}