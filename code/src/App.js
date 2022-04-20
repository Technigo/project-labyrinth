import React from 'react'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import ui from 'reducers/ui';
import game from './reducers/game';

import Game from 'components/Game';
import LoadingIndicator from 'components/LoadingIndicator';


const reducer = combineReducers({
  ui: ui.reducer,
  game: game.reducer
});

 const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <LoadingIndicator />
      <Game />
    </Provider>
  )
}
