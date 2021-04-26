import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';

import game from './reducers/game'
import GameBoard from './components/GameBoard'
import WelcomePage from './components/WelcomePage'



const reducer = combineReducers({
  game: game.reducer
});

const store = createStore(reducer, applyMiddleware(thunk));

const usernameLabyrinth = (username) => {

  return axios.post('https://wk16-backend.herokuapp.com/start', {username})
}




export const App = () => {
  return (
    <Provider store={store}>
      <WelcomePage />
      <GameBoard />
    </Provider>
  )
}
