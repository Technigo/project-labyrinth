import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

//reducers
import { gamestate } from 'reducers/gamestate';
import { ui } from 'reducers/ui';

//components
import { GameWrapper } from "components/GameWrapper";


const reducer = combineReducers({
  gamestate: gamestate.reducer,
  ui: ui.reducer
});

// set up for local store 
const preloadedStateJSON = localStorage.getItem('todosReduxState')
let preloadedState = {}

if (preloadedStateJSON) {
  preloadedState = JSON.parse(preloadedStateJSON)
}

// reducer: reducer; ES6 short syntas is reducer because the same name of variable and value. //reducer is the property that configuterStore expects from us
const store = configureStore({ reducer, preloadedState })

//Store the state in localstorage, when Redux state changes
store.subscribe(() => {
  localStorage.setItem('todosReduxState', JSON.stringify(store.getState()))
})


export const App = () => {
  return (
  <Provider store={store}>
    <GameWrapper />
    </Provider>
  );
};
