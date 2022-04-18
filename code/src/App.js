import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import game from './reducers/game';

import Game from 'components/Game';

const reducer = combineReducers({
  game: game.reducer
});

 const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Game />} />
      </Routes>
      </BrowserRouter>
    </Provider>
  )
}
