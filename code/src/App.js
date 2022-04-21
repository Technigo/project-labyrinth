import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Home from "components/Home";
import styled from "styled-components";

import { game } from "./reducers/game";

const reducer = combineReducers({
  game: game.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Page>
        <Home />
      </Page>
    </Provider>
  );
};

const Page = styled.div`
  width: 325px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 500px;
  }
`;
