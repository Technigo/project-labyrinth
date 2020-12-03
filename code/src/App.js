import React from "react";
import styled from "styled-components";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import StartGame from "components/StartGame";
import { moves } from "./reducers/moves";
import { ui } from "./reducers/ui";
import { HeaderContainer } from './components/HeaderContainer';

const reducer = combineReducers ({ moves: moves.reducer, ui: ui.reducer });
const store = configureStore ({ reducer: reducer });

const MainBody = styled.main`
    height: 500px;
    width: 90%;
    margin: auto;
`;

export const App = () => {
    return (
        <Provider store={store}>
            <HeaderContainer />
            <MainBody>
                <StartGame />
             </MainBody>
        </Provider>
    );
};
