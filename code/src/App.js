import React, { useState } from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import styled from "styled-components"
import Granim from 'react-granim'


import { GameLoading } from "components/GameLoading";
import { LabyrinthGame } from "components/LabyrinthGame";

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
    <Wrapper>
      <Provider store={store}>
        <GameLoading />
        <LabyrinthGame setGameCoordinates={setGameCoordinates} />
      </Provider>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 20px;
`;


