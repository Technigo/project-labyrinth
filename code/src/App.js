import React from 'react'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  BrowserRouter,
  Route,
} from "react-router-dom";

import maze from "./reducers/maze"
import StartScreen from './components/StartScreen'
import GameScreen from './components/GameScreen'

const reducer = combineReducers({
  maze: maze.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <Route path="/" exact component={StartScreen}/>
      <Route path="/game" exact component={GameScreen}/>
    </Provider>
    </BrowserRouter>
  )
}
