import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { games } from './reducers/games'

const reducer = combineReducers({ games: games.reducer })
const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        Find me in src/app.js!
        <p>Hej Caroline!</p>
      </div>
    </Provider>
  )
}
