import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { GlobalStyles } from "components/Global"
import styled from 'styled-components'

import game from "reducers/game";

import StartScreen from "components/StartScreen";

const reducer = combineReducers({
  game: game.reducer,
});

const store = configureStore({
  reducer,
});

// STYLED COMPONENTS

const CardWrapper = styled.article`
display: flex;
justify-content: center;
padding-top: 70px;

`

const Card = styled.div`
font-family: 'VT323', monospace;
background-color: #e5e5e5;
display: flex;
flex-direction: column;
align-items: center;
width: 90vw;
min-height: 50vh;
border: 4px solid black;
padding-bottom: 25px;


@media (min-width: 768px) {
  width: 68vw;
}
`

export const App = () => {
  return (
      <Provider store={store}>
    <GlobalStyles />
      <CardWrapper>
      <Card>
       < StartScreen />
       </Card>
       </CardWrapper>
      </Provider>
  );
};
