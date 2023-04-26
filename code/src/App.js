import React from 'react'
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import BackgroundMusic from 'components/BackgroundMusic';
import { labyrinth } from './reducers/labyrinth'
import { loading } from './reducers/loading'
import Container from './components/Container.js'
import Background from './components/Background.js'

export const App = () => {
  const reducer = combineReducers({
    labyrinth: labyrinth.reducer,
    loading: loading.reducer
  })

  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
      <Background />
      <Container />
      <BackgroundMusic />
    </Provider>
  )
}