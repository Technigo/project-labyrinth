import React from 'react'
import { Provider } from 'react-redux';
// import { Start } from 'components/Start'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { labyrinth } from 'reducers/labyrinth';
import { ui } from 'reducers/ui';
import { Gamepage } from 'components/Gamepage';

export const App = () => {
  const reducer = combineReducers({
    labyrinth: labyrinth.reducer,
    ui: ui.reducer
  });
  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <Gamepage />
    </Provider>
  )
}