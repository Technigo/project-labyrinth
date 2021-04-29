import React from 'react'
import { Provider } from "react-redux";
import { combineReducers, configureStore} from "@reduxjs/toolkit";
import { game } from "./reducers/game";
import { ui } from './reducers/ui';

import { Labyrinth } from './components/Labyrinth';
import { Main } from './components/Main';

const reducer = combineReducers({
  game: game.reducer,
  ui: ui.reducer
})

const store = configureStore({ reducer })

export const App = () => (
  <Provider store={ store }>
    <Labyrinth />
    <Main />
  </Provider>
)