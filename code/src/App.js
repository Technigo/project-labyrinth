import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { ui } from './reducers/ui'
import { game } from './reducers/game'
import LandingPage from 'pages/LandingPage'

const reducer = combineReducers({
  ui: ui.reducer,
  game: game.reducer
})

const store = configureStore({ reducer })

//we still need to import the loading indicator <LoadingSpinner />
export const App = () => {
  return (
    <Provider store={store}>
    </Provider>
  )
}
