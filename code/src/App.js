import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import games from './reducers/games'  

import LabyrinthGame from 'components/LabyrinthGame'
import { loading } from 'reducers/loading'

const reducer = combineReducers({
  loading: loading.reducer,
  game: games.reducer
});

const store = configureStore({ reducer });


export const App = () => {
  return (
    <Provider store={store}>
    <LabyrinthGame />
    </Provider>
  );
};
