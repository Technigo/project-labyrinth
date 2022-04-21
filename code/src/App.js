import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import styled from 'styled-components'

import game from "reducers/game";

import StartScreen from "components/StartScreen";
import GameScreen from "components/GameScreen";

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
/* justify-content: center; */
align-items: center;
width: 90vw;
height: 60vh;
border: 4px solid black;




/* box-shadow: 5px 5px 0 0 black; */
`


export const App = () => {
  return (
    <>
      <Provider store={store}>
      <CardWrapper>
      <Card>
       < StartScreen />
       </Card>
       </CardWrapper>
      </Provider>
    </>
  );
};
