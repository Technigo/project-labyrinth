import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import styled from "styled-components";

import { game } from "./reducers/game";

import { Moves } from "./components/Moves";

const reducer = combineReducers({
  game: game.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <AppMainContainer>
        <Moves />
      </AppMainContainer>
    </Provider>
  );
};

const AppMainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
`;
