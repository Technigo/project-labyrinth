import React, { useReducer } from 'react';
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

//Reducers
import { ui } from './reducers/ui';
import { maze } from './reducers/maze'

// Components
import { Loading } from 'components/Loading';
import { Intro } from 'components/Intro';
import { Button } from 'components/Button';

//Redux setUp
const reducer = combineReducers({ui: ui.reducer, maze: maze.reducer});
const store = configureStore({ reducer });


export const App = () => {
  return (
    <Provider store={store}>
      <Intro />
      <Button />
    </Provider>
  )
}
