import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import StartGame from "components/StartGame";
import { moves } from "./reducers/moves";
import { Header } from './components/Header';

const reducer = combineReducers ({ moves: moves.reducer });
const store = configureStore ({ reducer });

export const App = () => {
    return (
        <Provider store={store}>
            <Header />
            <StartGame />
        </Provider>
    );
};
