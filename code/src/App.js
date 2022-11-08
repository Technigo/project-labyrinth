import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import games from 'reducers/games'
import StartScreen from 'components/StartScreen'
import PlayerInput from 'components/PlayerInput'
// import AuthorInputSearch from 'components/AuthorInputSearch'

export const App = () => {
    const reducer = combineReducers({
      games: games.reducer
    })

    const store = configureStore({ reducer })
  return (
    <Provider store={store}>
      <StartScreen />
      <PlayerInput />
    </Provider>
  )
}
