import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {applyMiddleware, compose} from '@reduxjs/toolkit';
import { game } from './reducers/game';
import GameContainer from 'components/GameContainer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  game: game.reducer,
});

const store = createStore( reducer, composeEnhancer(applyMiddleware(thunk)) 
);


export const App = () => {
  return (
    <Provider store={store}>
      <GameContainer />
    </Provider>
  );
};
