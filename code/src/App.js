import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { game } from "./reducers/game";
import { Game } from "./components/Game";

// adds the reducers into one reducer to be able to configure the store with one reducer
const reducer = combineReducers({
  game: game.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <section className="mainContainer">
        <Game />
      </section>
    </Provider>
  );
};
