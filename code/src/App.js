import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import StartScreen from 'components/StartScreen';
import { game } from './reducers/game'
import spinner from './reducers/spinner'

const reducer = combineReducers({
  game: game.reducer,
  spinner: spinner.reducer
});
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <StartScreen />
    </Provider>
  )
}
