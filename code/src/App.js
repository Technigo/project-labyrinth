import React from "react";
import { StartPage } from "components/StartPage";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { game } from "reducers/game";
import { MainGame } from "components/MainGame";
const reducer = combineReducers({
  game: game.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <StartPage />
        <MainGame />
      </div>
    </Provider>
  );
};
