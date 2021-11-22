import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { FirstPage } from 'components/FirstPage'
import { GameStartPage } from 'components/GameStartPage'
import { GamePage } from 'components/GamePage'
import { GameEndPage } from 'components/GameEndPage'

import { ui } from 'reducers/ui'
import { game } from 'reducers/game'

const reducer = combineReducers({
  ui: ui.reducer,
  game: game.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      {/* <main>
        <h1>Are you ready to trust the process?</h1>
        <FirstPage />
        <LoadingIndicator />
      </main> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/start" element={<GameStartPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/end" element={<GameEndPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
