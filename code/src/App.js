import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import games from 'reducers/games'
import StartScreen from 'components/StartScreen'
import PlayerInput from 'components/PlayerInput'
import GameBoard from 'components/GameBoard'
// import AuthorInputSearch from 'components/AuthorInputSearch'
import GameScreen from 'components/GameScreen'

export const App = () => {
    const reducer = combineReducers({
      games: games.reducer
    })

    const store = configureStore({ reducer })
  return (
    <Provider store={store}>
      <StartScreen />
      <PlayerInput />
      <GameScreen />
      <GameBoard />
    </Provider>
  )
}
