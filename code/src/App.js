import React from 'react'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from "@reduxjs/toolkit";


import Game from 'components/Game'
import Loading from 'components/Loading';

import game from 'reducers/game';
import ui from 'reducers/ui';

const reducer = combineReducers({
  game: game.reducer,
  ui: ui.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store ={store}>
      <Loading/>
      <Game />
    </Provider>
  )
}
