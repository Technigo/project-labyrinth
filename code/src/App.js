import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import StartPage from 'components/StartPage.js'
import { game } from 'reducers/game.js'

export const App = () => {
  const reducer = combineReducers({

    game: game.reducer

  })

  const store = configureStore({ reducer });
  return (
    <Provider store={store}>
      <div>
        <StartPage />
      </div>
    </Provider>
  )
}
