import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import games from 'reducers/games';
import StartGame from './StartGame';

// import GameQuestions from './GameQuestions';
// import EndGame from './EndGame';

export const Main = () => {
  const reducer = combineReducers({
    games: games.reducer
  })

  const store = configureStore({ reducer })
  return (
    <Provider store={store}>
      <StartGame />
      {/* <GameQuestions />
      <EndGame /> */}
    </Provider>
  )
}

