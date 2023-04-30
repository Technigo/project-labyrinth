import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import game from 'reducers/game';
import Screen from 'components/Screen';
import { GlobalStyles } from 'components/GlobalStyles';

export const App = () => {
  const reducer = combineReducers({
    game: game.reducer
  });

  const store = configureStore({ reducer });

  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <Screen />
      </Provider>
    </>
  )
}
