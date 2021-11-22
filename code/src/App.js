import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

//reducers
import { gamestate } from 'reducers/gamestate';
import { ui } from 'reducers/ui';




const reducer = combineReducers({
  gamestate: gamestate.reducer,
  ui: ui.reducer
});
const store = configureStore({ reducer });


export const App = () => {
  return (
  <Provider store={store}>
    </Provider>
  );
};
