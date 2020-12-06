import React, { useState } from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import styled from "styled-components";

import { GameLoading } from "components/GameLoading";
import { LabyrinthGame } from "components/LabyrinthGame";
import { Header } from "components/Header";

import { labyrinth } from "./reducers/labyrinth";
import { ui } from "./reducers/ui";

const reducer = combineReducers({
  labyrinth: labyrinth.reducer,
  ui: ui.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  const [gameCoordinates, setGameCoordinates] = useState("");

  return (
    <>
      <Header />
      <Wrapper>
        <Provider store={store}>
          <GameLoading />
          <LabyrinthGame setGameCoordinates={setGameCoordinates} />
        </Provider>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #93e6b0;
  animation: mymove 5s forwards;

  @keyframes mymove {
    from {
      background-color: #93e6b0;
    }
    to {
      background-color: #aea1ff;
    }
  }
`;
