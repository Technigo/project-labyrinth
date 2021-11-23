import React, { useReducer } from 'react';
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

//Reducers
import { ui } from './reducers/ui';
import { maze } from './reducers/maze'

// Components
import { Loading } from 'components/Loading';

//Redux setUp
const reducer = combineReducers({ui: ui.reducer, maze: maze.reducer});
const store = configureStore({ reducer });


export const App = () => {
  return (
    <Provider store={store}>
    </Provider>
  )
}
