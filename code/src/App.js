import React from 'react';
import { StartScreen } from './components/StartScreen';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { game } from './reducers/game';
import { Question } from './components/Question';
import { Loading } from './components/Loading';

const reducer = combineReducers({
  game: game.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={ store }>
      <StartScreen />
      <Loading />
      <Question />
    </Provider>

  )
}
