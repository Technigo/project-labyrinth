import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { combineReducers, configureStore } from '@reduxjs/toolkit'


import game from 'reducers/game'
import StartScreen from 'components/StartScreen'

const reducer = combineReducers({
  game: game.reducer
})

const store = configureStore({ reducer })


export const App = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartScreen />} />
    </Routes>
    </BrowserRouter>
    </Provider>
  )
}
