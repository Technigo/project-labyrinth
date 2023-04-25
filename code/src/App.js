import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Player } from '@lottiefiles/react-lottie-player';
import fetchGame from './reducers/gameFetch'

export const App = () => {
  const reducer = combineReducers({
    gameFetch: fetchGame.reducer
  });
  const store = configureStore({ reducer });
  return (
    <Provider store={store}>
      <Player
        src="https://assets4.lottiefiles.com/packages/lf20_l9zbnyau.json"
        className="player"
        loop
        autoplay />
      Find me in src/app.js!
    </Provider>
  )
}
