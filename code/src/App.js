import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { ui } from 'reducer/ui'
import game from 'reducer/game'
import { Main } from 'components/Main'
import { GlobalStyles } from 'styled-components/GlobalStyles'

const reducer = combineReducers({
  ui: ui.reducer,
  game: game.reducer
})
const store = configureStore({
  reducer
})

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <Main />
      </Provider>
    </>
  )
}
