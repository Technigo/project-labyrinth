import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { game } from './reducers/game'
import { ui } from './reducers/ui'

import { App } from './App'
import './index.css'

const reducer = combineReducers({
  game: game.reducer,
  ui: ui.reducer
});

export const store = configureStore({ reducer });

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>
  , document.getElementById('root'))
