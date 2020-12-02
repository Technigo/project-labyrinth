import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import StartGame from "components/StartGame";
import { moves } from "./reducers/moves";
import { ui } from "./reducers/ui";
import { Header } from './components/Header';

const reducer = combineReducers ({ moves: moves.reducer, ui: ui.reducer });
const store = configureStore ({ reducer: reducer });

export const App = () => {
    return (
        <Provider store={store}>
            <Header />
            <StartGame />
        </Provider>
    );
};
