import React, { useState } from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "@reduxjs/toolkit";

import Game from "./components/Game";
import game from "reducer/game";

const reducer = combineReducers({
  game: game.reducer,
});

//________Handle Local state________
const localStorageKey = "gameReduxState";
const persistedStateJSON = localStorage.getItem(localStorageKey);
let persistedState = {};

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON);
}

const store = createStore(reducer, persistedState);

store.subscribe(() => {
  localStorage.setItem(localStorageKey, JSON.stringify(store.getState()));
});

export const App = () => {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
};

/* const options = {
    method: 'POST',
    headers: {
        'Content-Type':'application/json',
    },
    body: JSON.stringify({ username: "TechnigoPlayer"}),
}

     fetch('https://labyrinth-technigo.herokuapp.com/start', options)
     .then((res) => res.json())
     .then((data) => console.log(data)) */
