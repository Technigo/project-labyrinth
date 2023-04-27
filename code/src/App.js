import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import MainPage from 'components/MainPage.js'
import { game } from 'reducers/game.js'
import { loading } from 'reducers/loading.js'

export const App = () => {
  const reducer = combineReducers({

    game: game.reducer,
    loading: loading.reducer

  })

  const store = configureStore({ reducer });
  return (
    <Provider store={store}>
      <div>
        <MainPage />
      </div>
    </Provider>
  )
}
