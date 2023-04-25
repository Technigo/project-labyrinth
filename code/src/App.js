import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { labyrinth } from 'reducers/labyrinth'
import { loading } from 'reducers/loading'
import { InnerWrapper } from 'components/GlobalStyles'
import StartScreen from 'components/StartScreen'

export const App = () => {
  const reducer = combineReducers({
    labyrinth: labyrinth.reducer,
    loading: loading.reducer
  })

  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
      <StartScreen />
      <InnerWrapper />
    </Provider>
  )
}
