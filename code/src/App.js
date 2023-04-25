import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { maze } from 'reducers/maze'
import Main from 'components/Main'

export const App = () => {
  const reducer = combineReducers({
    maze: maze.reducer
  })

  const store = configureStore({
    reducer
  })
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}
