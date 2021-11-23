import React from 'react'
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { ui } from "./reducers/ui";
import { gamestate } from "./reducers/gamestate";


import { GameContainer } from './components/GameContainer'

// setting the reducer
const reducer = combineReducers({
  ui: ui.reducer,
  gamestate: gamestate.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store} >
      <GameContainer  />
    </Provider>
  )
}
